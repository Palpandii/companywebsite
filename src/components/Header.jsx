import { useEffect, useMemo, useState } from 'react';
import { useActiveSection, useScrolled } from '../lib/hooks.js';
import { useLanguage } from '../context/LanguageContext.jsx';
import Icon from './Icon.jsx';
import LanguageToggle from './LanguageToggle.jsx';

export default function Header() {
  const { t, content } = useLanguage();
  const { NAV } = content;
  const [open, setOpen] = useState(false);
  const scrolled = useScrolled();
  const ids = useMemo(() => NAV.map((n) => n.id), [NAV]);
  const active = useActiveSection(ids);

  // Stop the page behind the full-screen menu from scrolling.
  useEffect(() => {
    document.body.classList.toggle('menu-open', open);
    return () => document.body.classList.remove('menu-open');
  }, [open]);

  useEffect(() => {
    if (!open) return undefined;
    const onKey = (e) => e.key === 'Escape' && setOpen(false);
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [open]);

  return (
    <header className={`site-header${scrolled || open ? ' scrolled' : ''}`}>
      <div className="container nav-container">
        <a href="#hero" className="brand-link" aria-label={t('a11y.home')}>
          <div className="brand-icon-wrapper">
            <img src="/assets/logo.svg" alt="" width="42" height="42" />
          </div>
          <div className="brand-text-block">
            <span className="brand-title">Leno<span>Tech</span></span>
            <span className="brand-tag">Build · Innovate · Grow</span>
          </div>
        </a>

        <nav aria-label={t('a11y.primaryNav')}>
          <ul className={`nav-menu${open ? ' open' : ''}`} id="navMenu">
            {NAV.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className={`nav-link${active === item.id ? ' active' : ''}`}
                  aria-current={active === item.id ? 'true' : undefined}
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li className="nav-menu-cta">
              <a href="#contact" className="btn btn-primary" onClick={() => setOpen(false)}>
                <span>{t('header.cta')}</span>
                <Icon name="arrow" size={16} className="btn-icon-right" />
              </a>
            </li>
          </ul>
        </nav>

        <div className="nav-actions">
          <LanguageToggle />
          <a href="#contact" className="btn btn-primary btn-sm">
            <span>{t('header.cta')}</span>
            <Icon name="arrow" size={16} className="btn-icon-right" />
          </a>
          <button
            type="button"
            className="mobile-toggle"
            aria-label={open ? t('a11y.menuClose') : t('a11y.menuOpen')}
            aria-expanded={open}
            aria-controls="navMenu"
            onClick={() => setOpen((v) => !v)}
          >
            <Icon name={open ? 'x' : 'menu'} size={24} />
          </button>
        </div>
      </div>
    </header>
  );
}