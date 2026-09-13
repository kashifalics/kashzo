import styles from './14FloatingWhatsApp.module.css';

const WHATSAPP_URL =
    'https://wa.me/447405104696?text=Hi%20Kashzo%20Solutions%2C%20I%27d%20like%20to%20discuss%20a%20project%20for%20my%20business.';


export function FloatingWhatsApp() {
    return (
        <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.wrapper}
            aria-label="Chat with Kashzo Solutions on WhatsApp"
        >
            {/* Tooltip */}
            <span className={styles.tooltip}>
                Chat with us
            </span>


            {/* Pulse ring */}
            <span
                className={styles.pulse}
                aria-hidden="true"
            />


            {/* Main button */}
            <span className={styles.button}>

                <svg
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                    className={styles.icon}
                >
                    <path
                        fill="currentColor"
                        d="M12 2.25a9.5 9.5 0 0 0-8.14 14.4L2.25 21.75l5.22-1.55A9.5 9.5 0 1 0 12 2.25Zm0 17.15a7.57 7.57 0 0 1-3.86-1.05l-.28-.17-3.1.92.94-3.02-.18-.29a7.62 7.62 0 1 1 6.48 3.61Zm4.18-5.69c-.23-.12-1.35-.67-1.56-.75-.21-.07-.37-.11-.52.12-.15.23-.6.75-.74.9-.14.15-.27.17-.5.06-.23-.12-.97-.36-1.85-1.14-.68-.61-1.15-1.37-1.28-1.6-.14-.23-.02-.35.1-.47.11-.1.23-.27.35-.4.11-.14.15-.23.23-.39.08-.15.04-.29-.02-.4-.06-.12-.52-1.26-.72-1.72-.19-.46-.39-.4-.52-.4h-.45c-.15 0-.4.06-.61.29-.21.23-.8.78-.8 1.91 0 1.12.82 2.21.93 2.36.12.15 1.61 2.46 3.91 3.45.55.23.97.37 1.3.48.55.17 1.05.15 1.44.09.44-.07 1.35-.55 1.54-1.08.19-.54.19-1 .14-1.09-.06-.1-.21-.15-.44-.27Z"
                    />
                </svg>

            </span>
        </a>
    );
}


export default FloatingWhatsApp;