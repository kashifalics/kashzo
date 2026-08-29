import Link from 'next/link';
import styles from './inner-pages.module.css';

export default function NotFound(){return <div className={styles.notFound}><div><strong>ERROR 404</strong><h1>Signal lost.</h1><p>The page you requested is unavailable or has moved. Return to Kashzo’s homepage to continue exploring.</p><Link href="/" className={styles.ctaLink}>Return home →</Link></div></div>}
