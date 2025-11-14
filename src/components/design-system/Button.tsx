/**
 * SageStone Design System - Button Component
 * 
 * Naming Convention: Button/[Variant]/[State]
 * Variants: Primary, Secondary, Ghost
 * States: Default, Hover, Focused, Disabled
 * 
 * Accessibility: WCAG 2.2 AA compliant
 * - Minimum touch target: 44x44px
 * - Proper focus indicators
 * - Semantic HTML
 */

import { forwardRef, ButtonHTMLAttributes } from 'react';
import { cn } from '../ui/utils';

export type ButtonVariant = 'primary' | 'secondary' | 'ghost';
export type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  isLoading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = 'primary',
      size = 'md',
      isLoading = false,
      leftIcon,
      rightIcon,
      children,
      disabled,
      ...props
    },
    ref
  ) => {
    // Base styles applied to all buttons
    const baseStyles = cn(
      // Layout & Display
      'inline-flex items-center justify-center gap-2',
      'transition-all duration-200',
      'outline-none',
      
      // Typography
      'font-medium',
      'whitespace-nowrap',
      
      // Accessibility - minimum touch target
      'min-w-[44px] min-h-[44px]',
      
      // Focus state
      'focus-visible:ring-2 focus-visible:ring-offset-2',
      'focus-visible:ring-[var(--color-primary-500)]',
      
      // Disabled state
      'disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none'
    );

    // Variant styles
    const variantStyles = {
      // Button/Primary - Gradient background with glow
      primary: cn(
        'bg-gradient-to-r from-[#B14EFF] via-[#8E3AFF] to-[#E055FF]',
        'text-white',
        'shadow-[0_4px_14px_0_rgba(177,78,255,0.39)]',
        'hover:shadow-[0_6px_20px_rgba(177,78,255,0.5)]',
        'hover:brightness-[1.08]',
        'active:scale-[0.98]',
        'active:brightness-100',
        'transition-lift'
      ),
      
      // Button/Secondary - Outline with purple border
      secondary: cn(
        'border-2 border-[#B14EFF]',
        'text-[#8E3AFF]',
        'bg-transparent',
        'hover:bg-[#F3E8FF]',
        'hover:border-[#8E3AFF]',
        'hover:text-[#6419CC]',
        'active:scale-[0.98]',
        'active:bg-[#E4D7FF]'
      ),
      
      // Button/Ghost - Text only
      ghost: cn(
        'text-[#8E3AFF]',
        'bg-transparent',
        'hover:bg-[#F3E8FF]/60',
        'hover:text-[#6419CC]',
        'active:bg-[#F3E8FF]',
        'active:text-[#6419CC]'
      ),
    };

    // Size styles
    const sizeStyles = {
      sm: 'px-4 py-2 text-sm rounded-lg',
      md: 'px-6 py-3 text-base rounded-xl',
      lg: 'px-8 py-4 text-lg rounded-xl',
    };

    return (
      <button
        ref={ref}
        className={cn(
          baseStyles,
          variantStyles[variant],
          sizeStyles[size],
          className
        )}
        disabled={disabled || isLoading}
        {...props}
      >
        {isLoading && (
          <svg
            className="animate-spin h-4 w-4"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
        )}
        
        {leftIcon && !isLoading && (
          <span className="flex-shrink-0" aria-hidden="true">
            {leftIcon}
          </span>
        )}
        
        <span>{children}</span>
        
        {rightIcon && (
          <span className="flex-shrink-0" aria-hidden="true">
            {rightIcon}
          </span>
        )}
      </button>
    );
  }
);

Button.displayName = 'Button';

export { Button };
export type { ButtonProps };
