import {
    ArrowRight,
    Bot,
    CalendarDays,
    Mic,
    Monitor,
    Paintbrush,
    Search,
    Settings,
    ShoppingCart,
} from 'lucide-react';

import styles from './9ServicesSection.module.css';


/* =========================================================
   WHATSAPP
========================================================= */

const WHATSAPP_URL =
    "https://api.whatsapp.com/send/?phone=447405104696&text=Hi+Kashzo+Solutions%2C+I%27d+like+to+discuss+a+digital+project+for+my+business.&type=phone_number&app_absent=0";


/* =========================================================
   SERVICES
========================================================= */

const services = [
    {
        title: 'Business Websites',

        description:
            'Clean, modern websites designed around your business and customers.',

        icon: Monitor,
    },

    {
        title: 'Website Redesign',

        description:
            'Refresh an outdated website with a cleaner, faster and more modern experience.',

        icon: Paintbrush,
    },

    {
        title: 'SEO & Local Visibility',

        description:
            'Improve your search presence and help more local customers find your business.',

        icon: Search,
    },

    {
        title: 'Booking & Enquiry Systems',

        description:
            'Add appointments, enquiry forms, WhatsApp and easier ways for customers to contact you.',

        icon: CalendarDays,
    },

    {
        title: 'E-commerce Websites',

        description:
            'Sell products or services online with a simple, trusted shopping experience.',

        icon: ShoppingCart,
    },

    {
        title: 'AI Chatbots',

        description:
            'Add intelligent website chatbots that can answer questions, handle enquiries and support customers 24/7.',

        icon: Bot,
    },

    {
        title: 'AI Voice Agents & Automation',

        description:
            'Custom AI agents that can answer calls, speak with customers, collect information and automate repetitive tasks.',

        icon: Mic,
    },

    {
        title: 'Ongoing Website & AI Support',

        description:
            'Updates, improvements and technical support as your website and AI systems grow.',

        icon: Settings,
    },
];


/* =========================================================
   SECTION 9
========================================================= */

export function ServicesSection() {
    return (
        <section
            className={styles.section}
            id="services"
        >
            <div className={styles.shell}>


                {/* =========================================
                    INTRO
                ========================================= */}

                <div className={styles.intro}>

                    <p className={styles.eyebrow}>
                        Services
                    </p>


                    <h2 className={styles.heading}>
                        Digital solutions built to{' '}

                        <strong>
                            help your business grow.
                        </strong>
                    </h2>


                    <p className={styles.description}>
                        From websites and online shops to AI chatbots,
                        voice agents and automation, Kashzo helps businesses
                        build smarter digital systems.
                    </p>

                </div>


                {/* =========================================
                    SERVICES GRID
                ========================================= */}

                <div className={styles.servicesGrid}>

                    {services.map((service) => {

                        const Icon = service.icon;

                        return (
                            <article
                                className={styles.serviceCard}
                                key={service.title}
                            >

                                <div className={styles.iconCircle}>

                                    <Icon
                                        aria-hidden="true"
                                        strokeWidth={1.9}
                                    />

                                </div>


                                <h3>
                                    {service.title}
                                </h3>


                                <p>
                                    {service.description}
                                </p>

                            </article>
                        );
                    })}

                </div>


                {/* =========================================
                    CTA
                ========================================= */}

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
                        Tell us what you need and we&apos;ll suggest the right solution.
                    </p>

                </div>


                {/* =========================================
                    SEPARATOR FOR SECTION 10
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


export default ServicesSection;