import { useState } from 'react';
import { SITE } from '../config.js';
import { useLanguage } from '../context/LanguageContext.jsx';
import { COPY, PRICES, PLAN_SERVICE } from '../data/extras.js';
import Icon from './Icon.jsx';

const POPULAR = 1;

export default function Pricing({ onApply }) {
    const { lang } = useLanguage();
    const c = COPY[lang].pricing;
    const [picked, setPicked] = useState(null);

    return (
        <section className="xsec" id="pricing" aria-labelledby="pricing-title">
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title" id="pricing-title">{c.title}</h2>
                    <p className="section-desc">{c.desc}</p>
                </div>
                <div className="pricing-grid">
                    {c.plans.map((p, i) => (
                        <article key={i} className={`price-card${i === POPULAR ? ' popular' : ''}${picked === i ? ' picked' : ''}`}
                            onClick={() => setPicked(i)}>
                            {i === POPULAR && <span className="price-badge">{c.popular}</span>}
                            <h3 className="price-name">{p.name}</h3>
                            <p className="price-text">{p.text}</p>
                            <div className="price-amount">
                                {PRICES[i] ? <><small>{c.from}</small><strong>{PRICES[i]}</strong></> : <strong>{c.talk}</strong>}
                            </div>
                            <ul className="price-list">
                                {p.features.map((f) => <li key={f}><Icon name="check" size={16} strokeWidth={2.5} /><span>{f}</span></li>)}
                            </ul>
                            <button type="button" className={`btn ${i === POPULAR ? 'btn-primary' : 'btn-secondary'}`}
                                onClick={() => onApply({
                                    service: PLAN_SERVICE[i],
                                    message: c.msg.replace('{name}', SITE.owner.split(' ')[0]).replace('{plan}', p.name)
                                })}>
                                {c.cta}
                            </button>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}