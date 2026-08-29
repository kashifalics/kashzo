import { BrainCircuit, Hotel, PhoneCall } from 'lucide-react';
import styles from './ProjectVisual.module.css';

export function ProjectVisual({ slug, category, industry }: { slug: string; category: string; industry: string }) {
  const badge = `${category} / ${industry}`;
  if (slug === 'hotel-management-voice-agent') return <Visual badge={badge} variant="hotel"><div className={styles.wave}><i/><i/><i/><i/><i/></div><div className={styles.iconCircle}><Hotel size={22}/></div><div className={styles.line}/><div className={styles.line}/><div className={styles.node}/><div className={styles.node}/><span className={styles.label}>VOICE AGENT</span><span className={styles.label}>ORDER SYSTEM</span></Visual>;
  if (slug === 'seo-performance-optimisation-engine') return <Visual badge={badge} variant="seo"><div className={styles.window}><div className={styles.bar}><i className={styles.dot}/></div><div className={styles.sidebar}><i/><i/><i/><i/></div><div className={styles.chart}><svg viewBox="0 0 100 60" preserveAspectRatio="none"><path d="M2 54 L20 43 L38 47 L56 25 L73 31 L98 8" fill="none" stroke="#C7A15A" strokeWidth="2"/></svg></div><div className={styles.score}>92<small>search health</small></div></div></Visual>;
  if (slug === 'ocr-automation-aws-textract') return <Visual badge={badge} variant="ocr"><div className={styles.window}><div className={styles.document}><i/><i/><i/><i/><span className={styles.scan}/></div><span className={styles.arrow}>→</span><div className={styles.data}><i/><i/><i/></div></div></Visual>;
  if (slug === 'voice-calling-agent-lead-generation') return <Visual badge={badge} variant="calling"><div className={styles.window}><div className={styles.phone}><PhoneCall/></div><div className={styles.crm}><i/><i/><i/></div></div></Visual>;
  if (slug === 'educational-learning-platform') return <Visual badge={badge} variant="education"><div className={styles.window}><div className={styles.sidebar}><i/><i/><i/></div><div className={styles.course}><strong>LEARNING PROGRESS</strong><div className={styles.progress}/><div className={styles.lessons}><i/><i/><i/><i/></div></div></div></Visual>;
  if (slug === 'saqinova-wellness-platform') return <Visual badge={badge} variant="wellness"><div className={styles.window}><div className={styles.wellnessHeader}/><div className={styles.wellnessHero}><div className={styles.wellnessCopy}><strong>Wellness, thoughtfully delivered.</strong><span/><span/><i/></div><div className={styles.wellnessImage}/></div></div></Visual>;
  if (slug === 'enterprise-rag-knowledge-assistant' || slug === 'ai-personal-assistant-mobile-app') return <Visual badge={badge} variant="rag"><div className={styles.window}><div className={styles.stack}><i/><i/><i/></div><div className={styles.brain}><BrainCircuit size={25}/></div><div className={styles.answer}><i/><i/><i/></div></div></Visual>;
  return <Visual badge={badge} variant="mobile"><div className={styles.window}><div className={styles.mobileScreen}><i/><i/><i/></div></div></Visual>;
}

function Visual({ badge, variant, children }: { badge: string; variant: string; children: React.ReactNode }) {
  return <div className={`${styles.visual} ${styles[variant]}`} role="img" aria-label={`${badge} project illustration`}><div className={styles.canvas}/><span className={styles.badge}>{badge}</span>{children}</div>;
}
