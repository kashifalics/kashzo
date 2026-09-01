'use client';

import { ArrowUpRight, Menu, X } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import { BrandLockup } from './BrandLockup';
import styles from './Header.module.css';

const links = [['Home', '/'], ['Services', '/services'], ['Work', '/work'], ['About', '/about'], ['Contact', '/contact']] as const;

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const lockedScrollY = useRef(0);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 18);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;

    const body = document.body;
    const root = document.documentElement;
    const previousBodyStyles = {
      position: body.style.position,
      top: body.style.top,
      right: body.style.right,
      left: body.style.left,
      width: body.style.width,
      overflow: body.style.overflow,
      paddingRight: body.style.paddingRight,
    };
    const previousRootStyles = {
      overflow: root.style.overflow,
      overscrollBehavior: root.style.overscrollBehavior,
      scrollBehavior: root.style.scrollBehavior,
    };
    const scrollbarWidth = window.innerWidth - root.clientWidth;

    lockedScrollY.current = window.scrollY;
    body.style.position = 'fixed';
    body.style.top = `-${lockedScrollY.current}px`;
    body.style.right = '0';
    body.style.left = '0';
    body.style.width = '100%';
    body.style.overflow = 'hidden';
    if (scrollbarWidth > 0) {
      body.style.paddingRight = `${scrollbarWidth}px`;
    }
    root.style.overflow = 'hidden';
    root.style.overscrollBehavior = 'none';

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
      document.removeEventListener('keydown', onKeyDown);
      Object.assign(body.style, previousBodyStyles);
      root.style.overflow = previousRootStyles.overflow;
      root.style.overscrollBehavior = previousRootStyles.overscrollBehavior;
      root.style.scrollBehavior = 'auto';
      window.scrollTo(0, lockedScrollY.current);
      requestAnimationFrame(() => {
        root.style.scrollBehavior = previousRootStyles.scrollBehavior;
      });
    };
  }, [open]);

  useEffect(() => {
    const desktop = window.matchMedia('(min-width: 1041px)');
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
        <Link href="/" className={styles.brand} aria-label="Kashzo Solutions home">
          <BrandLockup preload />
        </Link>
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
