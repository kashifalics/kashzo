import { Card } from '@/components/ui/Card';
import { Container, Grid, Section } from '@/components/ui/Container';
import { industries } from '@/lib/config/industries';

export default function IndustriesPage() {
  return <>
    <Section padding="xl" background="gradient"><Container><div className="mx-auto max-w-3xl text-center"><p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-primary-600">Industries</p><h1 className="text-h1 mb-6 text-primary-900">Solutions tailored to operational realities.</h1><p className="text-body-lg text-neutral-700">We work across sectors where data, workflow, and customer experience matter most.</p></div></Container></Section>
    <Section padding="xl" background="soft"><Container><Grid cols={3} gap="md">{industries.map((industry, index) => <Card key={industry.id} hover border shadow="sm" padding="lg" className="flex min-h-64 flex-col"><div className="mb-8 flex h-11 w-11 items-center justify-center rounded-2xl border border-accent-200 bg-accent-50 text-xs font-bold text-accent-700">{String(index + 1).padStart(2, '0')}</div><h2 className="text-h4 mb-3 text-primary-900">{industry.name}</h2><p className="text-sm text-neutral-600">{industry.description}</p></Card>)}</Grid></Container></Section>
  </>;
}
