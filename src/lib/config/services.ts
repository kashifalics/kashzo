import type { Service } from '@/lib/types';

/**
 * Service definitions for Kashzo Solutions
 * Four main service pillars with subservices
 */

export const services: Service[] = [
  {
    id: 'ai-ml',
    title: 'AI & Machine Learning',
    slug: 'ai-machine-learning',
    category: 'AI',
    description:
      'Custom AI systems that turn business data into practical decisions and competitive advantage.',
    icon: 'brain',
    subservices: [
      {
        title: 'AI & Machine Learning Solutions',
        description: 'Custom models that deliver predictive insight and decision support.',
      },
      {
        title: 'Generative AI',
        description: 'Production-grade LLM applications for your business needs.',
      },
      {
        title: 'RAG & Enterprise Knowledge Systems',
        description: 'Ground AI answers in approved business knowledge.',
      },
      {
        title: 'AI Chatbots & Conversational AI',
        description: 'Customer and employee assistants powered by intelligent systems.',
      },
      {
        title: 'AI Voice Agents',
        description: 'Real-time voice systems for sales, service and operations.',
      },
      {
        title: 'AI Agents & Automation',
        description: 'Tool-using AI integrated with workflows and business systems.',
      },
      {
        title: 'Natural Language Processing',
        description: 'Understand and structure business language at scale.',
      },
      {
        title: 'Intelligent Document Processing',
        description: 'Automate document-heavy processes with AI.',
      },
      {
        title: 'OCR Automation',
        description: 'Extract, validate and route structured data from business documents.',
      },
      {
        title: 'Computer Vision',
        description: 'Image-based recognition and analysis.',
      },
      {
        title: 'Predictive Analytics',
        description: 'Forecasting and ML-based decision support.',
      },
      {
        title: 'Data Science & Advanced Analytics',
        description: 'Turn complex datasets into actionable insight.',
      },
      {
        title: 'AI Integration & Consulting',
        description: 'Architecture, model selection, feasibility and system integration.',
      },
    ],
    relatedProjects: [
      'hotel-voice-agent',
      'rag-knowledge-assistant',
      'seo-engine',
      'ocr-automation',
      'voice-calling-agent',
      'customer-support-agent',
      'document-processing',
      'predictive-analytics',
    ],
  },
  {
    id: 'web-dev',
    title: 'Web Development',
    slug: 'web-development',
    category: 'Web',
    description:
      'Full-stack web applications built for scale, performance and maintainability.',
    icon: 'globe',
    subservices: [
      {
        title: 'Custom Web Development',
        description: 'Bespoke applications built to your exact specifications.',
      },
      {
        title: 'Web Application Development',
        description: 'Complex, feature-rich applications for serious workflows.',
      },
      {
        title: 'Full-Stack Development',
        description: 'Complete solutions from database to user interface.',
      },
      {
        title: 'Frontend Development',
        description: 'High-performance, accessible user interfaces.',
      },
      {
        title: 'Backend Development',
        description: 'Robust, scalable server-side systems.',
      },
      {
        title: 'SaaS Development',
        description: 'Multi-tenant platforms with subscription infrastructure.',
      },
      {
        title: 'Enterprise Applications',
        description: 'Secure business systems for complex teams and workflows.',
      },
      {
        title: 'E-commerce Development',
        description: 'Online stores optimized for conversion and performance.',
      },
      {
        title: 'Multi-Vendor Marketplaces',
        description: 'Multi-vendor, multi-buyer ecosystem platforms.',
      },
      {
        title: 'Headless Commerce',
        description: 'Flexible commerce architecture decoupled from frontend.',
      },
      {
        title: 'Shopify Development',
        description: 'Professional Shopify storefronts, themes and integrations.',
      },
      {
        title: 'WooCommerce Development',
        description: 'Flexible WordPress commerce experiences and integrations.',
      },
      {
        title: 'WordPress Development',
        description: 'Maintainable business websites built around editorial needs.',
      },
      {
        title: 'CMS Development',
        description: 'Custom and headless content management systems.',
      },
      {
        title: 'API Development',
        description: 'RESTful and GraphQL APIs for system integration.',
      },
      {
        title: 'API Integrations',
        description: 'Connect products securely with third-party platforms and data.',
      },
      {
        title: 'CRM Integrations',
        description: 'Connect leads, customers and workflows with CRM platforms.',
      },
      {
        title: 'Payment Integrations',
        description: 'Secure payment processing and PCI compliance.',
      },
      {
        title: 'Customer Portals',
        description: 'Secure self-service experiences for customers and partners.',
      },
      {
        title: 'Admin Dashboards',
        description: 'Operational interfaces for data, content and workflow control.',
      },
      {
        title: 'Progressive Web Apps',
        description: 'Installable, responsive web experiences with app-like capability.',
      },
      {
        title: 'Website Redesign',
        description: 'Modernise structure, experience and visual presentation.',
      },
      {
        title: 'Technical SEO Implementation',
        description: 'Build search-ready foundations into architecture and delivery.',
      },
      {
        title: 'Accessibility Improvements',
        description: 'Improve inclusive use against WCAG-aligned standards.',
      },
      {
        title: 'Performance Optimisation',
        description: 'Improve Core Web Vitals, loading and runtime performance.',
      },
      {
        title: 'Cloud Deployment',
        description: 'AWS, Azure, Google Cloud, and Vercel deployments.',
      },
      {
        title: 'DevOps',
        description: 'Automated delivery, infrastructure and release workflows.',
      },
      {
        title: 'Maintenance & Support',
        description: 'Ongoing product care, monitoring and iterative improvement.',
      },
    ],
    relatedProjects: [
      'educational-platform',
      'saqinova',
      'enterprise-saas',
      'multi-vendor-marketplace',
      'b2b-portal',
      'real-estate-platform',
      'headless-ecommerce',
    ],
  },
  {
    id: 'mobile-dev',
    title: 'Mobile App Development',
    slug: 'mobile-app-development',
    category: 'Mobile',
    description: 'Native and cross-platform apps that users love to use.',
    icon: 'smartphone',
    subservices: [
      {
        title: 'iOS Development',
        description: 'Native Apple applications.',
      },
      {
        title: 'Android Development',
        description: 'Native Android applications.',
      },
      {
        title: 'Cross-Platform Development',
        description: 'Single codebase for multiple platforms.',
      },
      {
        title: 'Flutter Development',
        description: 'Fast, beautiful apps with Flutter.',
      },
      {
        title: 'React Native Development',
        description: 'JavaScript-based cross-platform apps.',
      },
      {
        title: 'AI-Powered Mobile Apps',
        description: 'Mobile applications with integrated AI capabilities.',
      },
      {
        title: 'Enterprise Mobile Apps',
        description: 'Complex applications for business workflows.',
      },
      {
        title: 'E-commerce Apps',
        description: 'Mobile shopping experiences.',
      },
      {
        title: 'Marketplace Apps',
        description: 'Mobile products connecting customers, vendors and operators.',
      },
      {
        title: 'On-Demand Applications',
        description: 'Uber-style service platforms.',
      },
      {
        title: 'MVP Development',
        description: 'Rapid prototyping and minimum viable products.',
      },
      {
        title: 'Mobile Backend Development',
        description: 'Serverless and containerized backends.',
      },
      {
        title: 'Payments',
        description: 'Secure in-app checkout and payment workflows.',
      },
      {
        title: 'Authentication',
        description: 'Secure onboarding, identity and account access.',
      },
      {
        title: 'Push Notifications',
        description: 'Timely transactional and engagement messaging.',
      },
      {
        title: 'Real-Time Features',
        description: 'Push notifications, live data, and chat.',
      },
      {
        title: 'Maps & Geolocation',
        description: 'Location-aware features and mapping.',
      },
      {
        title: 'Chat',
        description: 'Real-time customer, provider and team conversations.',
      },
      {
        title: 'Mobile UI/UX',
        description: 'Accessible, platform-aware mobile product experiences.',
      },
      {
        title: 'Performance Optimisation',
        description: 'Battery-efficient, fast-loading applications.',
      },
      {
        title: 'App Maintenance',
        description: 'Ongoing support and updates.',
      },
    ],
    relatedProjects: [
      'on-demand-services-app',
      'personal-assistant-app',
      'ecommerce-mobile-app',
      'logistics-system',
    ],
  },
  {
    id: 'digital-marketing',
    title: 'Digital Marketing & Growth',
    slug: 'digital-marketing',
    category: 'Growth',
    description:
      'Strategic digital marketing and growth automation integrated with your software.',
    icon: 'trending-up',
    subservices: [
      {
        title: 'SEO',
        description: 'Organic search visibility and rankings.',
      },
      {
        title: 'Technical SEO',
        description: 'Site architecture, performance, and crawlability.',
      },
      {
        title: 'Local SEO',
        description: 'Geographic targeting and local search.',
      },
      {
        title: 'On-Page SEO',
        description: 'Search-focused page structure, content and metadata.',
      },
      {
        title: 'Content SEO',
        description: 'Content strategy and keyword optimization.',
      },
      {
        title: 'SEO Audits',
        description: 'Comprehensive site analysis and recommendations.',
      },
      {
        title: 'Keyword Research',
        description: 'Prioritised search demand and opportunity analysis.',
      },
      {
        title: 'Content Strategy',
        description: 'Content planning aligned with audiences and acquisition goals.',
      },
      {
        title: 'Google Ads',
        description: 'Paid search advertising.',
      },
      {
        title: 'PPC',
        description: 'Managed pay-per-click acquisition across relevant channels.',
      },
      {
        title: 'Meta Ads',
        description: 'Facebook and Instagram advertising.',
      },
      {
        title: 'Paid Social',
        description: 'LinkedIn, TikTok, and other social platforms.',
      },
      {
        title: 'Facebook Advertising',
        description: 'Targeted Facebook campaigns aligned with commercial goals.',
      },
      {
        title: 'Instagram Advertising',
        description: 'Creative and conversion-led Instagram campaigns.',
      },
      {
        title: 'LinkedIn Advertising',
        description: 'B2B audience targeting and lead-generation campaigns.',
      },
      {
        title: 'Social Media Marketing',
        description: 'Strategy, content, and community management.',
      },
      {
        title: 'Social Media Management',
        description: 'Planned publishing, community activity and channel oversight.',
      },
      {
        title: 'Content Creation',
        description: 'Useful campaign and channel content for defined audiences.',
      },
      {
        title: 'Copywriting',
        description: 'Clear conversion-focused messaging across digital journeys.',
      },
      {
        title: 'Email Marketing',
        description: 'Email campaigns and automation.',
      },
      {
        title: 'Marketing Automation',
        description: 'Workflows, lead nurturing, and CRM integration.',
      },
      {
        title: 'Lead Generation',
        description: 'Systems to capture and qualify leads.',
      },
      {
        title: 'Performance Marketing',
        description: 'Acquisition programmes managed against measurable outcomes.',
      },
      {
        title: 'Landing Page Optimisation',
        description: 'Improve message clarity, experience and campaign conversion.',
      },
      {
        title: 'Conversion Rate Optimisation',
        description: 'Landing pages, A/B testing, and user experience.',
      },
      {
        title: 'Analytics',
        description: 'GA4, attribution, and reporting.',
      },
      {
        title: 'Reporting',
        description: 'Clear performance reporting tied to agreed objectives.',
      },
      {
        title: 'Attribution',
        description: 'Understand how channels and touchpoints support conversion.',
      },
      {
        title: 'Retargeting',
        description: 'Re-engage relevant audiences across paid channels.',
      },
      {
        title: 'Online Reputation Management',
        description: 'Monitor and strengthen trust across digital touchpoints.',
      },
      {
        title: 'Digital Growth Strategy',
        description: 'Connect channels, measurement and experimentation into a focused plan.',
      },
    ],
    relatedProjects: [
      'seo-engine',
      'b2b-lead-generation',
      'ecommerce-performance',
      'seo-growth-programme',
      'local-business-growth',
    ],
  },
];

/**
 * Service index by slug for quick lookup
 */
export const servicesBySlug = Object.fromEntries(
  services.map((service) => [service.slug, service])
);

/**
 * Service index by category for grouping
 */
export const servicesByCategory = Object.fromEntries(
  ['AI', 'Web', 'Mobile', 'Growth'].map((category) => [
    category,
    services.filter((s) => s.category === category),
  ])
);
