'use client';

import React from 'react';
import styles from './CaseStudyCard.module.css';
import { useLanguage } from '@/components/i18n/LanguageProvider';

interface CaseStudyCardProps {
    title: string;
    context: string;
    technicalImplementation: string;
    businessImpact: string;
    delay?: number;
}

export default function CaseStudyCard({
    title,
    context,
    technicalImplementation,
    businessImpact,
    delay = 0
}: CaseStudyCardProps) {
    const { t } = useLanguage();

    return (
        <div
            className={`glass ${styles.card}`}
            style={{ animationDelay: `${delay}ms` }}
        >
            <h3 className={styles.title}>{title}</h3>

            <div className={styles.content}>
                <div className={styles.section}>
                    <h4 className={styles.sectionTitle}>{t.sections.context}</h4>
                    <p className={styles.sectionText}>{context}</p>
                </div>

                <div className={styles.section}>
                    <h4 className={styles.sectionTitle}>{t.sections.technicalImplementation}</h4>
                    <p className={styles.sectionText}>{technicalImplementation}</p>
                </div>

                <div className={styles.section}>
                    <h4 className={styles.sectionTitle}>{t.sections.businessImpact}</h4>
                    <p className={styles.sectionText}>{businessImpact}</p>
                </div>
            </div>
        </div>
    );
}
