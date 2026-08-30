import type { Metadata } from 'next';
import Link from 'next/link';
import { Reveal } from '@/components/motion/Reveal';
import { services } from '@/lib/config/services';
import styles from '../inner-pages.module.css';

export const metadata: Metadata = {
  title: 'Services | Kashzo Solutions',
  description: 'AI, web, mobile and digital growth services engineered for production business environments.',
  alternates: { canonical: '/services' },
};

export default function ServicesPage() {
  return <div className={styles.page}>
    <section className={styles.hero}><div className={`${styles.shell} ${styles.heroInner}`}>
      <Reveal><p className={styles.eyebrow}>Capabilities</p><h1>Focused expertise from idea to production.</h1><p className={styles.heroCopy}>AI systems, web platforms, mobile products and digital growth—connected through one practical delivery approach.</p></Reveal>
      <Reveal delay={0.12} className={styles.heroAside}><strong>One accountable partner</strong><p>Product decisions, engineering and launch stay connected instead of passing between disconnected teams.</p></Reveal>
    </div></section>

    <section className={`${styles.section} ${styles.soft}`}><div className={styles.shell}>
      <Reveal><p className={styles.label}>What we build</p><h2 className={styles.heading}>Choose the capability. Keep the delivery connected.</h2></Reveal>
      <div className={styles.cardGrid}>{services.map((service, index) => <Reveal key={service.id} delay={(index % 2) * 0.06}><article className={styles.serviceCard}><div className={styles.serviceTop}><span className={styles.number}>0{index + 1}</span><span className={styles.category}>{service.category}</span></div><h2>{service.title}</h2><p>{service.description}</p><ul className={styles.bulletGrid}>{service.subservices.slice(0, 3).map((item) => <li key={item.title}>{item.title}</li>)}</ul><Link className={styles.cardLink} href={`/services/${service.slug}`}>Explore capability</Link></article></Reveal>)}</div>
    </div></section>

    <section className={styles.cta}><div className={styles.shell}><Reveal><h2>Not sure where your requirement fits?</h2><p>Start with the workflow and commercial goal. We’ll help define the right technical scope.</p><Link href="/contact" className={styles.ctaLink}>Book a discovery conversation →</Link></Reveal></div></section>
  </div>;
}
