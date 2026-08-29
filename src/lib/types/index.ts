/**
 * Core TypeScript types for Kashzo Solutions website
 */

// ==================== Projects/Case Studies ====================
export type ProjectCategory = 'AI' | 'Web' | 'Mobile' | 'Growth';
export type ClientVisibility = 'public' | 'confidential';

export interface ProjectMetric {
  label: string;
  value: string;
}

export interface ProjectScreenshot {
  url: string;
  alt: string;
}

export interface Project {
  id: string;
  slug: string;
  title: string;
  category: ProjectCategory;
  subcategories?: string[];
  industry: string;
  summary: string;
  challenge: string;
  solution: string;
  features: string[];
  architecture?: string;
  technologies: string[];
  integrations?: string[];
  outcome: string;
  metrics?: ProjectMetric[];
  screenshots: ProjectScreenshot[];
  externalUrl?: string;
  featured: boolean;
  clientName?: string;
  clientVisibility: ClientVisibility;
  createdAt?: string;
  updatedAt?: string;
}

// ==================== Services ====================
export interface Subservice {
  title: string;
  description?: string;
}

export interface Service {
  id: string;
  title: string;
  slug: string;
  category: ProjectCategory;
  description: string;
  icon?: string;
  subservices: Subservice[];
  relatedProjects: string[];
}

// ==================== FAQs ====================
export interface FAQ {
  id: string;
  question: string;
  answer: string;
  category?: string;
}

// ==================== Technologies ====================
export interface TechCategory {
  name: string;
  icon?: string;
  technologies: string[];
}

// ==================== Industries ====================
export interface Industry {
  id: string;
  name: string;
  description: string;
  relatedProjects: string[];
  icon?: string;
}

// ==================== Contact & Forms ====================
export interface ContactFormData {
  name: string;
  email: string;
  company?: string;
  service: string;
  budgetRange?: string;
  timeline?: string;
  description: string;
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: number;
  sources?: string[];
}

export interface ChatContextData {
  projectIntent?: string;
  suggestedService?: string;
  leadQualified?: boolean;
}

// ==================== Site Configuration ====================
export interface CompanyInfo {
  name: string;
  tagline: string;
  description: string;
  email?: string;
  phone?: string;
}

export interface SocialLinks {
  linkedin?: string;
  facebook?: string;
  instagram?: string;
  x?: string;
  github?: string;
  youtube?: string;
}

export interface ColorTokens {
  primary: {
    900: string;
    800: string;
    700: string;
    600: string;
    500: string;
    400: string;
    300: string;
    200: string;
    100: string;
    50: string;
  };
  secondary: {
    white: string;
    softWhite: string;
  };
  accent: {
    main: string;
    light: string;
    dark: string;
  };
  neutral: {
    [key: string]: string;
  };
}

export interface SiteConfig {
  company: CompanyInfo;
  social: SocialLinks;
  colors: ColorTokens;
  analytics?: {
    ga4?: string;
    vercelAnalytics?: boolean;
  };
}

// ==================== Testimonial ====================
export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  country?: string;
  quote: string;
  logo?: string;
  permission: boolean;
}

// ==================== Team ====================
export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio?: string;
  image?: string;
  expertise: string[];
}
