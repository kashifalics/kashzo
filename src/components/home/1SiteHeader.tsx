import Image from 'next/image';
import Link from 'next/link';

import styles from './1SiteHeader.module.css';


export function SiteHeader() {
    return (
        <header className={styles.header}>

            <div className={styles.inner}>


                {/* =========================================
                    KASHZO LOGO
                ========================================= */}

                <Link
                    href="/"
                    className={styles.logoLink}
                    aria-label="Kashzo Solutions home"
                >
                    <Image
                        src="/brand/kashzo-logo-transparent.png"
                        alt="Kashzo Solutions"
                        width={340}
                        height={110}
                        priority
                        className={styles.logo}
                    />
                </Link>


                {/* =========================================
                    40% OFF OFFER
                ========================================= */}

                <div className={styles.offerWrap}>

                    <Image
                        src="/brand/kashzo-40-off.png"
                        alt="40% off"
                        width={280}
                        height={110}
                        priority
                        className={styles.offer}
                    />

                </div>

            </div>

        </header>
    );
}