import type { Project } from '@/lib/types';

/**
 * Kashzo Solutions portfolio projects and case studies
 * All projects are real delivered team projects
 * Only verified information included
 */

export const projects: Project[] = [
  {
    id: 'hotel-voice-agent',
    slug: 'hotel-management-voice-agent',
    title: 'AI-Powered Hotel Voice Management & Ordering System',
    category: 'AI',
    subcategories: ['Conversational AI', 'Automation'],
    industry: 'Hospitality',
    featured: true,
    clientVisibility: 'confidential',
    summary:
      'A production AI voice-agent system that handles guest conversations naturally and connects spoken requests directly to hotel systems.',
    challenge:
      'Hotel guests frequently rely on reception or room-service staff for menu questions, room-service ordering, service enquiries, and order status checks. This increases operational workload and introduces delays.',
    solution:
      'A voice-agent system capable of handling multi-turn guest conversations naturally while integrating with hotel operations, order management, and notification systems.',
    features: [
      'Real-time voice conversations',
      'Hotel/service knowledge retrieval',
      'Room-service menu search',
      'RAG-powered menu/service knowledge',
      'Structured order taking',
      'Authoritative menu pricing',
      'Room and customer validation',
      'Order creation with duplicate protection',
      'Order lifecycle management',
      'Staff notifications',
      'Database persistence',
      'Backend APIs',
      'Automated workflows',
      'Human escalation architecture',
    ],
    architecture:
      'Guest Call → Voice AI Agent → RAG / Tool Calling → FastAPI Backend → Supabase/PostgreSQL → Order Management → n8n → Hotel Staff Notifications',
    technologies: ['Voice AI', 'Vapi', 'Python', 'FastAPI', 'OpenAI', 'Embeddings', 'RAG'],
    integrations: ['Supabase', 'PostgreSQL', 'n8n', 'REST APIs', 'Webhooks'],
    outcome: 'Production voice system delivering guest-facing AI capability with integrated backend automation.',
    screenshots: [],
  },
  {
    id: 'rag-knowledge-assistant',
    slug: 'enterprise-rag-knowledge-assistant',
    title: 'Enterprise RAG Knowledge Assistant',
    category: 'AI',
    subcategories: ['Generative AI', 'Knowledge Systems'],
    industry: 'Enterprise',
    featured: true,
    clientVisibility: 'confidential',
    summary:
      'An enterprise knowledge assistant combining semantic retrieval with LLM generation to provide employees and customers quick access to dispersed knowledge.',
    challenge:
      'Knowledge is dispersed across PDFs, policies, manuals, documentation, databases and internal resources. Employees and customers struggle to locate answers quickly and accurately.',
    solution:
      'Production RAG system that ingests knowledge assets, creates semantic embeddings, retrieves relevant context, and generates accurate responses grounded in verified information.',
    features: [
      'Document ingestion pipeline',
      'Text processing and chunking',
      'Semantic embeddings',
      'Vector search',
      'Contextual generation',
      'Source citations',
      'Conversation memory',
      'Metadata filtering',
      'Admin knowledge management',
      'Analytics and evaluation',
      'Permission-based access',
      'Conversation history',
    ],
    technologies: ['Python', 'FastAPI', 'OpenAI', 'Anthropic', 'LangChain', 'LangGraph'],
    integrations: ['Supabase', 'PostgreSQL', 'pgvector', 'Next.js'],
    outcome: 'Enterprise knowledge system that transforms dispersed information into instant, grounded answers.',
    screenshots: [],
  },
  {
    id: 'seo-engine',
    slug: 'seo-performance-optimisation-engine',
    title: 'AI-Powered SEO Performance Optimisation Engine',
    category: 'AI',
    subcategories: ['AI & Automation', 'Marketing & Growth'],
    industry: 'SaaS',
    featured: true,
    clientVisibility: 'confidential',
    summary:
      'An enterprise SEO platform designed to analyse websites, organise search opportunities and automate portions of technical and content optimisation.',
    challenge:
      'Fragmented manual SEO operations lack structure and scalability. Businesses need unified intelligence across technical audits, keyword discovery, and optimisation recommendations.',
    solution:
      'An intelligent SEO platform that performs automated website analysis, discovers optimisation opportunities, and provides actionable recommendations powered by AI.',
    features: [
      'Website audits',
      'Technical SEO analysis',
      'Keyword discovery',
      'Keyword clustering',
      'Content analysis',
      'Optimisation recommendations',
      'Schema generation/optimisation',
      'Technical issue identification',
      'Multi-site support',
      'Analytics integration',
      'CRM integration',
      'Attribution support',
      'Governance',
      'Scalable automation',
    ],
    architecture:
      'Data Ingestion → Crawling/Audit Pipeline → AI/ML Analysis → Keyword Processing → Rules Engine → Optimisation Workflows → Analytics Integration → CRM Integration → Dashboards/Reporting',
    technologies: ['Python', 'AI/ML', 'NLP', 'Data Processing', 'API Development'],
    outcome: 'Enterprise SEO platform replacing fragmented operations with structured, intelligent optimisation.',
    screenshots: [],
  },
  {
    id: 'ocr-automation',
    slug: 'ocr-automation-aws-textract',
    title: 'OCR Automation Using AWS Textract',
    category: 'AI',
    subcategories: ['Document Automation', 'AI & Automation'],
    industry: 'Enterprise',
    featured: true,
    clientVisibility: 'confidential',
    summary:
      'A cloud-native OCR automation system using AWS Textract to extract structured information from complex documents.',
    challenge:
      'Businesses processing large quantities of documents rely on manual data entry, creating slow processing, inconsistent formatting, human error, and operational bottlenecks.',
    solution:
      'Serverless OCR pipeline that automatically extracts structured information from documents with validation, mapping and error handling.',
    features: [
      'PDF ingestion',
      'Multi-page document handling',
      'OCR with AWS Textract',
      'Form extraction',
      'Table extraction',
      'Field mapping',
      'Schema mapping',
      'Validation',
      'Structured output',
      'Automated processing',
      'Error handling',
      'Scalable asynchronous jobs',
    ],
    architecture:
      'Document Upload → Cloud Storage → Processing Trigger → AWS Textract → Validation/Mapping → Structured Data → Business System',
    technologies: ['AWS', 'OCR', 'Document AI', 'Cloud Architecture', 'Automation'],
    outcome: 'Serverless document processing system eliminating manual entry and reducing processing time.',
    screenshots: [],
  },
  {
    id: 'voice-calling-agent',
    slug: 'voice-calling-agent-lead-generation',
    title: 'AI Voice Calling Agent for Lead Generation',
    category: 'AI',
    subcategories: ['Sales & Marketing', 'Automation'],
    industry: 'Sales',
    featured: false,
    clientVisibility: 'confidential',
    summary:
      'An AI voice agent capable of conducting multi-turn sales conversations while connecting to lead, calendar and CRM systems.',
    challenge:
      'Sales teams spend significant time on initial prospect calls, lead qualification, repetitive follow-ups, appointment coordination, and CRM updates.',
    solution:
      'Voice agent that conducts natural sales conversations, qualifies leads, books meetings, and updates CRM systems automatically.',
    features: [
      'Outbound AI calls',
      'Natural multi-turn conversation',
      'Configurable sales script',
      'Lead qualification',
      'Qualification criteria',
      'Objection handling',
      'Meeting booking',
      'Calendar integration',
      'Follow-ups',
      'CRM synchronisation',
      'Call outcomes',
      'Structured notes',
      'Escalation',
      'Reporting',
    ],
    technologies: ['Voice AI', 'Sales Automation', 'Python', 'FastAPI'],
    integrations: ['CRM', 'Calendar', 'Salesforce', 'Hubspot'],
    outcome:
      'Automated lead qualification and appointment setting within compliance and quality boundaries.',
    screenshots: [],
  },
  {
    id: 'saqinova',
    slug: 'saqinova-wellness-platform',
    title: 'Saqinova — Digital Experience for a Wellness Business',
    category: 'Web',
    subcategories: ['Service-Based Business', 'Conversion Focused'],
    industry: 'Health & Wellness',
    featured: true,
    clientVisibility: 'public',
    externalUrl: 'https://saqinova.com',
    summary:
      'A service-focused digital presence for an appointment-based wellness business emphasising local discovery, credibility, treatment information, and conversion.',
    challenge:
      'A health/wellness service business needed strong digital presence where local discovery, credibility, service information, customer trust, and booking conversion are critical.',
    solution:
      'Responsive website prioritising service pages, pricing transparency, practitioner information, social proof, and seamless booking pathways.',
    features: [
      'Service-focused homepage',
      'Individual service/treatment pages',
      'Treatment descriptions',
      'Pricing information',
      'Practitioner profiles',
      'Review/social proof presentation',
      'FAQs',
      'Local/location content',
      'WhatsApp booking',
      'Contact flows',
      'Responsive UX',
      'Conversion-focused CTAs',
      'Local search architecture',
    ],
    technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Vercel'],
    outcome:
      'Live website demonstrating responsive design, conversion-focused UX, and local search architecture for service businesses.',
    screenshots: [
      {
        url: '/images/projects/saqinova-homepage.png',
        alt: 'Saqinova live website homepage',
      },
    ],
  },
  {
    id: 'educational-platform',
    slug: 'educational-learning-platform',
    title: 'Educational Learning Platform',
    category: 'Web',
    subcategories: ['Full-Stack', 'EdTech'],
    industry: 'Education',
    featured: true,
    clientVisibility: 'confidential',
    summary:
      'Interactive digital education platform designed for engaging and measurable learning at scale.',
    challenge:
      'Educational institutions needed a comprehensive digital platform supporting diverse user roles, content delivery, assessment, and analytics.',
    solution:
      'Full-stack learning management system with role-based access, course management, live classes, assignments, assessments, and progress tracking.',
    features: [
      'Student accounts',
      'Teacher/instructor accounts',
      'Administrator roles',
      'Role-based access control',
      'Course management',
      'Live classes',
      'Learning resources',
      'Collaboration tools',
      'Assignments',
      'Assessments',
      'Progress tracking',
      'Analytics dashboards',
      'Responsive access',
      'Content management',
      'Notifications',
    ],
    technologies: ['Next.js', 'React', 'TypeScript', 'Node.js', 'PostgreSQL'],
    outcome: 'Production learning platform supporting multiple user types and measurable educational outcomes.',
    screenshots: [],
  },
  {
    id: 'on-demand-services-app',
    slug: 'on-demand-services-application',
    title: 'On-Demand Services Mobile Application',
    category: 'Mobile',
    subcategories: ['Cross-Platform', 'Marketplace'],
    industry: 'Services',
    featured: false,
    clientVisibility: 'confidential',
    summary:
      'Cross-platform mobile application for on-demand service booking with customer, provider, and admin interfaces.',
    challenge:
      'Service businesses needed a mobile platform connecting customers with providers in real time with booking, tracking, and payment functionality.',
    solution:
      'Cross-platform app providing customer discovery, provider management, real-time tracking, payments, and administrative oversight.',
    features: [
      'Customer registration',
      'Provider registration',
      'Admin dashboard',
      'Service discovery',
      'Location-based search',
      'Provider availability',
      'Booking system',
      'Real-time tracking',
      'In-app chat',
      'Payment processing',
      'Ratings and reviews',
      'Push notifications',
      'Administrative controls',
    ],
    technologies: ['Flutter', 'React Native', 'Firebase', 'Stripe'],
    outcome: 'Production on-demand services platform with real-time capabilities.',
    screenshots: [],
  },
  {
    id: 'personal-assistant-app',
    slug: 'ai-personal-assistant-mobile-app',
    title: 'AI Personal Assistant Mobile Application',
    category: 'Mobile',
    subcategories: ['AI-Powered', 'Conversational AI'],
    industry: 'Productivity',
    featured: false,
    clientVisibility: 'confidential',
    summary:
      'AI-powered mobile assistant combining conversational AI with personalised knowledge and integrations.',
    challenge: 'Users needed accessible AI assistant with personalized knowledge and real-world integrations on mobile.',
    solution:
      'Mobile app delivering LLM-powered chat, voice interaction, personalized RAG, and system integrations.',
    features: [
      'LLM chat interface',
      'Voice conversation',
      'User accounts',
      'Personalised knowledge',
      'Document upload',
      'RAG integration',
      'Conversation history',
      'Reminders',
      'System integrations',
    ],
    technologies: ['Flutter', 'React Native', 'OpenAI', 'Anthropic', 'LangChain'],
    outcome:
      'Production AI assistant demonstrating cross-capability (Mobile + AI) integration.',
    screenshots: [],
  },
];

/**
 * Project index by slug
 */
export const projectsBySlug = Object.fromEntries(
  projects.map((project) => [project.slug, project])
);

/**
 * Featured projects for homepage
 */
export const featuredProjects = projects.filter((p) => p.featured);

/**
 * Projects grouped by category
 */
export const projectsByCategory = Object.fromEntries(
  ['AI', 'Web', 'Mobile', 'Growth'].map((category) => [
    category,
    projects.filter((p) => p.category === category),
  ])
);
