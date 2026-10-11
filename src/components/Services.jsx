import { useLanguage } from '../context/LanguageContext.jsx';
import { useMediaQuery } from '../lib/hooks.js';
import Icon from './Icon.jsx';

export default function Services() {
  const { t, content } = useLanguage();
  const { SERVICES } = content;
  const swipe = useMediaQuery('(max-width: 860px)');
  return (
    <section className="services-section" id="services" aria-labelledby="services-title">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title" id="services-title">{t('services.title')}</h2>
          <p className="section-desc">{t('services.desc')}</p>
        </div>

        <div className="services-grid" tabIndex={swipe ? 0 : undefined} role={swipe ? 'group' : undefined} aria-label={swipe ? t('services.title') : undefined}>
          {SERVICES.map((s, i) => (
            <article className="service-card" key={i}>
              <div className="service-card-top">
                <div className="service-icon-box"><Icon name={s.icon} size={26} /></div>
              </div>
              <h3 className="service-card-title">{s.title}</h3>
              <p className="service-card-desc">{s.desc}</p>
              <ul className="service-features-list">
                {s.features.map((f) => (
                  <li key={f}>
                    <Icon name="check" size={16} strokeWidth={2.5} />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <div className="service-card-bottom">
                <div className="service-tech-tags">
                  {s.tech.map((tag) => <span className="tech-tag-sm" key={tag}>{tag}</span>)}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
