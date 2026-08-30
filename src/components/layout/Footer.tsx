import Link from 'next/link';
import { BrandLockup } from './BrandLockup';
import { SocialLinks } from './SocialLinks';
import styles from './Footer.module.css';

const serviceLinks = [
  ['AI & Machine Learning', '/services/ai-machine-learning'],
  ['Web Development', '/services/web-development'],
  ['Mobile App Development', '/services/mobile-app-development'],
  ['Digital Marketing', '/services/digital-marketing'],
];
const companyLinks = [['Home', '/'], ['About', '/about'], ['Work', '/work'], ['Industries', '/industries'], ['Insights', '/insights'], ['Contact', '/contact']];
const legalLinks = [['Privacy Policy', '/privacy-policy'], ['Cookie Policy', '/cookie-policy'], ['Terms', '/terms']];

export function Footer() {
  return <footer className={styles.footer}><div className={styles.shell}>
    <div className={styles.grid}>
      <div className={styles.company}>
        <Link href="/" className={styles.brand} aria-label="Kashzo Solutions home">
          <BrandLockup context="footer" />
        </Link>
        <p className={styles.intro}>Engineering intelligent digital products that perform—across AI, software, mobile and growth.</p>
        <div className={styles.socials}><SocialLinks /></div>
      </div>
      <FooterColumn title="Services" links={serviceLinks} />
      <FooterColumn title="Company" links={companyLinks} />
      <FooterColumn title="Legal" links={legalLinks} />
    </div>
    <div className={styles.bottom}>
      <p>© {new Date().getFullYear()} Kashzo Solutions Ltd. All rights reserved.</p>
    </div>
  </div></footer>;
}

function FooterColumn({ title, links }: { title: string; links: string[][] }) {
  return <div className={styles.column}><h3>{title}</h3><ul>{links.map(([label, href]) => <li key={href}><Link href={href}>{label}</Link></li>)}</ul></div>;
}
