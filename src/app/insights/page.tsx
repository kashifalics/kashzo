import type { Metadata } from 'next';
import { Reveal } from '@/components/motion/Reveal';
import styles from '../inner-pages.module.css';

export const metadata: Metadata = {
  title: 'Insights | Kashzo Solutions',
  description: 'Practical perspectives on AI adoption, product engineering and dependable digital delivery.',
};

const insights = [
  ['AI systems that support operations', 'How to evaluate AI opportunities through business impact, workflow fit and operational feasibility.'],
  ['Designing software teams will use', 'A practical product perspective for internal tools and customer-facing platforms.'],
  ['Moving from prototype to production', 'The engineering, security and delivery decisions that turn a demonstration into a dependable product.'],
];

export default function InsightsPage() {
  return <div className={styles.page}>
    <section className={styles.hero}><div className={`${styles.shell} ${styles.heroInner}`}>
      <Reveal><p className={styles.eyebrow}>Insights</p><h1>Practical thinking behind the build.</h1><p className={styles.heroCopy}>Perspectives on product engineering, responsible AI adoption and digital delivery for real business environments.</p></Reveal>
      <Reveal delay={0.12} className={styles.heroAside}><strong>Useful over noisy</strong><p>Focused ideas for teams making product and technology decisions.</p></Reveal>
    </div></section>
    <section className={`${styles.section} ${styles.soft}`}><div className={styles.shell}>
      <Reveal><p className={styles.label}>Current themes</p><h2 className={styles.heading}>What we are thinking about.</h2></Reveal>
      <div className={styles.insightCards}>{insights.map(([title, copy], index) => <Reveal key={title} delay={index * 0.06} className={styles.insightCard}><span>0{index + 1}</span><h2>{title}</h2><p>{copy}</p></Reveal>)}</div>
    </div></section>
  </div>;
}
