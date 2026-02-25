'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Language, translations } from '@/lib/translations';

interface LanguageContextType {
    language: Language;
    setLanguage: (lang: Language) => void;
    t: typeof translations.en;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
    const [language, setLanguage] = useState<Language>('en'); // Default to EN initially
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        // Determine language on client mount
        setMounted(true);

        // Check local storage first
        const savedLang = localStorage.getItem('portfolio-language') as Language;
        if (savedLang === 'en' || savedLang === 'fr') {
            setLanguage(savedLang);
            return;
        }

        // Fallback to browser language
        if (typeof window !== 'undefined') {
            const browserLang = navigator.language.toLowerCase();
            if (browserLang.includes('fr')) {
                setLanguage('fr');
            }
        }
    }, []);

    const handleSetLanguage = (lang: Language) => {
        setLanguage(lang);
        localStorage.setItem('portfolio-language', lang);
    };

    // Provide translations based on current language
    const value = {
        language,
        setLanguage: handleSetLanguage,
        t: translations[language]
    };

    // Avoid hydration mismatch by waiting for mount
    // Wrap children in a div that only shows after mounted to prevent flash of wrong language text
    return (
        <LanguageContext.Provider value={value}>
            <div style={{ visibility: mounted ? 'visible' : 'hidden', minHeight: '100vh' }}>
                {children}
            </div>
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
