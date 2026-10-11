import { useLanguage } from '../context/LanguageContext.jsx';

export default function LanguageToggle() {
  const { lang, setLang, t } = useLanguage();
  return (
    <div className="lang-switch" role="group" aria-label={t('lang.label')}>
      <button type="button" lang="en" className={lang === 'en' ? 'is-active' : ''} aria-pressed={lang === 'en'} onClick={() => setLang('en')}>
        EN
      </button>
      <button type="button" lang="ta" className={lang === 'ta' ? 'is-active' : ''} aria-pressed={lang === 'ta'} onClick={() => setLang('ta')}>
        தமிழ்
      </button>
    </div>
  );
}
