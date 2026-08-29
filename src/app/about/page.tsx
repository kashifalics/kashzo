import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Reveal } from '@/components/motion/Reveal';
import styles from '../inner-pages.module.css';

export const metadata: Metadata = {
  title: 'About Kashzo | Product and Engineering Partner',
  description: 'Learn how Kashzo combines product thinking, AI engineering and software delivery to build dependable digital products.',
};

const principles = [
  ['01', 'Clarity before code', 'We define the operational problem, users and desired outcome before selecting technology.'],
  ['02', 'Small, visible steps', 'We build in focused increments so priorities, progress and trade-offs remain clear.'],
  ['03', 'Quality for the real world', 'Security, maintainability and deployment are part of the product—not work left for later.'],
];

export default function AboutPage() {
  return <div className={styles.page}>
    <section className={styles.hero}><div className={`${styles.shell} ${styles.heroInner}`}>
      <Reveal><p className={styles.eyebrow}>About Kashzo</p><h1>A focused technology partner for ambitious businesses.</h1><p className={styles.heroCopy}>We combine product judgement, AI engineering and software delivery to turn complex requirements into practical digital products.</p></Reveal>
      <Reveal delay={0.12} className={styles.heroAside}><strong>How we operate</strong><p>Direct collaboration, clear decisions and accountable delivery from the first conversation through launch.</p></Reveal>
    </div></section>

    <section className={`${styles.section} ${styles.white}`}><div className={`${styles.shell} ${styles.aboutGrid}`}>
      <Reveal className={styles.aboutMedia}><Image src="/images/kashzo-product-planning.webp" alt="Digital product planning with wireframes and software architecture" fill sizes="(max-width: 900px) 100vw, 48vw" className={styles.aboutImage} /></Reveal>
      <Reveal delay={0.08} className={styles.prose}><p className={styles.label}>Built for useful outcomes</p><h2 className={styles.heading}>Technical depth with practical product judgement.</h2><p>Our work starts with understanding the workflow, business context and people who will use the product. That foundation guides the architecture, experience and delivery plan.</p><p>Kashzo is intentionally focused: one accountable partner across AI, web, mobile and the growth systems that support a product after launch.</p></Reveal>
    </div></section>

    <section className={`${styles.section} ${styles.soft}`}><div className={styles.shell}>
      <Reveal><p className={styles.label}>Working principles</p><h2 className={styles.heading}>A straightforward way to build.</h2></Reveal>
      <div className={styles.principleCards}>{principles.map(([number, title, copy], index) => <Reveal key={title} delay={index * 0.06} className={styles.principleCard}><span>{number}</span><h3>{title}</h3><p>{copy}</p></Reveal>)}</div>
    </div></section>

    <section className={styles.cta}><div className={styles.shell}><Reveal><h2>Need a team that can own the path to production?</h2><p>Bring us the business problem, an existing system or a focused product brief.</p><Link href="/contact" className={styles.ctaLink}>Start a conversation →</Link></Reveal></div></section>
  </div>;
}
