import type { Metadata, Viewport } from 'next';
import { Playfair_Display, Poppins } from 'next/font/google';

import './globals.css';

import { SiteHeader } from '@/components/home';
import { FloatingWhatsApp } from '@/components/home/14FloatingWhatsApp';

/* =========================================================
   GLOBAL FONTS
   Same font family direction as Saqinova
========================================================= */

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-poppins',
  display: 'swap',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  style: ['normal', 'italic'],
  variable: '--font-playfair',
  display: 'swap',
});

/* =========================================================
   GLOBAL METADATA
========================================================= */

export const metadata: Metadata = {
  metadataBase: new URL('https://kashzo.com'),

  title: {
    default: 'Kashzo | Professional Websites & Digital Solutions',
    template: '%s | Kashzo',
  },

  description:
    'Kashzo creates professional websites and digital solutions for UK small businesses, sole traders and growing companies.',

  applicationName: 'Kashzo',

  authors: [
    {
      name: 'Kashzo Solutions',
      url: 'https://kashzo.com',
    },
  ],

  creator: 'Kashzo Solutions',
  publisher: 'Kashzo Solutions',

  alternates: {
    canonical: '/',
  },

  openGraph: {
    type: 'website',
    locale: 'en_GB',
    url: 'https://kashzo.com',
    siteName: 'Kashzo Solutions',

    title: 'Kashzo | Professional Websites & Digital Solutions',

    description:
      'Professional websites and digital solutions for UK small businesses.',
  },

  twitter: {
    card: 'summary_large_image',

    title: 'Kashzo | Professional Websites & Digital Solutions',

    description:
      'Professional websites and digital solutions for UK small businesses.',
  },

  robots: {
    index: true,
    follow: true,
  },
};

/* =========================================================
   MOBILE BROWSER THEME
========================================================= */

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,

  /* Kashzo deep navy */
  themeColor: '#071B45',
};

/* =========================================================
   ROOT LAYOUT
========================================================= */

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en-GB"
      className={`${poppins.variable} ${playfair.variable}`}
    >
      <body>
        <SiteHeader />

        {children}

        <FloatingWhatsApp />
      </body>
    </html>
  );
}