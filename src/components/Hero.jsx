import { SITE } from '../config.js';
import { useLanguage } from '../context/LanguageContext.jsx';
import Icon from './Icon.jsx';

// Real project screenshots that fade into each other inside the laptop mockup.
const SHOTS = [
  '/assets/images/anish_crackers.webp',
  '/assets/images/varathan_road_ways.webp',
  '/assets/images/video_interview_ai.webp'
];

export default function Hero() {
  const { t } = useLanguage();

  // Soft blue spotlight that follows a mouse pointer (ignored for touch).
  const trackPointer = (e) => {
    if (e.pointerType !== 'mouse') return;
    const box = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty('--mx', `${e.clientX - box.left}px`);
    e.currentTarget.style.setProperty('--my', `${e.clientY - box.top}px`);
  };

  return (
    <section className="hero-section" id="hero" aria-labelledby="hero-title" onPointerMove={trackPointer}>
      <div className="hero-spotlight" aria-hidden="true" />
      <div className="container hero-layout">
        <div className="hero-content-wrapper">
          <div className="hero-status-pill">
            <span className="pill-dot" aria-hidden="true" />
            <span>{t('hero.pill')}</span>
          </div>

          <h1 className="hero-title" id="hero-title">
            {t('hero.title1')}
            <br />
            <span className="gradient-text">{t('hero.title2')}</span>
          </h1>

          <p className="hero-subtitle">{t('hero.subtitle', { owner: SITE.owner })}</p>

          <div className="hero-cta-group">
            <a href="#work" className="btn btn-primary">
              <span>{t('hero.ctaProjects')}</span>
              <Icon name="arrow" size={18} className="btn-icon-right" />
            </a>
            <a href="#estimator" className="btn btn-secondary">
              <span>{t('hero.ctaPlan')}</span>
              <Icon name="clock" size={18} />
            </a>
          </div>

          <div className="hero-meta-strip">
            <span className="hero-meta-item">
              <Icon name="check" size={16} strokeWidth={2.5} />
              {t('hero.meta1', { owner: <strong>{SITE.owner}</strong> })}
            </span>
            <span className="hero-meta-item">
              <Icon name="check" size={16} strokeWidth={2.5} />
              {t('hero.meta2')}
            </span>
            <span className="hero-meta-item">
              <Icon name="check" size={16} strokeWidth={2.5} />
              {t('hero.meta3')}
            </span>
          </div>
        </div>

        {/* Decorative laptop + phone preview, drawn in HTML/CSS so it stays sharp and bright. */}
        <div className="hero-visual-frame" aria-hidden="true">
          <div className="visual-mockup-card">
            <div className="mockup-window-header">
              <div className="mockup-dots">
                <div className="mockup-dot red" />
                <div className="mockup-dot yellow" />
                <div className="mockup-dot green" />
              </div>
              <div className="mockup-url-bar">
                <Icon name="shield" size={12} />
                <span>{t('hero.urlBar')}</span>
              </div>
              <div className="mockup-status-tag">{t('hero.status')}</div>
            </div>

            <div className="mockup-media-container mockup-media--shots">
              {SHOTS.map((src, i) => (
                <img key={src} className="mockup-shot" src={src} alt="" width="1280" height="714"
                  loading={i ? 'lazy' : 'eager'} style={{ '--i': i }} />
              ))}
            </div>
          </div>

          <div className="phone-mock">
            <div className="phone-mock-screen">
              <img className="phone-mock-logo" src="/assets/logo.webp" alt="" width="34" height="34" />
              <span className="phone-mock-line w1" />
              <span className="phone-mock-line w2" />
              <span className="phone-mock-line w3" />
              <span className="phone-mock-btn" />
            </div>
          </div>

          <div className="floating-metric metric-right">
            <div className="metric-icon-box"><Icon name="code" size={20} /></div>
            <div>
              <div className="metric-label">{t('hero.metricFrontend')}</div>
              <div className="metric-val">React</div>
            </div>
          </div>
          <div className="floating-metric metric-left">
            <div className="metric-icon-box"><Icon name="database" size={20} /></div>
            <div>
              <div className="metric-label">{t('hero.metricBackend')}</div>
              <div className="metric-val">Spring Boot + MySQL</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}