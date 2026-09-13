import Image from 'next/image';

import {
    ArrowRight,
    Bot,
    MessageCircle,
    Monitor,
    Users,
} from 'lucide-react';

import styles from './10FounderSection.module.css';


/* =========================================================
   WHATSAPP
========================================================= */

const WHATSAPP_URL =
    "https://api.whatsapp.com/send/?phone=447405104696&text=Hi+Kashzo+Solutions%2C+I%27d+like+to+discuss+a+project+for+my+business.&type=phone_number&app_absent=0";


/* =========================================================
   HIGHLIGHTS
========================================================= */

const highlights = [
    {
        title: 'Website Development',
        description:
            'Modern, high-performing websites for businesses.',
        icon: Monitor,
    },

    {
        title: 'AI & Automation',
        description:
            'Chatbots, voice agents and smart automation.',
        icon: Bot,
    },

    {
        title: 'Clear Communication',
        description:
            'Simple, honest and transparent process.',
        icon: MessageCircle,
    },

    {
        title: 'Small-Business Focus',
        description:
            'Practical solutions for real business growth.',
        icon: Users,
    },
];


/* =========================================================
   SECTION 10
========================================================= */

export function FounderSection() {
    return (
        <section
            className={styles.section}
            id="founder"
        >
            <div className={styles.shell}>


                {/* =========================================
                    MAIN GRID
                ========================================= */}

                <div className={styles.mainGrid}>


                    {/* =====================================
                        FOUNDER IMAGE
                    ===================================== */}

                    <div className={styles.imageColumn}>

                        <div className={styles.imageCard}>

                            <Image
                                src="/founder/kashif-founder.png"
                                alt="Kashif, founder and developer at Kashzo"
                                fill
                                sizes="
                                    (max-width: 699px) 76vw,
                                    (max-width: 999px) 480px,
                                    460px
                                "
                                priority={false}
                                className={styles.founderImage}
                            />


                            {/* PHOTO LABEL */}

                            <div className={styles.imageLabel}>

                                <span
                                    className={styles.statusDot}
                                    aria-hidden="true"
                                />

                                <div>
                                    <strong>
                                        Kashif
                                    </strong>

                                    <span>
                                        Founder &amp; Developer
                                    </span>
                                </div>

                            </div>

                        </div>

                    </div>


                    {/* =====================================
                        CONTENT
                    ===================================== */}

                    <div className={styles.contentColumn}>


                        {/* EYEBROW */}

                        <p className={styles.eyebrow}>
                            Meet the Founder
                        </p>


                        {/* HEADING */}

                        <h2 className={styles.heading}>
                            Hi, I&apos;m Kashif —{' '}

                            <strong>
                                founder of Kashzo.
                            </strong>
                        </h2>


                        {/* FIRST PARAGRAPH */}

                        <p className={styles.description}>
                            I&apos;m a developer specialising in modern
                            websites, AI-powered solutions and business
                            automation. I created Kashzo to help businesses
                            use technology in a way that is practical,
                            reliable and genuinely useful.
                        </p>


                        {/* SECOND PARAGRAPH */}

                        <p className={styles.description}>
                            From websites and e-commerce to chatbots,
                            AI voice agents and automation, I focus on
                            understanding what a business actually needs
                            and building a solution around it. I believe
                            good technology should make things simpler,
                            not more complicated.
                        </p>


                        {/* =================================
                            HIGHLIGHTS
                        ================================= */}

                        <div className={styles.highlightGrid}>

                            {highlights.map((item) => {

                                const Icon = item.icon;

                                return (
                                    <article
                                        className={styles.highlightCard}
                                        key={item.title}
                                    >

                                        <div className={styles.iconCircle}>

                                            <Icon
                                                aria-hidden="true"
                                                strokeWidth={1.9}
                                            />

                                        </div>


                                        <div className={styles.highlightText}>

                                            <h3>
                                                {item.title}
                                            </h3>

                                            <p>
                                                {item.description}
                                            </p>

                                        </div>

                                    </article>
                                );
                            })}

                        </div>


                        {/* =================================
                            CTA
                        ================================= */}

                        <div className={styles.ctaArea}>

                            <a
                                href={WHATSAPP_URL}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={styles.ctaButton}
                            >
                                <span>
                                    Discuss Your Project
                                </span>

                                <ArrowRight
                                    aria-hidden="true"
                                    strokeWidth={1.8}
                                />
                            </a>


                            <p className={styles.ctaNote}>
                                Tell us what you need and let&apos;s build
                                the right solution together.
                            </p>

                        </div>


                        {/* =================================
                            DECORATIVE MESSAGE
                        ================================= */}

                        <div
                            className={styles.sideMessage}
                            aria-hidden="true"
                        >
                            <span>
                                Technology
                            </span>

                            <span>
                                for a brighter
                            </span>

                            <span>
                                tomorrow
                            </span>
                        </div>

                    </div>

                </div>


                {/* =========================================
                    SEPARATOR FOR SECTION 11
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


export default FounderSection;