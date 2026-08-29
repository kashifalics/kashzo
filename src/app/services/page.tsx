import Link from 'next/link';
import { Container, Section, Grid } from '@/components/ui/Container';
import { LinkButton } from '@/components/ui/Button';
import { services } from '@/lib/config/services';

export default function ServicesPage() {
  return (
    <>
      <Section padding="xl" background="gradient">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary-600 mb-4">
              What we do
            </p>
            <h1 className="text-h1 mb-6 text-primary-900">Services built for business performance.</h1>
            <p className="text-body-lg text-neutral-700">
              From AI strategy to production software and growth systems, we design digital capabilities that operate in the real world.
            </p>
          </div>
        </Container>
      </Section>

      <Section padding="xl" background="white">
        <Container>
          <Grid cols={2} gap="lg">
            {services.map((service) => (
              <article key={service.id} className="border border-neutral-200 rounded-2xl p-6 bg-white shadow-sm hover:shadow-md transition-shadow">
                <div className="mb-4 flex items-center justify-between">
                  <span className="inline-flex items-center rounded-full bg-primary-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-primary-700">
                    {service.category}
                  </span>
                </div>
                <h2 className="text-h3 mb-3 text-primary-900">{service.title}</h2>
                <p className="text-neutral-600 mb-6">{service.description}</p>

                <ul className="space-y-2 text-sm text-neutral-700 mb-6">
                  {service.subservices.slice(0, 4).map((sub) => (
                    <li key={sub.title} className="flex gap-2">
                      <span className="text-accent-main">•</span>
                      <span>{sub.title}</span>
                    </li>
                  ))}
                </ul>

                <Link href={`/services/${service.slug}`} className="inline-flex items-center text-sm font-semibold text-primary-700 hover:text-primary-900">
                  View service details →
                </Link>
              </article>
            ))}
          </Grid>
        </Container>
      </Section>

      <Section padding="xl" background="soft">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-h2 mb-4 text-primary-900">Need a custom solution?</h2>
            <p className="text-body-lg text-neutral-700 mb-8">
              We can scope a system that matches your goals, technical constraints, and delivery realities.
            </p>
            <LinkButton href="/contact" variant="primary" size="lg">
              Book a Discovery Call
            </LinkButton>
          </div>
        </Container>
      </Section>
    </>
  );
}
