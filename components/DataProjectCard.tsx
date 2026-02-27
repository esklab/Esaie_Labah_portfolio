'use client';

import React from 'react';
import styles from './DataProjectCard.module.css';
import { useLanguage } from '@/components/i18n/LanguageProvider';

interface DataProjectCardProps {
    title: string;
    datasetContext: string;
    toolsUsed: string;
    analysisPerformed: string;
    insightsGenerated: string;
    businessRelevance: string;
    delay?: number;
}

export default function DataProjectCard({
    title,
    datasetContext,
    toolsUsed,
    analysisPerformed,
    insightsGenerated,
    businessRelevance,
    delay = 0
}: DataProjectCardProps) {
    const { t } = useLanguage();

    return (
        <div
            className={`glass ${styles.card}`}
            style={{ animationDelay: `${delay}ms` }}
        >
            <h3 className={styles.title}>{title}</h3>

            <div className={styles.content}>
                <div className={styles.section}>
                    <h4 className={styles.sectionTitle}>{t.sections.datasetContext}</h4>
                    <p className={styles.sectionText}>{datasetContext}</p>
                </div>

                <div className={styles.section}>
                    <h4 className={styles.sectionTitle}>{t.sections.toolsUsed}</h4>
                    <p className={styles.sectionText}>{toolsUsed}</p>
                </div>

                <div className={styles.section}>
                    <h4 className={styles.sectionTitle}>{t.sections.analysisPerformed}</h4>
                    <p className={styles.sectionText}>{analysisPerformed}</p>
                </div>

                <div className={styles.section}>
                    <h4 className={styles.sectionTitle}>{t.sections.insightsGenerated}</h4>
                    <p className={styles.sectionText}>{insightsGenerated}</p>
                </div>

                <div className={styles.section}>
                    <h4 className={styles.sectionTitle}>{t.sections.businessRelevance}</h4>
                    <p className={styles.sectionText}>{businessRelevance}</p>
                </div>
            </div>
        </div>
    );
}
