import React from 'react';
import { cn } from '@/lib/utils';

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
}

/**
 * Container component - responsive max-width wrapper
 */
export function Container({
  children,
  className,
  size = 'lg',
}: ContainerProps) {
  const sizeClasses = {
    sm: 'max-w-2xl',
    md: 'max-w-4xl',
    lg: 'max-w-6xl',
    xl: 'max-w-7xl',
    full: 'w-full',
  };

  return (
    <div
      className={cn(
        'mx-auto w-full px-4 sm:px-6 lg:px-8',
        sizeClasses[size],
        className
      )}
    >
      {children}
    </div>
  );
}

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  padding?: 'none' | 'sm' | 'md' | 'lg' | 'xl';
  background?: 'white' | 'soft' | 'dark' | 'gradient';
}

/**
 * Section component - full-width section wrapper
 */
export function Section({
  children,
  className,
  padding = 'lg',
  background = 'white',
}: SectionProps) {
  const paddingClasses = {
    none: '',
    sm: 'py-8 md:py-12',
    md: 'py-12 md:py-16',
    lg: 'py-16 md:py-24',
    xl: 'py-24 md:py-32',
  };

  const backgroundClasses = {
    white: 'bg-white',
    soft: 'bg-neutral-50',
    dark: 'bg-primary-900 text-white',
    gradient: 'bg-gradient-to-b from-white to-neutral-50',
  };

  return (
    <section
      className={cn(
        paddingClasses[padding],
        backgroundClasses[background],
        'w-full',
        className
      )}
    >
      {children}
    </section>
  );
}

interface GridProps {
  children: React.ReactNode;
  className?: string;
  cols?: 1 | 2 | 3 | 4 | 6;
  gap?: 'sm' | 'md' | 'lg';
}

/**
 * Grid component - responsive grid layout
 */
export function Grid({
  children,
  className,
  cols = 3,
  gap = 'md',
}: GridProps) {
  const colsClass = {
    1: 'grid-cols-1',
    2: 'grid-cols-1 md:grid-cols-2',
    3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
    4: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4',
    6: 'grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6',
  };

  const gapClass = {
    sm: 'gap-4',
    md: 'gap-6 md:gap-8',
    lg: 'gap-8 md:gap-12',
  };

  return (
    <div
      className={cn(
        'grid',
        colsClass[cols],
        gapClass[gap],
        className
      )}
    >
      {children}
    </div>
  );
}
