import { Container, Section } from '@/components/ui/Container';

export default function CookiePolicyPage() {
  return (
    <Section padding="xl" background="white">
      <Container size="md">
        <h1 className="text-h1 mb-6 text-primary-900">Cookie Policy</h1>
        <div className="space-y-5 text-neutral-700">
          <p>
            This website may use cookies and similar technologies to improve functionality, measure performance, and understand how visitors interact with the site.
          </p>
          <p>
            Cookies may be used for analytics, website performance, and basic functionality. We keep the use of cookies limited to what is required to operate and improve the website experience.
          </p>
          <p>
            You can disable cookies in your browser settings, though some website features may be affected. We do not use cookies for intrusive behavioural advertising.
          </p>
        </div>
      </Container>
    </Section>
  );
}
