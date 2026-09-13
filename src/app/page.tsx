import type { Metadata } from 'next';

import { HeroSection } from '@/components/home/2HeroSection';
import { TrustSection } from '@/components/home/3TrustSection';
import { PricingSection } from '@/components/home/4PricingSection';
import { BusinessSection } from '@/components/home/5BusinessSection';
import { PortfolioSection } from '@/components/home/6PortfolioSection';
import { ProcessSection } from '@/components/home/7ProcessSection';
import { ReviewsSection } from '@/components/home/8ReviewsSection';
import { ServicesSection } from '@/components/home/9ServicesSection';
import { FounderSection } from '@/components/home/10FounderSection';
import { FAQSection } from '@/components/home/11FAQSection';
import { FinalCTA } from '@/components/home/12FinalCTA';
import { SocialFooter } from '@/components/home/13SocialFooter';


export const metadata: Metadata = {
  title:
    'Professional Websites & AI Solutions for UK Businesses | Kashzo Solutions',

  description:
    'Kashzo creates professional websites, e-commerce stores, AI chatbots, voice agents, automation and digital solutions for UK businesses.',
};


export default function HomePage() {
  return (
    <main>
      <HeroSection />

      <TrustSection />

      <PricingSection />

      <BusinessSection />

      <PortfolioSection />

      <ProcessSection />

      <ReviewsSection />

      <ServicesSection />

      <FounderSection />

      <FAQSection />

      <FinalCTA />

      <SocialFooter />
    </main>
  );
}