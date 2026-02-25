'use client';

import React from 'react';
import {
    TrendingUp, Boxes, Landmark, Users,
    Store, GraduationCap, FlaskConical, CalendarClock, Building2
} from 'lucide-react';
import ModuleCard from '@/components/ModuleCard';
import TimelineItem from '@/components/TimelineItem';
import LanguageSelector from '@/components/i18n/LanguageSelector';
import { useLanguage } from '@/components/i18n/LanguageProvider';
import styles from './page.module.css';

export default function PortfolioPage() {
    const { t } = useLanguage();
    const domainIcons = [
        <TrendingUp size={28} key="icon0" />,
        <Boxes size={28} key="icon1" />,
        <Landmark size={28} key="icon2" />,
        <Users size={28} key="icon3" />,
        <Store size={28} key="icon4" />,
        <GraduationCap size={28} key="icon5" />,
        <FlaskConical size={28} key="icon6" />,
        <CalendarClock size={28} key="icon7" />,
        <Building2 size={28} key="icon8" />
    ];

    return (
        <main className={styles.main}>
            <LanguageSelector />

            <div className={styles.hero}>
                <div className={styles.heroBackground}>
                    <div className={styles.blob1}></div>
                    <div className={styles.blob2}></div>
                </div>

                <div className={styles.heroContent}>
                    <h2 className={styles.nameHeader}>LABAH KOFFI ESAIE MAWUTO</h2>
                    <div className={styles.badgesGroup}>
                        <div className={styles.badge}>Software Engineer</div>
                        <div className={styles.badge}>Data Analyst Junior</div>
                        <div className={styles.badge}>{t.hero.badge}</div>
                    </div>
                    <h1 className={styles.title}>
                        {t.hero.title} <br />
                        <span className="text-gradient">{t.hero.titleGradient}</span>
                    </h1>
                    <p className={styles.subtitle}>
                        {t.hero.subtitle}
                    </p>
                </div>
            </div>

            <div className={styles.gridContainer}>
                <div className={styles.grid}>
                    {t.domains.map((domain, index) => (
                        <ModuleCard
                            key={index}
                            title={domain.title}
                            coreModules={domain.coreModules}
                            icon={domainIcons[index]}
                            understanding={domain.understanding}
                            customization={domain.customization}
                            integration={domain.integration}
                            automation={domain.automation}
                            delay={index * 100}
                        />
                    ))}
                </div>
            </div>

            <div className={styles.sectionContainer}>
                <div className={styles.sectionHeader}>
                    <h2 className={styles.sectionTitle}>
                        {t.sections.education} <span className="text-gradient">{t.sections.certifications}</span>
                    </h2>
                    <p className={styles.sectionSubtitle}>
                        {t.sections.educationSubtitle}
                    </p>
                </div>

                <div className={styles.timelineContainer}>
                    {t.timeline.map((item, index) => (
                        <TimelineItem
                            key={index}
                            title={item.title}
                            organization={item.organization}
                            date={item.date}
                            location={item.location}
                            type={item.type as 'education' | 'certification'}
                            index={index}
                        />
                    ))}
                </div>
            </div>
        </main>
    );
}
