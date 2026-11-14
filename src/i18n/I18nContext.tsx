import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Language, Translations } from './types';
import { translations } from './translations';

interface I18nContextType {
  language: Language;
  t: Translations;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
}

const I18nContext = createContext<I18nContextType | undefined>(undefined);

const STORAGE_KEY = 'ntp_graduation_lang';

export const I18nProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    // 1. Check URL param ?lang=vi or ?lang=en
    if (typeof window !== 'undefined') {
      try {
        const params = new URLSearchParams(window.location.search);
        const urlLang = params.get('lang')?.toLowerCase();
        if (urlLang === 'vi' || urlLang === 'en') {
          return urlLang;
        }
      } catch {
        // Fall through
      }

      // 2. Check localStorage
      try {
        const saved = localStorage.getItem(STORAGE_KEY);
        if (saved === 'vi' || saved === 'en') {
          return saved;
        }
      } catch {
        // Fall through
      }

      // 3. Check browser language (default to Vietnamese if preferred)
      try {
        const browserLang = navigator.language?.toLowerCase();
        if (browserLang.startsWith('en')) {
          return 'en';
        }
      } catch {
        // Fall through
      }
    }

    // Default language is Vietnamese
    return 'en';
  });

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch {
      // Ignore localStorage errors
    }

    // Keep URL parameter synchronized if present
    try {
      const url = new URL(window.location.href);
      if (url.searchParams.has('lang')) {
        url.searchParams.set('lang', lang);
        window.history.replaceState({}, '', url.toString());
      }
    } catch {
      // Ignore URL history errors
    }
  };

  const toggleLanguage = () => {
    setLanguage(language === 'vi' ? 'en' : 'vi');
  };

  const t = translations[language];

  // Synchronize document attributes
  useEffect(() => {
    if (typeof document !== 'undefined') {
      document.documentElement.lang = language;
      document.title = t.meta.title;

      // Update meta description
      const metaDesc = document.querySelector('meta[name="description"]');
      if (metaDesc) {
        metaDesc.setAttribute('content', t.meta.description);
      }
    }
  }, [language, t]);

  return (
    <I18nContext.Provider value={{ language, t, setLanguage, toggleLanguage }}>
      {children}
    </I18nContext.Provider>
  );
};

export const useI18n = (): I18nContextType => {
  const context = useContext(I18nContext);
  if (!context) {
    throw new Error('useI18n must be used within an I18nProvider');
  }
  return context;
};

// Convenient alias
export const useTranslation = useI18n;
