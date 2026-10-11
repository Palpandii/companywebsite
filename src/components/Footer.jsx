import { SITE } from '../config.js';
import { useLanguage } from '../context/LanguageContext.jsx';
import Icon from './Icon.jsx';

export default function Footer() {
  const { t, content } = useLanguage();
  const { NAV, SERVICES } = content;
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-top-grid">
          <div className="footer-brand-col">
            <div className="footer-brand-title">Leno<span>Tech</span></div>
            <div className="footer-owner-badge">
              <span className="footer-run-by">{t('footer.runBy', { owner: <strong>{SITE.owner}</strong> })}</span>
              <span className="footer-dev-title">{t('site.role')}</span>
            </div>
            <p className="footer-mission-statement">{t('footer.mission')}</p>
          </div>

          <div className="footer-links-col">
            <h4>{t('footer.navigate')}</h4>
            <ul className="footer-links-list">
              {NAV.map((n) => <li key={n.id}><a href={`#${n.id}`}>{n.label}</a></li>)}
            </ul>
          </div>

          <div className="footer-links-col">
            <h4>{t('footer.services')}</h4>
            <ul className="footer-links-list">
              {SERVICES.map((s) => <li key={s.title}><a href="#services">{s.title}</a></li>)}
            </ul>
          </div>

          <div className="footer-links-col">
            <h4>{t('footer.contact')}</h4>
            <ul className="footer-links-list">
              <li><a href={`mailto:${SITE.email}`}>{SITE.email}</a></li>
              <li><a href={SITE.phoneHref}>{SITE.phone}</a></li>
              <li><span style={{ color: 'var(--text-secondary)', fontSize: '0.92rem' }}>{t('site.location')}</span></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom-row">
          <div className="footer-copy-text">
            {t('footer.copy', { year: new Date().getFullYear(), brand: <strong>LenoTech</strong>, owner: SITE.owner })}
          </div>
          <button type="button" className="back-to-top-btn" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <Icon name="up" size={14} /> {t('footer.top')}
          </button>
        </div>
      </div>
    </footer>
  );
}
