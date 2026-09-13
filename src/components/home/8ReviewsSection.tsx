import Image from 'next/image';

import {
    ChevronDown,
    Quote,
    Star,
} from 'lucide-react';

import styles from './8ReviewsSection.module.css';


/* =========================================================
   REVIEW DATA
========================================================= */

const reviews = [
    {
        name: 'Saqib Ali',
        image: '/reviews/saqib-ali.jpg',

        review:
            'Really happy with the website Kashzo created for my business. Kashif understood what I wanted from the beginning and made the whole process straightforward. The final website looks clean, modern and much more professional than what I had before. Communication was also excellent throughout. Would definitely recommend Kashzo to other small businesses.',
    },

    {
        name: 'Joginder Malhodra',
        image: '/reviews/joginder-malhodra.png',

        review:
            'Great experience working with Kashzo. The website was completed quickly, communication was clear and I was kept updated throughout. Kashif was very helpful whenever I wanted something changed. Very pleased with the final result.',
    },

    {
        name: 'Thanges Paramsothy',
        image: '/reviews/thanges-paramsothy.png',

        review:
            'I didn’t know much about websites or what would work best for my business, but Kashif explained everything in a very simple way. He listened to what I needed, suggested some good ideas and created a website that is easy for customers to understand and use. I especially appreciated the patience and support during the process. Very good service.',
    },

    {
        name: 'Sathees Waran',
        image: '/reviews/sathess-waran.jpg',

        review:
            'Kashzo did an excellent job with our website. Clean design, mobile friendly and easy to navigate. Kashif was professional, responsive and made the changes we requested without making things complicated. Overall a very smooth experience.',
    },

    {
        name: 'Majid Ali',
        image: '/reviews/majid-ali.png',

        review:
            'Very impressed with the service from Kashzo. What I liked most was that they didn’t just make the website look good — they also thought about how customers would actually use it. The layout, contact options and overall presentation were all handled really well. Kashif was easy to communicate with and took the time to get the details right.',
    },

    {
        name: 'John Sj',
        image: '/reviews/john.png',

        review:
            'Simple, fast and reliable service. Kashif understood the brief and delivered exactly the kind of modern website I was looking for. Happy with the result and would use Kashzo again.',
    },

    {
        name: 'Uzair Rasheed',
        image: '/reviews/uzair-rasheed.jpg',

        review:
            'I had a very positive experience with Kashzo from start to finish. Kashif was friendly, knowledgeable and always quick to respond when I had a question. He took my ideas and turned them into a website that looks polished and represents the business properly. Even after the main work was finished, he was still helpful with small adjustments and advice. I’d happily recommend Kashzo to anyone looking for a website for their business.',
    },
];


/* =========================================================
   FIVE STAR DISPLAY
========================================================= */

function FiveStars() {
    return (
        <div
            className={styles.stars}
            aria-label="5 out of 5 stars"
        >
            {[0, 1, 2, 3, 4].map((star) => (
                <Star
                    key={star}
                    aria-hidden="true"
                    fill="currentColor"
                    strokeWidth={1.4}
                />
            ))}
        </div>
    );
}


/* =========================================================
   SECTION 8
========================================================= */

export function ReviewsSection() {
    return (
        <section
            className={styles.section}
            id="reviews"
        >
            <div className={styles.shell}>


                {/* =========================================
                    INTRO
                ========================================= */}

                <div className={styles.intro}>

                    <p className={styles.eyebrow}>
                        Client Reviews
                    </p>


                    <h2 className={styles.heading}>
                        What clients say about{' '}

                        <strong>
                            working with Kashzo.
                        </strong>
                    </h2>


                    <p className={styles.description}>
                        Genuine experiences from clients who have worked
                        with Kashzo on their websites and digital projects.
                    </p>

                </div>


                {/* =========================================
                    REVIEWS
                ========================================= */}

                <div className={styles.reviewGrid}>

                    {reviews.map((review) => (

                        <article
                            className={styles.reviewCard}
                            key={review.name}
                        >


                            {/* =================================
                                CUSTOMER HEADER
                            ================================= */}

                            <div className={styles.cardHeader}>


                                {/* PROFILE IMAGE */}

                                <div className={styles.avatar}>

                                    <Image
                                        src={review.image}
                                        alt={`${review.name} profile`}
                                        fill
                                        sizes="
                                            (max-width: 699px) 58px,
                                            (max-width: 999px) 60px,
                                            64px
                                        "
                                        className={styles.avatarImage}
                                    />

                                </div>


                                {/* CUSTOMER DETAILS */}

                                <div className={styles.reviewerInfo}>

                                    <h3>
                                        {review.name}
                                    </h3>

                                    <FiveStars />

                                </div>


                                {/* QUOTE */}

                                <Quote
                                    className={styles.quoteIcon}
                                    aria-hidden="true"
                                />

                            </div>


                            {/* =================================
                                REVIEW PREVIEW
                            ================================= */}

                            <p className={styles.reviewPreview}>
                                {review.review}
                            </p>


                            {/* =================================
                                EXPAND REVIEW
                                Native HTML — mobile reliable
                            ================================= */}

                            <details className={styles.fullReview}>

                                <summary className={styles.readButton}>

                                    <span className={styles.readText}>
                                        Read full review
                                    </span>

                                    <span className={styles.closeText}>
                                        Show less
                                    </span>

                                    <ChevronDown
                                        className={styles.readArrow}
                                        aria-hidden="true"
                                    />

                                </summary>


                                <div className={styles.expandedReview}>

                                    <Quote
                                        className={styles.expandedQuote}
                                        aria-hidden="true"
                                    />

                                    <p>
                                        {review.review}
                                    </p>


                                    <div className={styles.reviewSignature}>
                                        <span>
                                            5-star customer review
                                        </span>

                                        <strong>
                                            — {review.name}
                                        </strong>
                                    </div>

                                </div>

                            </details>

                        </article>

                    ))}

                </div>


                {/* =========================================
                    TRUST STRIP
                ========================================= */}

                <div className={styles.trustStrip}>

                    <span>
                        Clear Communication
                    </span>

                    <span>
                        Helpful Support
                    </span>

                    <span>
                        Small-Business Focus
                    </span>

                </div>


                {/* =========================================
                    SECTION 9 DIVIDER
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


export default ReviewsSection;