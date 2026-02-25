'use client';

import React from 'react';
import { useLanguage } from './LanguageProvider';
import styles from './LanguageSelector.module.css';

export default function LanguageSelector() {
    const { language, setLanguage, t } = useLanguage();

    const toggleLanguage = () => {
        setLanguage(language === 'en' ? 'fr' : 'en');
    };

    return (
        <button
            className={styles.selector}
            onClick={toggleLanguage}
            aria-label={`Switch to ${t.nav.switchToFormat}`}
        >
            <span className={styles.globeIcon}>🌐</span>
            <span className={styles.langText}>{language.toUpperCase()}</span>
            <span className={styles.hoverText}>Switch to {t.nav.switchToFormat}</span>
        </button>
    );
}
