import React from 'react';
import { Container, Section, Grid } from '@/components/ui/Container';
import { Button, LinkButton } from '@/components/ui/Button';
import { Card, ServiceCard, Badge } from '@/components/ui/Card';
import { services } from '@/lib/config/services';
import { projects, featuredProjects } from '@/lib/data/projects';
import { faqs } from '@/lib/data/faqs';

/**
 * Homepage for Kashzo Solutions
 * Tells the story of who we are and what we do
 */
export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <Section padding="xl" background="gradient">
        <Container>
          <div className="max-w-3xl mx-auto text-center py-8 md:py-16">
            <h1 className="text-hero md:text-hero-lg font-bold mb-6 text-primary-900 leading-tight">
              We engineer intelligent digital products that perform.
            </h1>
            <p className="text-body-lg text-neutral-700 mb-8 leading-relaxed">
              AI systems, production software, mobile products and digital growth solutions engineered for real businesses.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <LinkButton href="/contact" variant="primary" size="lg">
                Start a Project
              </LinkButton>
              <LinkButton href="/work" variant="outline" size="lg">
                Explore Our Work
              </LinkButton>
            </div>
          </div>

          {/* Hero Visual Placeholder */}
          <div className="mt-12 max-w-4xl mx-auto">
            <div className="bg-gradient-to-b from-primary-100 to-primary-50 rounded-lg aspect-video flex items-center justify-center border border-primary-200">
              <div className="text-center">
                <svg
                  className="w-24 h-24 mx-auto mb-4 text-primary-400 opacity-50"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
                <p className="text-primary-600 font-semibold">Intelligence • Engineering • Performance</p>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Experience Strip */}
      <Section padding="lg" background="soft">
        <Container>
          <Grid cols={4} gap="lg" className="text-center">
            <div>
              <div className="text-4xl font-bold text-accent-main mb-2">20+</div>
              <p className="text-sm text-neutral-700">Years<br />Full-Stack Engineering</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-accent-main mb-2">5+</div>
              <p className="text-sm text-neutral-700">Years<br />AI Engineering</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-accent-main mb-2">∞</div>
              <p className="text-sm text-neutral-700">International<br />Project Delivery</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-accent-main mb-2">4</div>
              <p className="text-sm text-neutral-700">Service Pillars<br />End-to-End</p>
            </div>
          </Grid>
        </Container>
      </Section>

      {/* Selected Work */}
      <Section padding="xl" background="white">
        <Container>
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-h2 mb-4">Selected Work</h2>
            <p className="text-body-lg text-neutral-600 max-w-2xl mx-auto">
              Real projects delivered for real businesses. From AI systems to production software.
            </p>
          </div>

          <Grid cols={3} gap="lg">
            {featuredProjects.slice(0, 3).map((project) => (
              <Card
                key={project.id}
                hover
                padding="lg"
                shadow="md"
                border
              >
                <Badge variant="primary" size="sm" className="mb-3">
                  {project.category}
                </Badge>
                <h3 className="text-h4 mb-2">{project.title}</h3>
                <p className="text-neutral-600 text-sm mb-4">{project.summary}</p>
                <div className="text-xs text-neutral-500">{project.industry}</div>
              </Card>
            ))}
          </Grid>

          <div className="text-center mt-12">
            <LinkButton href="/work" variant="outline" size="lg">
              View All Projects
            </LinkButton>
          </div>
        </Container>
      </Section>

      {/* Core Services */}
      <Section padding="xl" background="soft">
        <Container>
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-h2 mb-4">What We Build</h2>
            <p className="text-body-lg text-neutral-600 max-w-2xl mx-auto">
              Four core service pillars covering all aspects of digital engineering and growth.
            </p>
          </div>

          <Grid cols={2} gap="lg">
            {services.map((service) => (
              <Card key={service.id} hover padding="lg" border>
                <h3 className="text-h3 text-accent-main mb-3">{service.title}</h3>
                <p className="text-neutral-600 mb-4">{service.description}</p>
                <div className="text-xs text-neutral-500 space-y-1">
                  {service.subservices.slice(0, 5).map((sub) => (
                    <div key={sub.title}>• {sub.title}</div>
                  ))}
                  {service.subservices.length > 5 && (
                    <div>+ {service.subservices.length - 5} more services</div>
                  )}
                </div>
              </Card>
            ))}
          </Grid>

          <div className="text-center mt-12">
            <LinkButton href="/services" variant="primary" size="lg">
              Explore All Services
            </LinkButton>
          </div>
        </Container>
      </Section>

      {/* Why Kashzo */}
      <Section padding="xl" background="white">
        <Container>
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-h2 mb-4">Experience That Ships</h2>
            <p className="text-body-lg text-neutral-600 max-w-2xl mx-auto">
              What sets Kashzo apart
            </p>
          </div>

          <Grid cols={3} gap="lg">
            <Card padding="lg" border>
              <div className="text-3xl font-bold text-accent-main mb-3">20+</div>
              <h4 className="text-h4 mb-2">Full-Stack Expertise</h4>
              <p className="text-neutral-600 text-sm">
                Deep experience across database, backend, frontend, and DevOps.
              </p>
            </Card>
            <Card padding="lg" border>
              <div className="text-3xl font-bold text-accent-main mb-3">5+</div>
              <h4 className="text-h4 mb-2">AI Engineering</h4>
              <p className="text-neutral-600 text-sm">
                Production AI beyond chatbots: agents, RAG, ML models, automation.
              </p>
            </Card>
            <Card padding="lg" border>
              <div className="text-3xl font-bold text-accent-main mb-3">✓</div>
              <h4 className="text-h4 mb-2">Production Delivery</h4>
              <p className="text-neutral-600 text-sm">
                Real systems for real businesses. Scaled, monitored, and maintained.
              </p>
            </Card>
          </Grid>
        </Container>
      </Section>

      {/* FAQ Section */}
      <Section padding="xl" background="soft">
        <Container>
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-h2 mb-4">Frequently Asked Questions</h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.slice(0, 6).map((faq) => (
              <details
                key={faq.id}
                className="group border border-neutral-200 rounded-lg p-4 hover:border-primary-300 transition-colors"
              >
                <summary className="cursor-pointer font-semibold text-neutral-900 flex items-center justify-between">
                  {faq.question}
                  <span className="text-primary-600 group-open:rotate-180 transition-transform">
                    ▼
                  </span>
                </summary>
                <div className="mt-4 text-neutral-600 leading-relaxed">
                  {faq.answer}
                </div>
              </details>
            ))}
          </div>

          <div className="text-center mt-8">
            {/* TODO: Link to full FAQ page once created */}
          </div>
        </Container>
      </Section>

      {/* Final CTA */}
      <Section padding="xl" background="dark" className="text-white">
        <Container>
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-h2 mb-4 text-white">Ready to build something serious?</h2>
            <p className="text-body-lg text-primary-100 mb-8">
              From AI products to production software, let's turn your requirements into reliable digital systems.
            </p>
            <LinkButton href="/contact" variant="secondary" size="lg">
              Start a Project
            </LinkButton>
          </div>
        </Container>
      </Section>
    </>
  );
}
