import type { FAQ } from '@/lib/types';

/**
 * Frequently Asked Questions for Kashzo Solutions
 */

export const faqs: FAQ[] = [
  {
    id: 'faq-1',
    question: 'What types of software does Kashzo build?',
    answer:
      'We build full-stack web applications, mobile apps, SaaS platforms, e-commerce systems, AI-powered solutions, and custom integrations. Our expertise spans frontend, backend, cloud architecture, and real-time systems.',
    category: 'General',
  },
  {
    id: 'faq-2',
    question: 'Do you build production AI systems?',
    answer:
      'Yes. We build production-grade AI systems including voice agents, RAG systems, generative AI applications, machine learning models, and automated workflows. Not ChatGPT wrappers—real, integrated AI that connects to your business systems.',
    category: 'AI',
  },
  {
    id: 'faq-3',
    question: 'Can Kashzo integrate AI into existing software?',
    answer:
      'Yes. We design and implement AI capabilities into existing applications through API integrations, system modifications, and new feature development. We assess your current architecture and plan integration carefully.',
    category: 'AI',
  },
  {
    id: 'faq-4',
    question: 'Do you build RAG systems?',
    answer:
      'Yes. We build enterprise RAG (Retrieval-Augmented Generation) systems that ground AI responses in your business knowledge. These systems ingest documents, create embeddings, retrieve context semantically, and generate verified answers.',
    category: 'AI',
  },
  {
    id: 'faq-5',
    question: 'Can you build AI voice agents?',
    answer:
      'Yes. We build production voice agents for customer service, sales, support, and operations. These systems handle real-time conversation, tool calling, CRM integration, and escalation to humans.',
    category: 'AI',
  },
  {
    id: 'faq-6',
    question: 'Can you take over an existing application?',
    answer:
      'Yes. We take on complete ownership of existing applications including ongoing development, maintenance, optimization, and feature expansion. We assess the codebase, improve architecture where needed, and maintain service quality.',
    category: 'Engagement',
  },
  {
    id: 'faq-7',
    question: 'Do you provide ongoing support?',
    answer:
      'Yes. Beyond launch, we offer maintenance, monitoring, optimization, scaling support, and ongoing development. We keep your systems performant, secure, and aligned with your business needs.',
    category: 'Engagement',
  },
  {
    id: 'faq-8',
    question: 'Can you work with an existing development team?',
    answer:
      'Yes. We work effectively as extended teams, supplementing existing staff, mentoring junior developers, or providing specialized expertise. We integrate into your development processes and communication.',
    category: 'Engagement',
  },
  {
    id: 'faq-9',
    question: 'Do you build MVPs?',
    answer:
      'Yes. We build minimum viable products optimized for learning and validation. MVPs are scoped, focused, and delivered quickly while maintaining code quality and architecture for future scale.',
    category: 'Project Type',
  },
  {
    id: 'faq-10',
    question: 'Do you work with international businesses?',
    answer:
      'Yes. We have extensive experience delivering projects to international businesses. We operate across time zones, handle distributed teams, and understand global requirements around compliance, data, and operations.',
    category: 'Engagement',
  },
  {
    id: 'faq-11',
    question: 'How does a project begin?',
    answer:
      'We start with discovery: understanding your business, goals, users, workflows, technical context, and requirements. We then propose architecture, timeline, and approach for your review and approval before development begins.',
    category: 'Process',
  },
  {
    id: 'faq-12',
    question: 'Who owns the code after delivery?',
    answer:
      'You own all code, assets, and intellectual property created during the engagement. You have complete freedom to modify, integrate, deploy, or transfer the code as you need.',
    category: 'Legal',
  },
  {
    id: 'faq-13',
    question: 'How is confidential information handled?',
    answer:
      'We take confidentiality seriously. We sign NDAs, isolate client data, limit access, use secure communication, and follow industry best practices for data security. Details are discussed and formalized before engagement.',
    category: 'Legal',
  },
  {
    id: 'faq-14',
    question: 'Do you provide digital marketing after development?',
    answer:
      'Yes. Digital marketing and growth is one of our core service pillars. We integrate SEO, content strategy, paid advertising, and automation into your software architecture for sustainable growth.',
    category: 'Services',
  },
  {
    id: 'faq-15',
    question: 'What is your typical project timeline?',
    answer:
      'Timelines vary significantly based on scope, complexity, team size, and your availability. MVPs typically take 2-4 months. Complex systems take 4-12+ months. We provide detailed estimates during discovery and planning.',
    category: 'Project',
  },
];

/**
 * FAQs grouped by category for display
 */
export const faqsByCategory = Object.fromEntries(
  ['General', 'AI', 'Engagement', 'Project Type', 'Process', 'Legal', 'Services', 'Project'].map(
    (category) => [category, faqs.filter((faq) => faq.category === category)]
  )
);

/**
 * FAQ index by ID
 */
export const faqsById = Object.fromEntries(faqs.map((faq) => [faq.id, faq]));
