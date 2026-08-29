import React from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger';
  size?: 'sm' | 'md' | 'lg';
  loading?: boolean;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  fullWidth?: boolean;
  children: React.ReactNode;
}

/**
 * Button component - primary CTA and interaction element
 */
export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = 'primary',
      size = 'md',
      loading = false,
      icon,
      iconPosition = 'left',
      fullWidth = false,
      className,
      disabled,
      children,
      ...props
    },
    ref
  ) => {
    const baseClasses =
      'inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed';

    const variantClasses = {
      primary:
        'bg-primary-800 text-white hover:bg-primary-900 focus:ring-primary-300 active:bg-primary-950',
      secondary:
        'bg-accent-main text-white hover:bg-accent-dark focus:ring-accent-light active:bg-accent-dark',
      outline:
        'border-2 border-primary-800 text-primary-800 hover:bg-primary-50 focus:ring-primary-300',
      ghost:
        'text-primary-800 hover:bg-primary-50 focus:ring-primary-300 active:bg-primary-100',
      danger: 'bg-red-600 text-white hover:bg-red-700 focus:ring-red-300 active:bg-red-800',
    };

    const sizeClasses = {
      sm: 'px-3 py-2 text-sm gap-2',
      md: 'px-4 py-2.5 text-base gap-2',
      lg: 'px-6 py-3 text-lg gap-3',
    };

    return (
      <button
        ref={ref}
        disabled={disabled || loading}
        className={cn(
          baseClasses,
          variantClasses[variant],
          sizeClasses[size],
          fullWidth && 'w-full',
          className
        )}
        {...props}
      >
        {loading ? (
          <>
            <svg className="animate-spin -ml-1 h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
            </svg>
            {children}
          </>
        ) : (
          <>
            {icon && iconPosition === 'left' && icon}
            {children}
            {icon && iconPosition === 'right' && icon}
          </>
        )}
      </button>
    );
  }
);

Button.displayName = 'Button';

interface LinkButtonProps {
  href: string;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  className?: string;
  target?: string;
  rel?: string;
  children: React.ReactNode;
}

/**
 * LinkButton component - styled link that looks like a button
 */
export const LinkButton = React.forwardRef<
  HTMLAnchorElement,
  LinkButtonProps
>(
  (
    {
      href,
      variant = 'primary',
      size = 'md',
      icon,
      iconPosition = 'left',
      className,
      children,
      ...props
    },
    ref
  ) => {
    const baseClasses =
      'inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 no-underline';

    const variantClasses = {
      primary:
        'bg-primary-800 text-white hover:bg-primary-900 focus:ring-primary-300 active:bg-primary-950',
      secondary:
        'bg-accent-main text-white hover:bg-accent-dark focus:ring-accent-light active:bg-accent-dark',
      outline:
        'border-2 border-primary-800 text-primary-800 hover:bg-primary-50 focus:ring-primary-300',
      ghost:
        'text-primary-800 hover:bg-primary-50 focus:ring-primary-300 active:bg-primary-100',
    };

    const sizeClasses = {
      sm: 'px-3 py-2 text-sm gap-2',
      md: 'px-4 py-2.5 text-base gap-2',
      lg: 'px-6 py-3 text-lg gap-3',
    };

    return (
      <Link
        ref={ref}
        href={href}
        className={cn(
          baseClasses,
          variantClasses[variant],
          sizeClasses[size],
          className
        )}
        {...props}
      >
        {icon && iconPosition === 'left' && icon}
        {children}
        {icon && iconPosition === 'right' && icon}
      </Link>
    );
  }
);

LinkButton.displayName = 'LinkButton';
