/**
 * SageStone Design System - Card Component
 * 
 * Naming Convention: Card/[Type]/[State]
 * Types: Service, Testimonial, Metric, CaseStudy, Default
 * States: Default, Hover
 * 
 * Features:
 * - Lift effect on hover (+2px)
 * - Shadow transition (sm → md)
 * - Gradient borders for emphasis
 */

import { forwardRef, HTMLAttributes } from 'react';
import { cn } from '../ui/utils';
import { Star } from 'lucide-react';

export type CardType = 'default' | 'service' | 'testimonial' | 'metric' | 'caseStudy';

interface BaseCardProps extends HTMLAttributes<HTMLDivElement> {
  type?: CardType;
  withHoverEffect?: boolean;
  withGradientBorder?: boolean;
}

// Card/Default - Base card component
const Card = forwardRef<HTMLDivElement, BaseCardProps>(
  ({ className, type = 'default', withHoverEffect = true, withGradientBorder = false, children, ...props }, ref) => {
    const baseStyles = cn(
      'rounded-2xl bg-white border border-[#E7E2EE]',
      'transition-all duration-300',
      withHoverEffect && 'hover:shadow-xl hover:-translate-y-0.5',
      withGradientBorder && 'border-t-4 gradient-border'
    );

    return (
      <div ref={ref} className={cn(baseStyles, className)} {...props}>
        {children}
      </div>
    );
  }
);

Card.displayName = 'Card';

// Card/Service - For service offerings
interface ServiceCardProps extends HTMLAttributes<HTMLDivElement> {
  icon: React.ReactNode;
  title: string;
  description: string;
  onLearnMore?: () => void;
}

const ServiceCard = forwardRef<HTMLDivElement, ServiceCardProps>(
  ({ className, icon, title, description, onLearnMore, ...props }, ref) => {
    return (
      <Card
        ref={ref}
        type="service"
        withGradientBorder
        className={cn('p-6 group', className)}
        {...props}
      >
        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#B14EFF]/10 to-[#FF72E1]/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
          {icon}
        </div>
        <h4 className="text-[#1C1B20] mb-2">{title}</h4>
        <p className="text-sm text-[#6D6A73] mb-4">{description}</p>
        {onLearnMore && (
          <button
            onClick={onLearnMore}
            className="text-sm text-[#8E3AFF] hover:text-[#B14EFF] flex items-center gap-1 group"
            aria-label={`Learn more about ${title}`}
          >
            Learn more
            <svg
              className="w-4 h-4 group-hover:translate-x-1 transition-transform"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        )}
      </Card>
    );
  }
);

ServiceCard.displayName = 'ServiceCard';

// Card/Testimonial - For client quotes
interface TestimonialCardProps extends HTMLAttributes<HTMLDivElement> {
  quote: string;
  author: string;
  role: string;
  metric?: string;
  rating?: number;
}

const TestimonialCard = forwardRef<HTMLDivElement, TestimonialCardProps>(
  ({ className, quote, author, role, metric, rating = 5, ...props }, ref) => {
    return (
      <Card
        ref={ref}
        type="testimonial"
        withGradientBorder
        className={cn('p-6', className)}
        {...props}
      >
        {/* Star Rating */}
        <div className="flex gap-1 mb-4" role="img" aria-label={`${rating} star rating`}>
          {[...Array(rating)].map((_, i) => (
            <Star key={i} className="w-4 h-4 fill-[#FF72E1] text-[#FF72E1]" aria-hidden="true" />
          ))}
        </div>
        
        {/* Metric Badge */}
        {metric && (
          <div className="mb-4 px-4 py-2 bg-[#F3E8FF] rounded-lg border border-[#B14EFF]/20">
            <p className="text-sm text-[#8E3AFF]">{metric}</p>
          </div>
        )}
        
        {/* Quote */}
        <blockquote className="text-[#1C1B20] mb-6 leading-relaxed">
          "{quote}"
        </blockquote>
        
        {/* Author */}
        <div>
          <p className="text-[#1C1B20]">{author}</p>
          <p className="text-sm text-[#6D6A73]">{role}</p>
        </div>
      </Card>
    );
  }
);

