import Link from 'next/link';
import { WebsitePackageCards } from './WebsitePackageCards';
import styles from './ServicePricing.module.css';

const customWebProjects = [
  'SaaS',
  'Custom web applications',
  'E-commerce platforms',
  'Marketplaces',
  'Booking platforms',
  'Dashboards',
  'Customer portals',
  'API integrations',
  'Enterprise software',
  'AI integrations',
];

export function ServicePricing({ serviceSlug }: { serviceSlug: string }) {
  if (serviceSlug === 'web-development') {
    return (
      <div className={styles.pricing}>
        <div className={styles.intro}>
          <p className={styles.eyebrow}>Professional business websites</p>
          <h2>Website packages with a clear starting point.</h2>
          <p>These packages cover professional business websites. Final scope and pricing depend on content, functionality, integrations and delivery requirements.</p>
        </div>

        <WebsitePackageCards />

        <p className={styles.disclaimer}>Prices are starting estimates, not fixed quotations. Content volume, custom functionality and integrations can change the final scope.</p>

        <div className={styles.customQuote}>
          <div>
            <p className={styles.eyebrow}>Custom web development</p>
            <h3>Advanced products receive a tailored quote.</h3>
            <p>Complex software is scoped around users, workflows, architecture, security and integrations—not fitted into a website package.</p>
          </div>
          <div className={styles.projectTypes}>{customWebProjects.map((item) => <span key={item}>{item}</span>)}</div>
          <Link href="/contact" className={styles.primaryCta}>Discuss Your Project <span aria-hidden="true">→</span></Link>
        </div>
      </div>
    );
  }

  if (serviceSlug === 'mobile-app-development') {
    return (
      <div className={styles.pricing}>
        <div className={styles.intro}>
          <p className={styles.eyebrow}>Mobile app development</p>
          <h2>A practical starting point, followed by proper product scoping.</h2>
        </div>
        <article className={styles.mobileQuote}>
          <div>
            <p className={styles.packageLabel}>Starting from</p>
            <p className={styles.price}>£2,499+</p>
            <span className={styles.quoteBadge}>Custom quote available</span>
          </div>
          <div>
            <h3>Every mobile product is scoped individually.</h3>
            <p>Mobile applications are scoped according to functionality, platform, backend requirements, integrations and product complexity. This starting point is intended for a relatively straightforward MVP or cross-platform application—not a complex commercial platform.</p>
            <Link href="/contact" className={styles.primaryCta}>Discuss Your App <span aria-hidden="true">→</span></Link>
          </div>
        </article>
      </div>
    );
  }

  return null;
}
