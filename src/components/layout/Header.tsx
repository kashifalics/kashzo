'use client';

import { ArrowUpRight, Menu, X } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import styles from './Header.module.css';

const links = [['Home', '/'], ['Services', '/services'], ['Work', '/work'], ['Industries', '/industries'], ['About', '/about'], ['Insights', '/insights']] as const;

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 18);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const panel = panelRef.current;
    panel?.querySelector<HTMLElement>('[data-autofocus]')?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setOpen(false);
        requestAnimationFrame(() => menuButtonRef.current?.focus());
        return;
      }
      if (event.key !== 'Tab' || !panel) return;
      const focusable = Array.from(panel.querySelectorAll<HTMLElement>('a[href],button:not([disabled])'));
      if (!focusable.length) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener('keydown', onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener('keydown', onKeyDown);
    };
  }, [open]);

  useEffect(() => {
    const desktop = window.matchMedia('(min-width: 901px)');
    const closeOnDesktop = (event: MediaQueryListEvent) => {
      if (event.matches) setOpen(false);
    };
    desktop.addEventListener('change', closeOnDesktop);
    return () => desktop.removeEventListener('change', closeOnDesktop);
  }, []);

  const active = (href: string) => href === '/' ? pathname === '/' : pathname.startsWith(href);
  const closeMenu = () => setOpen(false);
  const closeMenuAndRestoreFocus = () => {
    setOpen(false);
    requestAnimationFrame(() => menuButtonRef.current?.focus());
  };

  return <>
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.inner}>
        <Link href="/" className={styles.brand} aria-label="Kashzo Solutions Ltd home"><span className={styles.mark} aria-hidden="true">K</span><span className={styles.brandText}><strong>KASHZO</strong><span>Solutions Ltd</span></span></Link>
        <nav className={styles.nav} aria-label="Primary navigation">{links.map(([label, href]) => <Link key={href} href={href} className={active(href) ? styles.active : ''} aria-current={active(href) ? 'page' : undefined}>{label}</Link>)}</nav>
        <div className={styles.actions}><Link href="/contact" className={styles.cta}>Start a Project <ArrowUpRight size={15} /></Link></div>
        <button ref={menuButtonRef} className={styles.menuButton} onClick={() => setOpen((value) => !value)} aria-expanded={open} aria-controls="mobile-navigation-panel" aria-label={open ? 'Close navigation menu' : 'Open navigation menu'}>{open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}</button>
      </div>
    </header>

    {open && <>
      <button type="button" className={styles.overlay} onClick={closeMenuAndRestoreFocus} aria-label="Close navigation menu" tabIndex={-1} />
      <div ref={panelRef} id="mobile-navigation-panel" className={styles.mobilePanel} role="dialog" aria-modal="true" aria-label="Mobile navigation">
        <div className={styles.mobileTop}><span>Navigation</span><button type="button" onClick={closeMenuAndRestoreFocus} aria-label="Close navigation menu"><X aria-hidden="true" /></button></div>
        <nav className={styles.mobile} aria-label="Mobile navigation">{links.map(([label, href], index) => <Link key={href} href={href} onClick={closeMenu} className={active(href) ? styles.active : ''} aria-current={active(href) ? 'page' : undefined} data-autofocus={index === 0 ? true : undefined}>{label}</Link>)}<Link href="/contact" onClick={closeMenu} className={styles.cta}>Start a Project <ArrowUpRight size={16} /></Link></nav>
      </div>
    </>}
  </>;
}
