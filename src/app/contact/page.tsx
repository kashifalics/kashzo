import type { Metadata } from 'next';
import { ContactForm } from '@/components/ContactForm';
import { SocialLinks } from '@/components/layout/SocialLinks';
import { Reveal } from '@/components/motion/Reveal';
import styles from '../inner-pages.module.css';

export const metadata: Metadata = { title: 'Contact | Start a Project with Kashzo', description: 'Tell Kashzo about your AI, software, mobile or growth requirement and start a practical discovery conversation.' };

export default function ContactPage(){return <div className={styles.page}>
  <section className={styles.hero}><div className={`${styles.shell} ${styles.heroInner}`}><Reveal><p className={styles.eyebrow}>Start a project</p><h1>Tell us what needs to work better.</h1><p className={styles.heroCopy}>Share the business objective, current workflow or product requirement. We’ll help frame the right technical approach.</p></Reveal><Reveal delay={.12} className={styles.heroAside}><strong>A useful first brief</strong><p>Include the desired outcome, users, existing systems, constraints and target timing. Early-stage ideas are welcome too.</p></Reveal></div></section>
  <section className={`${styles.section} ${styles.soft}`}><div className={`${styles.shell} ${styles.contactGrid}`}><Reveal><aside className={styles.contactAside}><h2>How we can help</h2><p>Projects can start with discovery, a defined delivery scope or an existing system that needs improvement.</p><ul className={styles.contactList}><li>AI products, agents and automation</li><li>Web platforms and SaaS systems</li><li>Mobile products and enterprise workflows</li><li>Digital growth and marketing automation</li></ul><div className={styles.contactDetail}><span>Direct email</span><a href="mailto:info@kashzo.com">info@kashzo.com</a></div><div className={styles.contactSocials}><span>Follow Kashzo</span><SocialLinks theme="dark" /></div><p className={styles.contactNote}>We review each brief before responding so the first conversation can be specific and useful.</p></aside></Reveal><Reveal delay={.08} className={styles.formSurface}><ContactForm/></Reveal></div></section>
 </div>}
