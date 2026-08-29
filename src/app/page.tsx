import { ArrowRight, ArrowUpRight } from 'lucide-react';
import Link from 'next/link';
import { CountUp, Reveal } from '@/components/motion/Reveal';
import { services } from '@/lib/config/services';
import { technologyCategories } from '@/lib/config/technologies';
import { industries } from '@/lib/config/industries';
import { projects } from '@/lib/data/projects';
import { faqs } from '@/lib/data/faqs';
import styles from './home.module.css';

const projectSlugs = ['hotel-management-voice-agent','seo-performance-optimisation-engine','ocr-automation-aws-textract','voice-calling-agent-lead-generation','educational-learning-platform','saqinova-wellness-platform'];
const selectedProjects = projectSlugs.map(slug => projects.find(project => project.slug === slug)).filter((project): project is NonNullable<typeof project> => Boolean(project));
const capabilityNames = [
  ['Generative AI','RAG','Voice Agents','AI Automation','Machine Learning','Data Analytics'],
  ['Custom Development','SaaS','Web Apps','E-commerce','APIs','Cloud'],
  ['iOS','Android','Flutter','React Native','AI Apps','Enterprise Apps'],
  ['SEO','PPC','Social','Content','CRO','Automation'],
];
const process = ['Discover','Architect','Build','Validate','Launch','Evolve'];
const reasons = [
  ['20+','Full-stack expertise','Deep engineering experience across database, backend, frontend and delivery.'],
  ['5+','AI engineering','Production-focused expertise across intelligent systems, agents and automation.'],
  ['01','Production experience','Real systems designed for real business environments.'],
  ['02','International delivery','Experience collaborating and delivering across markets and time zones.'],
  ['03','End-to-end','AI, web, mobile and growth capabilities in one engineering partner.'],
  ['04','Beyond launch','Deployment, optimisation and ongoing development after release.'],
];

function SectionTitle({ label, title, copy, dark = false }: { label:string; title:string; copy?:string; dark?:boolean }) {
  return <><p className={styles.label}>{label}</p><h2 className={`${styles.heading} ${dark ? styles.darkHeading : ''}`}>{title}</h2>{copy && <p className={`${styles.lede} ${dark ? styles.darkCopy : ''}`}>{copy}</p>}</>;
}

