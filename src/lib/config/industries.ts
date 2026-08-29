import type { Industry } from '@/lib/types';

/**
 * Industries served by Kashzo Solutions
 * Based on actual delivered project experience
 */

export const industries: Industry[] = [
  {
    id: 'hospitality',
    name: 'Hospitality',
    description:
      'AI-powered operations, guest experience automation, and integrated booking systems for hotels, resorts, and hospitality groups.',
    relatedProjects: ['hotel-voice-agent'],
    icon: 'building',
  },
  {
    id: 'education',
    name: 'Education',
    description:
      'Digital learning platforms, student management systems, assessment tools, and educational analytics.',
    relatedProjects: ['educational-platform'],
    icon: 'book-open',
  },
  {
    id: 'health-wellness',
    name: 'Health & Wellness',
    description:
      'Service management, appointment booking, practitioner platforms, and patient-facing applications.',
    relatedProjects: ['saqinova'],
    icon: 'heart',
  },
  {
    id: 'retail',
    name: 'Retail',
    description:
      'E-commerce platforms, inventory management, point-of-sale systems, and customer engagement tools.',
    relatedProjects: [],
    icon: 'shopping-bag',
  },
  {
    id: 'ecommerce',
    name: 'E-commerce',
    description: 'Complete e-commerce solutions from storefront to operations, including payments and fulfillment.',
    relatedProjects: [],
    icon: 'shopping-cart',
  },
  {
    id: 'saas',
    name: 'SaaS',
    description:
      'Multi-tenant platforms, subscription management, billing systems, and scalable cloud infrastructure.',
    relatedProjects: ['seo-engine'],
    icon: 'cloud',
  },
  {
    id: 'professional-services',
    name: 'Professional Services',
    description: 'Client portals, project management, billing, and operations automation.',
    relatedProjects: [],
    icon: 'briefcase',
  },
  {
    id: 'real-estate',
    name: 'Real Estate',
    description: 'Property listing platforms, agent management, and client relationship systems.',
    relatedProjects: [],
    icon: 'home',
  },
  {
    id: 'logistics',
    name: 'Logistics & Delivery',
    description:
      'Route optimization, tracking, fleet management, and real-time delivery coordination.',
    relatedProjects: [],
    icon: 'truck',
  },
  {
    id: 'sales-marketing',
    name: 'Sales & Marketing',
    description:
      'Lead generation, CRM integration, sales automation, and growth analytics.',
    relatedProjects: ['voice-calling-agent', 'seo-engine'],
    icon: 'trending-up',
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    description:
      'Complex systems, knowledge management, automation, and AI integration for large organizations.',
    relatedProjects: ['rag-knowledge-assistant', 'ocr-automation'],
    icon: 'building-2',
  },
  {
    id: 'productivity',
    name: 'Productivity',
    description:
      'AI-powered assistants, document automation, workflow optimization, and collaboration tools.',
    relatedProjects: ['personal-assistant-app'],
    icon: 'zap',
  },
];

/**
 * Industries index by ID
 */
export const industriesById = Object.fromEntries(
  industries.map((industry) => [industry.id, industry])
);

/**
 * Industries with related projects populated
 */
export const industriesWithProjects = industries.map((industry) => ({
  ...industry,
  relatedProjectCount: industry.relatedProjects.length,
}));
