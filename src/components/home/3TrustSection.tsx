import {
    ArrowRight,
    BadgeCheck,
    MessageCircle,
    ShieldCheck,
    Users,
} from 'lucide-react';

import styles from './3TrustSection.module.css';


const TRUSTPILOT_URL =
    'https://www.trustpilot.com/review/kashzo.com';


/* =========================================================
   TRUSTPILOT LOGO STAR
========================================================= */

function TrustpilotStar() {
    return (
        <span
            className={styles.trustpilotLogoStar}
            aria-hidden="true"
        >
            ★
        </span>
    );
}


/* =========================================================
   FIVE TRUSTPILOT STARS
========================================================= */

function FiveStars() {
    return (
        <div
            className={styles.ratingStars}
            aria-label="Five stars"
        >
            {[0, 1, 2, 3, 4].map((star) => (
                <span
                    key={star}
                    className={styles.ratingStar}
                    aria-hidden="true"
                >
                    ★
                </span>
            ))}
        </div>
    );
}


/* =========================================================
   TRUST POINTS
========================================================= */

const trustPoints = [
    {
        title: 'Reliable Service',
        icon: ShieldCheck,
    },

    {
        title: 'Clear Communication',
        icon: MessageCircle,
    },

    {
        title: 'UK Small-Business Focus',
        icon: Users,
    },
];


/* =========================================================
   SECTION
========================================================= */

export function TrustSection() {
    return (
        <section
            className={styles.section}
            id="trust"
        >
            <div className={styles.shell}>


                {/* =========================================
                    TOP SEPARATOR
                ========================================= */}

                <div
                    className={styles.sectionDivider}
                    aria-hidden="true"
                >
                    <span className={styles.dividerLine} />

                    <span className={styles.dividerDiamond} />

                    <span className={styles.dividerLine} />
                </div>


                {/* =========================================
                    INTRO
                ========================================= */}

                <div className={styles.intro}>

                    <p className={styles.eyebrow}>
                        Trust &amp; Credibility
                    </p>


                    <h2 className={styles.heading}>
                        <span>
                            A Reliable Service
                        </span>

                        <span>
                            You Can{' '}
                            <strong>
                                Trust.
                            </strong>
                        </span>
                    </h2>


                    <p className={styles.description}>
                        Quality website design, clear communication and
                        dependable support for UK small businesses.
                    </p>

                </div>


                {/* =========================================
                    TRUST AREA
                ========================================= */}

                <div className={styles.trustStage}>


                    {/* =====================================
                        MAIN TRUST CARD
                    ===================================== */}

                    <div className={styles.trustCard}>


                        {/* =================================
                            TRUSTPILOT
                        ================================= */}

                        <div className={styles.trustpilotBrand}>

                            <div className={styles.trustpilotName}>

                                <TrustpilotStar />

                                <span>
                                    Trustpilot
                                </span>

                            </div>


                            <div className={styles.claimedBadge}>

                                <BadgeCheck
                                    aria-hidden="true"
                                    strokeWidth={2.2}
                                />

                                <span>
                                    Claimed Profile
                                </span>

                            </div>

                        </div>


                        {/* =================================
                            BUSINESS IDENTITY
                        ================================= */}

                        <div className={styles.businessIdentity}>

                            <div className={styles.businessIcon}>

                                <ShieldCheck
                                    aria-hidden="true"
                                    strokeWidth={1.9}
                                />

                            </div>


                            <div className={styles.businessText}>

                                <strong>
                                    Kashzo Solutions
                                </strong>

                                <span>
                                    Website Design for UK Businesses
                                </span>

                            </div>

                        </div>


                        {/* =================================
                            REAL FEEDBACK
                        ================================= */}

                        <div className={styles.realFeedback}>

                            <span />

                            <strong>
                                Real People. Real Feedback.
                            </strong>

                        </div>


                        {/* =================================
                            RATING PANEL
                        ================================= */}

                        <div className={styles.ratingPanel}>

                            <FiveStars />


                            <div className={styles.ratingSide}>

                                <strong>
                                    Excellent
                                </strong>

                                <span>
                                    5.0 out of 5
                                </span>

                            </div>

                        </div>


                        {/* =================================
                            REVIEW SUMMARY
                        ================================= */}

                        <div className={styles.reviewSummary}>

                            <strong>
                                Verified Trustpilot Reviews – 5.0 (2)
                            </strong>

                            <span>
                                Customer feedback on Trustpilot
                            </span>

                        </div>


                        {/* =================================
                            BUTTON
                        ================================= */}

                        <div className={styles.profileAction}>

                            <a
                                href={TRUSTPILOT_URL}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={styles.profileButton}
                            >
                                <span>
                                    View Trustpilot Profile
                                </span>

                                <ArrowRight
                                    aria-hidden="true"
                                    strokeWidth={1.8}
                                />
                            </a>

                        </div>

                    </div>


                    {/* =====================================
                        THREE TRUST POINTS
                    ===================================== */}

                    <div className={styles.trustBenefits}>

                        {trustPoints.map((item) => {

                            const Icon = item.icon;

                            return (
                                <div
                                    className={styles.trustBenefit}
                                    key={item.title}
                                >

                                    <div className={styles.benefitIcon}>

                                        <Icon
                                            aria-hidden="true"
                                            strokeWidth={1.8}
                                        />

                                    </div>


                                    <strong>
                                        {item.title}
                                    </strong>

                                </div>
                            );
                        })}

                    </div>

                </div>


                {/* =========================================
                    BOTTOM SEPARATOR
                ========================================= */}

                <div
                    className={`${styles.sectionDivider} ${styles.bottomDivider}`}
                    aria-hidden="true"
                >
                    <span className={styles.dividerLine} />

                    <span className={styles.dividerDiamond} />

                    <span className={styles.dividerLine} />
                </div>

            </div>
        </section>
    );
}


export default TrustSection;