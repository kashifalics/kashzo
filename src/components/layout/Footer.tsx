import Link from 'next/link';
import type { ComponentType, SVGProps } from 'react';
import { siteConfig } from '@/lib/config/site-config';
import styles from './Footer.module.css';

const serviceLinks = [['AI & Machine Learning','/services/ai-machine-learning'],['Web Development','/services/web-development'],['Mobile App Development','/services/mobile-app-development'],['Digital Marketing','/services/digital-marketing']];
const companyLinks = [['Home','/'],['About','/about'],['Work','/work'],['Industries','/industries'],['Contact','/contact']];
const legalLinks = [['Privacy Policy','/privacy-policy'],['Cookie Policy','/cookie-policy'],['Terms','/terms']];
const socialItems: Array<{ key: 'linkedin' | 'github' | 'facebook' | 'instagram'; label: string; icon: ComponentType<SVGProps<SVGSVGElement>> }> = [
  { key: 'linkedin', label: 'LinkedIn', icon: LinkedInIcon }, { key: 'github', label: 'GitHub', icon: GitHubIcon },
  { key: 'facebook', label: 'Facebook', icon: FacebookIcon }, { key: 'instagram', label: 'Instagram', icon: InstagramIcon },
];

export function Footer(){return <footer className={styles.footer}><div className={styles.shell}>
  <div className={styles.grid}><div className={styles.company}><Link href="/" className={styles.brand} aria-label="Kashzo Solutions Ltd home"><span className={styles.mark}>K</span><span className={styles.brandText}><strong>KASHZO</strong><span>Solutions Ltd</span></span></Link><p className={styles.intro}>Engineering intelligent digital products that perform—across AI, software, mobile and growth.</p></div><FooterColumn title="Services" links={serviceLinks}/><FooterColumn title="Company" links={companyLinks}/><FooterColumn title="Legal" links={legalLinks}/></div>
  <div className={styles.bottom}><p>© {new Date().getFullYear()} Kashzo Solutions Ltd. All rights reserved.</p><div className={styles.socials} aria-label="Kashzo social media">{socialItems.map(({ key, label, icon: Icon }) => { const url = siteConfig.social[key]; return url && url !== '#' ? <a key={key} href={url} target="_blank" rel="noopener noreferrer" aria-label={`Visit Kashzo Solutions on ${label}`} className={styles.socialItem}><Icon aria-hidden="true"/></a> : <span key={key} role="img" aria-label={`${label} page coming soon`} title={`${label} page coming soon`} className={`${styles.socialItem} ${styles.socialPlaceholder}`}><Icon aria-hidden="true"/></span>; })}</div></div>
</div></footer>}

function FooterColumn({title,links}:{title:string;links:string[][]}){return <div className={styles.column}><h3>{title}</h3><ul>{links.map(([label,href])=><li key={href}><Link href={href}>{label}</Link></li>)}</ul></div>}

function LinkedInIcon(props: SVGProps<SVGSVGElement>){return <svg viewBox="0 0 24 24" fill="currentColor" {...props}><path d="M6.5 8.25H3.25V20H6.5V8.25ZM4.87 3A1.88 1.88 0 1 0 4.87 6.75 1.88 1.88 0 0 0 4.87 3ZM20.75 13.27c0-3.54-1.89-5.19-4.42-5.19-2.04 0-2.95 1.12-3.46 1.91V8.25H9.62V20h3.25v-5.82c0-1.53.29-3.01 2.19-3.01 1.88 0 1.9 1.76 1.9 3.11V20h3.25l.54-6.73Z"/></svg>}
function GitHubIcon(props: SVGProps<SVGSVGElement>){return <svg viewBox="0 0 24 24" fill="currentColor" {...props}><path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.87c-2.78.6-3.37-1.18-3.37-1.18-.45-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.9 1.53 2.35 1.09 2.92.83.09-.65.35-1.09.64-1.34-2.22-.25-4.55-1.11-4.55-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.02A9.55 9.55 0 0 1 12 6.82c.85 0 1.7.11 2.5.34 1.9-1.29 2.74-1.02 2.74-1.02.55 1.37.2 2.39.1 2.64.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.86v2.76c0 .27.18.58.69.48A10 10 0 0 0 12 2Z"/></svg>}
function FacebookIcon(props: SVGProps<SVGSVGElement>){return <svg viewBox="0 0 24 24" fill="currentColor" {...props}><path d="M13.75 21v-8h2.68l.4-3.13h-3.08v-2c0-.9.25-1.52 1.55-1.52h1.65v-2.8c-.29-.04-1.27-.12-2.42-.12-2.4 0-4.03 1.46-4.03 4.14v2.3H7.8V13h2.7v8h3.25Z"/></svg>}
function InstagramIcon(props: SVGProps<SVGSVGElement>){return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...props}><rect x="3.5" y="3.5" width="17" height="17" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.7" r="1" fill="currentColor" stroke="none"/></svg>}
