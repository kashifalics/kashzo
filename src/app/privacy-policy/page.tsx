import { Container, Section } from '@/components/ui/Container';

export default function PrivacyPolicyPage() {
  return (
    <Section padding="xl" background="white">
      <Container size="md">
        <h1 className="text-h1 mb-6 text-primary-900">Privacy Policy</h1>
        <div className="space-y-5 text-neutral-700">
          <p>
            Kashzo Solutions Ltd respects the privacy of individuals and businesses that communicate with us. We collect information needed to understand project requirements, respond to enquiries, and deliver contracted services.
          </p>
          <p>
            Information may include contact details, business information, project context, and correspondence. We use this information to evaluate opportunities, respond to enquiries, and provide the services requested.
          </p>
          <p>
            We do not sell personal data. Information may be shared with trusted service providers who support delivery, operations, analytics, or communications, only where needed and in line with appropriate contractual safeguards.
          </p>
          <p>
            You may contact us at any time to request access, correction, or deletion of personal information relevant to your relationship with Kashzo, subject to legitimate business and legal requirements.
          </p>
        </div>
      </Container>
    </Section>
  );
}
