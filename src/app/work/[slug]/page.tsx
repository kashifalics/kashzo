import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Container, Section, Grid } from '@/components/ui/Container';
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

            <div className="rounded-2xl border border-primary-100 bg-primary-50 p-6">
              <h3 className="text-h4 mb-4 text-primary-900">What was built</h3>
              <ul className="space-y-3 text-neutral-700">
                {project.features.map((feature) => (
                  <li key={feature} className="flex gap-3">
                    <span className="text-accent-main">•</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-6">
                <LinkButton href="/contact" variant="primary" size="md">
                  Discuss your project
                </LinkButton>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <Section padding="xl" background="soft">
        <Container>
          <div className="mb-8">
            <h2 className="text-h2 text-primary-900">Technology stack</h2>
          </div>

          <div className="flex flex-wrap gap-3">
            {project.technologies.map((tech) => (
              <span key={tech} className="rounded-full border border-neutral-200 bg-white px-3 py-2 text-sm text-neutral-700">
                {tech}
              </span>
            ))}
          </div>
        </Container>
      </Section>

      <Section padding="xl" background="white">
        <Container>
          <div className="text-center">
            <LinkButton href="/work" variant="outline" size="lg">
              Back to all work
            </LinkButton>
          </div>
        </Container>
      </Section>
    </>
  );
}
