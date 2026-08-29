'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { Button, LinkButton } from '@/components/ui/Button';
import { siteConfig } from '@/lib/config/site-config';
import { cn } from '@/lib/utils';

/**
 * Header component - main site navigation and branding
 */
export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-neutral-200 shadow-sm">
      <Container>
        <nav className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 no-underline">
            <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary-800 text-white font-bold text-lg">
              K
            </div>
            <div className="hidden sm:block">
              <div className="font-bold text-primary-800">Kashzo</div>
              <div className="text-xs text-neutral-600 font-semibold">Solutions</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <NavLink href="/services">Services</NavLink>
            <NavLink href="/work">Work</NavLink>
            <NavLink href="/industries">Industries</NavLink>
            <NavLink href="/about">About</NavLink>
            <NavLink href="/insights">Insights</NavLink>
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-4">
            <LinkButton
              href="/contact"
              variant="primary"
              size="md"
            >
              Start a Project
            </LinkButton>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden flex items-center gap-2 text-primary-800"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </nav>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden pb-4 border-t border-neutral-200 pt-4 space-y-3">
            <MobileNavLink href="/services" onClick={() => setMobileMenuOpen(false)}>
              Services
            </MobileNavLink>
            <MobileNavLink href="/work" onClick={() => setMobileMenuOpen(false)}>
              Work
            </MobileNavLink>
            <MobileNavLink href="/industries" onClick={() => setMobileMenuOpen(false)}>
              Industries
            </MobileNavLink>
            <MobileNavLink href="/about" onClick={() => setMobileMenuOpen(false)}>
              About
            </MobileNavLink>
            <MobileNavLink href="/insights" onClick={() => setMobileMenuOpen(false)}>
              Insights
            </MobileNavLink>
            <LinkButton
              href="/contact"
              variant="primary"
              size="md"
              className="w-full justify-center"
            >
              Start a Project
            </LinkButton>
          </div>
        )}
      </Container>
    </header>
  );
}

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
}

/**
 * NavLink component for header navigation
 */
function NavLink({ href, children }: NavLinkProps) {
  return (
    <Link
      href={href}
      className="text-neutral-700 hover:text-primary-800 font-medium transition-colors duration-200 no-underline"
    >
      {children}
    </Link>
  );
}

interface MobileNavLinkProps {
  href: string;
  children: React.ReactNode;
  onClick?: () => void;
}

/**
 * MobileNavLink component for mobile header navigation
 */
function MobileNavLink({ href, children, onClick }: MobileNavLinkProps) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className="block text-neutral-700 hover:text-primary-800 font-medium py-2 transition-colors duration-200 no-underline"
    >
      {children}
    </Link>
  );
}
