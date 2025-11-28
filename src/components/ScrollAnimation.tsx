import { ReactNode } from 'react';
import { useScrollAnimation, animationClasses, AnimationType } from '../hooks/useScrollAnimation';

interface ScrollAnimationProps {
  children: ReactNode;
  animation?: AnimationType;
  delay?: number;
  className?: string;
  as?: keyof JSX.IntrinsicElements;
  threshold?: number;
}

export function ScrollAnimation({
  children,
  animation = 'fadeInUp',
  delay = 0,
  className = '',
  as: Component = 'div',
  threshold = 0.1,
}: ScrollAnimationProps) {
  const { ref, isVisible } = useScrollAnimation({ threshold });
  const animationClass = animationClasses[animation];

  return (
    <Component
      ref={ref as React.RefObject<HTMLElement>}
      className={`${isVisible ? animationClass.visible : animationClass.hidden} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </Component>
  );
}

// Stagger animation wrapper for lists
interface StaggerAnimationProps {
  children: ReactNode[];
  animation?: AnimationType;
  staggerDelay?: number;
  className?: string;
  itemClassName?: string;
  as?: keyof JSX.IntrinsicElements;
}

export function StaggerAnimation({
  children,
  animation = 'fadeInUp',
  staggerDelay = 100,
  className = '',
  itemClassName = '',
  as: Component = 'div',
}: StaggerAnimationProps) {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });
  const animationClass = animationClasses[animation];

  return (
    <Component ref={ref as React.RefObject<HTMLElement>} className={className}>
      {children.map((child, index) => (
        <div
          key={index}
          className={`${isVisible ? animationClass.visible : animationClass.hidden} ${itemClassName}`}
          style={{ transitionDelay: `${index * staggerDelay}ms` }}
        >
          {child}
        </div>
      ))}
    </Component>
  );
}
