import { Check } from 'lucide-react';
import Link from 'next/link';
import { websitePackages } from '@/lib/config/pricing';
import styles from './WebsitePackageCards.module.css';

export function WebsitePackageCards() {
  return <div className={styles.grid}>{websitePackages.map((item) => <article key={item.name} className={`${styles.card} ${item.highlighted ? styles.highlighted : ''}`}>
    <div className={styles.badges}>{item.highlighted && <span>Most popular</span>}<span>40% off</span></div>
    <h3>{item.name}</h3><p className={styles.bestFor}>{item.bestFor}</p>
    <div className={styles.pricing}><span>Was <s>{item.originalPrice}</s></span><p><small>Starting from</small>{item.price}</p></div>
    <ul>{item.scope.map((feature) => <li key={feature}><Check size={15} aria-hidden="true" />{feature}</li>)}</ul>
    <Link href="/contact" className={styles.cta}>Claim 40% Offer <span aria-hidden="true">→</span></Link>
  </article>)}</div>;
}
