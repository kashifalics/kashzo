import Link from 'next/link';

import {
    ArrowRight,
    Check,
    Zap,
} from 'lucide-react';

import styles from './2HeroSection.module.css';


const WHATSAPP_URL =
    "https://api.whatsapp.com/send/?phone=447405104696&text=Hi+Kashzo+Solutions%2C+I%27m+interested+in+your+website+services+and+would+like+to+discuss+my+project.&type=phone_number&app_absent=0";


const leftBusinesses = [
    'Barbers & Salons',
    'Massage & Wellness',
    'Restaurants & Cafés',
    'Retail & Local Shops',
    'Trades & Home Services',
];


const rightBusinesses = [
    'Gyms & Fitness',
    'Clinics & Healthcare',
    'Wholesalers & Distributors',
    'Sole Traders & Freelancers',
    'And Many More',
];


function WhatsAppIcon() {
    return (
        <svg
            viewBox="0 0 32 32"
            aria-hidden="true"
            className={styles.whatsappSvg}
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


export function HeroSection() {
    return (
        <section
            className={styles.hero}
            id="home"
        >
            <div className={styles.shell}>


                {/* =========================================
                    SECTION LABEL
                ========================================= */}

                <p className={styles.eyebrow}>
                    Websites for Small Businesses
                </p>


                {/* =========================================
                    MAIN HEADING
                ========================================= */}

                <h1 className={styles.heading}>

                    <span className={styles.headingLine}>
                        A Professional
                    </span>


                    <span className={styles.headingLine}>

                        <span className={styles.dark}>
                            Website{' '}
                        </span>

                        <span className={styles.blue}>
                            That Helps
                        </span>

                    </span>


                    <span
                        className={`${styles.headingLine} ${styles.blue}`}
                    >
                        Your Business Grow.
                    </span>

                </h1>


                {/* =========================================
                    DESCRIPTION
                ========================================= */}

                <p className={styles.description}>

                    <strong>
                        Kashzo
                    </strong>{' '}

                    builds clean, professional websites for small
                    businesses that want to look established,
                    attract more customers and make it easier for
                    people to get in touch.

                </p>


                {/* =========================================
                    BUSINESS TYPES
                ========================================= */}

                <div className={styles.businessArea}>

                    <p className={styles.businessTitle}>
                        Perfect for businesses like:
                    </p>


                    <div className={styles.businessColumns}>


                        <ul className={styles.businessColumn}>

                            {leftBusinesses.map((business) => (

                                <li
                                    className={styles.businessItem}
                                    key={business}
                                >
                                    <span className={styles.checkIcon}>

                                        <Check
                                            size={14}
                                            strokeWidth={3}
                                        />

                                    </span>

                                    <span>
                                        {business}
                                    </span>

                                </li>

                            ))}

                        </ul>


                        <ul className={styles.businessColumn}>

                            {rightBusinesses.map((business) => (

                                <li
                                    className={styles.businessItem}
                                    key={business}
                                >
                                    <span className={styles.checkIcon}>

                                        <Check
                                            size={14}
                                            strokeWidth={3}
                                        />

                                    </span>

                                    <span>
                                        {business}
                                    </span>

                                </li>

                            ))}

                        </ul>

                    </div>

                </div>


                {/* =========================================
                    PRICE / DELIVERY
                ========================================= */}

                <div className={styles.priceCard}>

                    <div className={styles.priceContent}>

                        <p className={styles.priceLabel}>
                            Website packages from
                        </p>


                        <div className={styles.priceNumbers}>

                            <strong>
                                £299
                            </strong>


                            <span
                                className={styles.priceDivider}
                                aria-hidden="true"
                            />


                            <span className={styles.oldPrice}>
                                £499
                            </span>

                        </div>

                    </div>


                    <div className={styles.deliveryBox}>

                        <Zap
                            size={30}
                            strokeWidth={2}
                            fill="currentColor"
                            aria-hidden="true"
                        />


                        <strong>
                            Full website
                            <br />
                            in two days
                        </strong>

                    </div>

                </div>


                {/* =========================================
                    CTA BUTTONS
                ========================================= */}

                <div className={styles.actions}>


                    <a
                        href={WHATSAPP_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.whatsappButton}
                        aria-label="Chat with Kashzo Solutions on WhatsApp"
                    >

                        <WhatsAppIcon />


                        <span>
                            Chat on WhatsApp
                        </span>


                        <ArrowRight
                            className={styles.whatsappArrow}
                            size={24}
                            strokeWidth={1.8}
                            aria-hidden="true"
                        />

                    </a>


                    <Link
                        href="#packages"
                        className={styles.packagesButton}
                    >
                        View Packages
                    </Link>

                </div>

            </div>
        </section>
    );
}