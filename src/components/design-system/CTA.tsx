/**
 * SageStone Design System - CTA (Call-to-Action) Component
 * 
 * Naming Convention: CTA/[Type]/[Width]
 * Types: Gradient, Bordered
 * Width: Full, Half
 * 
 * Features:
 * - Gradient background with animation
 * - Conversion-optimized design
 * - Responsive layout
 */

import { forwardRef, HTMLAttributes } from 'react';
import { cn } from '../ui/utils';
import { ArrowRight } from 'lucide-react';

export type CTAType = 'gradient' | 'bordered';
export type CTAWidth = 'full' | 'half';

interface CTAProps extends HTMLAttributes<HTMLElement> {
  type?: CTAType;
  width?: CTAWidth;
  headline: string;
  subtext?: string;
  primaryButton?: {
    text: string;
    onClick: () => void;
    ariaLabel?: string;
  };
  secondaryButton?: {
    text: string;
    onClick: () => void;
    ariaLabel?: string;
  };
}

// CTA/Gradient/Full - Full-width gradient CTA
const CTA = forwardRef<HTMLElement, CTAProps>(
  (
    {
      className,
      type = 'gradient',
      width = 'full',
      headline,
      subtext,
      primaryButton,
      secondaryButton,
      ...props
    },
    ref
  ) => {
    // Base container styles
    const containerStyles = cn(
      'relative overflow-hidden',
      type === 'gradient' && 'bg-gradient-to-r from-[#B14EFF] via-[#8E3AFF] to-[#E055FF]',
      type === 'bordered' && 'bg-white border-2 border-[#E7E2EE]',
      'py-20 lg:py-24'
    );

    // Content wrapper styles
    const contentStyles = cn(
      'relative mx-auto px-6 text-center',
      width === 'full' ? 'max-w-4xl' : 'max-w-2xl'
    );

    // Headline styles
    const headlineStyles = cn(
      type === 'gradient' ? 'text-white' : 'text-[#1C1B20]',
      'mb-6'
    );

    // Subtext styles
    const subtextStyles = cn(
      'text-xl mb-8',
      type === 'gradient' ? 'text-white/90' : 'text-[#6D6A73]'
    );

    return (
      <section ref={ref} className={cn(containerStyles, className)} {...props}>
        {/* Decorative gradient overlay for gradient type */}
        {type === 'gradient' && (
          <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent" aria-hidden="true" />
        )}

        <div className={contentStyles}>
          {/* Headline */}
          <h2 className={headlineStyles}>{headline}</h2>

          {/* Subtext */}
          {subtext && <p className={subtextStyles}>{subtext}</p>}

          {/* Buttons */}
          <div className="flex flex-wrap justify-center gap-4">
            {/* Primary Button */}
            {primaryButton && (
              <button
                onClick={primaryButton.onClick}
                className={cn(
                  'inline-flex items-center gap-2 px-8 py-4 rounded-xl',
                  'min-w-[44px] min-h-[44px]',
                  'transition-all duration-200',
                  'focus-visible:ring-2 focus-visible:ring-offset-2',
                  type === 'gradient'
                    ? 'bg-white text-[#8E3AFF] hover:bg-white/95 hover:shadow-md focus-visible:ring-white'
                    : 'bg-gradient-to-r from-[#B14EFF] via-[#8E3AFF] to-[#E055FF] text-white shadow-[0_4px_14px_0_rgba(177,78,255,0.39)] hover:shadow-[0_6px_20px_rgba(177,78,255,0.5)] hover:brightness-[1.08] focus-visible:ring-[#8E3AFF]',
                  'hover:scale-105 active:scale-[0.98] active:brightness-100'
                )}
                aria-label={primaryButton.ariaLabel || primaryButton.text}
              >
                <span className={type === 'gradient' ? 'text-[#8E3AFF]' : 'text-white'}>
                  {primaryButton.text}
                </span>
                <ArrowRight
                  className={cn('w-4 h-4', type === 'gradient' ? 'text-[#8E3AFF]' : 'text-white')}
                  aria-hidden="true"
                />
              </button>
            )}

            {/* Secondary Button */}
            {secondaryButton && (
              <button
                onClick={secondaryButton.onClick}
                className={cn(
                  'inline-flex items-center gap-2 px-8 py-4 rounded-xl',
                  'min-w-[44px] min-h-[44px]',
                  'transition-all duration-200',
                  'focus-visible:ring-2 focus-visible:ring-offset-2',
                  type === 'gradient'
                    ? 'border-2 border-white text-white hover:bg-white/15 hover:shadow-sm focus-visible:ring-white'
                    : 'border-2 border-[#B14EFF] text-[#8E3AFF] hover:bg-[#F3E8FF] hover:border-[#8E3AFF] hover:text-[#6419CC] focus-visible:ring-[#8E3AFF]',
                  'active:scale-[0.98] active:bg-white/20'
                )}
                aria-label={secondaryButton.ariaLabel || secondaryButton.text}
              >
                <span>{secondaryButton.text}</span>
              </button>
            )}
          </div>
        </div>
      </section>
    );
  }
);

CTA.displayName = 'CTA';

// CTA/Gradient/Half - Half-width gradient CTA (for sidebars or columns)
const CTAHalf = forwardRef<HTMLElement, Omit<CTAProps, 'width'>>(
  (props, ref) => {
    return <CTA ref={ref} width="half" {...props} />;
  }
);

CTAHalf.displayName = 'CTAHalf';

// CTA/Bordered - White background with border
const CTABordered = forwardRef<HTMLElement, Omit<CTAProps, 'type'>>(
  (props, ref) => {
    return <CTA ref={ref} type="bordered" {...props} />;
  }
);

CTABordered.displayName = 'CTABordered';

export { CTA, CTAHalf, CTABordered };
export type { CTAProps };
