'use client';

import { motion, useInView, useReducedMotion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

const easing = [0.22, 1, 0.36, 1] as const;

interface RevealProps { children: React.ReactNode; className?: string; delay?: number; y?: number; }

export function Reveal({ children, className, delay = 0, y = 24 }: RevealProps) {
  const reduceMotion = useReducedMotion();
  return <motion.div className={className} initial={reduceMotion ? false : { opacity: 0, y }} animate={reduceMotion ? { opacity: 1, y: 0 } : undefined} whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.18 }} transition={reduceMotion ? { duration: 0 } : { duration: 0.65, delay, ease: easing }}>{children}</motion.div>;
}

export function CountUp({ value, suffix = '+' }: { value: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.8 });
  const reduceMotion = useReducedMotion();
  const [display, setDisplay] = useState(reduceMotion ? value : 0);
  useEffect(() => {
    if (!inView || reduceMotion) return;
    let frame = 0;
    const start = performance.now();
    const tick = (now: number) => { const progress = Math.min((now - start) / 900, 1); setDisplay(Math.round(value * (1 - Math.pow(1 - progress, 3)))); if (progress < 1) frame = requestAnimationFrame(tick); };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [inView, reduceMotion, value]);
  return <span ref={ref}>{display}{suffix}</span>;
}
