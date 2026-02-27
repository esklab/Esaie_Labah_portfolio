'use client';

import React, { useState, useEffect } from 'react';
import styles from './Navbar.module.css';
import LanguageSelector from '@/components/i18n/LanguageSelector';
import { useLanguage } from '@/components/i18n/LanguageProvider';

export default function Navbar() {
    const { t } = useLanguage();
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
            <div className={styles.container}>
                <div className={styles.logo} onClick={() => scrollToSection('top')}>
                    <span className={styles.promptArrow}>&gt;_</span> LABAH<span className={styles.cursor}>_</span>
                </div>

                <div className={styles.links}>
                    <button onClick={() => scrollToSection('experience')} className={styles.link}>
                        {t.nav.experience}
                    </button>
                    <button onClick={() => scrollToSection('projects')} className={styles.link}>
                        {t.nav.projects}
                    </button>
                    <button onClick={() => scrollToSection('skills')} className={styles.link}>
                        {t.nav.skills}
                    </button>
                    <button onClick={() => scrollToSection('contact')} className={styles.link}>
                        {t.nav.contact}
                    </button>
                </div>

                <div className={styles.actions}>
                    <LanguageSelector />
                </div>
            </div>
        </nav>
    );
}
