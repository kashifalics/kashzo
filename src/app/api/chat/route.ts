import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const { message } = await request.json();
  const prompt = String(message || '').trim();

  if (!prompt) {
    return NextResponse.json({ answer: 'Please share a brief project description.' }, { status: 400 });
  }

  const lower = prompt.toLowerCase();

  if (lower.includes('ai') || lower.includes('machine learning') || lower.includes('llm')) {
    return NextResponse.json({
      answer:
        'AI is a good fit when the goal is better decisions, operations, or customer experience. We typically recommend a discovery phase to define the business problem, data, and workflow before selecting the model and integration stack.',
      sources: ['AI service design', 'Product discovery', 'Architecture assessment'],
    });
  }

  if (lower.includes('website') || lower.includes('saas') || lower.includes('web app')) {
    return NextResponse.json({
      answer:
        'For a custom web product, the right approach depends on your users, data model, and growth goals. We typically assess user flows, system architecture, integrations, and deployment strategy before building the first production-ready version.',
      sources: ['Web application strategy', 'Technical architecture', 'SaaS planning'],
    });
  }

  if (lower.includes('mobile') || lower.includes('app')) {
    return NextResponse.json({
      answer:
        'Mobile product work usually needs a clear requirement model for user experience, backend APIs, onboarding, and release strategy. We can scope a native or cross-platform approach depending on your goals and operating constraints.',
      sources: ['Mobile product strategy', 'App architecture', 'MVP roadmap'],
    });
  }

  if (lower.includes('marketing') || lower.includes('seo') || lower.includes('growth')) {
    return NextResponse.json({
      answer:
        'Growth systems work best when they are tied to measurable business outcomes. We can combine technical optimisation, funnel design, and campaigns that support both acquisition and retention.',
      sources: ['Growth strategy', 'SEO systems', 'Digital acquisition planning'],
    });
  }

  return NextResponse.json({
    answer:
      'That sounds like a good fit for a product or AI project. The next step is usually a short discovery call to clarify goals, constraints, data, and timeline before we define the roadmap and budget.',
    sources: ['Discovery', 'Requirements definition', 'Delivery planning'],
  });
}
