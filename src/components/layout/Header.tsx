'use client';

import { ArrowUpRight, Menu, X } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import styles from './Header.module.css';

const links = [['Home', '/'], ['Services', '/services'], ['Work', '/work'], ['Industries', '/industries'], ['About', '/about']] as const;

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => { const onScroll = () => setScrolled(window.scrollY > 18); window.addEventListener('scroll', onScroll, { passive: true }); return () => window.removeEventListener('scroll', onScroll); }, []);
  const active = (href: string) => href === '/' ? pathname === '/' : pathname.startsWith(href);
  return <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
    <div className={styles.inner}>
      <Link href="/" className={styles.brand} aria-label="Kashzo Solutions Ltd home"><span className={styles.mark} aria-hidden="true">K</span><span className={styles.brandText}><strong>KASHZO</strong><span>Solutions Ltd</span></span></Link>
      <nav className={styles.nav} aria-label="Primary navigation">{links.map(([label, href]) => <Link key={href} href={href} className={active(href) ? styles.active : ''} aria-current={active(href) ? 'page' : undefined}>{label}</Link>)}</nav>
      <div className={styles.actions}><Link href="/contact" className={styles.cta}>Start a Project <ArrowUpRight size={15}/></Link></div>
      <button className={styles.menuButton} onClick={() => setOpen(v => !v)} aria-expanded={open} aria-controls="mobile-navigation" aria-label={open ? 'Close navigation menu' : 'Open navigation menu'}>{open ? <X/> : <Menu/>}</button>
    </div>
    {open && <nav id="mobile-navigation" className={styles.mobile} aria-label="Mobile navigation">{links.map(([label, href]) => <Link key={href} href={href} onClick={() => setOpen(false)} className={active(href) ? styles.active : ''} aria-current={active(href) ? 'page' : undefined}>{label}</Link>)}<Link href="/contact" onClick={() => setOpen(false)} className={styles.cta}>Start a Project <ArrowUpRight size={16}/></Link></nav>}
  </header>;
}
