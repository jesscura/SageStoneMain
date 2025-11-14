/**
 * SageStone Design System - Layout Components
 * 
 * Naming Convention: Layout/[Type]/[Variant]
 * Types: Hero, Section, Container
 * Variants: Split, ThreeColumn, Timeline, Full
 * 
 * Features:
 * - Responsive grid systems
 * - Consistent spacing
 * - Semantic HTML structure
 */

import { forwardRef, HTMLAttributes } from 'react';
import { cn } from '../ui/utils';

// Layout/Container - Max-width container with padding
interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
}

const Container = forwardRef<HTMLDivElement, ContainerProps>(
  ({ className, size = 'xl', children, ...props }, ref) => {
    const sizeStyles = {
      sm: 'max-w-2xl',
      md: 'max-w-4xl',
      lg: 'max-w-5xl',
      xl: 'max-w-7xl',
      full: 'max-w-full',
    };

    return (
      <div
        ref={ref}
        className={cn('mx-auto px-6', sizeStyles[size], className)}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Container.displayName = 'Container';

// Layout/Hero/Split - Split hero layout (text left, image right)
interface HeroSplitProps extends HTMLAttributes<HTMLElement> {
  textContent: React.ReactNode;
  imageContent: React.ReactNode;
  reverse?: boolean;
  backgroundColor?: 'white' | 'gradient' | 'muted';
}

const HeroSplit = forwardRef<HTMLElement, HeroSplitProps>(
  ({ className, textContent, imageContent, reverse = false, backgroundColor = 'gradient', children, ...props }, ref) => {
    const bgStyles = {
      white: 'bg-white',
      gradient: 'bg-gradient-to-br from-[#F3E8FF] via-white to-[#F9F8FB]',
      muted: 'bg-[#F9F8FB]',
    };

    return (
      <section
        ref={ref}
        className={cn('relative overflow-hidden', bgStyles[backgroundColor], className)}
        {...props}
      >
        {/* Decorative gradient */}
        {backgroundColor === 'gradient' && (
          <div
            className="absolute inset-0 animate-gradient bg-gradient-to-br from-[#B14EFF]/5 via-transparent to-[#FF72E1]/5"
            style={{ backgroundSize: '200% 200%' }}
            aria-hidden="true"
          />
        )}

        <Container className="relative py-24 lg:py-32">
          <div className={cn('grid lg:grid-cols-2 gap-12 items-center', reverse && 'lg:flex-row-reverse')}>
            {/* Text Content */}
            <div className={cn('fade-in-up', reverse && 'lg:order-2')}>{textContent}</div>

            {/* Image Content */}
            <div className={cn('relative', reverse && 'lg:order-1')}>{imageContent}</div>
          </div>
        </Container>

        {children}
      </section>
    );
  }
);

HeroSplit.displayName = 'HeroSplit';

// Layout/Section/ThreeColumn - Three column grid layout
interface SectionThreeColumnProps extends HTMLAttributes<HTMLElement> {
  heading?: string;
  subheading?: string;
  badge?: string;
  items: React.ReactNode[];
  backgroundColor?: 'white' | 'muted';
}

const SectionThreeColumn = forwardRef<HTMLElement, SectionThreeColumnProps>(
  ({ className, heading, subheading, badge, items, backgroundColor = 'white', ...props }, ref) => {
    const bgStyles = {
      white: 'bg-white',
      muted: 'bg-[#F9F8FB]',
    };

    return (
      <section ref={ref} className={cn('py-24 lg:py-32', bgStyles[backgroundColor], className)} {...props}>
        <Container>
          {/* Header */}
          {(badge || heading || subheading) && (
            <div className="text-center max-w-3xl mx-auto mb-16">
              {badge && (
                <div className="mb-4 inline-block px-4 py-2 bg-[#F3E8FF] text-[#8E3AFF] border border-[#B14EFF]/20 rounded-full text-sm">
                  {badge}
                </div>
              )}
              {heading && <h2 className="text-[#1C1B20] mb-4">{heading}</h2>}
              {subheading && <p className="text-xl text-[#6D6A73]">{subheading}</p>}
            </div>
          )}

          {/* Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {items.map((item, index) => (
              <div key={index}>{item}</div>
            ))}
          </div>
        </Container>
      </section>
    );
  }
);

SectionThreeColumn.displayName = 'SectionThreeColumn';

// Layout/Section/Timeline - Vertical timeline layout
interface TimelineItem {
  number: string;
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  description: string;
  details: string[];
  timeline: string;
}

interface SectionTimelineProps extends HTMLAttributes<HTMLElement> {
  heading?: string;
  subheading?: string;
  items: TimelineItem[];
}

const SectionTimeline = forwardRef<HTMLElement, SectionTimelineProps>(
  ({ className, heading, subheading, items, ...props }, ref) => {
    return (
      <section ref={ref} className={cn('py-20 lg:py-28', className)} {...props}>
        <Container size="lg">
          {/* Header */}
          {(heading || subheading) && (
            <div className="text-center max-w-3xl mx-auto mb-16">
              {heading && <h2 className="text-[#1C1B20] mb-4">{heading}</h2>}
              {subheading && <p className="text-xl text-[#6D6A73]">{subheading}</p>}
            </div>
          )}

          {/* Timeline */}
          <div className="space-y-20">
            {items.map((item, index) => (
              <div key={index} className="relative">
                {/* Connector Line */}
                {index < items.length - 1 && (
                  <div className="hidden lg:block absolute left-[67px] top-32 w-0.5 h-32 bg-gradient-to-b from-[#B14EFF] to-[#E055FF]" aria-hidden="true" />
                )}

                <div className="grid lg:grid-cols-[auto,1fr] gap-8">
                  {/* Icon & Timeline */}
                  <div className="flex flex-col items-center lg:items-start">
                    <div className="w-32 h-32 rounded-3xl bg-gradient-to-r from-[#B14EFF] via-[#8E3AFF] to-[#E055FF] flex items-center justify-center mb-4 shadow-lg">
                      {item.icon}
                    </div>
                    <div className="px-4 py-2 bg-[#F3E8FF] text-[#8E3AFF] border border-[#B14EFF]/20 rounded-full text-sm">
                      {item.timeline}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-8 rounded-2xl bg-white border border-[#E7E2EE] hover:shadow-xl transition-shadow">
                    <div className="text-6xl bg-gradient-to-r from-[#B14EFF] to-[#E055FF] bg-clip-text text-transparent opacity-20 mb-4">
                      {item.number}
                    </div>
                    <h3 className="text-[#1C1B20] mb-2">{item.title}</h3>
                    <p className="text-[#8E3AFF] mb-4">{item.subtitle}</p>
                    <p className="text-[#6D6A73] mb-6 leading-relaxed">{item.description}</p>

                    {/* Details */}
                    <div className="space-y-3">
                      {item.details.map((detail, i) => (
                        <div key={i} className="flex items-start gap-3">
                          <svg
                            className="w-5 h-5 text-[#8E3AFF] shrink-0 mt-0.5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            aria-hidden="true"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-[#1C1B20]">{detail}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>
    );
  }
);

SectionTimeline.displayName = 'SectionTimeline';

// Layout/Section/Full - Full-width section
interface SectionFullProps extends HTMLAttributes<HTMLElement> {
  backgroundColor?: 'white' | 'muted' | 'gradient';
  paddingY?: 'sm' | 'md' | 'lg';
}

const SectionFull = forwardRef<HTMLElement, SectionFullProps>(
  ({ className, backgroundColor = 'white', paddingY = 'lg', children, ...props }, ref) => {
    const bgStyles = {
      white: 'bg-white',
      muted: 'bg-[#F9F8FB]',
      gradient: 'bg-gradient-to-br from-[#F3E8FF] to-white',
    };

    const paddingStyles = {
      sm: 'py-12',
      md: 'py-20',
      lg: 'py-24 lg:py-32',
    };

    return (
      <section
        ref={ref}
        className={cn(bgStyles[backgroundColor], paddingStyles[paddingY], className)}
        {...props}
      >
        {children}
      </section>
    );
  }
);

SectionFull.displayName = 'SectionFull';

export { Container, HeroSplit, SectionThreeColumn, SectionTimeline, SectionFull };
export type { ContainerProps, HeroSplitProps, SectionThreeColumnProps, TimelineItem, SectionTimelineProps, SectionFullProps };
