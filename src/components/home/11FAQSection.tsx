import {
    BarChart3,
    MessageCircle,
    Minus,
    Plus,
    Users,
} from 'lucide-react';

import styles from './11FAQSection.module.css';


/* =========================================================
   FAQ DATA
========================================================= */

const faqs = [
    {
        question:
            'How long does it take to build a website?',

        answer:
            'For a standard business website, we can often complete the build in around two days once we have the information and content needed to start. Larger websites, e-commerce projects or advanced AI integrations may take longer. We’ll confirm the expected timeline before work begins.',
    },

    {
        question:
            'Do I need to provide all the website content?',

        answer:
            'No. You can send us your existing content, rough notes, service information or ideas. We can help organise everything into clear sections and make the website easier for customers to understand.',
    },

    {
        question:
            'Will my website work on mobile phones?',

        answer:
            'Yes. Every Kashzo website is built to work across mobile phones, tablets, laptops and desktop computers, with layouts adjusted for different screen sizes.',
    },

    {
        question:
            'Can you redesign my existing website?',

        answer:
            'Yes. We can refresh an existing website with a cleaner design, improved mobile experience, clearer structure and a better customer journey while keeping the parts of your current site that still work well.',
    },

    {
        question:
            'Can you add booking, WhatsApp or enquiry forms?',

        answer:
            'Yes. Depending on your business, we can add appointment booking, contact forms, enquiry forms, WhatsApp buttons and other ways for customers to get in touch more easily.',
    },

    {
        question:
            'Do you build online shops?',

        answer:
            'Yes. Kashzo can create e-commerce websites for businesses that want to sell products or services online, including product pages, shopping features and customer enquiry options.',
    },

    {
        question:
            'Can you build AI chatbots or AI voice agents?',

        answer:
            'Yes. We can build AI-powered chatbots for websites as well as AI voice agents and automations designed around your business. These can help answer common questions, capture enquiries, collect information and automate repetitive tasks.',
    },

    {
        question:
            'What happens after my website goes live?',

        answer:
            'Your package includes a support period after launch. If you need ongoing updates, improvements, website maintenance or support for AI systems, we can also arrange continued support separately.',
    },
];


/* =========================================================
   SECTION 11
========================================================= */

export function FAQSection() {
    return (
        <section
            className={styles.section}
            id="faq"
        >
            <div className={styles.shell}>


                {/* =========================================
                    INTRO
                ========================================= */}

                <div className={styles.intro}>

                    <p className={styles.eyebrow}>
                        FAQs
                    </p>


                    <h2 className={styles.heading}>
                        Questions before you{' '}

                        <strong>
                            get started?
                        </strong>
                    </h2>


                    <p className={styles.description}>
                        Quick answers to common questions about our
                        websites, AI and digital solutions.
                    </p>

                </div>


                {/* =========================================
                    FAQ GRID
                ========================================= */}

                <div className={styles.faqGrid}>

                    {faqs.map((faq, index) => (

                        <details
                            className={styles.faqItem}
                            key={faq.question}

                            /*
                               First question open by default,
                               like the approved mockup.
                            */
                            open={index === 0}
                        >

                            <summary className={styles.question}>

                                <span className={styles.questionText}>
                                    {faq.question}
                                </span>


                                <span
                                    className={styles.iconButton}
                                    aria-hidden="true"
                                >

                                    <Plus
                                        className={styles.plusIcon}
                                        strokeWidth={2}
                                    />

                                    <Minus
                                        className={styles.minusIcon}
                                        strokeWidth={2}
                                    />

                                </span>

                            </summary>


                            <div className={styles.answer}>

                                <p>
                                    {faq.answer}
                                </p>

                            </div>

                        </details>

                    ))}

                </div>


                {/* =========================================
                    TRUST POINTS
                ========================================= */}

                <div className={styles.trustStrip}>

                    <div className={styles.trustItem}>

                        <span className={styles.trustIcon}>
                            <MessageCircle
                                aria-hidden="true"
                                strokeWidth={1.8}
                            />
                        </span>

                        <span>
                            Clear Answers
                        </span>

                    </div>


                    <div className={styles.trustItem}>

                        <span className={styles.trustIcon}>
                            <Users
                                aria-hidden="true"
                                strokeWidth={1.8}
                            />
                        </span>

                        <span>
                            Friendly Support
                        </span>

                    </div>


                    <div className={styles.trustItem}>

                        <span className={styles.trustIcon}>
                            <BarChart3
                                aria-hidden="true"
                                strokeWidth={1.8}
                            />
                        </span>

                        <span>
                            Small-Business Focus
                        </span>

                    </div>

                </div>


                {/* =========================================
                    SEPARATOR FOR SECTION 12
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


export default FAQSection;