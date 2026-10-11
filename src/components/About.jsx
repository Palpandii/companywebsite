import { SITE } from '../config.js';
import { useLanguage } from '../context/LanguageContext.jsx';
import Icon from './Icon.jsx';

export default function About() {
  const { t, content } = useLanguage();
  const { ABOUT } = content;
  return (
    <section className="about-section" id="about" aria-labelledby="about-title">
      <div className="container about-grid">
        <div className="about-narrative">
          <h2 className="about-headline" id="about-title">{ABOUT.headline}</h2>

          <blockquote className="about-intro-quote">
            <p>&ldquo;{ABOUT.quote}&rdquo;</p>
            <div className="intro-author-tag">
              <span className="intro-author-name">{SITE.owner}</span>
              <span className="intro-author-title">{t('about.founder')}</span>
            </div>
          </blockquote>

          {ABOUT.paragraphs.map((p) => <p className="about-body-text" key={p}>{p}</p>)}

          <div className="about-pillars-grid">
            {ABOUT.pillars.map((p) => (
              <div className="pillar-item" key={p.title}>
                <Icon name={p.icon} size={20} className="pillar-icon" />
                <div>
                  <h3 style={{ fontSize: '0.95rem' }}>{p.title}</h3>
                  <p>{p.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <aside className="about-profile-card" aria-label={t('about.profileLabel', { owner: SITE.owner })}>
          <div>
            <div className="profile-card-header">
              <div className="profile-avatar-symbol" aria-hidden="true">PM</div>
              <div className="profile-id-details">
                <h3>{SITE.owner}</h3>
                <span className="profile-title-text">{t('site.role')}</span>
              </div>
            </div>

            <div className="profile-company-callout">
              <span className="company-badge">{t('about.studio')}</span>
              <p>{t('about.callout', { brand: <strong>LenoTech</strong>, owner: SITE.owner })}</p>
            </div>

            <div className="profile-skills-block">
              <h4>{t('about.skills')}</h4>
              <div className="skills-tags-wrap">
                {ABOUT.skills.map((s) => <span className="skill-tag" key={s}>{s}</span>)}
              </div>
            </div>
          </div>

          <div className="profile-card-footer">
            <div className="status-indicator-box">
              <span className="dot" aria-hidden="true" />
              <span>{t('site.location')}</span>
            </div>
            <a href="#contact" className="btn btn-secondary btn-sm">{t('about.contact')}</a>
          </div>
        </aside>
      </div>
    </section>
  );
}
