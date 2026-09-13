import Image from 'next/image';

import {
    ArrowUpRight,
    BriefcaseBusiness,
    HeartPulse,
    ShoppingBag,
    Sparkles,
} from 'lucide-react';

import styles from './6PortfolioSection.module.css';


/* =========================================================
   PORTFOLIO PROJECTS
========================================================= */

const projects = [
    {
        name: 'Saqinova',
        domain: 'saqinova.com',
        category: 'Health & Wellness',
        description:
            'A premium massage and wellness website focused on clear services, pricing, trust and easy appointment enquiries.',
        image: '/portfolio/saqinova.png',
        url: 'https://saqinova.com',
        icon: HeartPulse,
    },

    {
        name: 'Devnique',
        domain: 'devnique.com',
        category: 'Technology & AI',
        description:
            'A modern technology website presenting AI, digital transformation and software services with a bold visual identity.',
        image: '/portfolio/devnique.png',
        url: 'https://www.devnique.com',
        icon: Sparkles,
    },

    {
        name: 'TrendBox',
        domain: 'trendbox.uk',
        category: 'E-commerce',
        description:
            'A clean online shopping experience designed to showcase products clearly and make browsing simple.',
        image: '/portfolio/trendbox.png',
        url: 'https://www.trendbox.uk/shop?category=Beauty',
        icon: ShoppingBag,
    },

    {
        name: 'Valorin',
        domain: 'valorin.uk',
        category: 'Finance & Advisory',
        description:
            'A sophisticated corporate website for financial advisory services, built around credibility and executive positioning.',
        image: '/portfolio/valorin.png',
        url: 'https://www.valorin.uk',
        icon: BriefcaseBusiness,
    },
];


/* =========================================================
   SECTION 6
========================================================= */

export function PortfolioSection() {
    return (
        <section
            className={styles.section}
            id="portfolio"
        >
            <div className={styles.shell}>


                {/* =========================================
                    INTRO
                ========================================= */}

                <div className={styles.intro}>

                    <p className={styles.eyebrow}>
                        Our Work
                    </p>


                    <h2 className={styles.heading}>
                        A look at what we’ve built{' '}

                        <strong>
                            for businesses.
                        </strong>
                    </h2>


                    <p className={styles.description}>
                        A selection of websites designed for different
                        industries, each built to present the business clearly,
                        build trust and make it easier for customers to take action.
                    </p>

                </div>


                {/* =========================================
                    PROJECT GRID
                ========================================= */}

                <div className={styles.projectGrid}>

                    {projects.map((project) => {

                        const Icon = project.icon;

                        return (
                            <article
                                className={styles.projectCard}
                                key={project.name}
                            >


                                {/* =================================
                                    BROWSER PREVIEW
                                ================================= */}

                                <div className={styles.browser}>

                                    <div className={styles.browserBar}>

                                        <div
                                            className={styles.browserDots}
                                            aria-hidden="true"
                                        >
                                            <span />
                                            <span />
                                            <span />
                                        </div>


                                        <div className={styles.addressBar}>
                                            <span>
                                                {project.domain}
                                            </span>
                                        </div>


                                        <span
                                            className={styles.browserAction}
                                            aria-hidden="true"
                                        >
                                            ↗
                                        </span>

                                    </div>


                                    <div className={styles.preview}>

                                        <Image
                                            src={project.image}
                                            alt={`${project.name} website preview`}
                                            fill
                                            sizes="
                                                (max-width: 699px) 100vw,
                                                (max-width: 999px) 50vw,
                                                50vw
                                            "
                                            className={styles.previewImage}
                                        />

                                    </div>

                                </div>


                                {/* =================================
                                    PROJECT INFO
                                ================================= */}

                                <div className={styles.projectInfo}>

                                    <div className={styles.projectCopy}>

                                        <h3>
                                            {project.name}
                                        </h3>


                                        <div className={styles.projectMeta}>

                                            <span className={styles.metaIcon}>

                                                <Icon
                                                    aria-hidden="true"
                                                    strokeWidth={1.9}
                                                />

                                            </span>


                                            <span>
                                                {project.category}
                                            </span>

                                        </div>


                                        <p>
                                            {project.description}
                                        </p>

                                    </div>


                                    <a
                                        href={project.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={styles.viewButton}
                                        aria-label={`View ${project.name} website`}
                                    >
                                        <span>
                                            View Website
                                        </span>

                                        <ArrowUpRight
                                            aria-hidden="true"
                                            strokeWidth={1.8}
                                        />

                                    </a>

                                </div>

                            </article>
                        );
                    })}

                </div>


                {/* =========================================
                    BOTTOM CTA
                ========================================= */}

                <div className={styles.ctaBox}>

                    <div className={styles.ctaIcon}>
                        <Sparkles
                            aria-hidden="true"
                            strokeWidth={1.8}
                        />
                    </div>


                    <div className={styles.ctaCopy}>

                        <strong>
                            Like what you see?
                        </strong>

                        <span>
                            Let&apos;s create a website that works for your business.
                        </span>

                    </div>


                    <a
                        href="https://api.whatsapp.com/send/?phone=447405104696&text=Hi+Kashzo+Solutions%2C+I%27d+like+to+discuss+a+website+for+my+business.&type=phone_number&app_absent=0"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.ctaButton}
                    >
                        <span>
                            Get a Free Quote
                        </span>

                        <ArrowUpRight
                            aria-hidden="true"
                            strokeWidth={1.8}
                        />
                    </a>

                </div>


                {/* =========================================
                    NEXT SECTION DIVIDER
                ========================================= */}

                <div
                    className={`section-divider ${styles.bottomDivider}`}
                    aria-hidden="true"
                >
                    <span />
                </div>

            </div>
        </section>
    );
}


export default PortfolioSection;