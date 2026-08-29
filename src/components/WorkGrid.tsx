'use client';

import Link from 'next/link';
import { useState } from 'react';
import type { Project } from '@/lib/types';
import { ProjectVisual } from '@/components/ProjectVisual';
import styles from '@/app/inner-pages.module.css';

const filters = ['All', 'AI', 'Web', 'Mobile', 'Growth'];

export function WorkGrid({ projects }: { projects: Project[] }) {
  const [filter, setFilter] = useState('All');
  const visible = filter === 'All' ? projects : projects.filter(project => project.category === filter);
  return <>
    <div className={styles.filterBar} role="group" aria-label="Filter projects by category">{filters.map(item => <button key={item} type="button" onClick={() => setFilter(item)} aria-pressed={filter === item} className={`${styles.filterButton} ${filter === item ? styles.filterButtonActive : ''}`}>{item}</button>)}</div>
    <div className={styles.projectGrid}>{visible.map(project => <Link key={project.id} href={`/work/${project.slug}`} className={styles.projectCard}><ProjectVisual slug={project.slug} category={project.category} industry={project.industry}/><h2>{project.title}</h2><p>{project.summary}</p><div className={styles.tags}>{project.technologies.slice(0,3).map(technology => <span key={technology}>{technology}</span>)}</div><span className={styles.projectCta}>View Case Study →</span></Link>)}</div>
  </>;
}
