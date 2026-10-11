import { createContext, Fragment, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import { ui } from '../data/translations.js';
import * as EN from '../data/siteContent.js';
import * as TA from '../data/siteContent.ta.js';
import projectsEn from '../data/projects.json';
import projectsTa from '../data/projects.ta.json';

const STORAGE_KEY = 'lenotech_lang';
const LANGS = ['en', 'ta'];

const LanguageContext = createContext(null);

function readStoredLang() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    return LANGS.includes(saved) ? saved : 'en';
  } catch {
    return 'en';
  }
}

/** Fills {name} placeholders. Returns a string when every value is plain text, otherwise renderable nodes. */
function interpolate(text, vars) {
  if (!vars) return text;
  const parts = text.split(/\{(\w+)\}/g);
  if (parts.length === 1) return text;
  const plain = Object.values(vars).every((v) => typeof v === 'string' || typeof v === 'number');
  if (plain) return parts.map((p, i) => (i % 2 === 1 ? String(vars[p] ?? '') : p)).join('');
  return parts.map((p, i) => (i % 2 === 1 ? <Fragment key={i}>{vars[p] ?? ''}</Fragment> : p));
}

export function LanguageProvider({ children }) {
  const [lang, setLangState] = useState(readStoredLang);

  const setLang = useCallback((next) => {
    if (LANGS.includes(next)) setLangState(next);
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch {
      /* storage can be blocked; the switch still works for this visit */
    }
    document.documentElement.lang = lang;
    document.title = ui[lang]['meta.title'];
    document.querySelector('meta[name="description"]')?.setAttribute('content', ui[lang]['meta.description']);
  }, [lang]);

  const t = useCallback(
    (key, vars) => interpolate(ui[lang][key] ?? ui.en[key] ?? key, vars),
    [lang]
  );

  // Section copy for the active language. Missing Tamil fields fall back to English.
  const content = useMemo(() => {
    const src = lang === 'ta' ? TA : EN;
    const projects = projectsEn.map((p) => ({
      ...p,
      ...(lang === 'ta' ? projectsTa[p.slug] : null),
      groupKey: p.filterGroup // stays English so the filter survives a language switch
    }));
    return {
      NAV: src.NAV,
      SERVICES: src.SERVICES,
      ABOUT: src.ABOUT,
      STACK: src.STACK,
      ADVANTAGES: src.ADVANTAGES,
      SERVICE_OPTIONS: src.SERVICE_OPTIONS,
      PROJECTS: projects
    };
  }, [lang]);

  const value = useMemo(() => ({ lang, setLang, t, content }), [lang, setLang, t, content]);
  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLanguage must be used inside <LanguageProvider>');
  return ctx;
}
