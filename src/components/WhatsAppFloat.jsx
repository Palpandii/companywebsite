import { SITE } from '../config.js';
import { useLanguage } from '../context/LanguageContext.jsx';
import { COPY } from '../data/extras.js';
import Icon from './Icon.jsx';

/** Desktop-only floating WhatsApp button. Phones already have the bottom dock (hidden by CSS under 860px). */
export default function WhatsAppFloat() {
    const { t, lang } = useLanguage();
    const label = COPY[lang].float;
    return (
        <a className="wa-float" href={`https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(t('dock.waText'))}`}
            target="_blank" rel="noopener noreferrer" aria-label={label}>
            <Icon name="chat" size={24} />
            <span>{label}</span>
        </a>
    );
}