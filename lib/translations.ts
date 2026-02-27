export type Language = 'en' | 'fr';

export const translations = {
    en: {
        nav: {
            switchToFormat: "FR",
            experience: "Experience",
            projects: "Projects",
            skills: "Skills",
            contact: "Contact"
        },
        contact: {
            title: "Get in",
            titleGradient: "Touch",
            subtitle: "Interested in discussing a project, an architecture challenge, or a potential collaboration? Feel free to reach out.",
            emailButton: "Send an Email",
            whatsappButton: "Chat on WhatsApp",
            github: "GitHub",
            linkedin: "LinkedIn"
        },
        hero: {
            badge: "ERP Systems Engineer",
            title: "Odoo ERP Modules &",
            titleGradient: "Business Domains Expertise",
            subtitle: "I design scalable ERP systems and transform operational and financial data into strategic decision tools. My expertise bridges system architecture, business processes, and analytics."
        },
        sections: {
            businessUnderstanding: "Business Understanding",
            technicalCustomization: "Technical Customization",
            crossModuleIntegration: "Cross-Module Integration",
            automation: "Automation",
            education: "Education &",
            certifications: "Certifications",
            educationSubtitle: "A continuous journey of learning and professional development.",
            professionalExperience: "Professional",
            professionalExperienceGradient: "Experience",
            professionalExperienceSubtitle: "Driving impact through systems architecture, bespoke development, and data-driven insights.",
            odooProjects: "Odoo ERP",
            odooProjectsGradient: "Case Studies",
            odooProjectsSubtitle: "Detailed breakdown of complex module customizations, integrations, and automated workflows.",
            dataProjects: "Data &",
            dataProjectsGradient: "Analytics",
            dataProjectsSubtitle: "Transforming raw datasets into actionable business intelligence.",
            skills: "Skills",
            skillsGradient: "Architecture",
            skillsSubtitle: "A structured overview of technical competencies across the stack.",
            context: "Context",
            technicalImplementation: "Technical Implementation",
            businessImpact: "Business Impact",
            completedProjects: "Completed Projects",
            inProgressProjects: "In Progress",
            datasetContext: "Dataset Context",
            toolsUsed: "Tools",
            analysisPerformed: "Analysis",
            insightsGenerated: "Insights",
            businessRelevance: "Business Relevance"
        },
        experience: [
            {
                role: "Web & Mobile Developer",
                company: "Freelance",
                period: "2021 – Present",
                responsibilities: [
                    "Engineered comprehensive systems analysis and robust architecture designs for diverse client needs.",
                    "Developed high-performance mobile applications leveraging Flutter, Firebase, and SQLite for cross-platform availability.",
                    "Architected and deployed streamlined deployment pipelines to ensure rapid, reliable delivery of digital products.",
                    "Implemented user-centric UI/UX designs, translating complex requirements into intuitive digital experiences.",
                    "Managed full-cycle website and digital systems operations, ensuring high availability and optimal performance.",
                    "Strategized and executed comprehensive social media digital campaigns to boost brand engagement."
                ]
            },
            {
                role: "Odoo Developer",
                company: "MAONO",
                period: "2023 – Present",
                responsibilities: [
                    "Conducted in-depth business needs analysis to blueprint and design tailored ERP architectures.",
                    "Developed and deployed highly customized Odoo modules across versions 15 through 17.",
                    "Leveraged advanced model inheritance and Odoo ORM logic to fundamentally alter core system behaviors.",
                    "Customized and automated complex business workflows to eliminate operational bottlenecks.",
                    "Engineered robust API integrations (REST, JSON) to synchronize Odoo with external legacy systems.",
                    "Architected comprehensive multi-company environments with strict data isolation and granular security rules.",
                    "Executed seamless migration of extensive databases from Odoo 15 to Odoo 17, refactoring views, updating deprecated widgets, and ensuring absolute data integrity."
                ]
            },
            {
                role: "Data Analyst Intern",
                company: "CODVEDA TECHNOLOGIES",
                period: "Dec 2025 – Jan 2026",
                responsibilities: [
                    "Conducted rigorous analysis on extensive real estate datasets to derive actionable market intelligence.",
                    "Performed multi-variate feature impact studies, isolating variables such as location, bedrooms, and conditions on property valuation.",
                    "Executed advanced data cleaning and preprocessing pipelines to ensure high-fidelity analytical ready data.",
                    "Led Exploratory Data Analysis (EDA) to uncover hidden trends and statistical anomalies.",
                    "Generated critical statistical insights, supporting findings with sophisticated data visualizations and comprehensive reporting.",
                    "Provided quantitative business decision support aimed at optimizing real estate portfolio investments."
                ]
            }
        ],
        odooProjects: [
            {
                title: "Training & Skills Management System",
                context: "The client required a unified system to manage employee training lifecycles, track competency acquisition, and dynamically link training outcomes to HR performance records.",
                technicalImplementation: "Architected a suite of custom models connecting courses to employee profiles via complex many2many relationships. Developed automated assessment logic triggering upon course completion, paired with a custom skill validation engine.",
                businessImpact: "Eliminated manual skill tracking, ensuring that project managers always have real-time visibility into workforce capabilities when assigning complex tasks."
            },
            {
                title: "Examination Management System",
                context: "An educational institution needed a scalable platform to handle mass examination scheduling, automated grading, and complex student record management without manual clerical work.",
                technicalImplementation: "Engineered automated session generation scripts capable of handling hundreds of concurrent examinees. Designed complex relational models to instantly compute aggregated scores, applying dynamic weighting, and generating reports.",
                businessImpact: "Reduced administrative overhead by 85%, accelerating result publication times while completely eliminating calculation errors."
            },
            {
                title: "Calendar Automation",
                context: "Sales and support teams were experiencing high friction and double-bookings due to disconnected communication channels and manual calendar management.",
                technicalImplementation: "Programmed robust automation rules that intercept specific CRM and Helpdesk state changes to automatically create corresponding events. Integrated an engine to auto-generate unique Odoo meeting links synchronized with slide.channel.",
                businessImpact: "Achieved seamless team coordination, resulting in zero double-bookings and significantly faster response times for client consultations."
            },
            {
                title: "Leave Management Customization",
                context: "The built-in Odoo leave management lacked the granularity to enforce strict monthly allocation limits and regional labor compliance policies.",
                technicalImplementation: "Overrode standard hr.leave validation logic. Implemented dynamic business rules that structurally restrict leave request validity on a hard monthly boundary, alongside dynamically recalculating accruals based on real-time data.",
                businessImpact: "Ensured 100% compliance with complex regional labor laws and prevented unauthorized or unearned leave payouts."
            },
            {
                title: "Sales Process Customization",
                context: "A specialized healthcare provider required their sales pipeline to dynamically compute variable insurance coverage and split patient copays directly at the point of quotation.",
                technicalImplementation: "Deeply extended the sale.order and sale.order.line models. Engineered calculation fields that interface with custom patient insurance profiles, dynamically splitting the final invoice routing between the patient and the insurance provider.",
                businessImpact: "Streamlined the quotation-to-cash process, significantly reducing billing errors and accelerating accounts receivable cycles."
            },
            {
                title: "Laboratory API Integration",
                context: "A high-volume clinic needed their internal Odoo system to instantly absorb and react to test results processed by a third-party external laboratory.",
                technicalImplementation: "Designed a secure custom controller route to accept incoming JSON payloads. Substantially overrode the create() method to parse the payload, map results to patients, and trigger asynchronous notification workflows.",
                businessImpact: "Replaced a slow, error-prone manual data entry process with an instant, automated synchronization layer, drastically improving patient turnaround times."
            },
            {
                title: "Reservation Management System",
                context: "A hospitality client needed a unified dashboard to seamlessly manage room allocations, food orders, and billing without jumping between separate POS and backend systems.",
                technicalImplementation: "Built a customized reservation engine triggering automatic record creation across modules. Synchronized POS orders directly with backend booking ledgers, ensuring real-time inventory deduction.",
                businessImpact: "Unified disjointed operational silos into a single cohesive process, eliminating lost charges and dramatically improving the guest checkout experience."
            },
            {
                title: "Bonus & Prime Management Module (HR)",
                context: "The HR department managed highly complex, tiered bonus structures across different departments manually in spreadsheets, leading to delays and inaccuracies.",
                technicalImplementation: "Developed a dynamic module handling selection-based conditional logic that automatically aggregates metrics, calculates complex precise variable amounts, and injects the final computed bonus directly into payslips.",
                businessImpact: "Standardized compensation variables across the entire company, saving HR days of work per month while guaranteeing fairness."
            },
            {
                title: "Multi-Company Data Isolation Implementation",
                context: "A corporate group rapidly acquired several subsidiaries and required absolute data isolation to ensure competing brands could not view each other's client lists or financials.",
                technicalImplementation: "Architected a strict, company-based data separation strategy. Configured deeply nested security rules (ir.rule) and custom access rights bounding record visibility based on the user's active company context.",
                businessImpact: "Achieved uncompromised operational security and compliance, allowing the conglomerate to scale operations aggressively on a single database."
            },
            {
                title: "Odoo Migration (v15 → v17)",
                context: "The client was running a heavily customized Odoo 15 environment that suffered from technical debt and incompatibility with Odoo 17's modern framework.",
                technicalImplementation: "Led a comprehensive codebase refactoring initiative. Upgraded outdated XML views, replaced deprecated widgets, and meticulously rewrote legacy Python logic to ensure backward compatibility and data integrity.",
                businessImpact: "Successfully transitioned the company to a faster, web-optimized environment with zero data loss, future-proofing their core operational infrastructure."
            }
        ],
        dataProjects: {
            completed: [
                {
                    title: "Analysis of NYC Public School Performance",
                    datasetContext: "Comprehensive dataset encompassing academic metrics, demographic distributions, and funding levels across the NYC system.",
                    toolsUsed: "Python (Pandas, NumPy, Matplotlib), Jupyter.",
                    analysisPerformed: "Conducted complex cross-sectional analysis to identify systematic correlations between localized district funding and standardized test score outcomes.",
                    insightsGenerated: "Revealed distinct non-linear correlations where strategic allocation in specific programs yielded higher test score improvements than broad budget increases.",
                    businessRelevance: "Demonstrated the capability to parse large datasets to construct actionable policy models."
                },
                {
                    title: "Exploratory Study on Netflix Movies",
                    datasetContext: "Global dataset detailing Netflix's historical content catalog, including regional availability, ratings, and runtime evolution.",
                    toolsUsed: "Python (Seaborn, Pandas), SQL.",
                    analysisPerformed: "Executed deep Exploratory Data Analysis (EDA) to map the evolution of content strategy over a decade.",
                    insightsGenerated: "Identified a statistically significant shift toward shorter, serialized content replacing feature-length films.",
                    businessRelevance: "Showcased ability to extract macro-level business strategy narratives from raw historical data."
                },
                {
                    title: "Evaluation of Profitable Debt for Banks",
                    datasetContext: "Financial datasets containing historical loan issuance, default rates, and macroeconomic indicators.",
                    toolsUsed: "Python (SciPy, StatsModels), PostgreSQL.",
                    analysisPerformed: "Modeled the profitability threshold of various debt instruments under differing economic stress conditions.",
                    insightsGenerated: "Isolated key risk markers that differentiate healthy leveraged debt from high-risk structured loans prior to downturns.",
                    businessRelevance: "Highlighted strong financial modeling acumen connecting raw risk metrics directly to bottom-line profitability."
                }
            ],
            inProgress: [
                {
                    title: "Bank Portfolio Profitability Analysis",
                    datasetContext: "Anonymized institutional banking data tracking dynamic portfolio asset allocations and yield returns.",
                    toolsUsed: "Python, SQL, Power BI.",
                    analysisPerformed: "Building automated ETL pipelines to feed real-time Power BI dashboards tracking segmented portfolio yields.",
                    insightsGenerated: "Establishing predictive baselines to identify underperforming asset classes before quarterly earnings impact.",
                    businessRelevance: "Directly models enterprise-grade financial analytics workflows utilized by investment firms."
                },
                {
                    title: "Credit Risk Assessment Model",
                    datasetContext: "High-dimensional dataset of consumer financial behaviors, credit histories, and localized demographic data.",
                    toolsUsed: "Python (Scikit-Learn), PostgreSQL.",
                    analysisPerformed: "Developing a machine learning classification model to predict the probability of default on unsecured personal loans.",
                    insightsGenerated: "Iterating on feature engineering to surface non-obvious behavioral indicators outperforming traditional credit scores.",
                    businessRelevance: "Critical application of predictive analytics in mitigating institutional financial risk."
                },
                {
                    title: "SME Cash Flow Forecasting",
                    datasetContext: "Historical transactional data from a cohort of Small and Medium Enterprises (SMEs).",
                    toolsUsed: "Python (Prophet), Excel.",
                    analysisPerformed: "Applying time-series forecasting techniques to predict critical cash flow shortages 30, 60, and 90 days out.",
                    insightsGenerated: "Mapping seasonal liquidity crises allowing for proactive, automated short-term credit line offerings.",
                    businessRelevance: "Translates operational friction into a data-driven financial product offering."
                },
                {
                    title: "Financial Anomaly Detection",
                    datasetContext: "Massive scale ledger data containing millions of micro-transactions.",
                    toolsUsed: "Machine Learning (Isolation Forests), MongoDB.",
                    analysisPerformed: "Deploying unsupervised anomaly detection algorithms against unstructured NoSQL transaction logs to flag potential fraud.",
                    insightsGenerated: "Tuning model sensitivity to reduce false positives while accurately intercepting coordinated fraudulent activity.",
                    businessRelevance: "Focuses on enterprise security and the automated protection of institutional assets."
                }
            ]
        },
        skills: {
            erpArchitecture: [
                "Odoo ORM", "Model Inheritance", "Workflow Automation", "Cron Jobs", "Multi-Company Setup", "Security Rules (ir.rule)", "REST API"
            ],
            backend: [
                "Python", "PostgreSQL", "SQL", "JSON", "MongoDB"
            ],
            frontend: [
                "XML", "QWeb", "Flutter", "UI Design Principles"
            ],
            dataAnalytics: [
                "Pandas", "NumPy", "Power BI", "Statistical Analysis", "Machine Learning (Basics)", "Financial Modeling"
            ]
        },
        timeline: [
            {
                title: "McKinsey.org Forward badge",
                organization: "McKinsey Academy",
                date: "Oct 2025 - Dec 2025",
                type: "certification"
            },
            {
                title: "Data Scientist Associate Certificate",
                organization: "DataCamp",
                date: "2023 - Present",
                type: "certification"
            },
            {
                title: "Google Data Analyst Certificate",
                organization: "Coursera",
                date: "2023 - 2024",
                type: "certification"
            },
            {
                title: "Google Certificate in Digital Marketing Fundamentals",
                organization: "Google Skillshop",
                date: "2023",
                type: "certification"
            },
            {
                title: "Professional Bachelor's Degree in Computer Science",
                organization: "Institut Africaine d’Informatique (IAI)",
                date: "2019 - 2022",
                location: "Lomé, Togo",
                type: "education"
            },
            {
                title: "Scientific Baccalaureate",
                organization: "Institut Secondaire Notre Dame de l’Eglise - Vakpo",
                date: "2018 - 2019",
                location: "Lomé, Togo",
                type: "education"
            }
        ]
    },

    fr: {
        nav: {
            switchToFormat: "EN",
            experience: "Expérience",
            projects: "Projets",
            skills: "Compétences",
            contact: "Contact"
        },
        contact: {
            title: "Me",
            titleGradient: "Contacter",
            subtitle: "Vous souhaitez discuter d'un projet, d'un défi architectural ou d'une potentielle collaboration ? N'hésitez pas à me joindre.",
            emailButton: "Envoyer un Email",
            whatsappButton: "Discuter sur WhatsApp",
            github: "GitHub",
            linkedin: "LinkedIn"
        },
        hero: {
            badge: "Ingénieur Systèmes ERP",
            title: "Expertise des Modules &",
            titleGradient: "Domaines Métiers Odoo",
            subtitle: "Je conçois des systèmes ERP évolutifs et transforme les données opérationnelles et financières en outils de décision stratégique. Mon expertise fait le pont entre l'architecture système, les processus métier et l'analyse de données."
        },
        sections: {
            businessUnderstanding: "Compréhension Métier",
            technicalCustomization: "Personnalisation Technique",
            crossModuleIntegration: "Intégration Inter-Modules",
            automation: "Automatisation",
            education: "Formations &",
            certifications: "Certifications",
            educationSubtitle: "Un parcours continu d'apprentissage et de développement professionnel.",
            professionalExperience: "Expérience",
            professionalExperienceGradient: "Professionnelle",
            professionalExperienceSubtitle: "Créer de l'impact grâce à l'architecture de systèmes, au développement sur mesure et aux décisions basées sur les données.",
            odooProjects: "Projets ERP",
            odooProjectsGradient: "Cas Pratiques Odoo",
            odooProjectsSubtitle: "Analyse détaillée des personnalisations complexes de modules, des intégrations et des flux de travail automatisés.",
            dataProjects: "Projets Data &",
            dataProjectsGradient: "Analytique",
            dataProjectsSubtitle: "Transformer des jeux de données bruts en intelligence d'affaires exploitable.",
            skills: "Architecture des",
            skillsGradient: "Compétences",
            skillsSubtitle: "Un aperçu structuré des compétences techniques à travers la pile technologique.",
            context: "Contexte",
            technicalImplementation: "Implémentation Technique",
            businessImpact: "Impact Métier",
            completedProjects: "Projets Terminés",
            inProgressProjects: "En Cours",
            datasetContext: "Contexte des Données",
            toolsUsed: "Outils",
            analysisPerformed: "Analyse Effectuée",
            insightsGenerated: "Perspectives Générées",
            businessRelevance: "Pertinence Métier"
        },
        experience: [
            {
                role: "Développeur Web & Mobile",
                company: "Freelance",
                period: "2021 – Présent",
                responsibilities: [
                    "Réalisation d'analyses systèmes complètes et conception d'architectures robustes pour répondre à divers besoins clients.",
                    "Développement d'applications mobiles haute performance en utilisant Flutter, Firebase et SQLite.",
                    "Architecture et déploiement de pipelines de déploiement continus (CI/CD) pour garantir des livraisons rapides et fiables.",
                    "Implémentation d'interfaces UI/UX centrées sur l'utilisateur, traduisant des exigences complexes en expériences numériques intuitives.",
                    "Gestion complète du cycle de vie des sites web et des systèmes sous-jacents, garantissant une haute disponibilité.",
                    "Élaboration et exécution de stratégies numériques complètes sur les réseaux sociaux pour stimuler l'engagement."
                ]
            },
            {
                role: "Développeur Odoo",
                company: "MAONO",
                period: "2023 – Présent",
                responsibilities: [
                    "Analyse approfondie des besoins de l'entreprise pour concevoir et architecturer des systèmes ERP sur mesure.",
                    "Développement et déploiement de modules Odoo hautement personnalisés pour les versions 15 à 17.",
                    "Utilisation avancée de l'héritage de modèles et de la logique ORM d'Odoo pour modifier en profondeur les comportements système.",
                    "Personnalisation et automatisation de flux de travail complexes pour éliminer les goulots d'étranglement opérationnels.",
                    "Ingénierie d'intégrations API robustes (REST, JSON) pour synchroniser Odoo avec des systèmes logiciels externes.",
                    "Architecture d'environnements multi-sociétés stricts avec isolation absolue des données et règles de sécurité granulaires.",
                    "Exécution de migrations de bases de données fluides d'Odoo 15 vers 17, incluant la refonte des vues et la mise à jour des composants obsolètes."
                ]
            },
            {
                role: "Stagiaire Data Analyst",
                company: "CODVEDA TECHNOLOGIES",
                period: "Déc 2025 – Jan 2026",
                responsibilities: [
                    "Analyse rigoureuse de vastes ensembles de données immobilières pour en déduire des renseignements stratégiques.",
                    "Études d'impact multi-variables, isolant des éléments tels que l'emplacement et les conditions sur la valorisation immobilière.",
                    "Nettoyage et prétraitement avancés des données pour assurer une haute fidélité analytique.",
                    "Conduite de l'Analyse Exploratoire des Données (EDA) pour découvrir des tendances cachées et des anomalies.",
                    "Génération d'insights statistiques critiques, soutenus par des visualisations de données sophistiquées.",
                    "Soutien quantitatif à la décision commerciale visant à optimiser les investissements des portefeuilles immobiliers."
                ]
            }
        ],
        odooProjects: [
            {
                title: "Système de Gestion des Formations & Compétences",
                context: "Le client avait besoin d'un système unifié pour gérer les cycles de formation, suivre l'acquisition des compétences et lier dynamiquement les résultats aux dossiers RH.",
                technicalImplementation: "Architecture d'une suite de modèles personnalisés reliant les cours aux profils employés via des relations many2many complexes. Développement d'une logique d'évaluation automatisée couplée à un moteur de validation des compétences.",
                businessImpact: "Élimination du suivi manuel des compétences, offrant aux chefs de projet une visibilité en temps réel sur les capacités des équipes lors de l'attribution des tâches."
            },
            {
                title: "Système de Gestion des Examens",
                context: "Une institution éducative nécessitait une plateforme évolutive pour gérer la planification massive d'examens, la notation automatisée et la gestion des dossiers sans travail administratif manuel.",
                technicalImplementation: "Ingénierie de scripts de génération automatique de sessions, capables de gérer massivement les candidats. Conception de modèles relationnels calculant instantanément les scores agrégés et générant les rapports QWeb.",
                businessImpact: "Réduction des charges administratives de 85%, accélérant la publication des résultats tout en éliminant les erreurs de calcul."
            },
            {
                title: "Automatisation du Calendrier",
                context: "Les équipes de vente et de support rencontraient des frictions et des doubles réservations à cause de la gestion manuelle des calendriers.",
                technicalImplementation: "Programmation de règles d'automatisation capturant les changements d'état CRM et Support pour créer des événements automatiquement. Moteur de génération de liens Odoo Meeting synchronisé avec slide.channel.",
                businessImpact: "Coordination d'équipe sans faille, zéro double réservation et temps de réponse considérablement réduits pour les consultations clients."
            },
            {
                title: "Personnalisation de la Gestion des Congés",
                context: "La gestion native des congés Odoo manquait de granularité pour appliquer des limites d'allocation mensuelles strictes conformes au code du travail régional.",
                technicalImplementation: "Surcharge de la logique hr.leave. Implémentation de règles métier dynamiques restreignant la validité des requêtes selon des plafonds mensuels et recalculant les cumuls via des données de présence en temps réel.",
                businessImpact: "Garantie de conformité à 100% avec les lois du travail complexes et prévention du paiement de jours de congé non autorisés ou non acquis."
            },
            {
                title: "Personnalisation des Processus de Vente",
                context: "Un prestataire de soins devait calculer dynamiquement la couverture d'assurance au niveau des devis et diviser la facturation (tickets modérateurs).",
                technicalImplementation: "Extension profonde de sale.order et sale.order.line. Conception de champs calculés interfaçant avec les profils d'assurance des patients pour générer la facturation fractionnée dynamiquement.",
                businessImpact: "Fluidification du cycle devis-encaissement, réduisant drastiquement les erreurs de facturation et accélérant la récupération des créances."
            },
            {
                title: "Intégration API de Laboratoire",
                context: "Une clinique à haut volume avait besoin que son Odoo absorbe instantanément les résultats de tests traités par un système de laboratoire tiers.",
                technicalImplementation: "Conception d'une route contrôleur sécurisée capturant les payloads JSON entrants. Surcharge de la méthode create() pour parser les résultats, les associer au dossier patient et déclencher des notifications asynchrones.",
                businessImpact: "Remplacement d'une saisie manuelle lente et risquée par une synchronisation automatisée, améliorant drastiquement les délais de prise en charge."
            },
            {
                title: "Système de Gestion des Réservations",
                context: "Un client dans l'hôtellerie nécessitait un tableau de bord unifié gérant simultanément l'allocation des chambres, les commandes du restaurant et la facturation globale.",
                technicalImplementation: "Création d'un moteur de réservation déclenchant des créations d'enregistrements inter-modules. Synchronisation des commandes POS directement sur les registres de réservation backend.",
                businessImpact: "Unification de silos opérationnels disjoints en un processus fluide, éliminant les frais perdus et optimisant le parcours de départ des clients."
            },
            {
                title: "Module de Gestion des Primes & Bonus (RH)",
                context: "Le service RH gérait manuellement des grilles de primes complexes et hiérarchisées sur des feuilles de calcul, engendrant retards et inexactitudes.",
                technicalImplementation: "Développement d'un module gérant des logiques conditionnelles via menus déroulants pour le calcul de montants variables, injectant les primes finalisées directement sur les fiches de paie.",
                businessImpact: "Standardisation des variables de rémunération, épargnant au service RH des dizaines d'heures mensuelles tout en garantissant l'équité totale."
            },
            {
                title: "Implémentation d'Isolation de Données Multi-Sociétés",
                context: "Un groupe ayant acquis plusieurs filiales exigeait une isolation absolue des bases pour que les marques concurrentes ne puissent voir ni données clients ni données financières des autres.",
                technicalImplementation: "Architecture stricte de séparation des données. Configuration approfondie de règles de sécurité (ir.rule) limitant la visibilité à la filiale active tout en permettant des remontées globales pour la holding.",
                businessImpact: "Sécurité opérationnelle maximale permettant au conglomérat de développer massivement ses branches sur une instance technique unifiée."
            },
            {
                title: "Migration Odoo (v15 → v17)",
                context: "L'environnement Odoo 15 hautement personnalisé du client souffrait de dette technique et d'incompatibilité avec le nouveau framework frontend d'Odoo 17 (Owl).",
                technicalImplementation: "Refonte exhaustive du code source. Mise à jour des vues XML, remplacement des widgets dépréciés, et réécriture méticuleuse de la logique backend Python pour assurer la rétrocompatibilité lors de la montée de version.",
                businessImpact: "Transition réussie vers un environnement rapide et optimisé avec zéro perte de données, pérennisant ainsi toute leur infrastructure métier."
            }
        ],
        dataProjects: {
            completed: [
                {
                    title: "Analyse des Performances Scolaires de NYC",
                    datasetContext: "Jeu de données complet englobant les mesures académiques, la démographie et les niveaux de financement des écoles publiques de New York.",
                    toolsUsed: "Python (Pandas, NumPy, Matplotlib), Jupyter.",
                    analysisPerformed: "Analyse croisée complexe visant à identifier les corrélations systématiques entre les financements de districts et les résultats aux tests standardisés.",
                    insightsGenerated: "Révélation de corrélations non linéaires prouvant qu'un investissement stratégique cible est plus impactant qu'une augmentation globale de budget aveugle.",
                    businessRelevance: "Démonstration de la capacité à utiliser des données massives pour modéliser des politiques publiques et l'allocation de ressources."
                },
                {
                    title: "Étude Exploratoire des Films Netflix",
                    datasetContext: "Données globales du catalogue Netflix, incluant notes, durée de visionnage et évolutions temporelles par région.",
                    toolsUsed: "Python (Seaborn, Pandas), SQL.",
                    analysisPerformed: "Analyse Exploratoire des Données (EDA) pour cartographier l'évolution de la stratégie de contenu sur 10 ans.",
                    insightsGenerated: "Identification d'un pivot stratégique net favorisant le contenu sérialisé et plus court comme moteur clé de la rétention d'abonnés.",
                    businessRelevance: "Illustration de l'aptitude à extraire des narrations commerciales de haut niveau à partir de journaux historiques abstraits."
                },
                {
                    title: "Évaluation de la Dette Rentable pour le Secteur Bancaire",
                    datasetContext: "Bases de données financières historiques couvrant l'émission de prêts, les indicateurs macroéconomiques et les taux de défaut.",
                    toolsUsed: "Python (SciPy, StatsModels), PostgreSQL.",
                    analysisPerformed: "Modélisation des seuils de rentabilité de multiples instruments de dette face à des situations économiques critiques variées.",
                    insightsGenerated: "Isolement de marqueurs de risques discriminants séparant la dette saine à effet de levier de la dette hautement spéculative préalable aux replis boursiers.",
                    businessRelevance: "Application forte de modélisation financière, connectant la théorie mathématique à la rentabilité directe des institutions."
                }
            ],
            inProgress: [
                {
                    title: "Analyse de Rentabilité de Portefeuille Bancaire",
                    datasetContext: "Données bancaires anonymisées en direct retraçant les rendements et allocations d'actifs.",
                    toolsUsed: "Python, SQL, Power BI.",
                    analysisPerformed: "Construction de flux ETL automatisés pour nourrir les tableaux de bord temps réel mesurant le rendement des segments.",
                    insightsGenerated: "Mise en place actuelle d'un socle prédictif isolant les catégories d'actifs sous-performantes avant qu'elles n'affectent les résultats trimestriels.",
                    businessRelevance: "Réplication directe des flux de travail analytiques de qualité institutionnelle utilisés par les banques d'investissement."
                },
                {
                    title: "Modèle d'Évaluation des Risques de Crédit",
                    datasetContext: "Vaste jeu de données multidimensionnelles rassemblant comportements financiers, historiques de crédit et variables géographiques.",
                    toolsUsed: "Python (Scikit-Learn), PostgreSQL.",
                    analysisPerformed: "Développement d'un modèle de Machine Learning visant à classifier et prédire la probabilité de défaut de paiement de prêts personnels.",
                    insightsGenerated: "Itération en cours sur du Feature Engineering pour dévoiler de nouveaux comportements discriminants surpassant les évaluations de crédit classiques.",
                    businessRelevance: "Application critique de l'analyse prédictive pour limiter les expositions aux risques financiers."
                },
                {
                    title: "Prévisions de Flux de Trésorerie PME",
                    datasetContext: "Historique de millions de lignes transactionnelles provenant d'un groupe de PME.",
                    toolsUsed: "Python (Prophet), Excel Avancé.",
                    analysisPerformed: "Application d'algorithmes de séries temporelles pour prévoir précisément les tensions de liquidité à court terme (30/60/90 jours).",
                    insightsGenerated: "Cartographie de crises de liquidité saisonnières autorisant la banque à pousser des lignes de crédit de manière proactive automatisée.",
                    businessRelevance: "Capacité à transformer des signaux de friction opérationnelle en opportunités de monétisation (produits financiers)."
                },
                {
                    title: "Détection d'Anomalies Financières",
                    datasetContext: "Données de registres à très grande échelle rassemblant les journaux de micro-transactions en temps réel.",
                    toolsUsed: "Machine Learning (Isolation Forests), MongoDB.",
                    analysisPerformed: "Déploiement d'algorithmes non supervisés ciblant des données transactionnelles NoSQL brut pour détecter la fraude probable.",
                    insightsGenerated: "Paramétrage itératif de la sensibilité des modèles pour restreindre le nombre de faux positifs sans laisser passer les fraudes diffuses à faible valeur.",
                    businessRelevance: "Orientation claire vers la cybersécurité et la défense automatisée du capital des entreprises."
                }
            ]
        },
        skills: {
            erpArchitecture: [
                "ORM Odoo", "Héritage de Modèles", "Automatisation des Flux", "Tâches Cron", "Architecture Multi-Sociétés", "Règles de Sécurité (ir.rule)", "Intégration API REST"
            ],
            backend: [
                "Python", "PostgreSQL", "SQL", "JSON", "MongoDB"
            ],
            frontend: [
                "XML", "QWeb", "Flutter", "Principes UX/UI"
            ],
            dataAnalytics: [
                "Pandas", "NumPy", "Power BI", "Analyse Statistique", "Bases de Machine Learning", "Modélisation Financière"
            ]
        },
        timeline: [
            {
                title: "Badge McKinsey.org Forward",
                organization: "McKinsey Academy",
                date: "Oct 2025 - Déc 2025",
                type: "certification"
            },
            {
                title: "Certificat DataCamp de Data Scientist Associate",
                organization: "DataCamp",
                date: "2023 - Présent",
                type: "certification"
            },
            {
                title: "Certificat Google d'Analyste des données",
                organization: "Coursera",
                date: "2023 - 2024",
                type: "certification"
            },
            {
                title: "Certificat Google sur les Fondamentaux du marketing numérique",
                organization: "Google Skillshop",
                date: "2023",
                type: "certification"
            },
            {
                title: "Licence Professionnelle Informatique",
                organization: "Institut Africain d’Informatique (IAI)",
                date: "2019 - 2022",
                location: "Lomé, Togo",
                type: "education"
            },
            {
                title: "Baccalauréat Scientifique",
                organization: "Institut Secondaire Notre Dame de l’Eglise - Vakpo",
                date: "2018 - 2019",
                location: "Lomé, Togo",
                type: "education"
            }
        ]
    }
};
