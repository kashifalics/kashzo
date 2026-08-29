import React from 'react';
import Link from 'next/link';
import { Container, Grid } from '@/components/ui/Container';
import { siteConfig } from '@/lib/config/site-config';
import { cn } from '@/lib/utils';

/**
 * Footer component - site footer with links and company info
 */
export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary-900 text-white pt-16 md:pt-24 pb-8">
      <Container>
        {/* Main Footer Content */}
        <Grid cols={4} gap="lg" className="mb-12 md:mb-16">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-1">
            <Link href="/" className="flex items-center gap-2 no-underline mb-4">
              <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-accent-main text-primary-900 font-bold text-lg">
                K
              </div>
              <div>
                <div className="font-bold text-white">Kashzo</div>
                <div className="text-xs text-primary-200">Solutions Ltd</div>
              </div>
            </Link>
            <p className="text-sm text-primary-100 leading-relaxed">
              Engineering intelligent digital products that perform.
            </p>
          </div>

          {/* Services Links */}
          <div className="col-span-1">
            <h4 className="font-semibold text-white mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <FooterLink href="/services/ai-machine-learning">
                  AI & Machine Learning
                </FooterLink>
              </li>
              <li>
                <FooterLink href="/services/web-development">
                  Web Development
                </FooterLink>
              </li>
              <li>
                <FooterLink href="/services/mobile-app-development">
                  Mobile Apps
                </FooterLink>
              </li>
              <li>
                <FooterLink href="/services/digital-marketing">
                  Digital Marketing
                </FooterLink>
              </li>
            </ul>
          </div>

          {/* Company Links */}
          <div className="col-span-1">
            <h4 className="font-semibold text-white mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <FooterLink href="/about">About</FooterLink>
              </li>
              <li>
                <FooterLink href="/work">Work</FooterLink>
              </li>
              <li>
                <FooterLink href="/industries">Industries</FooterLink>
              </li>
              <li>
                <FooterLink href="/insights">Insights</FooterLink>
              </li>
              <li>
                <FooterLink href="/contact">Contact</FooterLink>
              </li>
            </ul>
          </div>

          {/* Legal Links */}
          <div className="col-span-1">
            <h4 className="font-semibold text-white mb-4">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <FooterLink href="/privacy-policy">Privacy</FooterLink>
              </li>
              <li>
                <FooterLink href="/cookie-policy">Cookies</FooterLink>
              </li>
              <li>
                <FooterLink href="/terms">Terms</FooterLink>
              </li>
            </ul>
          </div>
        </Grid>

        {/* Footer Bottom */}
        <div className="border-t border-primary-700 pt-8 mt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Copyright */}
            <p className="text-sm text-primary-200">
              © {currentYear} Kashzo Solutions Ltd. All rights reserved.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-6">
              {siteConfig.social.linkedin && (
                <SocialLink
                  href={siteConfig.social.linkedin}
                  label="LinkedIn"
                  icon={<LinkedInIcon />}
                />
              )}
              {siteConfig.social.facebook && (
                <SocialLink
                  href={siteConfig.social.facebook}
                  label="Facebook"
                  icon={<FacebookIcon />}
                />
              )}
              {siteConfig.social.instagram && (
                <SocialLink
                  href={siteConfig.social.instagram}
                  label="Instagram"
                  icon={<InstagramIcon />}
                />
              )}
              {siteConfig.social.x && (
                <SocialLink
                  href={siteConfig.social.x}
                  label="X"
                  icon={<XIcon />}
                />
              )}
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}

interface FooterLinkProps {
  href: string;
  children: React.ReactNode;
}

/**
 * FooterLink component
 */
function FooterLink({ href, children }: FooterLinkProps) {
  return (
    <Link
      href={href}
      className="text-primary-100 hover:text-accent-main transition-colors duration-200 no-underline"
    >
      {children}
    </Link>
  );
}

interface SocialLinkProps {
  href: string;
  label: string;
  icon: React.ReactNode;
}

/**
 * SocialLink component
 */
function SocialLink({ href, label, icon }: SocialLinkProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="text-primary-200 hover:text-accent-main transition-colors duration-200"
    >
      {icon}
    </a>
  );
}

/**
 * Social Media Icons
 */
function LinkedInIcon() {
  return (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.521 17.34c-.24.65-.934 1.035-1.667.9-.712-.13-1.642-.715-1.642-.715-.624-.434-1.266-.5-1.927-.5-.776 0-1.578.065-2.468.312-.537.143-1.546.217-2.138-.472-.528-.444-.635-1.653-.74-2.524-.106-.872-.04-2.605.562-3.947.299-.584.659-1.529 1.541-2.365.853-.825 2.023-1.135 3.041-1.029 1.051.106 1.063.445 1.599 1.657.339.795.692 1.453 1.223 2.491.061.147.301.435.603.58.31.152.743.331 1.148.273.405-.058 1.016-.383 1.368-.778.264-.267.383-.646.299-1.007-.082-.359-.298-.646-.56-.872-.447-.413-.998-.957-1.374-1.318-.438-.447-.502-.499-.624-.893-.139-.425-.156-1.235.124-1.846.283-.621.779-1.51 1.313-1.944C20.33 6.375 21 6.25 21.5 6.25c.975 0 1.854.266 2.488 1.009.434.5.757 1.122.82 1.96.03.384-.126.778-.39 1.022-.564.517-1.735.145-2.193-.42-.597-.717-.942-1.159-1.238-1.566-.159-.2-.481-.365-.755-.365-.274 0-.616.165-.755.365-.296.407-.641.849-1.238 1.566-.458.565-1.629.937-2.193.42-.264-.244-.42-.638-.39-1.022.063-.838.386-1.46.82-1.96.634-.743 1.513-1.009 2.488-1.009.5 0 1.17.125 1.684.375.534.266 1.03.715 1.313 1.944.28.611.263 1.421.124 1.846-.122.394-.186.446-.624.893-.376.361-.927.905-1.374 1.318-.262.226-.478.513-.56.872-.084.361.035.74.299 1.007.352.395.963.72 1.368.778.405.058.838-.121 1.148-.273.302-.145.542-.433.603-.58.531-1.038.884-1.696 1.223-2.491.536-1.212.548-1.551 1.599-1.657 1.018-.106 2.188.204 3.041 1.029.882.836 1.242 1.781 1.541 2.365.602 1.342.668 3.075.562 3.947-.105.871-.212 2.08-.74 2.524-.592.689-1.601.615-2.138.472-.89-.247-1.692-.312-2.468-.312-.661 0-1.303.066-1.927.5 0 0-.93.585-1.642.715-.733.135-1.427-.25-1.667-.9-.118-.31-.202-.776-.202-.953 0-.177.084-.643.202-.953z" />
    </svg>
  );
}

function XIcon() {
  return (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24h-6.657l-5.207-6.807-5.966 6.807h-3.328l7.732-8.835-8.17-10.665h6.588l4.72 6.23 5.412-6.23zM17.55 19.905h1.833L5.555 4.043H3.574l13.976 15.862z" />
    </svg>
  );
}
