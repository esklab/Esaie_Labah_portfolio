'use client';

import React from 'react';
import styles from './ExperienceCard.module.css';

interface ExperienceCardProps {
    role: string;
    company: string;
    period: string;
    responsibilities: string[];
}

export default function ExperienceCard({ role, company, period, responsibilities }: ExperienceCardProps) {
    return (
        <div className={`glass ${styles.card}`}>
            <div className={styles.header}>
                <div>
                    <h3 className={styles.role}>{role}</h3>
                    <p className={styles.company}>{company}</p>
                </div>
                <div className={styles.period}>{period}</div>
            </div>
            <ul className={styles.list}>
                {responsibilities.map((resp, idx) => (
                    <li key={idx} className={styles.listItem}>{resp}</li>
                ))}
            </ul>
        </div>
    );
}
