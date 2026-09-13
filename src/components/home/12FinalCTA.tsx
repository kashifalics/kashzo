import {
    ArrowRight,
    BarChart3,
    PoundSterling,
    Users,
} from 'lucide-react';

import styles from './12FinalCTA.module.css';


/* =========================================================
   WHATSAPP
========================================================= */

const WHATSAPP_URL =
    "https://api.whatsapp.com/send/?phone=447405104696&text=Hi+Kashzo+Solutions%2C+I%27d+like+to+discuss+a+project+for+my+business.&type=phone_number&app_absent=0";


/* =========================================================
   WHATSAPP ICON
========================================================= */

function WhatsAppIcon() {
    return (
        <svg
            viewBox="0 0 32 32"
            aria-hidden="true"
            className={styles.whatsappIcon}
        >
            <path
                d="M16 3.5C9.1 3.5 3.5 8.8 3.5 15.4c0 2.3.7 4.5 2 6.4L4 27.5l6-1.5a13 13 0 0 0 6 1.5c6.9 0 12.5-5.3 12.5-12.1S22.9 3.5 16 3.5Z"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinejoin="round"
            />

            <path
                d="M12.2 10.4c.4-.8.8-.8 1.2-.8h.5c.3 0 .6.1.8.6l1 2.2c.2.5.1.8-.2 1.2l-.8 1c-.3.3-.2.6 0 .9 1 1.7 2.4 3 4.2 3.9.4.2.7.2 1-.1l1.2-1.4c.3-.4.7-.4 1.1-.2l2.1 1c.5.2.7.5.7.8 0 .4-.2 1.8-1.1 2.6-.9.8-2 1.2-3.3 1.2-1.3 0-3.9-.5-6.7-2.9-2.3-2-3.8-4.4-4.2-5.1-.4-.7-1.7-2.9-.1-5Z"
                fill="currentColor"
            />
        </svg>
    );
}


/* =========================================================
   TRUST POINTS
========================================================= */

const trustPoints = [
    {
        title: 'Clear Pricing',
        description: 'No hidden fees.',
        icon: PoundSterling,
    },

    {
        title: 'Friendly Support',
        description: 'Here when you need us.',
        icon: Users,
    },

    {
        title: 'Built Around Your Business',
        description: 'Solutions that make sense.',
        icon: BarChart3,
    },
];


/* =========================================================
   SECTION 12
========================================================= */

export function FinalCTA() {
    return (
        <section
            className={styles.section}
            id="contact"
        >
            <div className={styles.shell}>


                {/* =========================================
                    CTA PANEL
                ========================================= */}

                <div className={styles.ctaPanel}>


                    {/* EYEBROW */}

                    <p className={styles.eyebrow}>
                        Ready When You Are
                    </p>


                    {/* HEADING */}

                    <h2 className={styles.heading}>
                        Ready to build something better for{' '}

                        <strong>
                            your business?
                        </strong>
                    </h2>


                    {/* DESCRIPTION */}

                    <p className={styles.description}>
                        Whether you need a new website, an online shop,
                        AI automation, a chatbot or a voice agent,
                        tell us what you have in mind and we&apos;ll
                        help you choose the right solution.
                    </p>


                    {/* =====================================
                        MAIN CTA
                    ===================================== */}

                    <a
                        href={WHATSAPP_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.ctaButton}
                    >
                        <WhatsAppIcon />

                        <span>
                            Chat About Your Project
                        </span>

                        <ArrowRight
                            className={styles.ctaArrow}
                            aria-hidden="true"
                            strokeWidth={1.8}
                        />
                    </a>


                    {/* NOTE */}

                    <p className={styles.ctaNote}>
                        No obligation. Just a friendly conversation
                        about what your business needs.
                    </p>


                    {/* =====================================
                        TRUST POINTS
                    ===================================== */}

                    <div className={styles.trustGrid}>

                        {trustPoints.map((item) => {

                            const Icon = item.icon;

                            return (
                                <div
                                    className={styles.trustItem}
                                    key={item.title}
                                >

                                    <div className={styles.trustIcon}>
                                        <Icon
                                            aria-hidden="true"
                                            strokeWidth={1.8}
                                        />
                                    </div>


                                    <div className={styles.trustCopy}>

                                        <strong>
                                            {item.title}
                                        </strong>

                                        <span>
                                            {item.description}
                                        </span>

                                    </div>

                                </div>
                            );
                        })}

                    </div>


                    {/* =====================================
                        DECORATIVE MESSAGE
                    ===================================== */}

                    <div
                        className={styles.sideMessage}
                        aria-hidden="true"
                    >
                        <span>Your Ideas</span>
                        <span>Our Tech</span>
                        <span>Real Growth</span>
                    </div>

                </div>


                {/* =========================================
                    CLOSING BRAND
                ========================================= */}

                <div className={styles.brandClosing}>

                    <div className={styles.brandName}>
                        Kashzo<span>.</span>
                    </div>

                    <div className={styles.brandSub}>
                        Solutions
                    </div>


                    <div className={styles.brandLine}>

                        <span className={styles.line} />

                        <p>
                            Websites
                            <i>•</i>
                            AI
                            <i>•</i>
                            Automation
                            <i>•</i>
                            Real Results
                        </p>

                        <span className={styles.line} />

                    </div>

                </div>

            </div>
        </section>
    );
}


export default FinalCTA;