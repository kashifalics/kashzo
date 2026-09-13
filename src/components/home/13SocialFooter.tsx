import styles from './13SocialFooter.module.css';


const socialLinks = [
    {
        name: 'Facebook',
        href: 'https://www.facebook.com/share/1NWtUAz2qD/?mibextid=wwXIfr',
        icon: 'facebook',
    },
    {
        name: 'Instagram',
        href: 'https://www.instagram.com/kashzosolutions?stkn=MWpwdGtkb3hpdTF6Mg==',
        icon: 'instagram',
    },
    {
        name: 'LinkedIn',
        href: 'https://www.linkedin.com/company/kashzo-solutions/',
        icon: 'linkedin',
    },
    {
        name: 'X',
        href: 'https://x.com/KashzoSolutions',
        icon: 'x',
    },
    {
        name: 'WhatsApp',
        href: 'https://api.whatsapp.com/send/?phone=447405104696',
        icon: 'whatsapp',
    },
];


function SocialIcon({
    type,
}: {
    type: string;
}) {
    if (type === 'facebook') {
        return (
            <svg viewBox="0 0 24 24" aria-hidden="true">
                <path
                    fill="currentColor"
                    d="M13.8 21v-8.2h2.8l.4-3.2h-3.2V7.5c0-.9.3-1.6 1.7-1.6H17V3.1c-.4-.1-1.3-.1-2.4-.1-2.4 0-4 1.4-4 4.1v2.5H8v3.2h2.6V21h3.2Z"
                />
            </svg>
        );
    }

    if (type === 'instagram') {
        return (
            <svg viewBox="0 0 24 24" aria-hidden="true">
                <rect
                    x="3.2"
                    y="3.2"
                    width="17.6"
                    height="17.6"
                    rx="5"
                    ry="5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                />

                <circle
                    cx="12"
                    cy="12"
                    r="4.1"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                />

                <circle
                    cx="17.4"
                    cy="6.8"
                    r="1.15"
                    fill="currentColor"
                />
            </svg>
        );
    }

    if (type === 'linkedin') {
        return (
            <svg viewBox="0 0 24 24" aria-hidden="true">
                <path
                    fill="currentColor"
                    d="M6.2 8.2H3V21h3.2V8.2Zm.2-4A1.8 1.8 0 1 0 2.8 4.2a1.8 1.8 0 0 0 3.6 0ZM21 13.7c0-3.9-2.1-5.7-4.8-5.7-2.2 0-3.2 1.2-3.8 2v-1.8H9.2V21h3.2v-6.3c0-1.7.3-3.3 2.4-3.3 2 0 2.1 1.9 2.1 3.4V21H20l1-.1v-7.2Z"
                />
            </svg>
        );
    }

    if (type === 'x') {
        return (
            <svg viewBox="0 0 24 24" aria-hidden="true">
                <path
                    fill="currentColor"
                    d="M18.5 3H21l-5.5 6.3L22 21h-5.1l-4-5.2L8.3 21H5.8l5.9-6.8L5.4 3h5.2l3.6 4.8L18.5 3Zm-.9 16h1.4L9.8 4.9H8.3L17.6 19Z"
                />
            </svg>
        );
    }

    return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
            <path
                fill="currentColor"
                d="M12 2.5a9.3 9.3 0 0 0-8 14L2.5 21.5l5.1-1.4A9.4 9.4 0 1 0 12 2.5Zm0 16.9a7.4 7.4 0 0 1-3.8-1l-.3-.2-3 .8.8-2.9-.2-.3a7.5 7.5 0 1 1 6.5 3.6Zm4.1-5.6c-.2-.1-1.3-.7-1.5-.7-.2-.1-.4-.1-.6.1-.2.3-.6.8-.8 1-.1.1-.3.2-.5.1-.3-.1-1.1-.4-2-1.2-.8-.7-1.3-1.5-1.4-1.8-.2-.2 0-.4.1-.5l.4-.5.2-.4c.1-.2 0-.4 0-.5L9.3 8c-.2-.5-.4-.4-.6-.4h-.5c-.2 0-.5.1-.7.3-.2.3-1 1-1 2.4s1 2.7 1.1 2.9c.1.2 2 3.1 4.9 4.2.7.3 1.2.5 1.6.6.7.2 1.3.2 1.8.1.6-.1 1.7-.7 2-1.4.2-.7.2-1.3.2-1.4-.1-.1-.2-.2-.5-.3Z"
            />
        </svg>
    );
}


export function SocialFooter() {
    return (
        <section
            className={styles.section}
            id="social-footer"
        >
            <div className={styles.shell}>

                <div className={styles.card}>

                    <div className={styles.brand}>

                        <h2 className={styles.logo}>
                            Kashzo<span>.</span>
                        </h2>

                        <p className={styles.solutions}>
                            Solutions
                        </p>

                    </div>


                    <p className={styles.description}>
                        We help ambitious businesses build,
                        automate and grow with modern web solutions,
                        AI and real results.
                    </p>


                    <div className={styles.socials}>

                        {socialLinks.map((social) => (
                            <a
                                key={social.name}
                                href={social.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={styles.socialLink}
                                aria-label={`Open Kashzo ${social.name}`}
                            >
                                <SocialIcon type={social.icon} />
                            </a>
                        ))}

                    </div>


                    <div
                        className={styles.readyDivider}
                        aria-hidden="true"
                    >
                        <span />

                        <strong>
                            Ready When You Are
                        </strong>

                        <span />
                    </div>


                    <div className={styles.messages}>

                        <div className={styles.futureMessage}>

                            <span>
                                Built
                            </span>

                            <span>
                                For A Brighter
                            </span>

                            <span>
                                Tomorrow
                            </span>

                            <i />

                        </div>


                        <div className={styles.scriptMessage}>

                            <span>
                                Your Ideas
                            </span>

                            <span>
                                Our Tech
                            </span>

                            <span>
                                Real Growth
                            </span>

                        </div>

                    </div>


                    <div className={styles.bottomLine} />


                    <div className={styles.copyright}>

                        <p>
                            © {new Date().getFullYear()} Kashzo Solutions.
                            All rights reserved.
                        </p>

                        <p className={styles.desktopTagline}>
                            Your Ideas. Our Tech. Real Growth.
                        </p>

                    </div>

                </div>

            </div>
        </section>
    );
}


export default SocialFooter;