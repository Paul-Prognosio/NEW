import React, { createContext, useContext, useState } from 'react';

type Language = 'en' | 'de';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    'nav.features': 'Features',
    'nav.howItWorks': 'How It Works',
    'nav.pricing': 'Pricing',
    'nav.getStarted': 'Get Started',
    'hero.title1': 'Unlock Customer Insights and',
    'hero.title2': 'Drive Continuous Improvement',
    'hero.subtitle': 'Our AI-powered tool helps SaaS and E-commerce businesses analyze feedback, understand customer needs, and generate future-focused recommendations for better decision-making.',
    'hero.cta': 'Start Your Free Trial',
    // Add more translations as needed
  },
  de: {
    'nav.features': 'Funktionen',
    'nav.howItWorks': 'Funktionsweise',
    'nav.pricing': 'Preise',
    'nav.getStarted': 'Jetzt Starten',
    'hero.title1': 'Erschließen Sie Kundeneinblicke und',
    'hero.title2': 'Fördern Sie kontinuierliche Verbesserung',
    'hero.subtitle': 'Unser KI-gestütztes Tool hilft SaaS- und E-Commerce-Unternehmen dabei, Feedback zu analysieren, Kundenbedürfnisse zu verstehen und zukunftsorientierte Empfehlungen für bessere Entscheidungen zu generieren.',
    'hero.cta': 'Kostenlose Testversion starten',
    // Add more translations as needed
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['en']] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}