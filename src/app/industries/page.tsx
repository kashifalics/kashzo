import { Container, Section, Grid } from '@/components/ui/Container';
import { industries } from '@/lib/config/industries';

export default function IndustriesPage() {
  return (
    <>
      <Section padding="xl" background="gradient">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary-600 mb-4">Industries</p>
            <h1 className="text-h1 mb-6 text-primary-900">Solutions tailored to operational realities.</h1>
            <p className="text-body-lg text-neutral-700">
              We work across sectors where data, workflow, and customer experience matter most.
            </p>
          </div>
        </Container>
      </Section>

      <Section padding="xl" background="white">
        <Container>
          <Grid cols={3} gap="lg">
            {industries.map((industry) => (
              <article key={industry.id} className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
                <div className="mb-4 text-3xl">{industry.icon || '•'}</div>
                <h2 className="text-h4 mb-3 text-primary-900">{industry.name}</h2>
                <p className="text-neutral-600">{industry.description}</p>
              </article>
            ))}
          </Grid>
        </Container>
      </Section>
    </>
  );
}
