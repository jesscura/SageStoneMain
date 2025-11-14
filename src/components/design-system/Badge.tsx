/**
 * SageStone Design System - Badge Component
 * 
 * Naming Convention: Badge/[Variant]/[Size]
 * Variants: Default, Primary, Secondary, Accent
 * Sizes: Small, Medium, Large
 * 
 * Usage: Labels, tags, status indicators, categories
 */

import { forwardRef, HTMLAttributes } from 'react';
import { cn } from '../ui/utils';

export type BadgeVariant = 'default' | 'primary' | 'secondary' | 'accent';
export type BadgeSize = 'sm' | 'md' | 'lg';

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: BadgeVariant;
  size?: BadgeSize;
  icon?: React.ReactNode;
}

const Badge = forwardRef<HTMLSpanElement, BadgeProps>(
  ({ className, variant = 'default', size = 'md', icon, children, ...props }, ref) => {
    // Base styles
    const baseStyles = cn(
      'inline-flex items-center gap-1.5',
      'rounded-full',
      'transition-colors duration-200'
    );

    // Variant styles
    const variantStyles = {
      // Badge/Default - Muted purple background
      default: cn(
        'bg-white/90',
        'text-[#8E3AFF]',
        'border border-[#B14EFF]/30'
      ),

      // Badge/Primary - Solid purple background
      primary: cn(
        'bg-[#F3E8FF]',
        'text-[#8E3AFF]',
        'border border-[#B14EFF]/20'
      ),

      // Badge/Secondary - Light purple gradient
      secondary: cn(
        'bg-gradient-to-r from-[#F3E8FF] to-[#F3B6FF]',
        'text-[#8E3AFF]',
        'border-0'
      ),

      // Badge/Accent - Pink accent
      accent: cn(
        'bg-gradient-to-r from-[#B14EFF] to-[#FF72E1]',
        'text-white',
        'border-0'
      ),
    };

    // Size styles
    const sizeStyles = {
      sm: 'px-2 py-0.5 text-xs',
      md: 'px-3 py-1 text-sm',
      lg: 'px-4 py-1.5 text-base',
    };

    return (
      <span
        ref={ref}
        className={cn(
          baseStyles,
          variantStyles[variant],
          sizeStyles[size],
          className
        )}
        {...props}
      >
        {icon && (
          <span className="flex-shrink-0" aria-hidden="true">
            {icon}
          </span>
        )}
        <span>{children}</span>
      </span>
    );
  }
);

Badge.displayName = 'Badge';

export { Badge };
export type { BadgeProps };