TestimonialCard.displayName = 'TestimonialCard';

// Card/Metric - For KPIs and statistics
interface MetricCardProps extends HTMLAttributes<HTMLDivElement> {
  value: string | number;
  label: string;
  description?: string;
  icon?: React.ReactNode;
  trend?: 'up' | 'down' | 'neutral';
}

const MetricCard = forwardRef<HTMLDivElement, MetricCardProps>(
  ({ className, value, label, description, icon, trend, ...props }, ref) => {
    return (
      <Card
        ref={ref}
        type="metric"
        className={cn('p-8 text-center relative overflow-hidden', className)}
        {...props}
      >
        {/* Decorative gradient */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#B14EFF]/10 to-transparent rounded-full -mr-16 -mt-16" aria-hidden="true" />
        
        {/* Icon */}
        {icon && (
          <div className="w-12 h-12 mx-auto mb-4 text-[#8E3AFF]">
            {icon}
          </div>
        )}
        
        {/* Value */}
        <div className="text-5xl gradient-text mb-2">{value}</div>
        
        {/* Label */}
        <div className="text-[#1C1B20] mb-2">{label}</div>
        
        {/* Description */}
        {description && (
          <p className="text-sm text-[#6D6A73]">{description}</p>
        )}
      </Card>
    );
  }
);

MetricCard.displayName = 'MetricCard';

// Card/CaseStudy - For success stories
interface CaseStudyCardProps extends HTMLAttributes<HTMLDivElement> {
  company: string;
  industry: string;
  image?: string;
  challenge: string;
  solution: string;
  results: Array<{
    metric: string;
    value: string;
    description?: string;
  }>;
}

const CaseStudyCard = forwardRef<HTMLDivElement, CaseStudyCardProps>(
  ({ className, company, industry, image, challenge, solution, results, ...props }, ref) => {
    return (
      <Card
        ref={ref}
        type="caseStudy"
        className={cn('overflow-hidden', className)}
        withHoverEffect={false}
        {...props}
      >
        <div className="grid lg:grid-cols-2">
          {/* Image Section */}
          {image && (
            <div className="relative h-64 lg:h-auto">
              <img src={image} alt={`${company} case study`} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1C1B20]/60 to-transparent" aria-hidden="true" />
            </div>
          )}
          
          {/* Content Section */}
          <div className="p-8 lg:p-12">
            <h3 className="text-[#1C1B20] mb-2">{company}</h3>
            <p className="text-sm text-[#8E3AFF] mb-6">{industry}</p>
            
            {/* Challenge */}
            <div className="mb-6">
              <h4 className="text-[#8E3AFF] mb-2">The Challenge</h4>
              <p className="text-[#6D6A73] leading-relaxed">{challenge}</p>
            </div>
            
            {/* Solution */}
            <div className="mb-6">
              <h4 className="text-[#8E3AFF] mb-2">Our Solution</h4>
              <p className="text-[#6D6A73] leading-relaxed">{solution}</p>
            </div>
            
            {/* Results */}
            <div>
              <h4 className="text-[#1C1B20] mb-4">Results</h4>
              <div className="grid gap-4">
                {results.map((result, index) => (
                  <div key={index} className="p-4 rounded-xl bg-[#F9F8FB] border border-[#E7E2EE]">
                    <div className="flex items-baseline gap-2 mb-1">
                      <span className="text-sm text-[#6D6A73]">{result.metric}:</span>
                      <span className="text-2xl gradient-text">{result.value}</span>
                    </div>
                    {result.description && (
                      <p className="text-xs text-[#6D6A73]">{result.description}</p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Card>
    );
  }
);

CaseStudyCard.displayName = 'CaseStudyCard';

export { Card, ServiceCard, TestimonialCard, MetricCard, CaseStudyCard };
export type { BaseCardProps, ServiceCardProps, TestimonialCardProps, MetricCardProps, CaseStudyCardProps };
