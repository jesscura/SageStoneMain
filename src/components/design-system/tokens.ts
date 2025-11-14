/**
 * SageStone Inc Design System Tokens
 * 
 * All design tokens are centralized here and linked to CSS variables
 * defined in styles/globals.css for consistency across the application.
 */

export const tokens = {
  // Color Tokens
  colors: {
    // Primary Purple Gradient Scale
    primary: {
      100: 'var(--color-primary-100)', // #F3E8FF - Lightest purple
      200: 'var(--color-primary-200)', // #E4D7FF
      300: 'var(--color-primary-300)', // #C37BFF
      400: 'var(--color-primary-400)', // #B14EFF - Brand primary
      500: 'var(--color-primary-500)', // #8E3AFF - Core purple
      600: 'var(--color-primary-600)', // #7B28E6
      700: 'var(--color-primary-700)', // #6419CC
      800: 'var(--color-primary-800)', // #4D0FA3 - Darkest purple
    },
    
    // Secondary Gradient Scale
    secondary: {
      100: 'var(--color-secondary-100)', // #F3B6FF
      200: 'var(--color-secondary-200)', // #E095FF
      300: 'var(--color-secondary-300)', // #C37BFF
    },
    
    // Accent
    accent: {
      default: 'var(--color-accent)', // #FF72E1
      hover: 'var(--color-accent-hover)', // #FF8FE8
    },
    
    // Text Colors
    text: {
      primary: 'var(--color-text)', // #1C1B20
      muted: 'var(--color-text-muted)', // #6D6A73
      light: 'var(--color-text-light)', // #9B98A3
    },
    
    // Background Colors
    background: {
      default: 'var(--color-bg)', // #FFFFFF
      muted: 'var(--color-bg-muted)', // #F9F8FB
      card: 'var(--color-bg-card)', // #FFFFFF
      surface: 'var(--color-surface)', // #E7E2EE
    },
    
    // Dark Mode Colors
    dark: {
      background: 'var(--color-dark-bg)', // #2A044A
      surface: 'var(--color-dark-surface)', // #3D1159
      text: 'var(--color-dark-text)', // #F9F8FB
    },
  },
  
  // Typography Tokens
  typography: {
    fonts: {
      heading: 'var(--font-heading)', // Inter Tight
      body: 'var(--font-body)', // Plus Jakarta Sans
    },
    
    weights: {
      normal: 'var(--font-weight-normal)', // 400
      medium: 'var(--font-weight-medium)', // 500
      semibold: 'var(--font-weight-semibold)', // 600
      bold: 'var(--font-weight-bold)', // 700
      extrabold: 'var(--font-weight-extrabold)', // 800
    },
    
    lineHeights: {
      tight: '1.1',
      snug: '1.2',
      normal: '1.5',
      relaxed: '1.6',
    },
    
    letterSpacing: {
      tight: '-0.02em',
      normal: '0',
      wide: '0.01em',
    },
  },
  
  // Spacing Tokens
  spacing: {
    xs: 'var(--spacing-4)', // 4px
    sm: 'var(--spacing-8)', // 8px
    md: 'var(--spacing-16)', // 16px
    lg: 'var(--spacing-24)', // 24px
    xl: 'var(--spacing-32)', // 32px
    '2xl': 'var(--spacing-64)', // 64px
    '3xl': 'var(--spacing-100)', // 100px
  },
  
  // Border Radius Tokens
  radius: {
    sm: 'var(--radius-sm)', // 8px
    md: 'var(--radius-md)', // 16px
    lg: 'var(--radius-lg)', // 24px
    full: '9999px',
  },
  
  // Shadow Tokens
  shadows: {
    sm: 'var(--shadow-sm)', // 0 1px 2px rgba(0,0,0,0.06)
    md: 'var(--shadow-md)', // 0 4px 12px rgba(177,78,255,0.15)
    lg: 'var(--shadow-lg)', // 0 10px 30px rgba(177,78,255,0.2)
    glow: 'var(--shadow-glow)', // 0 0 20px rgba(177,78,255,0.3)
  },
  
  // Gradient Tokens
  gradients: {
    primary: 'var(--gradient-primary)', // Linear gradient 135deg
    secondary: 'var(--gradient-secondary)',
    accent: 'var(--gradient-accent)',
    hero: 'var(--gradient-hero)',
  },
  
  // Animation Tokens
  animations: {
    duration: {
      fast: '150ms',
      normal: '200ms',
      slow: '300ms',
    },
    easing: {
      default: 'cubic-bezier(0.4, 0, 0.2, 1)',
      in: 'cubic-bezier(0.4, 0, 1, 1)',
      out: 'cubic-bezier(0, 0, 0.2, 1)',
      inOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
    },
  },
  
  // Accessibility Tokens
  accessibility: {
    minTouchTarget: '44px',
    focusRingWidth: '2px',
    focusRingColor: 'var(--color-primary-500)',
  },
} as const;

export type Tokens = typeof tokens;
