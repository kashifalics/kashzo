import type { SiteConfig } from '@/lib/types';

export const socialLinks = {
  linkedin: 'https://www.linkedin.com/company/kashzo-solutions/',
  facebook: 'https://www.facebook.com/Kashzosolutions/',
  instagram: 'https://www.instagram.com/kashzosolutions/',
};

export const whatsappConfig = {
  number: '447405104696',
  message: "Hi Kashzo Solutions, I'm interested in your services and would like to discuss a project.",
};

/**
 * Global site configuration for Kashzo Solutions
 * Update this file with final company information
 */

export const siteConfig: SiteConfig = {
  company: {
    name: 'Kashzo Solutions Ltd',
    tagline: 'We engineer intelligent digital products that perform.',
    description:
      'Kashzo designs, builds and deploys AI systems, software platforms, mobile applications and digital growth solutions for modern businesses.',
    email: 'info@kashzo.com', // TODO: Update with actual email
    phone: undefined, // TODO: Add phone if needed
  },
  social: socialLinks,
  colors: {
    primary: {
      900: '#04111F', // Darkest navy
      800: '#071A2D', // Deep navy
      700: '#0A2342',
      600: '#0D2B55',
      500: '#103368',
      400: '#2A5FA0',
      300: '#5483C4',
      200: '#80A8D8',
      100: '#B8CCEC',
      50: '#E8F0F8',
    },
    secondary: {
      white: '#FFFFFF',
      softWhite: '#F4F6F8',
    },
    accent: {
      main: '#C7A15A', // Warm metallic gold
      light: '#E0C07A',
      dark: '#8B6F3A',
    },
    neutral: {
      gray900: '#1A1D23',
      gray800: '#2D3139',
      gray700: '#404855',
      gray600: '#53596E',
      gray500: '#6B7280',
      gray400: '#9CA3AF',
      gray300: '#D1D5DB',
      gray200: '#E5E7EB',
      gray100: '#F3F4F6',
    },
  },
  analytics: {
    ga4: process.env.NEXT_PUBLIC_GA4_ID, // TODO: Add GA4 ID
    vercelAnalytics: true,
  },
};

/**
 * Site metadata for SEO
 */
export const siteMetadata = {
  title: 'Kashzo Solutions Ltd - AI & Software Engineering',
  description:
    'We design, build and deploy AI systems, production software, mobile applications and digital growth solutions for modern businesses.',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://kashzo.vercel.app',
  ogImage: '/brand/kashzo-og.png',
};

/**
 * Feature flags
 */
export const features = {
  chatbotEnabled: false, // Disabled for public launch
  analyticsEnabled: true,
  testimonialsSectionEnabled: false, // Enable when testimonials are approved
  teamSectionEnabled: false, // Enable when team info is available
};
