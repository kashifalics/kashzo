'use client';

import { useState } from 'react';
import type { TouchEvent } from 'react';

import {
    ArrowRight,
    Check,
    MessageCircle,
} from 'lucide-react';

import styles from './4PricingSection.module.css';


/* =========================================================
   WHATSAPP
========================================================= */

const WHATSAPP_NUMBER = '447405104696';


/* =========================================================
   PACKAGE DATA
========================================================= */

const packages = [
    {
        name: 'Starter',

        description:
            'Ideal for sole traders and smaller local businesses.',

        price: '£299',

        oldPrice: '£499',

        buttonText:
            'Get Starter Quote',

        features: [
            'Responsive, modern design',
            'Mobile friendly (works on all devices)',
            'Contact form',
            'Basic SEO setup',
            'WhatsApp button',
            '7 days support after launch',
        ],

        message:
            "Hi Kashzo Solutions, I'm interested in your Starter website package (£299) and would like to discuss my project.",
    },

    {
        name: 'Business',

        description:
            'Great for growing local businesses that want more from their website.',

        price: '£449',

        oldPrice: '£749',

        popular: true,

        buttonText:
            'Get Business Quote',

        features: [
            'Up to 5 pages',
            'Everything in Starter',
            'Enquiry form with notifications',
            'Google Business Profile setup',
            'Local SEO optimisation',
            'Improved customer journey',
            '14 days support after launch',
        ],

        message:
            "Hi Kashzo Solutions, I'm interested in your Business website package (£449) and would like to discuss my project.",
    },

    {
        name: 'Premium',

        description:
            'For ambitious businesses that want a more powerful online presence.',

        price: '£599',

        oldPrice: '£999',

        buttonText:
            'Get Premium Quote',

        features: [
            'Up to 8 pages',
            'Everything in Business',
            'Blog / content setup',
            'Booking integration (appointments)',
            'Enhanced SEO setup',
            'Advanced CTA sections',
            '30 days support after launch',
        ],

        message:
            "Hi Kashzo Solutions, I'm interested in your Premium website package (£599) and would like to discuss my project.",
    },
];


/* =========================================================
   WHATSAPP LINK
========================================================= */

function getWhatsAppLink(message: string) {
    return (
        `https://api.whatsapp.com/send/?phone=${WHATSAPP_NUMBER}` +
        `&text=${encodeURIComponent(message)}` +
        `&type=phone_number&app_absent=0`
    );
}


/* =========================================================
   PRICING SECTION
========================================================= */