export default function Home() {
  return <div className={styles.page}>
    <section className={styles.hero}>
      <div className={`${styles.shell} ${styles.heroGrid}`}>
        <div>
          <Reveal><p className={styles.eyebrow}>AI systems · software engineering · digital growth</p></Reveal>
          <Reveal delay={.08}><h1><span>We engineer</span><span>intelligent digital products</span><em>that perform.</em></h1></Reveal>
          <Reveal delay={.16}><p className={styles.heroCopy}>AI systems, production software, mobile products and digital growth solutions engineered for real businesses.</p></Reveal>
          <Reveal delay={.24} className={styles.buttons}><Link href="/contact" className={styles.primary}>Start a Project <ArrowUpRight size={17}/></Link><Link href="/work" className={styles.secondary}>Explore Our Work <ArrowRight size={17}/></Link></Reveal>
          <Reveal delay={.3} className={styles.heroProof}><span><i aria-hidden="true">✓</i> 20+ years team expertise</span><span><i aria-hidden="true">✓</i> Production-focused delivery</span><span><i aria-hidden="true">✓</i> International experience</span></Reveal>
        </div>
        <Reveal delay={.2} y={14}><HeroVisual/></Reveal>
      </div>
    </section>

    <section className={styles.experience} aria-label="Team experience">
      <div className={`${styles.shell} ${styles.stats}`}>
        <div className={styles.stat}><strong><CountUp value={20}/></strong><span>Years<br/>Full-Stack Engineering Expertise</span></div>
        <div className={styles.stat}><strong><CountUp value={5}/></strong><span>Years<br/>AI Engineering Expertise</span></div>
        <div className={styles.stat}><strong>International</strong><span>Production<br/>Delivery</span></div>
        <div className={styles.stat}><strong>End-to-End</strong><span>AI · Web · Mobile · Growth</span></div>
      </div>
    </section>

    <section id="selected-work" className={`${styles.section} ${styles.work}`}>
      <div className={styles.shell}>
        <Reveal className={styles.sectionTop}><div><SectionTitle label="Selected work" title="Engineering in production." copy="Real systems built for real business use—from intelligent automation to platforms people depend on."/></div><Link href="/work" className={styles.textLink}>View all work <ArrowUpRight size={17}/></Link></Reveal>
        <div className={styles.projectGrid}>{selectedProjects.map((project,index)=><Reveal key={project.id} delay={(index%3)*.06}><Link href={`/work/${project.slug}`} className={styles.project}><div className={styles.projectVisual} aria-hidden="true"><span/><span/><span/></div><div className={styles.projectContent}><p className={styles.meta}>{project.category} / {project.industry}</p><h3>{project.title}</h3><p>{project.summary}</p><div className={styles.tags}>{project.technologies.slice(0,4).map(tech=><span key={tech}>{tech}</span>)}</div><span className={styles.projectLink}>View Case Study <ArrowRight size={15}/></span></div></Link></Reveal>)}</div>
      </div>
    </section>

    <section id="services-overview" className={`${styles.section} ${styles.services}`}>
      <div className={styles.shell}><Reveal><SectionTitle dark label="Capabilities" title="Four disciplines. One delivery system." copy="Strategy, engineering and growth expertise aligned around outcomes—not hand-offs."/></Reveal><div className={styles.serviceGrid}>{services.map((service,index)=><Reveal key={service.id} delay={index*.07}><Link className={styles.service} href={`/services/${service.slug}`}><span className={styles.serviceNum}>0{index+1}</span><h3>{service.title.replace(' & Growth','')}</h3><div className={styles.capabilities}>{capabilityNames[index].map(item=><span key={item}>{item}</span>)}</div></Link></Reveal>)}</div></div>
    </section>

    <section className={`${styles.section} ${styles.featured}`}>
      <div className={`${styles.shell} ${styles.featureGrid}`}><Reveal><ArchitectureVisual/></Reveal><Reveal delay={.08}><SectionTitle label="Featured success story" title="A voice-first operating layer for hospitality."/><p className={styles.lede}>The AI-Powered Hotel Voice Management System connects natural conversation to ordering, service workflows and property knowledge.</p><div className={styles.featureList}><div className={styles.featureItem}><strong>Challenge</strong><span>Make guest requests immediate without adding operational friction.</span></div><div className={styles.featureItem}><strong>Solution</strong><span>Voice AI, retrieval and business APIs orchestrated in one production system.</span></div><div className={styles.featureItem}><strong>Architecture</strong><span>Voice layer · RAG · FastAPI · workflow integrations</span></div></div><Link href="/work/hotel-management-voice-agent" className={styles.textLink}>View case study <ArrowUpRight size={17}/></Link></Reveal></div>
    </section>

    <section className={`${styles.section} ${styles.process}`}><div className={styles.shell}><Reveal><SectionTitle label="How we work" title="A clear path from complexity to production."/></Reveal><div className={styles.processGrid}>{process.map((item,index)=><Reveal key={item} delay={index*.06} className={styles.step}><span>0{index+1}</span><h3>{item}</h3></Reveal>)}</div></div></section>

    <section className={`${styles.section} ${styles.technology}`}><div className={styles.shell}><Reveal><SectionTitle dark label="Technology" title="The right tools, structured around the system." copy="A broad production stack selected to fit the problem, environment and long-term operating model."/></Reveal><div className={styles.techGrid}>{technologyCategories.slice(0,8).map((category,index)=><Reveal key={category.name} delay={(index%4)*.05} className={styles.techGroup}><h3>{category.name}</h3><p>{category.technologies.slice(0,6).join(' · ')}</p></Reveal>)}</div></div></section>

    <section className={`${styles.section} ${styles.industries}`}><div className={styles.shell}><Reveal><SectionTitle label="Industries" title="Engineering grounded in business context."/></Reveal><div className={styles.industryGrid}>{industries.slice(0,10).map((industry,index)=><Reveal key={industry.id} delay={(index%2)*.05}><Link href="/industries" className={styles.industry}><span>{industry.name}</span><ArrowUpRight size={18}/></Link></Reveal>)}</div></div></section>

    <section className={`${styles.section} ${styles.why}`}><div className={styles.shell}><Reveal><SectionTitle dark label="Why Kashzo" title="Experience that ships." copy="Senior technical thinking, practical delivery and a commitment that extends beyond launch."/></Reveal><div className={styles.whyGrid}>{reasons.map(([number,title,copy],index)=><Reveal key={title} delay={(index%3)*.07} className={styles.reason}><strong>{index===0?<><CountUp value={20}/></>:index===1?<><CountUp value={5}/></>:number}</strong><h3>{title}</h3><p>{copy}</p></Reveal>)}</div></div></section>

    <section className={`${styles.section} ${styles.faq}`}><div className={`${styles.shell} ${styles.faqGrid}`}><Reveal><SectionTitle label="FAQ" title="Useful answers, without the sales pitch."/></Reveal><Reveal delay={.08} className={styles.faqList}>{faqs.slice(0,6).map(faq=><details key={faq.id}><summary>{faq.question}</summary><p>{faq.answer}</p></details>)}</Reveal></div></section>

    <section className={styles.closing}><div className={styles.shell}><Reveal><h2>Have a system worth building?</h2><p>From AI products to production software, Kashzo helps turn complex requirements into reliable digital systems.</p><div className={styles.buttons}><Link href="/contact" className={styles.primary}>Start a Project <ArrowUpRight size={17}/></Link><Link href="/chat" className={styles.secondary}>Ask Kashzo AI <ArrowRight size={17}/></Link></div></Reveal></div></section>
  </div>;
}

