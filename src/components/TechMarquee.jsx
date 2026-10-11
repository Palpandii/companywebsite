import { useLanguage } from '../context/LanguageContext.jsx';
import { COPY, TECH } from '../data/extras.js';

function Mark({ mark, color }) {
    if (mark === 'react') {
        return (
            <svg className="tech-mark tech-mark--svg" viewBox="-12 -11 24 22" aria-hidden="true" style={{ color }}>
                <circle r="2" fill="currentColor" />
                <g fill="none" stroke="currentColor" strokeWidth="1.2">
                    <ellipse rx="11" ry="4.2" /><ellipse rx="11" ry="4.2" transform="rotate(60)" /><ellipse rx="11" ry="4.2" transform="rotate(120)" />
                </g>
            </svg>
        );
    }
    if (mark === 'vercel') {
        return <svg className="tech-mark tech-mark--svg" viewBox="0 0 24 24" aria-hidden="true" style={{ color }}><path d="M12 3 22 20H2z" fill="currentColor" /></svg>;
    }
    return <span className="tech-mark" style={{ background: color }} aria-hidden="true">{mark}</span>;
}

const Group = () => (
    <div className="marquee-group">
        {[...TECH, ...TECH].map((t, i) => (
            <span className="tech-chip" key={i}><Mark mark={t.mark} color={t.color} />{t.name}</span>
        ))}
    </div>
);

export default function TechMarquee() {
    const { lang } = useLanguage();
    return (
        <div className="marquee" role="group" aria-label={COPY[lang].tech.label}>
            <div className="marquee-label">{COPY[lang].tech.label}</div>
            <div className="marquee-track">
                <Group />
                <div aria-hidden="true" style={{ display: 'contents' }}><Group /></div>
            </div>
        </div>
    );
}