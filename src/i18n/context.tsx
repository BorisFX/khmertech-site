import { createContext, useContext, useState, useEffect, type ReactNode } from 'react';
import type { Translations } from './types';
import en from './en';
import zh from './zh';

type Lang = 'en' | 'zh';

interface I18nContextType {
  lang: Lang;
  t: Translations;
  setLang: (lang: Lang) => void;
}

const translations: Record<Lang, Translations> = { en, zh };

const I18nContext = createContext<I18nContextType>({
  lang: 'en',
  t: en,
  setLang: () => {},
});

export const useI18n = () => useContext(I18nContext);

export const I18nProvider = ({ children }: { children: ReactNode }) => {
  const getInitialLang = (): Lang => {
    const path = window.location.pathname;
    // Support both /zh and /zh/ and GitHub Pages base paths
    if (path === '/zh' || path === '/zh/' || path.endsWith('/zh') || path.endsWith('/zh/')) {
      return 'zh';
    }
    return 'en';
  };

  const [lang, setLangState] = useState<Lang>(getInitialLang);

  const setLang = (newLang: Lang) => {
    setLangState(newLang);
    const basePath = import.meta.env.BASE_URL || '/';
    if (newLang === 'zh') {
      window.history.pushState({}, '', basePath + 'zh');
    } else {
      window.history.pushState({}, '', basePath);
    }
  };

  useEffect(() => {
    const handlePopState = () => {
      setLangState(getInitialLang());
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  return (
    <I18nContext.Provider value={{ lang, t: translations[lang], setLang }}>
      {children}
    </I18nContext.Provider>
  );
};
