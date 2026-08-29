import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Container, Section, Grid } from '@/components/ui/Container';
import { LinkButton } from '@/components/ui/Button';
import { services } from '@/lib/config/services';
import { projects } from '@/lib/data/projects';

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
                {service.subservices.map((sub) => (
                  <div key={sub.title} className="border border-neutral-200 rounded-xl p-5">
                    <h3 className="text-h4 mb-2 text-primary-900">{sub.title}</h3>
                    {sub.description && <p className="text-neutral-600">{sub.description}</p>}
                  </div>
                ))}
              </div>
            </div>

            <aside className="rounded-2xl border border-primary-100 bg-primary-50 p-6">
              <h3 className="text-h4 mb-4 text-primary-900">Typical outcomes</h3>
              <ul className="space-y-3 text-neutral-700">
                <li>• Better operational efficiency</li>
                <li>• Clearer business intelligence</li>
                <li>• Higher-quality product experiences</li>
                <li>• Scalable systems that evolve with your business</li>
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
              <article key={project.id} className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
                <p className="text-xs font-semibold uppercase tracking-[0.15em] text-primary-600 mb-2">
                  {project.category}
                </p>
                <h3 className="text-h4 mb-2 text-primary-900">{project.title}</h3>
                <p className="text-neutral-600 mb-4">{project.summary}</p>
                <Link href={`/work/${project.slug}`} className="text-sm font-semibold text-primary-700 hover:text-primary-900">
                  Read case study →
                </Link>
              </article>
            ))}
          </Grid>
        </Container>
      </Section>
    </>
  );
}
