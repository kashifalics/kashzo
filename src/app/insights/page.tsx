import { Card } from '@/components/ui/Card';
import { Container, Grid, Section } from '@/components/ui/Container';

const insights = [
  { title: 'AI systems that support operations, not gimmicks', summary: 'How to evaluate AI projects based on business impact and operational feasibility.' },
  { title: 'Designing software that teams actually use', summary: 'A practical look at product design for internal tools and customer-facing platforms.' },
  { title: 'From prototype to production', summary: 'Why delivery quality matters more than demo quality when launching digital products.' },
];

export default function InsightsPage() {
  return <>
    <Section padding="xl" background="gradient"><Container><div className="mx-auto max-w-3xl text-center"><p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-primary-600">Insights</p><h1 className="text-h1 mb-6 text-primary-900">Thinking behind the build.</h1><p className="text-body-lg text-neutral-700">Short perspectives on product engineering, AI adoption, and digital delivery.</p></div></Container></Section>
    <Section padding="xl" background="soft"><Container><Grid cols={3} gap="md">{insights.map(item => <Card key={item.title} hover border shadow="sm" padding="lg" className="flex min-h-64 flex-col"><p className="mb-4 text-xs font-semibold uppercase tracking-[0.15em] text-accent-700">Insight</p><h2 className="text-h4 mb-3 text-primary-900">{item.title}</h2><p className="text-sm text-neutral-600">{item.summary}</p></Card>)}</Grid></Container></Section>
  </>;
}
