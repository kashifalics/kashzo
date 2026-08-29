import type { Metadata } from 'next';
import Link from 'next/link';
import { Reveal } from '@/components/motion/Reveal';
import { industries } from '@/lib/config/industries';
import styles from '../inner-pages.module.css';

export const metadata: Metadata = {
  title: 'Industries | Kashzo Solutions',
  description: 'Digital products and intelligent systems shaped around the workflows of growing organisations.',
};

const selectedIds = ['hospitality', 'education', 'health-wellness', 'ecommerce', 'sales-marketing', 'enterprise'];
const selectedIndustries = selectedIds.map((id) => industries.find((industry) => industry.id === id)).filter((industry): industry is NonNullable<typeof industry> => Boolean(industry));

export default function IndustriesPage() {
  return <div className={styles.page}>
    <section className={styles.hero}><div className={`${styles.shell} ${styles.heroInner}`}>
      <Reveal><p className={styles.eyebrow}>Industries</p><h1>Technology shaped around how the business works.</h1><p className={styles.heroCopy}>We bring a product and engineering perspective to sectors where workflow, data and customer experience create meaningful opportunities.</p></Reveal>
      <Reveal delay={0.12} className={styles.heroAside}><strong>Context before templates</strong><p>We learn the operation first, then shape the system around its users, constraints and goals.</p></Reveal>
    </div></section>

    <section className={`${styles.section} ${styles.soft}`}><div className={styles.shell}>
      <Reveal><p className={styles.label}>Where we can help</p><h2 className={styles.heading}>Focused experience, adaptable engineering.</h2><p className={styles.lede}>These are representative areas—not a claim that every business in a sector needs the same solution.</p></Reveal>
      <div className={styles.industryCards}>{selectedIndustries.map((industry, index) => <Reveal key={industry.id} delay={(index % 3) * 0.06} className={styles.industryCard}><span>0{index + 1}</span><h2>{industry.name}</h2><p>{industry.description}</p></Reveal>)}</div>
    </div></section>

    <section className={styles.cta}><div className={styles.shell}><Reveal><h2>Your market is not a template.</h2><p>Tell us about the workflow and outcome. We’ll assess where technology can create practical value.</p><Link href="/contact" className={styles.ctaLink}>Discuss your business →</Link></Reveal></div></section>
  </div>;
}
