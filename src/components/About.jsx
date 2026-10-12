import { SITE } from '../config.js';
import { useLanguage } from '../context/LanguageContext.jsx';
import Icon from './Icon.jsx';

const GITHUB_PATH = 'M12 .3a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2c-3.3.7-4-1.6-4-1.6-.6-1.4-1.4-1.8-1.4-1.8-1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1 1.8 2.8 1.3 3.5 1 0-.8.4-1.3.7-1.6-2.7-.3-5.5-1.3-5.5-5.9 0-1.3.5-2.4 1.2-3.2 0-.4-.5-1.6.2-3.2 0 0 1-.3 3.3 1.2a11.500 11.500 0 0 1 6 0c2.300-1.500 3.300-1.200 3.300-1.200.7 1.600.2 2.800.1 3.200.8.800 1.200 1.900 1.200 3.200 0 4.600-2.800 5.600-5.500 5.900.4.400.8 1.100.8 2.200v3.300c0 .3.2.7.8.6A12 12 0 0 0 12 .3';
const LINKEDIN_PATH = 'M20.400 20.500h-3.600v-5.600c0-1.300 0-3-1.900-3-1.900 0-2.100 1.400-2.100 2.900v5.700H9.400V9h3.400v1.600c.5-.9 1.600-1.900 3.400-1.900 3.600 0 4.300 2.400 4.300 5.500v6.300zM5.300 7.400a2.100 2.100 0 1 1 0-4.100 2.100 2.100 0 0 1 0 4.100zM7.100 20.500H3.600V9h3.500v11.500zM22.200 0H1.800C.8 0 0 .8 0 1.700v20.600c0 .9.800 1.700 1.800 1.700h20.400c1 0 1.800-.8 1.800-1.700V1.700C24 .8 23.200 0 22.200 0z';

function SocialLink({ href, label, path }) {
  return (
    <a className="social-link" href={href} target="_blank" rel="noopener noreferrer" aria-label={label}>
      <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true"><path d={path} /></svg>
      <span>{label}</span>
    </a>
  );
}

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

            {(SITE.github || SITE.linkedin) && (
              <div className="profile-socials">
                {SITE.linkedin && <SocialLink href={SITE.linkedin} label="LinkedIn" path={LINKEDIN_PATH} />}
                {SITE.github && <SocialLink href={SITE.github} label="GitHub" path={GITHUB_PATH} />}
              </div>
            )}
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