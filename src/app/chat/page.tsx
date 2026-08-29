import { Container, Section } from '@/components/ui/Container';
import { Chatbot } from '@/components/Chatbot';

export default function ChatPage() {
  return (
    <>
      <Section padding="xl" background="gradient">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-primary-600">AI assistant</p>
            <h1 className="mb-6 text-h1 text-primary-900">Ask Kashzo what is possible.</h1>
            <p className="text-body-lg text-neutral-700">
              Start with a brief idea and we’ll help you think through the product, technical approach, and business fit.
            </p>
          </div>
        </Container>
      </Section>

      <Section padding="xl" background="white">
        <Container>
          <div className="mx-auto max-w-4xl">
            <Chatbot />
          </div>
        </Container>
      </Section>
    </>
  );
}
