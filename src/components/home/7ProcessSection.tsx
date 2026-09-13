import {
    ArrowDown,
    ArrowRight,
    Code2,
    FileText,
    MessageCircle,
    Rocket,
} from 'lucide-react';

import styles from './7ProcessSection.module.css';


const steps = [
    {
        number: '1',
        title: 'Discovery',
        description:
            'We learn about your business, goals, target audience and any ideas you have. We’ll advise on the best solution for your needs.',
        icon: MessageCircle,
    },

    {
        number: '2',
        title: 'Design',
        description:
            'We create a clear structure, agree on the content, design direction and timeline, so you know exactly what to expect.',
        icon: FileText,
    },

    {
        number: '3',
        title: 'Build',
        description:
            'We design and develop a modern, mobile-friendly website with clean, optimised code and the right features.',
        icon: Code2,
    },

    {
        number: '4',
        title: 'Launch',
        description:
            'You review the website, we make final adjustments, then launch it. We also provide ongoing support to keep everything running smoothly.',
        icon: Rocket,
    },
];


const WHATSAPP_URL =
    "https://api.whatsapp.com/send/?phone=447405104696&text=Hi+Kashzo+Solutions%2C+I%27d+like+to+discuss+a+website+for+my+business.&type=phone_number&app_absent=0";


export function ProcessSection() {
    return (
        <section
            className={styles.section}
            id="process"
        >
            <div className={styles.shell}>


                {/* =========================================
                    INTRO
                ========================================= */}

                <div className={styles.intro}>

                    <p className={styles.eyebrow}>
                        How It Works
                    </p>


                    <h2 className={styles.heading}>
                        From idea to launch,{' '}

                        <strong>
                            made simple.
                        </strong>
                    </h2>


                    <p className={styles.description}>
                        A clear, straightforward process from the first
                        conversation to the final launch, with guidance
                        at every step.
                    </p>

                </div>


                {/* =========================================
                    PROCESS
                ========================================= */}

                <div className={styles.processGrid}>

                    {steps.map((step, index) => {

                        const Icon = step.icon;

                        return (
                            <div
                                className={styles.stepGroup}
                                key={step.number}
                            >

                                <article className={styles.stepCard}>

                                    <span className={styles.stepNumber}>
                                        {step.number}
                                    </span>


                                    <div className={styles.iconCircle}>

                                        <Icon
                                            aria-hidden="true"
                                            strokeWidth={1.9}
                                        />

                                    </div>


                                    <div className={styles.stepContent}>

                                        <h3>
                                            {step.title}
                                        </h3>


                                        <p>
                                            {step.description}
                                        </p>

                                    </div>

                                </article>


                                {index < steps.length - 1 && (

                                    <div
                                        className={styles.connector}
                                        aria-hidden="true"
                                    >

                                        <ArrowRight
                                            className={styles.desktopArrow}
                                            strokeWidth={1.9}
                                        />


                                        <ArrowDown
                                            className={styles.mobileArrow}
                                            strokeWidth={1.9}
                                        />

                                    </div>

                                )}

                            </div>
                        );
                    })}

                </div>


                {/* =========================================
                    CTA
                ========================================= */}

                <div className={styles.ctaBox}>

                    <div className={styles.ctaIcon}>

                        <Rocket
                            aria-hidden="true"
                            strokeWidth={1.8}
                        />

                    </div>


                    <div className={styles.ctaCopy}>

                        <span className={styles.ctaLabel}>
                            Ready to get started?
                        </span>


                        <strong>
                            Let&apos;s build something great together.
                        </strong>


                        <p>
                            Get a quality website for your business
                            with a smooth and stress-free process.
                        </p>

                    </div>


                    <div className={styles.ctaAction}>

                        <a
                            href={WHATSAPP_URL}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.ctaButton}
                        >
                            <span>
                                Get a Free Quote
                            </span>

                            <ArrowRight
                                aria-hidden="true"
                                strokeWidth={1.8}
                            />
                        </a>


                        <span className={styles.ctaNote}>
                            No obligation. Just a friendly chat.
                        </span>

                    </div>

                </div>


                {/* =========================================
                    SEPARATOR FOR SECTION 8
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


export default ProcessSection;