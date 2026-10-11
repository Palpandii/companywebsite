import { useLanguage } from '../context/LanguageContext.jsx';
import { COPY, TESTIMONIALS } from '../data/extras.js';

// Renders nothing until real quotes are added to TESTIMONIALS in src/data/extras.js.
export default function Testimonials() {
    const { lang } = useLanguage();
    if (TESTIMONIALS.length === 0) return null;
    const c = COPY[lang].testimonials;
    return (
        <section className="xsec" id="proof" aria-labelledby="proof-title">
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title" id="proof-title">{c.title}</h2>
                    <p className="section-desc">{c.desc}</p>
                </div>
                <div className="quotes-grid">
                    {TESTIMONIALS.map((q) => (
                        <figure className="quote-card" key={q.name + q.business}>
                            <blockquote>&ldquo;{q.quote}&rdquo;</blockquote>
                            <figcaption><strong>{q.name}</strong><span>{q.business}</span></figcaption>
                        </figure>
                    ))}
                </div>
            </div>
        </section>
    );
}