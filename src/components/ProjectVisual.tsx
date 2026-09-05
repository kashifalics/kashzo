import { BookOpen, BrainCircuit, CalendarCheck, Database, GraduationCap, Hotel, PhoneCall, UserCheck } from 'lucide-react';
import Image from 'next/image';
import { projects } from '@/lib/data/projects';
import styles from './ProjectVisual.module.css';

export function ProjectVisual({ slug, category, industry }: { slug: string; category: string; industry: string }) {
  const badge = `${category} / ${industry}`;
  if (slug === 'hotel-management-voice-agent') return <Visual badge={badge} variant="hotel"><div className={styles.wave}><i/><i/><i/><i/><i/></div><div className={styles.iconCircle}><Hotel size={22}/></div><div className={`${styles.line} ${styles.lineOne}`}/><div className={`${styles.line} ${styles.lineTwo}`}/><div className={`${styles.node} ${styles.nodeOne}`}/><div className={`${styles.node} ${styles.nodeTwo}`}/><span className={`${styles.label} ${styles.labelOne}`}>VOICE AGENT</span><span className={`${styles.label} ${styles.labelTwo}`}>ORDER SYSTEM</span></Visual>;
  if (slug === 'seo-performance-optimisation-engine') return <Visual badge={badge} variant="seo"><div className={styles.window}><div className={styles.bar}><i className={styles.dot}/></div><div className={styles.sidebar}><i/><i/><i/><i/></div><div className={styles.chart}><svg viewBox="0 0 100 60" preserveAspectRatio="none"><path d="M2 54 L20 43 L38 47 L56 25 L73 31 L98 8" fill="none" stroke="#C7A15A" strokeWidth="2"/></svg></div><div className={styles.score}>92<small>search health</small></div></div></Visual>;
  if (slug === 'ocr-automation-aws-textract') return <Visual badge={badge} variant="ocr"><div className={styles.window}><div className={styles.document}><i/><i/><i/><i/><span className={styles.scan}/></div><span className={styles.arrow}>→</span><div className={styles.data}><i/><i/><i/></div></div></Visual>;
  if (slug === 'voice-calling-agent-lead-generation') return <Visual badge={badge} variant="calling" description="Representational workflow showing an AI call qualifying a lead and scheduling a meeting"><div className={styles.callFlow}><div className={styles.callStart}><span><PhoneCall/></span><strong>AI CALL</strong><div className={styles.voiceBars}><i/><i/><i/><i/><i/></div></div><span className={styles.flowArrow}>→</span><div className={styles.callActions}><div><UserCheck/><span><small>LEAD</small>Qualified</span></div><div><Database/><span><small>CRM</small>Updated</span></div><div><CalendarCheck/><span><small>CALENDAR</small>Meeting scheduled</span></div></div></div></Visual>;
  if (slug === 'educational-learning-platform') return <Visual badge={badge} variant="education" description="Representational learning platform with courses, lessons and progress tracking"><div className={styles.learningUi}><div className={styles.learningNav}><GraduationCap/><strong>LEARNING</strong><span className={styles.activeLesson}><BookOpen/>Courses</span><span>Lessons</span><span>Assessment</span></div><div className={styles.learningMain}><p>ACTIVE MODULE</p><strong>Learning Progress</strong><div className={styles.progress}><span/></div><div className={styles.moduleCards}><div><BookOpen/><span>Lessons</span></div><div><GraduationCap/><span>Assessment</span></div></div></div></div></Visual>;
  if (slug === 'saqinova-wellness-platform') {
    const screenshot = projects.find((project) => project.slug === slug)?.screenshots?.[0];
    if (screenshot) return (
      <div className={`${styles.visual} ${styles.real}`}>
        <div className={styles.showcaseBrowser}>
          <div className={styles.showcaseToolbar}>
            <span className={styles.showcaseBrand}>
              <Image src="/images/projects/saqinova-logo.jpeg" alt="Saqinova logo" width={24} height={24} sizes="24px" />
              <span>Saqinova</span>
            </span>
            <span className={styles.showcaseStatus}>Live website</span>
          </div>
          <div className={styles.showcaseScreen}>
            <Image src={screenshot.url} alt={screenshot.alt} fill sizes="(max-width: 580px) 92vw, (max-width: 1050px) 46vw, 390px" className={styles.projectImage} />
          </div>
        </div>
      </div>
    );
  }
  if (slug === 'enterprise-rag-knowledge-assistant' || slug === 'ai-personal-assistant-mobile-app') return <Visual badge={badge} variant="rag"><div className={styles.window}><div className={styles.stack}><i/><i/><i/></div><div className={styles.brain}><BrainCircuit size={25}/></div><div className={styles.answer}><i/><i/><i/></div></div></Visual>;
  return <Visual badge={badge} variant="mobile"><div className={styles.window}><div className={styles.mobileScreen}><i/><i/><i/></div></div></Visual>;
}

function Visual({ badge, variant, description, children }: { badge: string; variant: string; description?: string; children: React.ReactNode }) {
  return <div className={`${styles.visual} ${styles[variant]}`} role="img" aria-label={description || `${badge} project workflow illustration`}><div className={styles.canvas}/><span className={styles.badge}>{badge}</span>{children}</div>;
}
