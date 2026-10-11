import { useLanguage } from '../context/LanguageContext.jsx';
import { useMediaQuery } from '../lib/hooks.js';
import Icon from './Icon.jsx';

export default function Advantage() {
  const { t, content } = useLanguage();
  const { ADVANTAGES } = content;
  const swipe = useMediaQuery('(max-width: 860px)');
  return (
    <section className="advantage-section" id="why" aria-labelledby="why-title">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title" id="why-title">{t('adv.title')}</h2>
          <p className="section-desc">{t('adv.desc')}</p>
        </div>
        <div className="advantage-cards-grid" tabIndex={swipe ? 0 : undefined} role={swipe ? 'group' : undefined} aria-label={swipe ? t('adv.title') : undefined}>
          {ADVANTAGES.map((a) => (
            <div className="adv-card" key={a.title}>
              <div className="adv-card-icon"><Icon name={a.icon} size={24} /></div>
              <h3 className="adv-card-title">{a.title}</h3>
              <p className="adv-card-desc">{a.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
