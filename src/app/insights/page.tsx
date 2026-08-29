import { Container, Section, Grid } from '@/components/ui/Container';

const insights = [
  {
    title: 'AI systems that support operations, not gimmicks',
    summary: 'How to evaluate AI projects based on business impact and operational feasibility.',
  },
  {
    title: 'Designing software that teams actually use',
    summary: 'A practical look at product design for internal tools and customer-facing platforms.',
  },
  {
    title: 'From prototype to production',
    summary: 'Why delivery quality matters more than demo quality when launching digital products.',
  },
];

export default function InsightsPage() {
  return (
    <>
      <Section padding="xl" background="gradient">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary-600 mb-4">Insights</p>
            <h1 className="text-h1 mb-6 text-primary-900">Thinking behind the build.</h1>
            <p className="text-body-lg text-neutral-700">
              Short perspectives on product engineering, AI adoption, and digital delivery.
            </p>
          </div>
        </Container>
      </Section>

      <Section padding="xl" background="white">
        <Container>
          <Grid cols={3} gap="lg">
            {insights.map((item) => (
              <article key={item.title} className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
                <p className="text-xs font-semibold uppercase tracking-[0.15em] text-primary-600 mb-3">Insight</p>
                <h2 className="text-h4 mb-3 text-primary-900">{item.title}</h2>
                <p className="text-neutral-600">{item.summary}</p>
              </article>
            ))}
          </Grid>
        </Container>
      </Section>
    </>
  );
}
