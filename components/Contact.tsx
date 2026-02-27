'use client';

import React, { useState } from 'react';
import styles from './Contact.module.css';
import { useLanguage } from '@/components/i18n/LanguageProvider';
import { Mail, Phone, MapPin, Github, Linkedin, Send } from 'lucide-react';
import { motion, Variants } from 'framer-motion';

const fadeUpVariant: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

export default function Contact() {
    const { t } = useLanguage();
    const [formData, setFormData] = useState({ nom: '', email: '', message: '' });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleWhatsAppSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const text = `Bonjour, je suis ${formData.nom} (${formData.email}).\n\n${formData.message}`;
        const encodedText = encodeURIComponent(text);
        window.open(`https://wa.me/22870373409?text=${encodedText}`, '_blank');
    };

    return (
        <section id="contact" className={styles.sectionWrapper}>
            <div className={styles.htmlTag}>&lt;contact&gt;</div>

            <motion.div
                className={styles.contactContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={fadeUpVariant}
            >
                {/* LEFT SIDE - INFO */}
                <div className={styles.contactInfo}>
                    <h2 className={styles.title}>Parlons-en</h2>
                    <p className={styles.subtitle}>
                        Vous avez un projet en tete ? N'hesitez pas a me contacter pour discuter de vos besoins.
                    </p>

                    <div className={styles.infoBlocks}>
                        <div className={styles.infoCard}>
                            <div className={styles.iconWrapper}>
                                <Mail size={20} />
                            </div>
                            <div className={styles.infoText}>
                                <span className={styles.infoLabel}>email</span>
                                <a href="mailto:labahesaie5@gmail.com" className={styles.infoValue}>labahesaie5@gmail.com</a>
                            </div>
                        </div>

                        <div className={styles.infoCard}>
                            <div className={styles.iconWrapper}>
                                <Phone size={20} />
                            </div>
                            <div className={styles.infoText}>
                                <span className={styles.infoLabel}>telephone / whatsapp</span>
                                <a href="https://wa.me/22870373409" target="_blank" rel="noopener noreferrer" className={styles.infoValue}>+22870373409</a>
                            </div>
                        </div>

                        <div className={styles.infoCard}>
                            <div className={styles.iconWrapper}>
                                <MapPin size={20} />
                            </div>
                            <div className={styles.infoText}>
                                <span className={styles.infoLabel}>localisation</span>
                                <span className={styles.infoValue}>Lomé, Togo</span>
                            </div>
                        </div>
                    </div>

                    <div className={styles.socialBlocks}>
                        <a href="https://github.com/esklab" target="_blank" rel="noopener noreferrer" className={styles.socialSquare}>
                            <Github size={20} />
                        </a>
                        <a href="https://www.linkedin.com/in/esaie-labah-24b174227/" target="_blank" rel="noopener noreferrer" className={styles.socialSquare}>
                            <Linkedin size={20} />
                        </a>
                    </div>
                </div>

                {/* RIGHT SIDE - TERMINAL FORM */}
                <div className={styles.terminalForm}>
                    <div className={styles.terminalHeader}>
                        <span className={styles.promptArrow}>&gt;_</span>
                        <span className={styles.scriptName}>new_message.sh</span>
                    </div>

                    <form className={styles.formBody} onSubmit={handleWhatsAppSubmit}>
                        <div className={styles.inputGroup}>
                            <label htmlFor="nom" className={styles.shellLabel}>
                                <span className={styles.varSymbol}>$</span> nom
                            </label>
                            <input
                                type="text"
                                id="nom"
                                name="nom"
                                className={styles.terminalInput}
                                placeholder="Votre nom"
                                value={formData.nom}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className={styles.inputGroup}>
                            <label htmlFor="email" className={styles.shellLabel}>
                                <span className={styles.varSymbol}>$</span> email
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                className={styles.terminalInput}
                                placeholder="votre@email.com"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className={styles.inputGroup}>
                            <label htmlFor="message" className={styles.shellLabel}>
                                <span className={styles.varSymbol}>$</span> message
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                className={styles.terminalTextarea}
                                placeholder="Decrivez votre projet..."
                                rows={4}
                                value={formData.message}
                                onChange={handleChange}
                                required
                            ></textarea>
                        </div>

                        <button type="submit" className={styles.submitButton}>
                            <Send size={18} />
                            Envoyer via WhatsApp
                        </button>
                    </form>
                </div>
            </motion.div>

            <div className={styles.htmlTag}>&lt;/contact&gt;</div>
        </section>
    );
}
