import {
    ArrowRight,
    BriefcaseBusiness,
    Dumbbell,
    Ellipsis,
    Flower2,
    GraduationCap,
    Handbag,
    HeartPulse,
    House,
    MessageCircle,
    Package,
    Scissors,
    Utensils,
    Wrench,
} from 'lucide-react';

import styles from './5BusinessSection.module.css';


/* =========================================================
   BUSINESS TYPES
========================================================= */

const businessTypes = [
    {
        title: 'Barbers & Salons',
        description:
            'Show your services, prices and let customers book easily.',
        icon: Scissors,
    },

    {
        title: 'Massage & Wellness',
        description:
            'Build trust, present your treatments and get more bookings.',
        icon: Flower2,
    },

    {
        title: 'Restaurants & Cafés',
        description:
            'Display your menu, location and attract more diners online.',
        icon: Utensils,
    },

    {
        title: 'Trades & Contractors',
        description:
            'Get more local enquiries for your services.',
        icon: House,
    },

    {
        title: 'Gyms & Fitness',
        description:
            'Show your classes, trainers and membership options.',
        icon: Dumbbell,
    },

    {
        title: 'Clinics & Healthcare',
        description:
            'Inform patients, share services and make booking simple.',
        icon: HeartPulse,
    },

    {
        title: 'Retail & Local Shops',
        description:
            'Showcase your products and bring more customers in-store.',
        icon: Handbag,
    },

    {
        title: 'Wholesalers & Suppliers',
        description:
            'Build credibility and generate new business enquiries.',
        icon: Package,
    },

    {
        title: 'Consultants & Freelancers',
        description:
            'Present your skills, portfolio and win more clients.',
        icon: BriefcaseBusiness,
    },

    {
        title: 'Education & Training',
        description:
            'Promote your courses and help more people get started.',
        icon: GraduationCap,
    },

    {
        title: 'Home Services',
        description:
            'From cleaning to gardening, get found by local customers.',
        icon: Wrench,
    },

    {
        title: 'And Many More',
        description:
            "If you don't see your industry listed, just get in touch — we can help.",
        icon: Ellipsis,
    },
];


const WHATSAPP_URL =
    "https://api.whatsapp.com/send/?phone=447405104696&text=Hi+Kashzo+Solutions%2C+I%27d+like+some+advice+about+a+website+for+my+business.&type=phone_number&app_absent=0";


/* =========================================================
   SECTION 5
========================================================= */

export function BusinessSection() {
    return (
        <section
            className={styles.section}
            id="business-types"
        >
            <div className={styles.shell}>


                {/* =========================================
                    INTRO
                ========================================= */}

                <div className={styles.intro}>

                    <p className={styles.eyebrow}>
                        Ideal For
                    </p>


                    <h2 className={styles.heading}>
                        Built for businesses like{' '}
                        <strong>
                            yours.
                        </strong>
                    </h2>


                    <p className={styles.description}>
                        We design websites for all types of UK small
                        businesses. Whatever your industry, we&apos;ll
                        help you get online and attract more customers.
                    </p>

                </div>


                {/* =========================================
                    BUSINESS GRID
                ========================================= */}

                <div className={styles.businessGrid}>

                    {businessTypes.map((business) => {

                        const Icon =
                            business.icon;

                        return (
                            <article
                                className={styles.businessCard}
                                key={business.title}
                            >

                                <div className={styles.iconCircle}>

                                    <Icon
                                        aria-hidden="true"
                                        strokeWidth={2}
                                    />

                                </div>


                                <div className={styles.cardContent}>

                                    <h3>
                                        {business.title}
                                    </h3>


                                    <p>
                                        {business.description}
                                    </p>

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

                        <MessageCircle
                            aria-hidden="true"
                            strokeWidth={1.9}
                        />

                    </div>


                    <div className={styles.ctaCopy}>

                        <strong>
                            Not sure if it&apos;s right for your business?
                        </strong>


                        <span>
                            Get in touch and we&apos;ll be happy to advise.
                        </span>

                    </div>


                    <a
                        href={WHATSAPP_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.ctaButton}
                    >
                        <span>
                            Get in Touch
                        </span>

                        <ArrowRight
                            aria-hidden="true"
                            strokeWidth={1.8}
                        />
                    </a>

                </div>


                {/* =========================================
                    NEXT SECTION SEPARATOR
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


export default BusinessSection;