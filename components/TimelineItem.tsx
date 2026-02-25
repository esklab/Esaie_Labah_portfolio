import React from 'react';
import { GraduationCap, Award, Calendar } from 'lucide-react';
import styles from './Timeline.module.css';

interface TimelineItemProps {
    title: string;
    organization: string;
    date: string;
    location?: string;
    type: 'education' | 'certification';
    index: number;
}

export default function TimelineItem({
    title,
    organization,
    date,
    location,
    type,
    index
}: TimelineItemProps) {
    return (
        <div className={styles.timelineItem} style={{ animationDelay: `${index * 150}ms` }}>
            <div className={styles.iconContainer}>
                <div className={`${styles.iconWrapper} ${type === 'certification' ? styles.certIcon : ''}`}>
                    {type === 'education' ? <GraduationCap size={20} /> : <Award size={20} />}
                </div>
                <div className={styles.line}></div>
            </div>

            <div className={`glass ${styles.content}`}>
                <div className={styles.header}>
                    <h3 className={styles.title}>{title}</h3>
                    <div className={styles.dateBadge}>
                        <Calendar size={14} />
                        <span>{date}</span>
                    </div>
                </div>

                <p className={styles.organization}>{organization}</p>

                {location && (
                    <p className={styles.location}>📍 {location}</p>
                )}
            </div>
        </div>
    );
}
