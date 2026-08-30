import type { Metadata } from 'next';
import Link from 'next/link';
import { Reveal } from '@/components/motion/Reveal';
import { WorkGrid } from '@/components/WorkGrid';
import { projects } from '@/lib/data/projects';
import styles from '../inner-pages.module.css';

export const metadata: Metadata = { title: 'Work | Kashzo Solutions', description: 'Explore verified AI, web and mobile systems delivered by Kashzo for real business environments.', alternates: { canonical: '/work' } };

export default function WorkPage(){return <div className={styles.page}>
  <section className={styles.hero}><div className={`${styles.shell} ${styles.heroInner}`}><Reveal><p className={styles.eyebrow}>Selected work</p><h1>Digital products shaped by real business needs.</h1><p className={styles.heroCopy}>A selection of AI, automation, web and mobile work designed around operations, growth and customer experience.</p></Reveal><Reveal delay={.12} className={styles.heroAside}><strong>Inside each project</strong><p>Explore the challenge, solution, core features and technology behind the delivery.</p></Reveal></div></section>
  <section className={`${styles.section} ${styles.soft}`}><div className={styles.shell}><Reveal><p className={styles.label}>Case studies</p><h2 className={styles.heading}>Delivery across systems and sectors.</h2><p className={styles.lede}>Filter the portfolio by core delivery discipline, then open a case study for the challenge, solution and architecture.</p></Reveal><div className={styles.workGridWrap}><WorkGrid projects={projects}/></div></div></section>
  <section className={styles.cta}><div className={styles.shell}><Reveal><h2>Have a comparable challenge?</h2><p>Share the current workflow and desired outcome. We’ll help translate it into a practical delivery plan.</p><Link href="/contact" className={styles.ctaLink}>Start with a project brief →</Link></Reveal></div></section>
 </div>}
