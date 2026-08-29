import { Container, Section } from '@/components/ui/Container';

export default function TermsPage() {
  return (
    <Section padding="xl" background="white">
      <Container size="md">
        <h1 className="text-h1 mb-6 text-primary-900">Terms of Service</h1>
        <div className="space-y-5 text-neutral-700">
          <p>
            By using this website, you agree to use the information and content responsibly and lawfully. The website is provided for informational and business enquiry purposes.
          </p>
          <p>
            Kashzo Solutions Ltd may update the content of this website at any time. We do not guarantee that all information is complete, current, or error-free at all times.
          </p>
          <p>
            Any project proposal or engagement is subject to a separate written agreement. This website does not constitute a binding offer or contract unless expressly agreed in writing.
          </p>
        </div>
      </Container>
    </Section>
  );
}
