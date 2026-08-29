import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Container, Section, Grid } from '@/components/ui/Container';
import { LinkButton } from '@/components/ui/Button';
import { services } from '@/lib/config/services';
import { projects } from '@/lib/data/projects';
import { Card } from '@/components/ui/Card';

const outcomesByService: Record<string, string[]> = {
  'ai-machine-learning': ['Automate high-friction workflows', 'Make approved knowledge easier to use', 'Support faster, better-informed decisions'],
  'web-development': ['Replace fragmented manual processes', 'Create a reliable platform for users and teams', 'Build a maintainable foundation for growth'],
  'mobile-app-development': ['Put important workflows in users’ hands', 'Deliver a consistent cross-device experience', 'Connect mobile activity to core business systems'],
  'digital-marketing': ['Create clearer acquisition journeys', 'Connect campaign data and automation', 'Improve conversion through measured iteration'],
};

export async function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);

  if (!service) {
    notFound();
  }

  const relatedProjects = projects.filter(
    (project) =>
      service.relatedProjects.includes(project.slug) ||
      project.category === service.category
  );

  return (
    <>
      <Section padding="xl" background="gradient">
        <Container>
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary-600 mb-4">
              {service.category} service
            </p>
            <h1 className="text-h1 mb-6 text-primary-900">{service.title}</h1>
            <p className="text-body-lg text-neutral-700">{service.description}</p>
          </div>
        </Container>
      </Section>

      <Section padding="xl" background="white">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] items-start">
            <div>
              <h2 className="text-h2 mb-6 text-primary-900">What this service includes</h2>
              <div className="space-y-4">
                {service.subservices.slice(0, 8).map((sub) => (
                  <Card key={sub.title} border shadow="sm" padding="md">
                    <h3 className="text-h4 mb-2 text-primary-900">{sub.title}</h3>
                    {sub.description && <p className="text-neutral-600">{sub.description}</p>}
                  </Card>
                ))}
              </div>
            </div>

            <aside className="rounded-3xl border border-primary-100 bg-primary-50 p-7 shadow-sm">
              <h3 className="text-h4 mb-4 text-primary-900">Typical outcomes</h3>
              <ul className="space-y-3 text-neutral-700">
                {outcomesByService[service.slug].map((outcome) => <li key={outcome}>• {outcome}</li>)}
              </ul>
              <div className="mt-6">
                <LinkButton href="/contact" variant="primary" size="md">
                  Request a proposal
                </LinkButton>
              </div>
            </aside>
          </div>
        </Container>
      </Section>

      <Section padding="xl" background="soft">
        <Container>
          <div className="mb-8">
            <h2 className="text-h2 text-primary-900">Related work</h2>
          </div>

          <Grid cols={3} gap="lg">
            {relatedProjects.slice(0, 3).map((project) => (
              <Card key={project.id} hover border shadow="sm" padding="lg" className="flex min-h-72 flex-col">
                <p className="text-xs font-semibold uppercase tracking-[0.15em] text-primary-600 mb-2">
                  {project.category}
                </p>
                <h3 className="text-h4 mb-2 text-primary-900">{project.title}</h3>
                <p className="text-neutral-600 mb-4">{project.summary}</p>
                <Link href={`/work/${project.slug}`} className="mt-auto inline-flex items-center gap-2 text-sm font-semibold text-primary-700 hover:text-primary-900">
                  Read case study →
                </Link>
              </Card>
            ))}
          </Grid>
        </Container>
      </Section>
    </>
  );
}
