'use client';

import React from 'react';
import TimelineItem from '@/components/TimelineItem';
import LanguageSelector from '@/components/i18n/LanguageSelector';
import ExperienceCard from '@/components/ExperienceCard';
import CaseStudyCard from '@/components/CaseStudyCard';
import DataProjectCard from '@/components/DataProjectCard';
import { useLanguage } from '@/components/i18n/LanguageProvider';
import styles from './page.module.css';

export default function PortfolioPage() {
    const { t } = useLanguage();

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

            {/* PROFESSIONAL EXPERIENCE */}
            <div className={styles.sectionContainer}>
                <div className={styles.sectionHeader}>
                    <h2 className={styles.sectionTitle}>
                        {t.sections.professionalExperience} <span className="text-gradient">{t.sections.professionalExperienceGradient}</span>
                    </h2>
                    <p className={styles.sectionSubtitle}>
                        {t.sections.professionalExperienceSubtitle}
                    </p>
                </div>

                <div className={styles.experienceContainer}>
                    {t.experience.map((exp, index) => (
                        <ExperienceCard
                            key={index}
                            role={exp.role}
                            company={exp.company}
                            period={exp.period}
                            responsibilities={exp.responsibilities}
                        />
                    ))}
                </div>
            </div>

            {/* ODOO PROJECTS (CASE STUDIES) */}
            <div className={styles.sectionContainer}>
                <div className={styles.sectionHeader}>
                    <h2 className={styles.sectionTitle}>
                        {t.sections.odooProjects} <span className="text-gradient">{t.sections.odooProjectsGradient}</span>
                    </h2>
                    <p className={styles.sectionSubtitle}>
                        {t.sections.odooProjectsSubtitle}
                    </p>
                </div>

                <div className={styles.gridContainer}>
                    <div className={styles.grid}>
                        {t.odooProjects.map((project, index) => (
                            <CaseStudyCard
                                key={index}
                                title={project.title}
                                context={project.context}
                                technicalImplementation={project.technicalImplementation}
                                businessImpact={project.businessImpact}
                                delay={index * 50}
                            />
                        ))}
                    </div>
                </div>
            </div>

            {/* DATA & ANALYTICS PROJECTS */}
            <div className={styles.sectionContainer}>
                <div className={styles.sectionHeader}>
                    <h2 className={styles.sectionTitle}>
                        {t.sections.dataProjects} <span className="text-gradient">{t.sections.dataProjectsGradient}</span>
                    </h2>
                    <p className={styles.sectionSubtitle}>
                        {t.sections.dataProjectsSubtitle}
                    </p>
                </div>

                <h3 className={styles.subSectionTitle}>{t.sections.completedProjects}</h3>
                <div className={styles.gridContainer}>
                    <div className={styles.grid}>
                        {t.dataProjects.completed.map((project, index) => (
                            <DataProjectCard
                                key={`comp-${index}`}
                                title={project.title}
                                datasetContext={project.datasetContext}
                                toolsUsed={project.toolsUsed}
                                analysisPerformed={project.analysisPerformed}
                                insightsGenerated={project.insightsGenerated}
                                businessRelevance={project.businessRelevance}
                                delay={index * 50}
                            />
                        ))}
                    </div>
                </div>

                <h3 className={styles.subSectionTitle} style={{ marginTop: '3rem' }}>{t.sections.inProgressProjects}</h3>
                <div className={styles.gridContainer}>
                    <div className={styles.grid}>
                        {t.dataProjects.inProgress.map((project, index) => (
                            <DataProjectCard
                                key={`prog-${index}`}
                                title={project.title}
                                datasetContext={project.datasetContext}
                                toolsUsed={project.toolsUsed}
                                analysisPerformed={project.analysisPerformed}
                                insightsGenerated={project.insightsGenerated}
                                businessRelevance={project.businessRelevance}
                                delay={index * 50}
                            />
                        ))}
                    </div>
                </div>
            </div>

            {/* SKILLS ARCHITECTURE */}
            <div className={styles.sectionContainer}>
                <div className={styles.sectionHeader}>
                    <h2 className={styles.sectionTitle}>
                        {t.sections.skills} <span className="text-gradient">{t.sections.skillsGradient}</span>
                    </h2>
                    <p className={styles.sectionSubtitle}>
                        {t.sections.skillsSubtitle}
                    </p>
                </div>

                <div className={styles.skillsContainer}>
                    <div className={styles.skillCategory}>
                        <h4>ERP Architecture</h4>
                        <div className={styles.tags}>
                            {t.skills.erpArchitecture.map((skill, idx) => (
                                <span key={idx} className={styles.tag}>{skill}</span>
                            ))}
                        </div>
                    </div>
                    <div className={styles.skillCategory}>
                        <h4>Backend</h4>
                        <div className={styles.tags}>
                            {t.skills.backend.map((skill, idx) => (
                                <span key={idx} className={styles.tag}>{skill}</span>
                            ))}
                        </div>
                    </div>
                    <div className={styles.skillCategory}>
                        <h4>Frontend</h4>
                        <div className={styles.tags}>
                            {t.skills.frontend.map((skill, idx) => (
                                <span key={idx} className={styles.tag}>{skill}</span>
                            ))}
                        </div>
                    </div>
                    <div className={styles.skillCategory}>
                        <h4>Data & Analytics</h4>
                        <div className={styles.tags}>
                            {t.skills.dataAnalytics.map((skill, idx) => (
                                <span key={idx} className={styles.tag}>{skill}</span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* EDUCATION & CERTIFICATIONS */}
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
