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
        title: 'E-commerce Development',
        description: 'Online stores optimized for conversion and performance.',
      },
      {
        title: 'Marketplace Platforms',
        description: 'Multi-vendor, multi-buyer ecosystem platforms.',
      },
      {
        title: 'Headless Commerce',
        description: 'Flexible commerce architecture decoupled from frontend.',
      },
      {
        title: 'CMS Development',
        description: 'Custom content management systems.',
      },
      {
        title: 'API Development',
        description: 'RESTful and GraphQL APIs for system integration.',
      },
      {
        title: 'Payment Integration',
        description: 'Secure payment processing and PCI compliance.',
      },
      {
        title: 'Real-Time Applications',
        description: 'Live updates, notifications, and collaboration features.',
      },
      {
        title: 'Performance Optimization',
        description: 'Lighthouse 90+, Core Web Vitals, and load time optimization.',
      },
      {
        title: 'Cloud Deployment',
        description: 'AWS, Azure, Google Cloud, and Vercel deployments.',
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
        title: 'Real-Time Features',
        description: 'Push notifications, live data, and chat.',
      },
      {
        title: 'Maps & Geolocation',
        description: 'Location-aware features and mapping.',
      },
      {
        title: 'Performance Optimization',
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
        title: 'Content SEO',
        description: 'Content strategy and keyword optimization.',
      },
      {
        title: 'SEO Audits',
        description: 'Comprehensive site analysis and recommendations.',
      },
      {
        title: 'Google Ads',
        description: 'Paid search advertising.',
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
        title: 'Social Media Marketing',
        description: 'Strategy, content, and community management.',
      },
      {
        title: 'Content Strategy',
        description: 'Content planning, creation, and distribution.',
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
        title: 'Conversion Rate Optimization',
        description: 'Landing pages, A/B testing, and user experience.',
      },
      {
        title: 'Analytics',
        description: 'GA4, attribution, and reporting.',
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
