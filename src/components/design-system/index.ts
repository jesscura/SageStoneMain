/**
 * SageStone Inc Design System
 * 
 * Centralized export for all design system components
 * 
 * Usage:
 * import { Button, Card, CTA } from '@/components/design-system';
 */

// Tokens
export { tokens } from './tokens';
export type { Tokens } from './tokens';

// Buttons
export { Button } from './Button';
export type { ButtonProps, ButtonVariant, ButtonSize } from './Button';

// Cards
export {
  Card,
  ServiceCard,
  TestimonialCard,
  MetricCard,
  CaseStudyCard,
} from './Card';
export type {
  BaseCardProps,
  ServiceCardProps,
  TestimonialCardProps,
  MetricCardProps,
  CaseStudyCardProps,
  CardType,
} from './Card';

// CTAs
export { CTA, CTAHalf, CTABordered } from './CTA';
export type { CTAProps, CTAType, CTAWidth } from './CTA';

// Forms
export {
  FormInput,
  FormTextarea,
  FormSelect,
  FormSubmitButton,
} from './Form';
export type {
  FormInputProps,
  FormTextareaProps,
  FormSelectProps,
  FormSubmitButtonProps,
} from './Form';

// Layouts
export {
  Container,
  HeroSplit,
  SectionThreeColumn,
  SectionTimeline,
  SectionFull,
} from './Layout';
export type {
  ContainerProps,
  HeroSplitProps,
  SectionThreeColumnProps,
  TimelineItem,
  SectionTimelineProps,
  SectionFullProps,
} from './Layout';

// Utilities
export { Badge } from './Badge';
export type { BadgeProps, BadgeVariant, BadgeSize } from './Badge';
