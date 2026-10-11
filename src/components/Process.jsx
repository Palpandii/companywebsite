import { useLanguage } from '../context/LanguageContext.jsx';
import { COPY } from '../data/extras.js';
import Accordion from './Accordion.jsx';

export default function Process() {
    const { lang } = useLanguage();
    const c = COPY[lang].process;
    return (
        <section className="xsec" id="process" aria-labelledby="process-title">
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title" id="process-title">{c.title}</h2>
                    <p className="section-desc">{c.desc}</p>
                </div>
                <Accordion items={c.steps} defaultOpen={0} variant="steps" />
            </div>
        </section>
    );
}