'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';
import { getContent, Language, siteConfig } from '../data/content';
import { TranslationData } from '../data/translations/fr';

interface PortfolioContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  theme: 'light' | 'dark';
  toggleTheme: () => void;
  content: TranslationData;
}

const PortfolioContext = createContext<PortfolioContextType | undefined>(undefined);

export function PortfolioProvider({
  children,
  initialLang = 'fr',
}: {
  children: React.ReactNode;
  initialLang?: Language;
}) {
  const [lang, setLangState] = useState<Language>(initialLang);
  const [theme, setThemeState] = useState<'light' | 'dark'>('light');
  const [mounted, setMounted] = useState(false);

  // Initialize theme from localStorage or system preference
  useEffect(() => {
    try {
      const storedTheme = localStorage.getItem('dosh_theme') as 'light' | 'dark' | null;
      if (storedTheme === 'dark' || storedTheme === 'light') {
        setThemeState(storedTheme);
        applyTheme(storedTheme);
      } else {
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        const initial = prefersDark ? 'dark' : 'light';
        setThemeState(initial);
        applyTheme(initial);
      }

      const storedLang = localStorage.getItem('dosh_lang') as Language | null;
      if (storedLang === 'fr' || storedLang === 'en') {
        setLangState(storedLang);
      }
    } catch {
      // safe fallback
    }
    setMounted(true);
  }, []);

  const applyTheme = (t: 'light' | 'dark') => {
    const root = document.documentElement;
    if (t === 'dark') {
      root.classList.add('dark');
      root.setAttribute('data-theme', 'dark');
    } else {
      root.classList.remove('dark');
      root.setAttribute('data-theme', 'light');
    }
  };

  const setLang = (newLang: Language) => {
    setLangState(newLang);
    try {
      localStorage.setItem('dosh_lang', newLang);
    } catch {
      // ignore
    }
  };

  const toggleTheme = () => {
    const nextTheme = theme === 'light' ? 'dark' : 'light';
    setThemeState(nextTheme);
    applyTheme(nextTheme);
    try {
      localStorage.setItem('dosh_theme', nextTheme);
    } catch {
      // ignore
    }
  };

  const content = getContent(lang);

  return (
    <PortfolioContext.Provider
      value={{
        lang,
        setLang,
        theme,
        toggleTheme,
        content,
      }}
    >
      <div className={theme === 'dark' ? 'dark' : ''} data-theme={theme}>
        {children}
      </div>
    </PortfolioContext.Provider>
  );
}

export function usePortfolio() {
  const context = useContext(PortfolioContext);
  if (!context) {
    throw new Error('usePortfolio must be used within a PortfolioProvider');
  }
  return context;
}
