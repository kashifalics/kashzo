import type { ComponentType, SVGProps } from 'react';
import { socialLinks } from '@/lib/config/site-config';
import styles from './SocialLinks.module.css';

const items: Array<{
  key: keyof typeof socialLinks;
  label: string;
  icon: ComponentType<SVGProps<SVGSVGElement>>;
}> = [
  { key: 'linkedin', label: 'LinkedIn', icon: LinkedInIcon },
  { key: 'facebook', label: 'Facebook', icon: FacebookIcon },
  { key: 'instagram', label: 'Instagram', icon: InstagramIcon },
];

export function SocialLinks({ theme = 'dark', showLabels = false }: { theme?: 'dark' | 'light'; showLabels?: boolean }) {
  return <nav className={`${styles.links} ${styles[theme]}`} aria-label="Kashzo Solutions social media">
    {items.map(({ key, label, icon: Icon }) => <a key={key} href={socialLinks[key]} target="_blank" rel="noopener noreferrer" aria-label={`Visit Kashzo Solutions on ${label}`} className={styles.link}>
      <Icon aria-hidden="true" />
      {showLabels && <span>{label}</span>}
    </a>)}
  </nav>;
}

function LinkedInIcon(props: SVGProps<SVGSVGElement>) {
  return <svg viewBox="0 0 24 24" fill="currentColor" {...props}><path d="M6.5 8.25H3.25V20H6.5V8.25ZM4.87 3A1.88 1.88 0 1 0 4.87 6.75 1.88 1.88 0 0 0 4.87 3ZM20.75 13.27c0-3.54-1.89-5.19-4.42-5.19-2.04 0-2.95 1.12-3.46 1.91V8.25H9.62V20h3.25v-5.82c0-1.53.29-3.01 2.19-3.01 1.88 0 1.9 1.76 1.9 3.11V20h3.25l.54-6.73Z" /></svg>;
}

function FacebookIcon(props: SVGProps<SVGSVGElement>) {
  return <svg viewBox="0 0 24 24" fill="currentColor" {...props}><path d="M13.75 21v-8h2.68l.4-3.13h-3.08v-2c0-.9.25-1.52 1.55-1.52h1.65v-2.8c-.29-.04-1.27-.12-2.42-.12-2.4 0-4.03 1.46-4.03 4.14v2.3H7.8V13h2.7v8h3.25Z" /></svg>;
}

function InstagramIcon(props: SVGProps<SVGSVGElement>) {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...props}><rect x="3.5" y="3.5" width="17" height="17" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.7" r="1" fill="currentColor" stroke="none" /></svg>;
}
