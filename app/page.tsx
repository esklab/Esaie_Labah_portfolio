'use client';

import React from 'react';
import TimelineItem from '@/components/TimelineItem';
import ExperienceCard from '@/components/ExperienceCard';
import CaseStudyCard from '@/components/CaseStudyCard';
import DataProjectCard from '@/components/DataProjectCard';
import Navbar from '@/components/Navbar';
import Contact from '@/components/Contact';
import { useLanguage } from '@/components/i18n/LanguageProvider';
import { motion, Variants } from 'framer-motion';
import styles from './page.module.css';

const fadeUpVariant: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.2 }
    }
};

export default function PortfolioPage() {
    const { t } = useLanguage();

    return (
        <main className={styles.main} id="top">
            <Navbar />

            <div className={styles.hero}>
                <div className={styles.heroBackground}>
                    <div className={styles.blob1}></div>
                    <div className={styles.blob2}></div>
                </div>

                <div className={styles.heroGrid}>
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

                    <div className={styles.heroTerminal}>
                        <div className={styles.terminalHeader}>
                            <div className={styles.terminalDots}>
                                <span className={styles.dotRed}></span>
                                <span className={styles.dotYellow}></span>
                                <span className={styles.dotGreen}></span>
                            </div>
                            <span className={styles.terminalTitle}>~/esk-portfolio</span>
                        </div>
                        <div className={styles.terminalBody}>
                            <p className={styles.commandLine}>
                                <span className={styles.prompt}>$</span> <span className={styles.command}>whoami</span>
                            </p>
                            <p className={styles.output}>labah-koffi-esaie</p>

                            <p className={styles.commandLine}>
                                <span className={styles.prompt}>$</span> <span className={styles.command}>cat</span> expertise.json
                            </p>
                            <p className={styles.outputArray}>
                                [<span className={styles.string}>"Odoo"</span>, <span className={styles.string}>"Python"</span>, <span className={styles.string}>"Data Analysis"</span>, <span className={styles.string}>"ERP"</span>]
                            </p>

                            <p className={styles.commandLine}>
                                <span className={styles.prompt}>$</span> <span className={styles.command}>status</span>
                            </p>
                            <p className={styles.output}>disponible pour de nouveaux projets <span className={styles.cursor}>_</span></p>
                        </div>
                    </div>
                </div>
            </div>

            {/* PROFESSIONAL EXPERIENCE */}
            <motion.div
                id="experience"
                className={styles.sectionContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={staggerContainer}
            >
                <motion.div variants={fadeUpVariant} className={styles.sectionHeader}>
                    <h2 className={styles.sectionTitle}>
                        {t.sections.professionalExperience} <span className="text-gradient">{t.sections.professionalExperienceGradient}</span>
                    </h2>
                    <p className={styles.sectionSubtitle}>
                        {t.sections.professionalExperienceSubtitle}
                    </p>
                </motion.div>

                <motion.div variants={fadeUpVariant} className={styles.experienceContainer}>
                    {t.experience.map((exp, index) => (
                        <ExperienceCard
                            key={index}
                            role={exp.role}
                            company={exp.company}
                            period={exp.period}
                            responsibilities={exp.responsibilities}
                        />
                    ))}
                </motion.div>
            </motion.div>

            {/* ODOO PROJECTS (CASE STUDIES) */}
            <motion.div
                id="projects"
                className={styles.sectionContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={staggerContainer}
            >
                <motion.div variants={fadeUpVariant} className={styles.sectionHeader}>
                    <h2 className={styles.sectionTitle}>
                        {t.sections.odooProjects} <span className="text-gradient">{t.sections.odooProjectsGradient}</span>
                    </h2>
                    <p className={styles.sectionSubtitle}>
                        {t.sections.odooProjectsSubtitle}
                    </p>
                </motion.div>

                <motion.div variants={fadeUpVariant} className={styles.gridContainer}>
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
                </motion.div>
            </motion.div>

            {/* DATA & ANALYTICS PROJECTS */}
            <motion.div
                className={styles.sectionContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={staggerContainer}
            >
                <motion.div variants={fadeUpVariant} className={styles.sectionHeader}>
                    <h2 className={styles.sectionTitle}>
                        {t.sections.dataProjects} <span className="text-gradient">{t.sections.dataProjectsGradient}</span>
                    </h2>
                    <p className={styles.sectionSubtitle}>
                        {t.sections.dataProjectsSubtitle}
                    </p>
                </motion.div>

                <motion.h3 variants={fadeUpVariant} className={styles.subSectionTitle}>{t.sections.completedProjects}</motion.h3>
                <motion.div variants={fadeUpVariant} className={styles.gridContainer}>
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
                </motion.div>

                <motion.h3 variants={fadeUpVariant} className={styles.subSectionTitle} style={{ marginTop: '3rem' }}>{t.sections.inProgressProjects}</motion.h3>
                <motion.div variants={fadeUpVariant} className={styles.gridContainer}>
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
                </motion.div>
            </motion.div>

            {/* SKILLS ARCHITECTURE */}
            <motion.div
                id="skills"
                className={styles.sectionContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={staggerContainer}
            >
                <motion.div variants={fadeUpVariant} className={styles.sectionHeader}>
                    <h2 className={styles.sectionTitle}>
                        {t.sections.skills} <span className="text-gradient">{t.sections.skillsGradient}</span>
                    </h2>
                    <p className={styles.sectionSubtitle}>
                        {t.sections.skillsSubtitle}
                    </p>
                </motion.div>

                <motion.div variants={fadeUpVariant} className={styles.skillsContainer}>
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
                </motion.div>
            </motion.div>

            {/* EDUCATION & CERTIFICATIONS */}
            <motion.div
                className={styles.sectionContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={staggerContainer}
            >
                <motion.div variants={fadeUpVariant} className={styles.sectionHeader}>
                    <h2 className={styles.sectionTitle}>
                        {t.sections.education} <span className="text-gradient">{t.sections.certifications}</span>
                    </h2>
                    <p className={styles.sectionSubtitle}>
                        {t.sections.educationSubtitle}
                    </p>
                </motion.div>

                <motion.div variants={fadeUpVariant} className={styles.timelineContainer}>
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
                </motion.div>
            </motion.div>

            <Contact />
        </main>
    );
}
