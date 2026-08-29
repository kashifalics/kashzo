import { ArrowRight, ArrowUpRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { ProjectVisual } from '@/components/ProjectVisual';
import { Reveal } from '@/components/motion/Reveal';
import { services } from '@/lib/config/services';
import { faqs } from '@/lib/data/faqs';
import { projects } from '@/lib/data/projects';
import styles from './home.module.css';

const projectSlugs = [
  'hotel-management-voice-agent',
  'enterprise-rag-knowledge-assistant',
  'educational-learning-platform',
];

const selectedProjects = projectSlugs
  .map((slug) => projects.find((project) => project.slug === slug))
  .filter((project): project is NonNullable<typeof project> => Boolean(project));

const capabilityNames = [
  ['Generative AI', 'RAG', 'Voice Agents'],
  ['Web Apps', 'SaaS', 'Cloud Platforms'],
  ['iOS', 'Android', 'Cross-platform'],
  ['SEO', 'Paid Media', 'Automation'],
];

const process = [
  ['01', 'Discover', 'Define the business goal, users, constraints and success criteria.'],
  ['02', 'Design', 'Shape the product experience, architecture and practical delivery plan.'],
  ['03', 'Build', 'Develop and validate the product in focused, visible increments.'],
  ['04', 'Launch & evolve', 'Deploy reliably, measure performance and improve what matters.'],
];

const reasons = [
  ['Senior ownership', 'Direct technical thinking and accountable delivery from discovery through launch.'],
  ['Business-first engineering', 'Technology choices shaped by the workflow, users and commercial objective.'],
  ['Built beyond the demo', 'Secure, maintainable systems designed for real operations and continued growth.'],
];

function SectionTitle({ label, title, copy, dark = false }: { label: string; title: string; copy?: string; dark?: boolean }) {
  return <><p className={styles.label}>{label}</p><h2 className={`${styles.heading} ${dark ? styles.darkHeading : ''}`}>{title}</h2>{copy && <p className={`${styles.lede} ${dark ? styles.darkCopy : ''}`}>{copy}</p>}</>;
}

export default function Home() {
  return <div className={styles.page}>
    <section className={styles.hero}>
      <div className={`${styles.shell} ${styles.heroGrid}`}>
        <div>
          <Reveal><p className={styles.eyebrow}>AI systems · software products · digital growth</p></Reveal>
          <Reveal delay={0.08}><h1><span>Digital products</span><span>engineered for</span><em>real business.</em></h1></Reveal>
          <Reveal delay={0.16}><p className={styles.heroCopy}>Kashzo designs and builds AI systems, web platforms and mobile products that improve how ambitious businesses operate and grow.</p></Reveal>
          <Reveal delay={0.24} className={styles.buttons}>
            <Link href="/contact" className={styles.primary}>Discuss your project <ArrowUpRight size={17} /></Link>
            <Link href="/work" className={styles.secondary}>View selected work <ArrowRight size={17} /></Link>
          </Reveal>
        </div>
        <Reveal delay={0.18} y={14} className={styles.heroMedia}>
          <Image src="/images/kashzo-ai-systems-hero.webp" alt="A refined digital workspace representing connected AI and software systems" fill preload sizes="(max-width: 900px) 100vw, 46vw" className={styles.heroImage} />
          <div className={styles.heroMediaCaption}><span>Strategy</span><span>Engineering</span><span>Delivery</span></div>
        </Reveal>
      </div>
    </section>

    <section id="selected-work" className={`${styles.section} ${styles.work}`}>
      <div className={styles.shell}>
        <Reveal className={styles.sectionTop}><div><SectionTitle label="Selected work" title="Built around real operations." copy="A focused selection of intelligent systems and digital products designed for practical business use." /></div><Link href="/work" className={styles.textLink}>View all work <ArrowUpRight size={17} /></Link></Reveal>
        <div className={styles.projectGrid}>{selectedProjects.map((project, index) => <Reveal key={project.id} delay={index * 0.06}><Link href={`/work/${project.slug}`} className={styles.project}><ProjectVisual slug={project.slug} category={project.category} industry={project.industry} /><div className={styles.projectContent}><h3>{project.title}</h3><p>{project.summary}</p><div className={styles.tags}>{project.technologies.slice(0, 3).map((tech) => <span key={tech}>{tech}</span>)}</div><span className={styles.projectLink}>View case study <ArrowRight size={15} /></span></div></Link></Reveal>)}</div>
      </div>
    </section>

    <section id="services-overview" className={`${styles.section} ${styles.services}`}>
      <div className={styles.shell}>
        <Reveal><SectionTitle dark label="What we do" title="One partner from idea to production." copy="Focused capabilities that connect product thinking, engineering and measurable growth." /></Reveal>
        <div className={styles.serviceGrid}>{services.map((service, index) => <Reveal key={service.id} delay={index * 0.06}><Link className={styles.service} href={`/services/${service.slug}`}><span className={styles.serviceNum}>0{index + 1}</span><h3>{service.title.replace(' & Growth', '')}</h3><div className={styles.capabilities}>{capabilityNames[index].map((item) => <span key={item}>{item}</span>)}</div></Link></Reveal>)}</div>
      </div>
    </section>

    <section className={`${styles.section} ${styles.process}`}><div className={styles.shell}>
      <Reveal><SectionTitle label="How we work" title="A direct path to a working product." /></Reveal>
      <div className={styles.processGrid}>{process.map(([number, title, copy], index) => <Reveal key={title} delay={index * 0.06} className={styles.step}><span>{number}</span><h3>{title}</h3><p>{copy}</p></Reveal>)}</div>
    </div></section>

    <section className={`${styles.section} ${styles.why}`}><div className={styles.shell}>
      <Reveal><SectionTitle dark label="Why Kashzo" title="A startup partner with production discipline." copy="Lean enough to move quickly, experienced enough to make careful technical decisions." /></Reveal>
      <div className={styles.whyGrid}>{reasons.map(([title, copy], index) => <Reveal key={title} delay={index * 0.07} className={styles.reason}><strong>0{index + 1}</strong><h3>{title}</h3><p>{copy}</p></Reveal>)}</div>
    </div></section>

    <section className={`${styles.section} ${styles.faq}`}><div className={`${styles.shell} ${styles.faqGrid}`}>
      <Reveal><SectionTitle label="FAQ" title="What clients usually ask first." /></Reveal>
      <Reveal delay={0.08} className={styles.faqList}>{[faqs[10], faqs[14], faqs[5], faqs[11]].map((faq) => <details key={faq.id}><summary>{faq.question}</summary><p>{faq.answer}</p></details>)}</Reveal>
    </div></section>

    <section className={styles.closing}><div className={styles.shell}><Reveal><h2>Have a product worth building?</h2><p>Tell us what needs to work better. We’ll help turn it into a focused, practical delivery plan.</p><div className={styles.buttons}><Link href="/contact" className={styles.primary}>Start a conversation <ArrowUpRight size={17} /></Link></div></Reveal></div></section>
  </div>;
}
