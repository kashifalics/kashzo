import { Container, Section, Grid } from '@/components/ui/Container';
import { LinkButton } from '@/components/ui/Button';

export default function AboutPage() {
  return (
    <>
      <Section padding="xl" background="gradient">
        <Container>
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary-600 mb-4">About Kashzo</p>
            <h1 className="text-h1 mb-6 text-primary-900">We build technology for real operations.</h1>
            <p className="text-body-lg text-neutral-700">
              Kashzo brings together AI engineering, software delivery, product thinking, and digital growth to help businesses move faster with better systems.
            </p>
          </div>
        </Container>
      </Section>

      <Section padding="xl" background="white">
        <Container>
          <Grid cols={2} gap="lg">
            <div>
              <h2 className="text-h2 mb-4 text-primary-900">Who we are</h2>
              <p className="text-neutral-700 mb-4">
                We are a digital product and engineering studio focused on AI, software systems, and business-critical automation.
              </p>
              <p className="text-neutral-700 mb-4">
                Our work sits at the intersection of strategy, software engineering, and operational delivery: we help teams turn technical ideas into working systems that support daily business outcomes.
              </p>
            </div>

            <div className="rounded-2xl border border-neutral-200 bg-neutral-50 p-6">
              <h3 className="text-h4 mb-4 text-primary-900">What we value</h3>
              <ul className="space-y-3 text-neutral-700">
                <li>• Clear thinking over hype</li>
                <li>• Real business use cases over vanity features</li>
                <li>• Production-grade engineering and maintainability</li>
                <li>• AI that supports business decisions, not isolated demos</li>
              </ul>
            </div>
          </Grid>
        </Container>
      </Section>

      <Section padding="xl" background="soft">
        <Container>
          <div className="text-center mb-10">
            <h2 className="text-h2 text-primary-900">Our delivery model</h2>
          </div>

          <Grid cols={3} gap="lg">
            <div className="rounded-2xl border border-neutral-200 bg-white p-6">
              <div className="text-3xl font-bold text-accent-main mb-3">01</div>
              <h3 className="text-h4 mb-2 text-primary-900">Scope</h3>
              <p className="text-neutral-600">We map your real-world objectives, constraints, and system needs before design decisions are made.</p>
            </div>
            <div className="rounded-2xl border border-neutral-200 bg-white p-6">
              <div className="text-3xl font-bold text-accent-main mb-3">02</div>
              <h3 className="text-h4 mb-2 text-primary-900">Engineer</h3>
              <p className="text-neutral-600">We design and build reliable systems using product thinking, clean architecture, and scalable implementation.</p>
            </div>
            <div className="rounded-2xl border border-neutral-200 bg-white p-6">
              <div className="text-3xl font-bold text-accent-main mb-3">03</div>
              <h3 className="text-h4 mb-2 text-primary-900">Operate</h3>
              <p className="text-neutral-600">We support deployment, iteration, and optimisation so the product continues to perform after launch.</p>
            </div>
          </Grid>
        </Container>
      </Section>

      <Section padding="xl" background="white">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-h2 mb-4 text-primary-900">Ready to build something serious?</h2>
            <p className="text-body-lg text-neutral-700 mb-8">We can help scope the right solution for your team and timeline.</p>
            <LinkButton href="/contact" variant="primary" size="lg">Start a project</LinkButton>
          </div>
        </Container>
      </Section>
    </>
  );
}
