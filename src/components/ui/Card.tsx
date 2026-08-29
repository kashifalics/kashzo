import React from 'react';
import { cn } from '@/lib/utils';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  padding?: 'none' | 'sm' | 'md' | 'lg';
  border?: boolean;
  shadow?: 'none' | 'sm' | 'md' | 'lg';
}

/**
 * Card component - versatile content container
 */
export function Card({
  children,
  className,
  hover = false,
  padding = 'md',
  border = false,
  shadow = 'md',
}: CardProps) {
  const paddingClasses = {
    none: '',
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8',
  };

  const shadowClasses = {
    none: '',
    sm: 'shadow-sm',
    md: 'shadow-md',
    lg: 'shadow-lg',
  };

  return (
    <div
      className={cn(
        'bg-white rounded-3xl [box-shadow:var(--card-shadow)]',
        paddingClasses[padding],
        shadowClasses[shadow],
        border && 'border border-neutral-200',
        hover && 'transition-all duration-300 hover:-translate-y-1 hover:border-accent-500 hover:[box-shadow:var(--card-shadow-hover)] cursor-pointer',
        className
      )}
    >
      {children}
    </div>
  );
}

interface ServiceCardProps {
  icon?: React.ReactNode;
  title: string;
  description: string;
  href?: string;
  className?: string;
}

/**
 * ServiceCard component - service showcase card
 */
export function ServiceCard({
  icon,
  title,
  description,
  href,
  className,
}: ServiceCardProps) {
  return (
    <Card
      hover={!!href}
      padding="lg"
      border
      shadow="sm"
      className={cn('flex flex-col gap-4', className)}
    >
      {icon && (
        <div className="text-4xl text-accent-main">
          {icon}
        </div>
      )}
      <div>
        <h3 className="text-h4 mb-2">{title}</h3>
        <p className="text-neutral-600">{description}</p>
      </div>
    </Card>
  );
}

interface ProjectCardProps {
  title: string;
  category: string;
  industry: string;
  summary: string;
  image?: string;
  href: string;
  className?: string;
}

/**
 * ProjectCard component - portfolio project showcase
 */
export function ProjectCard({
  title,
  category,
  industry,
  summary,
  image,
  href,
  className,
}: ProjectCardProps) {
  return (
    <Card
      hover
      padding="none"
      shadow="md"
      className={cn('overflow-hidden flex flex-col h-full rounded-3xl', className)}
    >
      {image && (
        <div className="relative m-3 mb-0 h-44 overflow-hidden rounded-2xl bg-gradient-to-br from-primary-100 to-primary-200 flex items-center justify-center">
          {/* Placeholder for project image */}
          <div className="text-center text-primary-600">
            <svg
              className="w-16 h-16 mx-auto mb-2 opacity-50"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
            <p className="text-sm">Image</p>
          </div>
        </div>
      )}
      <div className="flex flex-col gap-4 p-6 flex-grow">
        <div className="flex items-center gap-2">
          <span className="text-xs font-semibold text-accent-main uppercase tracking-wide">
            {category}
          </span>
          <span className="text-xs text-neutral-500">•</span>
          <span className="text-xs text-neutral-600">{industry}</span>
        </div>
        <div className="flex-grow">
          <h3 className="text-h4 mb-2 line-clamp-2">{title}</h3>
          <p className="text-neutral-600 line-clamp-2">{summary}</p>
        </div>
        <a
          href={href}
          className="text-primary-600 hover:text-primary-700 font-semibold text-sm inline-flex items-center gap-2 group"
        >
          View Project
          <svg
            className="w-4 h-4 transition-transform group-hover:translate-x-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M13 7l5 5m0 0l-5 5m5-5H6"
            />
          </svg>
        </a>
      </div>
    </Card>
  );
}

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'default' | 'primary' | 'success' | 'warning' | 'danger' | 'accent';
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

/**
 * Badge component - category and tag display
 */
export function Badge({
  children,
  variant = 'default',
  className,
  size = 'md',
}: BadgeProps) {
  const variantClasses = {
    default: 'bg-neutral-100 text-neutral-800 border-neutral-200',
    primary: 'bg-primary-100 text-primary-800 border-primary-200',
    success: 'bg-green-100 text-green-800 border-green-200',
    warning: 'bg-yellow-100 text-yellow-800 border-yellow-200',
    danger: 'bg-red-100 text-red-800 border-red-200',
    accent: 'bg-amber-100 text-amber-900 border-amber-200',
  };

  const sizeClasses = {
    sm: 'px-2 py-1 text-xs',
    md: 'px-3 py-1 text-sm',
    lg: 'px-4 py-2 text-base',
  };

  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full font-medium border',
        variantClasses[variant],
        sizeClasses[size],
        className
      )}
    >
      {children}
    </span>
  );
}
