import Link from 'next/link';
import { Container, Section, Grid } from '@/components/ui/Container';
import { LinkButton } from '@/components/ui/Button';
import { projects } from '@/lib/data/projects';

export default function WorkPage() {
  return (
    <>
      <Section padding="xl" background="gradient">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary-600 mb-4">
              Our work
            </p>
            <h1 className="text-h1 mb-6 text-primary-900">Delivery that solves real business problems.</h1>
            <p className="text-body-lg text-neutral-700">
              Selected product, automation, and AI work designed for operations, growth, and customer experience.
            </p>
          </div>
        </Container>
      </Section>

      <Section padding="xl" background="white">
        <Container>
          <Grid cols={3} gap="lg">
            {projects.map((project) => (
              <article key={project.id} className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="mb-4 flex items-center justify-between">
                  <span className="inline-flex items-center rounded-full bg-primary-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-primary-700">
                    {project.category}
                  </span>
                  <span className="text-xs text-neutral-500">{project.industry}</span>
                </div>
                <h2 className="text-h4 mb-3 text-primary-900">{project.title}</h2>
                <p className="text-neutral-600 mb-5">{project.summary}</p>
                <Link href={`/work/${project.slug}`} className="text-sm font-semibold text-primary-700 hover:text-primary-900">
                  Read case study →
                </Link>
              </article>
            ))}
          </Grid>
        </Container>
      </Section>

      <Section padding="xl" background="soft">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-h2 mb-4 text-primary-900">Need a similar result?</h2>
            <p className="text-body-lg text-neutral-700 mb-8">
              We can scope your idea into a product or AI system that matches your constraints and growth goals.
            </p>
            <LinkButton href="/contact" variant="primary" size="lg">
              Start with a project brief
            </LinkButton>
          </div>
        </Container>
      </Section>
    </>
  );
}
