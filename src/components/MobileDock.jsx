import { useEffect, useState } from 'react';
import { SITE } from '../config.js';
import { useLanguage } from '../context/LanguageContext.jsx';
import Icon from './Icon.jsx';

/** Bottom action bar for phones: call, WhatsApp, start a project. CSS shows it on small screens only. */
export default function MobileDock() {
  const { t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [typing, setTyping] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 420);
    // Hide the bar while a form field has focus so it never sits on top of the keyboard.
    const onFocusIn = (e) => setTyping(!!e.target.matches?.('input, textarea, select'));
    const onFocusOut = () => setTyping(false);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    document.addEventListener('focusin', onFocusIn);
    document.addEventListener('focusout', onFocusOut);
    return () => {
      window.removeEventListener('scroll', onScroll);
      document.removeEventListener('focusin', onFocusIn);
      document.removeEventListener('focusout', onFocusOut);
    };
  }, []);

  const whatsapp = `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(t('dock.waText'))}`;

  return (
    <nav className={`mobile-dock${scrolled && !typing ? ' show' : ''}`} aria-label={t('dock.label')}>
      <a className="dock-btn" href={SITE.phoneHref}>
        <Icon name="phone" size={18} />
        <span>{t('dock.call')}</span>
      </a>
      <a className="dock-btn dock-btn--wa" href={whatsapp} target="_blank" rel="noopener noreferrer">
        <Icon name="chat" size={18} />
        <span>WhatsApp</span>
      </a>
      <a className="dock-btn dock-btn--cta" href="#contact">
        <span>{t('dock.start')}</span>
        <Icon name="arrow" size={16} />
      </a>
    </nav>
  );
}
