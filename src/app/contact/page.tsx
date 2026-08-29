import { Container, Section } from '@/components/ui/Container';
import { ContactForm } from '@/components/ContactForm';

export default function ContactPage() {
  return (
    <>
      <Section padding="xl" background="gradient">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary-600 mb-4">Contact</p>
            <h1 className="text-h1 mb-6 text-primary-900">Tell us what you need to build.</h1>
            <p className="text-body-lg text-neutral-700">
              Share a brief and we’ll help shape the right system for your business, timeline, and technical goals.
            </p>
          </div>
        </Container>
      </Section>

      <Section padding="xl" background="white">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] items-start">
            <aside className="rounded-2xl border border-primary-100 bg-primary-50 p-6">
              <h2 className="text-h3 mb-4 text-primary-900">How we can help</h2>
              <ul className="space-y-4 text-neutral-700">
                <li>• AI product design and implementation</li>
                <li>• Web platforms and SaaS systems</li>
                <li>• Mobile apps and enterprise workflows</li>
                <li>• Growth systems and automation</li>
              </ul>

              <div className="mt-8 border-t border-primary-200 pt-6">
                <p className="text-sm uppercase tracking-[0.12em] text-primary-600 mb-2">Email</p>
                <a href="mailto:info@kashzo.com" className="text-primary-800 font-medium">info@kashzo.com</a>
              </div>
            </aside>

            <div className="rounded-2xl border border-neutral-200 bg-white p-6 md:p-8 shadow-sm">
              <ContactForm />
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
