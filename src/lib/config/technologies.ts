import type { TechCategory } from '@/lib/types';

/**
 * Kashzo Solutions technology ecosystem
 * Organized by category for easy display and filtering
 */

export const technologyCategories: TechCategory[] = [
  {
    name: 'AI & ML',
    technologies: [
      'OpenAI',
      'Anthropic',
      'Gemini',
      'LangChain',
      'LangGraph',
      'Hugging Face',
      'TensorFlow',
      'PyTorch',
      'scikit-learn',
    ],
  },
  {
    name: 'Backend',
    technologies: ['Python', 'FastAPI', 'Django', 'Node.js', 'Express', 'GoLang'],
  },
  {
    name: 'Frontend',
    technologies: ['React', 'Next.js', 'TypeScript', 'JavaScript', 'HTML', 'CSS'],
  },
  {
    name: 'Cloud Infrastructure',
    technologies: ['AWS', 'Azure', 'Google Cloud', 'Vercel', 'Docker', 'Kubernetes'],
  },
  {
    name: 'Databases',
    technologies: [
      'PostgreSQL',
      'Supabase',
      'MongoDB',
      'Redis',
      'Elasticsearch',
      'Vector Databases',
      'pgvector',
    ],
  },
  {
    name: 'Mobile',
    technologies: ['Flutter', 'React Native', 'iOS', 'Android', 'Swift', 'Kotlin'],
  },
  {
    name: 'Automation',
    technologies: ['n8n', 'Make', 'Zapier', 'REST APIs', 'GraphQL', 'Webhooks'],
  },
  {
    name: 'E-commerce',
    technologies: ['Shopify', 'WooCommerce', 'Commerce.js', 'Stripe', 'PayPal'],
  },
  {
    name: 'SEO & Analytics',
    technologies: ['Google Analytics', 'Vercel Analytics', 'Segment', 'Airtable', 'DataBox'],
  },
  {
    name: 'Developer Tools',
    technologies: [
      'Git',
      'GitHub',
      'Vercel',
      'Turborepo',
      'ESLint',
      'Jest',
      'Playwright',
      'VS Code',
    ],
  },
];

/**
 * Flat array of all supported technologies for quick reference
 */
export const allTechnologies = technologyCategories.flatMap((cat) => cat.technologies);

/**
 * Technology lookup by name
 */
export const technologyMap = Object.fromEntries(
  technologyCategories.map((category) => [
    category.name,
    category.technologies,
  ])
);