function HeroVisual(){return <div className={styles.visual} aria-hidden="true"><svg viewBox="0 0 500 500" fill="none"><circle cx="250" cy="250" r="190" stroke="#5483C4" strokeOpacity=".25"/><g className={styles.orbit}><ellipse cx="250" cy="250" rx="190" ry="82" stroke="#C7A15A" strokeOpacity=".42"/><ellipse cx="250" cy="250" rx="82" ry="190" stroke="#80A8D8" strokeOpacity=".28"/><circle cx="60" cy="250" r="5" fill="#C7A15A"/><circle cx="440" cy="250" r="4" fill="#fff"/></g><g className={styles.pulse}><path d="M130 295L202 213L282 267L370 176" stroke="#80A8D8" strokeOpacity=".6"/><path d="M130 295L230 350L370 176" stroke="#C7A15A" strokeOpacity=".35"/><circle cx="202" cy="213" r="9" fill="#071A2D" stroke="#C7A15A"/><circle cx="282" cy="267" r="8" fill="#071A2D" stroke="#80A8D8"/><circle cx="370" cy="176" r="7" fill="#C7A15A"/></g><rect x="188" y="188" width="124" height="124" rx="4" fill="#071A2D" stroke="#C7A15A" strokeOpacity=".7"/><path d="M218 250h64M250 218v64" stroke="#fff" strokeOpacity=".75"/><circle cx="250" cy="250" r="18" fill="#C7A15A"/></svg><div className={`${styles.visualCard} ${styles.v1}`}><strong>INTELLIGENCE</strong><span>Models + knowledge</span></div><div className={`${styles.visualCard} ${styles.v2}`}><strong>PRODUCTION</strong><span>Systems + delivery</span></div></div>}
function ArchitectureVisual(){return <div className={styles.architecture} aria-label="Hotel voice system architecture diagram"><div className={styles.archCenter}>VOICE<br/>ORCHESTRATION</div><span className={`${styles.archNode} ${styles.n1}`}>Guest request</span><span className={`${styles.archNode} ${styles.n2}`}>Property knowledge</span><span className={`${styles.archNode} ${styles.n3}`}>Ordering workflow</span><span className={`${styles.archNode} ${styles.n4}`}>Operations API</span></div>}
