import { notFound } from 'next/navigation';
import { Container, Section } from '@/components/ui/Container';
import { LinkButton } from '@/components/ui/Button';
import { projects } from '@/lib/data/projects';

export async function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export default async function WorkDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <>
      <Section padding="xl" background="gradient">
        <Container>
          <div className="max-w-4xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary-600 mb-4">
              {project.category} • {project.industry}
            </p>
            <h1 className="text-h1 mb-6 text-primary-900">{project.title}</h1>
            <p className="text-body-lg text-neutral-700">{project.summary}</p>
          </div>
        </Container>
      </Section>

      <Section padding="xl" background="white">
        <Container>
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <h2 className="text-h2 mb-4 text-primary-900">Challenge</h2>
              <p className="text-neutral-700 mb-8">{project.challenge}</p>

              <h2 className="text-h2 mb-4 text-primary-900">Solution</h2>
              <p className="text-neutral-700 mb-8">{project.solution}</p>

              <h2 className="text-h2 mb-4 text-primary-900">Outcome</h2>
              <p className="text-neutral-700">{project.outcome}</p>
            </div>

            <div className="rounded-3xl border border-primary-100 bg-primary-50 p-7 shadow-sm">
              <h3 className="text-h4 mb-4 text-primary-900">What was built</h3>
              <ul className="space-y-3 text-neutral-700">
                {project.features.map((feature) => (
                  <li key={feature} className="flex gap-3">
                    <span className="text-accent-main">•</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 border-t border-primary-100 pt-6">
                <p className="mb-3 text-xs font-semibold uppercase tracking-[0.15em] text-primary-600">Core technology</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.slice(0, 6).map((tech) => <span key={tech} className="rounded-full border border-primary-100 bg-white px-3 py-1.5 text-xs text-neutral-700">{tech}</span>)}
                </div>
              </div>

              <div className="mt-6">
                <LinkButton href="/contact" variant="primary" size="md">
                  Discuss your project
                </LinkButton>
              </div>
            </div>
          </div>
        </Container>
      </Section>

    </>
  );
}