function PricingSection() {

    const [activePackage, setActivePackage] =
        useState<number | null>(null);


    const customQuoteMessage =
        "Hi Kashzo Solutions, I need something more advanced than your standard website packages and would like to discuss a custom project.";


    /* =====================================================
       TOUCH TRACKING
    ===================================================== */

    const handleTouchMove = (
        event: TouchEvent<HTMLDivElement>
    ) => {

        const touch =
            event.touches.item(0);


        if (!touch) {
            return;
        }


        const elementUnderFinger =
            document.elementFromPoint(
                touch.clientX,
                touch.clientY
            );


        if (!elementUnderFinger) {
            return;
        }


        const packageCard =
            elementUnderFinger.closest(
                '[data-package-index]'
            ) as HTMLElement | null;


        if (!packageCard) {
            return;
        }


        const packageIndex =
            Number(
                packageCard.dataset.packageIndex
            );


        if (Number.isNaN(packageIndex)) {
            return;
        }


        if (packageIndex !== activePackage) {
            setActivePackage(packageIndex);
        }
    };


    return (
        <section
            className={styles.section}
            id="packages"
        >
            <div className={styles.shell}>


                {/* =========================================
                    INTRO
                ========================================= */}

                <div className={styles.intro}>

                    <p className={styles.eyebrow}>
                        Website Packages
                    </p>


                    <h2 className={styles.heading}>
                        Choose the Right Website

                        <span>
                            Package.
                        </span>
                    </h2>


                    <p className={styles.introCopy}>
                        High-quality, modern websites for UK businesses.

                        <br className={styles.desktopBreak} />

                        Simple pricing, no hidden costs.
                    </p>

                </div>


                {/* =========================================
                    PACKAGE CARDS
                ========================================= */}

                <div
                    className={styles.packageList}
                    onTouchMove={handleTouchMove}
                >

                    {packages.map(
                        (item, index) => {

                            const isActive =
                                activePackage === index;


                            return (
                                <article
                                    key={item.name}

                                    data-package-index={index}

                                    className={
                                        [
                                            styles.packageCard,

                                            isActive
                                                ? styles.activeCard
                                                : '',
                                        ]
                                            .filter(Boolean)
                                            .join(' ')
                                    }

                                    onTouchStart={() =>
                                        setActivePackage(index)
                                    }

                                    onMouseEnter={() =>
                                        setActivePackage(index)
                                    }

                                    onMouseLeave={() =>
                                        setActivePackage(null)
                                    }

                                    onFocusCapture={() =>
                                        setActivePackage(index)
                                    }
                                >


                                    {/* =============================
                                        CARD TOP
                                    ============================= */}

                                    <div className={styles.cardTop}>


                                        {/* PACKAGE INFO */}

                                        <div className={styles.packageInfo}>

                                            <div
                                                className={
                                                    styles.packageTitleRow
                                                }
                                            >

                                                <h3>
                                                    {item.name}
                                                </h3>


                                                {item.popular && (

                                                    <span
                                                        className={
                                                            styles.popularBadge
                                                        }
                                                    >
                                                        Most Popular
                                                    </span>

                                                )}

                                            </div>


                                            <p>
                                                {item.description}
                                            </p>

                                        </div>


                                        {/* PRICE */}

                                        <div className={styles.priceArea}>

                                            <del>
                                                {item.oldPrice}
                                            </del>


                                            <strong>
                                                {item.price}
                                            </strong>


                                            <span>
                                                one-off payment
                                            </span>

                                        </div>

                                    </div>


                                    {/* DIVIDER */}

                                    <div
                                        className={
                                            styles.cardDivider
                                        }
                                    />


                                    {/* =================================
                                        FEATURES
                                    ================================= */}

                                    <ul className={styles.features}>

                                        {item.features.map(
                                            (feature) => (

                                                <li key={feature}>

                                                    <span
                                                        className={
                                                            styles.checkIcon
                                                        }
                                                    >

                                                        <Check
                                                            size={12}
                                                            strokeWidth={3}
                                                            aria-hidden="true"
                                                        />

                                                    </span>


                                                    <span>
                                                        {feature}
                                                    </span>

                                                </li>

                                            )
                                        )}

                                    </ul>


                                    {/* =================================
                                        PACKAGE-SPECIFIC CTA
                                    ================================= */}

                                    <a
                                        href={
                                            getWhatsAppLink(
                                                item.message
                                            )
                                        }

                                        target="_blank"

                                        rel="noopener noreferrer"

                                        className={
                                            styles.quoteButton
                                        }

                                        aria-label={
                                            `${item.buttonText} on WhatsApp`
                                        }
                                    >

                                        <span>
                                            {item.buttonText}
                                        </span>


                                        <ArrowRight
                                            size={19}
                                            strokeWidth={1.8}
                                            aria-hidden="true"
                                        />

                                    </a>

                                </article>
                            );
                        }
                    )}

                </div>


                {/* =========================================
                    CUSTOM PROJECT
                ========================================= */}

                <a
                    href={
                        getWhatsAppLink(
                            customQuoteMessage
                        )
                    }

                    target="_blank"

                    rel="noopener noreferrer"

                    className={styles.customQuote}
                >

                    <span className={styles.customIcon}>

                        <MessageCircle
                            size={19}
                            strokeWidth={1.8}
                            aria-hidden="true"
                        />

                    </span>


                    <span className={styles.customCopy}>

                        <strong>
                            Need something more advanced?
                        </strong>


                        <span>
                            Ask for a custom quote.
                            We&apos;ll be happy to help.
                        </span>

                    </span>


                    <ArrowRight
                        className={styles.customArrow}
                        size={21}
                        strokeWidth={1.8}
                        aria-hidden="true"
                    />

                </a>

            </div>
        </section>
    );
}


export { PricingSection };

export default PricingSection;