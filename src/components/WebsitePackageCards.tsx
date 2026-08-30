import Link from 'next/link';
import { websitePackages } from '@/lib/config/pricing';
import styles from './WebsitePackageCards.module.css';

export function WebsitePackageCards({ compact = false }: { compact?: boolean }) {
  return (
    <div className={`${styles.grid} ${compact ? styles.compact : ''}`}>
      {websitePackages.map((item) => {
        const features = compact ? item.scope.slice(0, 6) : item.scope;
        return (
          <article key={item.name} className={`${styles.card} ${item.highlighted ? styles.highlighted : ''}`}>
            {item.highlighted && <span className={styles.popular}>Most popular</span>}
            <p className={styles.starting}>Starting from</p>
            <p className={styles.price}>{item.price}</p>
            <h3>{item.name}</h3>
            <p className={styles.bestFor}>{item.bestFor}</p>
            <ul>{features.map((feature) => <li key={feature}>{feature}</li>)}</ul>
            <Link href="/contact" className={styles.cta}>Request This Package <span aria-hidden="true">→</span></Link>
          </article>
        );
      })}
    </div>
  );
}
