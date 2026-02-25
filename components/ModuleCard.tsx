'use client';

import React from 'react';
import { useLanguage } from '@/components/i18n/LanguageProvider';
import styles from './ModuleCard.module.css';

interface ModuleCardProps {
    title: string;
    coreModules: string;
    icon: React.ReactNode;
    understanding: string;
    customization: string;
    integration: string;
    automation: string;
    delay?: number;
}

export default function ModuleCard({
    title,
    coreModules,
    icon,
    understanding,
    customization,
    integration,
    automation,
    delay = 0
}: ModuleCardProps) {
    const { t } = useLanguage();

    return (
        <div
            className={`glass ${styles.card}`}
            style={{ animationDelay: `${delay}ms` }}
        >
            <div className={styles.header}>
                <div className={styles.iconWrapper}>{icon}</div>
                <div>
                    <h3 className={styles.title}>{title}</h3>
                    <p className={styles.coreModules}>{coreModules}</p>
                </div>
            </div>

            <div className={styles.content}>
                <div className={styles.section}>
                    <h4 className={styles.sectionTitle}>{t.sections.businessUnderstanding}</h4>
                    <p className={styles.sectionText}>{understanding}</p>
                </div>

                <div className={styles.section}>
                    <h4 className={styles.sectionTitle}>{t.sections.technicalCustomization}</h4>
                    <p className={styles.sectionText}>{customization}</p>
                </div>

                <div className={styles.section}>
                    <h4 className={styles.sectionTitle}>{t.sections.crossModuleIntegration}</h4>
                    <p className={styles.sectionText}>{integration}</p>
                </div>

                <div className={styles.section}>
                    <h4 className={styles.sectionTitle}>{t.sections.automation}</h4>
                    <p className={styles.sectionText}>{automation}</p>
                </div>
            </div>
        </div>
    );
}
