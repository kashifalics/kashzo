import Link from 'next/link';
import styles from './ServicePricing.module.css';

const websitePackages = [
  {
    name: 'Launch Website',
    price: '£349+',
    highlighted: false,
    bestFor: 'Startups, small businesses and simple professional company websites.',
    scope: [
      'Up to 3 core pages',
      'Responsive design and professional styling',
      'Contact or enquiry form',
      'Social media integration',
      'Basic technical SEO',
      'Basic performance optimisation',
      'Deployment',
    ],
  },
  {
    name: 'Business Website',
    price: '£699+',
    bestFor: 'Established businesses requiring stronger content and lead generation.',
    highlighted: true,
    scope: [
      'Up to 6 core pages',
      'Responsive custom UI',
      'Enquiry and contact forms',
      'CMS where appropriate',
      'Portfolio or case-study section',
      'Analytics and SEO foundations',
      'Social integrations and conversion CTAs',
      'Performance optimisation',
    ],
  },
  {
    name: 'Growth Website',
    price: '£1,249+',
    highlighted: false,
    bestFor: 'Growing businesses requiring a more comprehensive digital presence.',
    scope: [
      'Up to 10 core pages',
      'Custom UX/UI and advanced responsive design',
      'CMS and insights publishing',
      'Portfolio or case studies',
      'Advanced, restrained animation',
      'Analytics and technical SEO architecture',
      'Conversion-focused structure',
      'Performance optimisation and richer integrations',
    ],
  },
] as const;

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

        <div className={styles.packageGrid}>
          {websitePackages.map((item) => (
            <article key={item.name} className={`${styles.package} ${item.highlighted ? styles.highlighted : ''}`}>
              {item.highlighted && <span className={styles.popular}>Most popular</span>}
              <p className={styles.packageLabel}>Starting from</p>
              <p className={styles.price}>{item.price}</p>
              <h3>{item.name}</h3>
              <p className={styles.bestFor}>{item.bestFor}</p>
              <ul>{item.scope.map((scopeItem) => <li key={scopeItem}>{scopeItem}</li>)}</ul>
              <Link href="/contact" className={styles.packageCta}>Request This Package <span aria-hidden="true">→</span></Link>
            </article>
          ))}
        </div>

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
