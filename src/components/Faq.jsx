import { useLanguage } from '../context/LanguageContext.jsx';
import { COPY } from '../data/extras.js';
import Accordion from './Accordion.jsx';

export default function Faq() {
    const { lang } = useLanguage();
    const c = COPY[lang].faq;
    return (
        <section className="xsec" id="faq" aria-labelledby="faq-title">
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title" id="faq-title">{c.title}</h2>
                    <p className="section-desc">{c.desc}</p>
                </div>
                <Accordion items={c.items} defaultOpen={0} />
            </div>
        </section>
    );
}