import { useEffect, useRef, useState } from 'react';

interface UseScrollAnimationOptions {
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
}

export function useScrollAnimation<T extends HTMLElement = HTMLDivElement>(
  options: UseScrollAnimationOptions = {}
) {
  const { threshold = 0.1, rootMargin = '0px 0px -50px 0px', triggerOnce = true } = options;
  const ref = useRef<T>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            if (triggerOnce) {
              observer.unobserve(element);
            }
          } else if (!triggerOnce) {
            setIsVisible(false);
          }
        });
      },
      { threshold, rootMargin }
    );

    observer.observe(element);

    return () => {
      observer.unobserve(element);
    };
  }, [threshold, rootMargin, triggerOnce]);

  return { ref, isVisible };
}

// Animation variants for different effects
export const animationClasses = {
  fadeIn: {
    hidden: 'opacity-0',
    visible: 'opacity-100 transition-opacity duration-700 ease-out',
  },
  fadeInUp: {
    hidden: 'opacity-0 translate-y-8',
    visible: 'opacity-100 translate-y-0 transition-all duration-700 ease-out',
  },
  fadeInDown: {
    hidden: 'opacity-0 -translate-y-8',
    visible: 'opacity-100 translate-y-0 transition-all duration-700 ease-out',
  },
  fadeInLeft: {
    hidden: 'opacity-0 -translate-x-8',
    visible: 'opacity-100 translate-x-0 transition-all duration-700 ease-out',
  },
  fadeInRight: {
    hidden: 'opacity-0 translate-x-8',
    visible: 'opacity-100 translate-x-0 transition-all duration-700 ease-out',
  },
  scaleIn: {
    hidden: 'opacity-0 scale-95',
    visible: 'opacity-100 scale-100 transition-all duration-700 ease-out',
  },
  slideInUp: {
    hidden: 'opacity-0 translate-y-12',
    visible: 'opacity-100 translate-y-0 transition-all duration-700 ease-out',
  },
};

export type AnimationType = keyof typeof animationClasses;
