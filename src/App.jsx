import { useCallback, useState } from 'react';
import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import Services from './components/Services.jsx';
import About from './components/About.jsx';
import Stack from './components/Stack.jsx';
import Projects from './components/Projects.jsx';
import Estimator from './components/Estimator.jsx';
import Advantage from './components/Advantage.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';
import { useClickEffects, useScrollReveal, useToast } from './lib/hooks.js';
import ScrollProgress from './components/ScrollProgress.jsx';
import MobileDock from './components/MobileDock.jsx';
import { useLanguage } from './context/LanguageContext.jsx';

export default function App() {
  const { t } = useLanguage();
  useScrollReveal();
  useClickEffects();
  const [toast, showToast] = useToast();
  const [prefill, setPrefill] = useState(null);

  const applyScope = useCallback((scope) => {
    setPrefill({ ...scope, nonce: Date.now() });
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
    showToast(t('toast.scope'));
  }, [showToast, t]);

  return (
    <>
      <div className="ambient-glow-wrapper" aria-hidden="true">
        <div className="glow-orb glow-orb-1" />
        <div className="glow-orb glow-orb-2" />
        <div className="glow-orb glow-orb-3" />
        <div className="grid-overlay" />
      </div>

      <ScrollProgress />
      <a className="skip-link" href="#services">{t('a11y.skip')}</a>
      <Header />

      <main>
        <Hero />
        <Services />
        <About />
        <Stack />
        <Projects />
        <Estimator onApply={applyScope} />
        <Advantage />
        <Contact prefill={prefill} onToast={showToast} />
      </main>

      <Footer />
      <MobileDock />

      <div className={`toast-notice${toast.visible ? ' show' : ''}`} role="status" aria-live="polite">
        {toast.text}
      </div>
    </>
  );
}