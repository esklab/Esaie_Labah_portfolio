export type Language = 'en' | 'fr';

export const translations = {
    en: {
        nav: {
            switchToFormat: "FR"
        },
        hero: {
            badge: "ERP Systems Engineer",
            title: "Odoo ERP Modules &",
            titleGradient: "Business Domains Expertise",
            subtitle: "Specializing in architecting, customizing, and integrating complex business processes within the Odoo ecosystem. My approach goes beyond standard configuration to focus on deep technical customization, cross-module interoperability, and scalable enterprise architectures."
        },
        sections: {
            businessUnderstanding: "Business Understanding",
            technicalCustomization: "Technical Customization",
            crossModuleIntegration: "Cross-Module Integration",
            automation: "Automation",
            education: "Education &",
            certifications: "Certifications",
            educationSubtitle: "A continuous journey of learning and professional development."
        },
        domains: [
            {
                title: "Sales & Customer Management",
                coreModules: "Sales, CRM, Invoicing",
                understanding: "Deep technical grasp of the quote-to-cash lifecycle, managing pipeline velocity from initial lead acquisition to final revenue realization.",
                customization: "Extended core sales models (sale.order, crm.lead) to support dynamic product configurators, custom pricing structures, and multi-tier discount approval matrices.",
                integration: "Architected seamless data transitions from CRM pipelines into declarative sales orders and automated draft invoice generation.",
                automation: "Deployed automated pipeline follow-ups, triggered activity scheduling for sales representatives, and developed advanced QWeb reporting for real-time sales KPI tracking."
            },
            {
                title: "Procurement & Inventory",
                coreModules: "Purchase, Inventory, Stock Operations",
                understanding: "Expert in supply chain logistics, warehouse operations, and inventory valuation methodologies.",
                customization: "Re-engineered stock routing behaviors, customizing multi-step delivery routes (e.g., pick-pack-ship), cross-docking operations, and advanced push/pull rules (stock.rule).",
                integration: "Tightly synchronized procurement operations with dynamic inventory levels, linking sales demand natively to automated purchase workflows.",
                automation: "Engineered real-time automated reordering logic, Make-to-Order (MTO) triggers, and automated batch/serial tracking integrations to eliminate manual stock discrepancies."
            },
            {
                title: "Accounting & Finance",
                coreModules: "Accounting, Invoicing",
                understanding: "Comprehensive knowledge of financial workflows, ledger management, GAAP principles, and regional fiscal localization.",
                customization: "Interacted deeply with core financial models (account.move, account.payment) to implement custom payment gateways, localized tax compliance engines, and specialized financial reporting.",
                integration: "Bridged the gap between operational modules (Sales/Purchase/Inventory) and financial ledgers, ensuring stock valuation and operational transactions automatically reflect in journal entries.",
                automation: "Automated comprehensive dunning processes, scheduled reconciliation models, and complex deferred revenue logic, significantly reducing manual accounting overhead."
            },
            {
                title: "Human Resources",
                coreModules: "Employees, Contracts, Leaves, Custom Bonus",
                understanding: "Strategic handling of human capital workflows, from employee lifecycle management to complex remuneration structures.",
                customization: "Built a highly dynamic, rule-based custom bonus and primes module from scratch. Engineered specialized payroll logic to accommodate complex organizational hierarchies and regional labor laws.",
                integration: "Synchronized leave management (hr.leave) natively with project resource allocation and timesheets to dynamically prevent task assignment conflicts.",
                automation: "Enforced rigid, automated approval workflows for contract modifications, leave requests, and dynamic payroll adjustments."
            },
            {
                title: "Point of Sale (POS)",
                coreModules: "Point of Sale, Inventory, Sales",
                understanding: "Omnichannel retail and frontline service operations requiring high-performance, resilient user interfaces.",
                customization: "Overhauled the POS frontend (JavaScript/Owl) and backend logic to support atypical retail operations, including complex resource bookings and custom order line behavior.",
                integration: "Architected strict POS-to-Booking integration, allowing frontline staff to allocate backend resources and schedule services directly from the cash register.",
                automation: "Ensured real-time, bidirectional data synchronization between offline-capable POS sessions and backend inventory/accounting networks."
            },
            {
                title: "Education & Training",
                coreModules: "eLearning, Custom Training, Skills, Exams",
                understanding: "End-to-end management of the academic and professional training lifecycle, competency tracking, and evaluation.",
                customization: "Engineered a bespoke educational environment featuring complex relational models tying together courses, certifications, examinations, and student profiles.",
                integration: "Interfaced custom skill management matrices with standard HR employee profiles and linked premium training enrollments natively to the Invoicing and Sales modules.",
                automation: "Automated the full academic lifecycle—course enrollment validation, automated quiz grading, dynamic skill-level elevation, and triggered certificate generation upon exam passage."
            },
            {
                title: "Laboratory & API Integration",
                coreModules: "Laboratory Management, REST API",
                understanding: "Clinical and operational workflows for high-volume external laboratory testing and data ingestion.",
                customization: "Developed secure, robust custom laboratory management modules capable of processing external medical data.",
                integration: "Designed secure RESTful API endpoints and scheduled JSON data exchange layers to seamlessly connect internal Odoo systems with external third-party laboratory software.",
                automation: "Automated the ingestion and parsing of external API payloads, instantly triggering subsequent Odoo workflows, patient notifications, and billing procedures based on remote results."
            },
            {
                title: "Calendar & Automation",
                coreModules: "Calendar, Base Automation, Cron",
                understanding: "Enterprise-wide time management and systemic operational efficiency.",
                customization: "Mastered Odoo's internal automation engines (base.automation, ir.cron) to design custom systemic behaviors at the database level.",
                integration: "Deeply embedded calendar hooks into custom operational models, ensuring all system-generated events, project deadlines, and training schedules reliably reflect on unified company calendars.",
                automation: "Deployed highly optimized Cron jobs for daily operational audits and configured automated action rules to trigger complex logic chains, state transitions, and asynchronous notifications."
            },
            {
                title: "Multi-Company Architecture",
                coreModules: "Base (Companies, Users, Security Rules)",
                understanding: "Conglomerate and subsidiary management requiring distinct operational autonomy alongside centralized executive oversight.",
                customization: "Designed complex multi-company environments (res.company), structuring globally shared catalogs alongside strictly compartmentalized financial ledgers.",
                integration: "Orchestrated automated inter-company transactions (e.g., a Sales Order in Subsidiary A automatically generates a synchronized Purchase Order in Subsidiary B).",
                automation: "Rigorously scripted and deployed dynamic environment rules (ir.rule) and deeply nested access rights, guaranteeing absolute data isolation and continuous security enforcement."
            }
        ],
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
            switchToFormat: "EN"
        },
        hero: {
            badge: "Ingénieur Systèmes ERP",
            title: "Expertise des Modules &",
            titleGradient: "Domaines Métiers Odoo",
            subtitle: "Spécialisé dans l'architecture, la personnalisation et l'intégration de processus métier complexes dans l'écosystème Odoo. Mon approche va au-delà de la configuration standard pour se concentrer sur une personnalisation technique approfondie, l'interopérabilité entre les modules et la construction d'architectures d'entreprise évolutives."
        },
        sections: {
            businessUnderstanding: "Compréhension Métier",
            technicalCustomization: "Personnalisation Technique",
            crossModuleIntegration: "Intégration Inter-Modules",
            automation: "Automatisation",
            education: "Formations &",
            certifications: "Certifications",
            educationSubtitle: "Un parcours continu d'apprentissage et de développement professionnel."
        },
        domains: [
            {
                title: "Ventes & Gestion Client",
                coreModules: "Ventes, CRM, Facturation",
                understanding: "Excellente maîtrise technique du cycle de vie \"Quote-to-Cash\", gérant la vélocité du pipeline depuis l'acquisition initiale du lead jusqu'à la réalisation finale du revenu.",
                customization: "Extension des modèles de vente de base (sale.order, crm.lead) pour supporter des configurateurs de produits dynamiques, des structures de prix sur-mesure et des matrices d'approbation de remises à plusieurs niveaux.",
                integration: "Architecture de transitions de données fluides depuis les pipelines CRM vers les commandes de vente déclaratives et génération automatisée des brouillons de facture.",
                automation: "Déploiement de suivis de pipeline automatisés, planification déclenchée d'activités pour les commerciaux, et développement de rapports QWeb avancés pour le suivi en temps réel des KPI de vente."
            },
            {
                title: "Achats & Inventaire",
                coreModules: "Achats, Inventaire, Opérations de Stock",
                understanding: "Expert en logistique de la chaîne d'approvisionnement, opérations d'entrepôt et méthodologies d'évaluation des stocks.",
                customization: "Refonte des comportements de routage des stocks, personnalisation des itinéraires de livraison à plusieurs étapes (ex: pick-pack-ship), opérations de cross-docking, et règles avancées de flux poussés/tirés (stock.rule).",
                integration: "Synchronisation étroite des opérations d'achat avec les niveaux d'inventaire dynamiques, liant nativement la demande commerciale aux flux d'achats automatisés.",
                automation: "Ingénierie de logiques de réapprovisionnement automatisées en temps réel, déclencheurs de fabrication sur commande (MTO) et intégrations de suivi de lots/séries pour éliminer les écarts de stock manuels."
            },
            {
                title: "Comptabilité & Finance",
                coreModules: "Comptabilité, Facturation",
                understanding: "Connaissance approfondie des flux financiers, de la gestion du grand livre, des principes comptables (GAAP) et de la localisation fiscale régionale.",
                customization: "Interaction profonde avec les modèles financiers de base (account.move, account.payment) pour implémenter des passerelles de paiement personnalisées, des moteurs de conformité fiscale localisés et des rapports financiers spécialisés.",
                integration: "Comblement du fossé entre les modules opérationnels (Ventes/Achats/Inventaire) et les registres financiers, assurant que la valorisation des stocks et les transactions opérationnelles se reflètent automatiquement dans les écritures de journal.",
                automation: "Automatisation des processus complexes de relance, modèles de réconciliation programmés et logiques avancées de revenus différés, réduisant considérablement la charge comptable manuelle."
            },
            {
                title: "Ressources Humaines",
                coreModules: "Employés, Contrats, Congés, Primes Personnalisées",
                understanding: "Gestion stratégique des flux de capital humain, du cycle de vie de l'employé aux structures de rémunération complexes.",
                customization: "Construction de A à Z d'un module de primes et bonus sur-mesure basé sur des règles dynamiques. Ingénierie d'une logique de paie spécialisée pour s'adapter aux hiérarchies organisationnelles complexes et au droit du travail régional.",
                integration: "Synchronisation de la gestion des congés (hr.leave) nativement avec l'allocation des ressources de projet et les feuilles de temps pour prévenir dynamiquement les conflits d'assignation de tâches.",
                automation: "Application de flux d'approbation automatisés stricts pour les modifications de contrats, les demandes de congés et les ajustements dynamiques de la paie."
            },
            {
                title: "Point de Vente (POS)",
                coreModules: "Point de Vente, Inventaire, Ventes",
                understanding: "Opérations de vente au détail omnicanales et de service en première ligne nécessitant des interfaces utilisateur de haute performance et résilientes.",
                customization: "Refonte de l'interface POS (JavaScript/Owl) et de la logique backend pour supporter des opérations de vente atypiques, incluant des réservations de ressources complexes et des comportements personnalisés de lignes de commande.",
                integration: "Architecture d'une intégration stricte POS-to-Booking, permettant au personnel de première ligne d'allouer des ressources backend et de planifier des services directement depuis la caisse.",
                automation: "Garantie d'une synchronisation bidirectionnelle des données en temps réel entre les sessions POS (capables de fonctionner hors-ligne) et les réseaux d'inventaire/comptables en backend."
            },
            {
                title: "Éducation & Formation",
                coreModules: "eLearning, Formations Personnalisées, Compétences, Examens",
                understanding: "Gestion de bout en bout du cycle de vie de la formation académique et professionnelle, suivi des compétences et évaluation.",
                customization: "Développement d'un environnement éducatif sur-mesure présentant des modèles relationnels complexes reliant les cours, certifications, examens et profils étudiants.",
                integration: "Interfaçage des matrices de gestion des compétences avec les profils standard des employés RH et liaison native des inscriptions aux formations payantes avec les modules Facturation et Ventes.",
                automation: "Automatisation du cycle de vie académique complet : validation d'inscription aux cours, correction automatisée des quiz, élévation dynamique du niveau de compétence et génération déclenchée de certificats après réussite de l'examen."
            },
            {
                title: "Laboratoire & Intégration API",
                coreModules: "Gestion de Laboratoire, API REST",
                understanding: "Flux de travail cliniques et opérationnels pour l'ingestion de données et les tests de laboratoires externes à haut volume.",
                customization: "Développement de modules de gestion de laboratoire robustes et sécurisés, capables de traiter des données médicales externes.",
                integration: "Conception de points de terminaison API REST sécurisés et de couches d'échange de données JSON programmées pour connecter de manière transparente les systèmes Odoo internes à des logiciels de laboratoire tiers.",
                automation: "Automatisation de l'ingestion et de l'analyse des charges utiles d'API externes, déclenchant instantanément les flux Odoo subséquents, les notifications aux patients et les procédures de facturation en fonction des résultats distants."
            },
            {
                title: "Calendrier & Automatisation",
                coreModules: "Calendrier, Base Automation, Cron",
                understanding: "Gestion du temps à l'échelle de l'entreprise et efficacité opérationnelle systémique.",
                customization: "Maîtrise des moteurs d'automatisation internes d'Odoo (base.automation, ir.cron) pour concevoir des comportements systémiques sur-mesure au niveau de la base de données.",
                integration: "Intégration profonde des hooks de calendrier dans les modèles opérationnels personnalisés, assurant que tous les événements générés par le système, les échéances de projet et les plannings de formation se reflètent de manière fiable sur les calendriers unifiés de l'entreprise.",
                automation: "Déploiement de tâches Cron hautement optimisées pour des audits opérationnels quotidiens et configuration de règles d'actions automatisées pour déclencher des chaînes logiques complexes, des transitions d'état et des notifications asynchrones."
            },
            {
                title: "Architecture Multi-Sociétés",
                coreModules: "Base (Sociétés, Utilisateurs, Règles de Sécurité)",
                understanding: "Gestion de conglomérats et de filiales nécessitant une autonomie opérationnelle distincte aux côtés d'une supervision exécutive centralisée.",
                customization: "Conception d'environnements multi-sociétés complexes (res.company), structurant des catalogues partagés globalement aux côtés de grands livres financiers strictement compartimentés.",
                integration: "Orchestration de transactions inter-sociétés automatisées (ex: une Commande de Vente dans la Filiale A génère automatiquement un Bon de Commande synchronisé dans la Filiale B).",
                automation: "Scriptage rigoureux et déploiement de règles d'environnement dynamiques (ir.rule) et de droits d'accès profondément imbriqués, garantissant une isolation absolue des données et une application continue de la sécurité sur tous les flux opérationnels."
            }
        ],
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
