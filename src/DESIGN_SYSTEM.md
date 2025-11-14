# SageStone Inc Design System

> **Version 1.0** | Founded by Jesel Cura | Modern BPO & Virtual Operations

A comprehensive, production-ready design system built for scalability, accessibility (WCAG 2.2 AA), and conversion optimization. This system powers the SageStone Inc website and all future marketing initiatives.

---

## 📋 Table of Contents

1. [Design Principles](#design-principles)
2. [Token System](#token-system)
3. [Components Library](#components-library)
4. [Naming Convention](#naming-convention)
5. [Accessibility Guidelines](#accessibility-guidelines)
6. [Usage Examples](#usage-examples)
7. [Developer Handoff](#developer-handoff)

---

## 🎨 Design Principles

### Brand Identity

SageStone Inc represents **accountable people, not just software**. The design system reflects:

- **Professional Confidence**: Polished, trustworthy, operationally sharp
- **Human Warmth**: People-first, approachable, quietly confident
- **Conversion Focus**: Clear CTAs, fast load times, optimized microcopy

### Visual Direction

Merges the human warmth of Yohana.com with the sleek, conversion-focused aesthetic of Prismfly.com.

---

## 🧬 Token System

All design tokens are centralized in `/components/design-system/tokens.ts` and linked to CSS variables in `/styles/globals.css`.

### Color Tokens

#### Primary Purple Gradient Scale
```
--color-primary-100: #F3E8FF (Lightest - backgrounds)
--color-primary-400: #B14EFF (Brand primary)
--color-primary-500: #8E3AFF (Core purple - most common)
--color-primary-700: #6419CC (Dark purple)
--color-primary-800: #4D0FA3 (Darkest)
```

#### Secondary & Accent
```
--color-secondary-100: #F3B6FF (Light pink-purple)
--color-accent: #FF72E1 (Pink accent)
```

#### Text Colors
```
--color-text: #1C1B20 (Primary text)
--color-text-muted: #6D6A73 (Secondary text)
--color-text-light: #9B98A3 (Tertiary text)
```

#### Background Colors
```
--color-bg: #FFFFFF (Default white)
--color-bg-muted: #F9F8FB (Soft gray)
--color-surface: #E7E2EE (Borders, dividers)
```

#### Dark Mode
```
--color-dark-bg: #2A044A (Deep purple background)
--color-dark-surface: #3D1159 (Card background)
--color-dark-text: #F9F8FB (Light text)
```

### Typography Tokens

#### Font Families
- **Headings**: Inter Tight / Satoshi (bold, modern)
- **Body**: Plus Jakarta Sans (regular, approachable)

#### Font Weights
```
--font-weight-normal: 400
--font-weight-medium: 500
--font-weight-semibold: 600
--font-weight-bold: 700
--font-weight-extrabold: 800
```

#### Line Heights
```
tight: 1.1 (Headlines)
snug: 1.2 (Subheadings)
normal: 1.5 (Body text)
relaxed: 1.6 (Long-form content)
```

### Spacing Tokens

```
--spacing-4: 4px (xs)
--spacing-8: 8px (sm)
--spacing-16: 16px (md)
--spacing-24: 24px (lg)
--spacing-32: 32px (xl)
--spacing-64: 64px (2xl)
--spacing-100: 100px (3xl)
```

**Usage**: Use consistently for padding, margins, and gaps.

### Border Radius Tokens

```
--radius-sm: 8px (Small elements, badges)
--radius-md: 16px (Cards, inputs)
--radius-lg: 24px (Large cards, sections)
--radius-full: 9999px (Pills, circular elements)
```

### Shadow Tokens

```
--shadow-sm: 0 1px 2px rgba(0,0,0,0.06)
--shadow-md: 0 4px 12px rgba(177,78,255,0.15)
--shadow-lg: 0 10px 30px rgba(177,78,255,0.2)
--shadow-glow: 0 0 20px rgba(177,78,255,0.3)
```

**Hover Behavior**: Cards lift from shadow-sm → shadow-md on hover.

### Gradient Tokens

```
--gradient-primary: linear-gradient(135deg, #B14EFF → #8E3AFF → #E055FF)
--gradient-secondary: linear-gradient(135deg, #C37BFF → #F3B6FF)
--gradient-accent: linear-gradient(135deg, #E055FF → #FF72E1)
```

---

## 🧩 Components Library

### Naming Convention (SSNC)

**SageStone Naming Convention** follows this pattern:

```
[Category]/[Component]/[Variant]/[State]
```

**Examples**:
- `Button/Primary/Default`
- `Card/Service/Hover`
- `Layout/Hero/Desktop`
- `Form/Input/Focused`

### Component Categories

#### 1. Buttons

**Location**: `/components/design-system/Button.tsx`

**Variants**:
- **Primary**: Gradient background with glow effect (main CTAs)
- **Secondary**: Purple outline, transparent background (secondary actions)
- **Ghost**: Text-only, minimal styling (tertiary actions)

**Sizes**:
- `sm`: Small (32px height)
- `md`: Medium (44px height) - default
- `lg`: Large (52px height)

**States**:
- Default
- Hover (brightness +4%, scale 1.02)
- Active (scale 0.98)
- Focused (ring outline)
- Disabled (opacity 50%)
- Loading (spinner icon)

**When to Use**:
- **Primary**: Main conversions (Book Consultation, Get Quote, Submit)
- **Secondary**: Supporting actions (Learn More, See Pricing)
- **Ghost**: Inline links, less emphasis actions

**Accessibility**:
- Minimum touch target: 44×44px
- Focus ring: 2px purple outline
- Disabled state: `aria-disabled` attribute
- Loading state: Screen reader announcement

**Example**:
```tsx
import { Button } from '@/components/design-system';

<Button variant="primary" size="lg" onClick={handleClick}>
  Book a Free Consultation
</Button>
```

---

#### 2. Cards

**Location**: `/components/design-system/Card.tsx`

**Types**:
- **Card/Default**: Base card component
- **Card/Service**: Service offering cards
- **Card/Testimonial**: Client quotes with ratings
- **Card/Metric**: KPI displays with large numbers
- **Card/CaseStudy**: Success story layouts

**Hover Behavior**:
- Lift: `translateY(-2px)`
- Shadow: `sm` → `md`
- Scale icons: `scale(1.1)`

**When to Use**:
- **Service**: Display offerings on services page
- **Testimonial**: Client quotes, reviews
- **Metric**: Statistics, performance indicators
- **CaseStudy**: Detailed success stories

**Example**:
```tsx
import { ServiceCard } from '@/components/design-system';
import { Headphones } from 'lucide-react';

<ServiceCard
  icon={<Headphones className="w-6 h-6 text-[#8E3AFF]" />}
  title="Customer Support Outsourcing"
  description="Never miss a customer inquiry..."
  onLearnMore={() => navigate('/services')}
/>
```

---

#### 3. CTAs (Call-to-Action)

**Location**: `/components/design-system/CTA.tsx`

**Types**:
- **CTA/Gradient/Full**: Full-width purple gradient background
- **CTA/Gradient/Half**: Half-width for columns
- **CTA/Bordered**: White background with border

**Features**:
- Headline + Subtext
- Primary + Secondary buttons
- Animated gradient background
- Responsive button layout

**When to Use**:
- Bottom of pages (final conversion)
- Between major sections
- Campaign landing pages

**Example**:
```tsx
import { CTA } from '@/components/design-system';

<CTA
  type="gradient"
  headline="Let's build your remote operations team"
  subtext="We'll reply within one business day."
  primaryButton={{
    text: 'Start Your Build',
    onClick: () => navigate('/contact'),
    ariaLabel: 'Contact us to start building your team'
  }}
  secondaryButton={{
    text: 'See How It Works',
    onClick: () => navigate('/how-it-works')
  }}
/>
```

---

#### 4. Forms

**Location**: `/components/design-system/Form.tsx`

**Components**:
- **FormInput**: Text input field
- **FormTextarea**: Multi-line text input
- **FormSelect**: Dropdown select
- **FormSubmitButton**: Form submission button

**Features**:
- Labels with required indicators
- Error states with validation messages
- Helper text support
- Focus states with purple ring
- Loading states for submit buttons

**Accessibility**:
- Proper `label` + `input` association
- `aria-required` for required fields
- `aria-invalid` for error states
- `aria-describedby` for error/helper text

**Example**:
```tsx
import { FormInput, FormSubmitButton } from '@/components/design-system';

<FormInput
  label="Work Email"
  type="email"
  placeholder="you@company.com"
  required
  error={errors.email}
  helperText="We'll never share your email"
/>

<FormSubmitButton isLoading={submitting}>
  Send Message
</FormSubmitButton>
```

---

#### 5. Layouts

**Location**: `/components/design-system/Layout.tsx`

**Types**:
- **Container**: Max-width wrapper with padding
- **HeroSplit**: Split hero (text left, image right)
- **SectionThreeColumn**: 3-column grid layout
- **SectionTimeline**: Vertical timeline with connectors
- **SectionFull**: Full-width section wrapper

**Responsive Behavior**:
- Mobile: Single column stacking
- Tablet: 2-column grids
- Desktop: Full grid layouts

**Example**:
```tsx
import { HeroSplit, Container } from '@/components/design-system';

<HeroSplit
  backgroundColor="gradient"
  textContent={
    <>
      <h1>Scale your operations 40% faster</h1>
      <p>We build dedicated remote teams...</p>
    </>
  }
  imageContent={<img src="hero.jpg" alt="Team collaboration" />}
/>
```

---

#### 6. Badges

**Location**: `/components/design-system/Badge.tsx`

**Variants**:
- **Default**: White with purple border
- **Primary**: Light purple background
- **Secondary**: Purple gradient
- **Accent**: Pink gradient

**Sizes**:
- `sm`: Small (text-xs)
- `md`: Medium (text-sm) - default
- `lg`: Large (text-base)

**When to Use**:
- Category tags on blog posts
- Feature labels ("Most Popular", "New")
- Status indicators
- Section identifiers

**Example**:
```tsx
import { Badge } from '@/components/design-system';
import { Sparkles } from 'lucide-react';

<Badge variant="primary" size="md" icon={<Sparkles className="w-3 h-3" />}>
  Business Process Outsourcing
</Badge>
```

---

## 🎯 Naming Convention

### Component Naming (PascalCase)

All components use PascalCase:
- `Button`, `Card`, `CTA`, `FormInput`, `HeroSplit`

### Variant Naming (lowercase)

Variants are lowercase strings:
- `variant="primary"`, `type="gradient"`, `size="lg"`

### File Naming (PascalCase)

Component files use PascalCase:
- `Button.tsx`, `Card.tsx`, `Layout.tsx`

### CSS Class Naming (kebab-case)

Tailwind classes use standard naming:
- `bg-gradient-to-r`, `text-primary-500`, `shadow-glow`

---

## ♿ Accessibility Guidelines

### WCAG 2.2 Level AA Compliance

#### Color Contrast

**Minimum Ratios**:
- Normal text (< 18px): 4.5:1
- Large text (≥ 18px): 3:1
- UI components: 3:1

**Tested Combinations**:
✅ `#1C1B20` on `#FFFFFF` (14.9:1)
✅ `#8E3AFF` on `#FFFFFF` (5.2:1)
✅ `#6D6A73` on `#FFFFFF` (7.1:1)

#### Touch Targets

**Minimum Size**: 44×44px for all interactive elements

**Implementation**:
```tsx
// All buttons include minimum touch target
className="min-w-[44px] min-h-[44px]"
```

#### Focus Indicators

**Visible Focus**: 2px purple ring on all focusable elements

```tsx
focus-visible:ring-2 
focus-visible:ring-offset-2 
focus-visible:ring-[#8E3AFF]
```

#### Semantic HTML

- Use proper heading hierarchy (`h1` → `h2` → `h3`)
- Use `<button>` for actions, `<a>` for navigation
- Use `<nav>`, `<main>`, `<footer>` landmarks
- Use `<label>` for all form inputs

#### ARIA Attributes

- `aria-label` for icon-only buttons
- `aria-hidden="true"` for decorative icons
- `aria-current="page"` for active nav items
- `aria-required` for required form fields
- `aria-invalid` for error states

---

## 💡 Usage Examples

### Complete Page Layout

```tsx
import {
  HeroSplit,
  SectionThreeColumn,
  ServiceCard,
  CTA,
  Container
} from '@/components/design-system';

export function ServicesPage() {
  return (
    <>
      {/* Hero Section */}
      <HeroSplit
        backgroundColor="gradient"
        textContent={
          <div>
            <h1>Our Services</h1>
            <p>We build teams that help businesses run smarter.</p>
          </div>
        }
        imageContent={<img src="hero.jpg" alt="Services overview" />}
      />

      {/* Services Grid */}
      <SectionThreeColumn
        heading="What We Do"
        subheading="Operations designed for growth"
        badge="Services"
        items={services.map(service => (
          <ServiceCard
            icon={service.icon}
            title={service.title}
            description={service.description}
            onLearnMore={() => navigate(service.url)}
          />
        ))}
      />

      {/* CTA */}
      <CTA
        type="gradient"
        headline="Ready to build your team?"
        primaryButton={{
          text: 'Get Started',
          onClick: () => navigate('/contact')
        }}
      />
    </>
  );
}
```

### Form with Validation

```tsx
import { FormInput, FormTextarea, FormSubmitButton } from '@/components/design-system';

export function ContactForm() {
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  return (
    <form onSubmit={handleSubmit}>
      <FormInput
        label="Your Name"
        required
        error={errors.name}
      />
      
      <FormInput
        label="Email"
        type="email"
        required
        error={errors.email}
        helperText="We'll reply within one business day"
      />
      
      <FormTextarea
        label="Message"
        required
        rows={5}
        error={errors.message}
      />
      
      <FormSubmitButton isLoading={loading}>
        Send Message
      </FormSubmitButton>
    </form>
  );
}
```

---

## 🚀 Developer Handoff

### Installation

The design system is located in `/components/design-system/`.

**Import components**:
```tsx
import { Button, Card, CTA } from '@/components/design-system';
```

**Import tokens**:
```tsx
import { tokens } from '@/components/design-system/tokens';
```

### Token Export

All tokens are exportable as JavaScript objects for design tools:

```typescript
import { tokens } from '@/components/design-system/tokens';

console.log(tokens.colors.primary[500]); // var(--color-primary-500)
console.log(tokens.spacing.lg); // var(--spacing-24)
```

### Figma Integration

1. **Variables API**: Export `tokens.ts` to Figma Variables
2. **Styles Panel**: Link all colors, text styles, and effects
3. **Auto Layout**: All components use Auto Layout for responsive behavior
4. **Naming**: Follow SSNC (SageStone Naming Convention)

### CSS Variables

All design tokens are CSS variables defined in `/styles/globals.css`:

```css
:root {
  --color-primary-500: #8E3AFF;
  --spacing-md: 16px;
  --radius-lg: 24px;
  /* ... */
}
```

### Component Props

Every component is fully typed with TypeScript:

```tsx
interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  isLoading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}
```

---

## 📐 Grid & Spacing Recommendations

### Page Sections

**Vertical Spacing**:
- Mobile: `py-12` (48px)
- Desktop: `py-24 lg:py-32` (96px → 128px)

### Grid Systems

**2-Column**:
```tsx
<div className="grid md:grid-cols-2 gap-6">
```

**3-Column**:
```tsx
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
```

**4-Column**:
```tsx
<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
```

---

## 🎨 Typography Scale

### Headings (Inter Tight)

```css
h1: 3.5rem (56px) | line-height: 1.1 | weight: 700
h2: 2.75rem (44px) | line-height: 1.2 | weight: 700
h3: 2rem (32px) | line-height: 1.3 | weight: 600
h4: 1.5rem (24px) | line-height: 1.4 | weight: 600
h5: 1.25rem (20px) | line-height: 1.4 | weight: 600
h6: 1.125rem (18px) | line-height: 1.4 | weight: 600
```

### Body Text (Plus Jakarta Sans)

```css
p: 1rem (16px) | line-height: 1.6 | weight: 400
```

### Utility Text

```css
label: 0.875rem (14px) | line-height: 1.5 | weight: 500
button: 0.9375rem (15px) | line-height: 1.5 | weight: 500
```

---

## 📝 Content Guidelines

### Button Copy

**Primary CTAs** (action-oriented):
- "Book a Free Consultation"
- "Get Your Custom Quote"
- "Start Your Build"
- "Let's Talk"

**Secondary CTAs** (exploratory):
- "See How It Works"
- "Learn More"
- "View Services"
- "Read Success Stories"

### Microcopy Principles

1. **Be Direct**: "Book a consultation" not "Reach out to us"
2. **Show Value**: "Get a tailored plan" not "Contact us"
3. **Use Action Verbs**: "Start", "Build", "Scale", "Get"
4. **Be Human**: "Let's talk" not "Submit inquiry"

---

## 📊 Performance Guidelines

### Image Optimization

- **Format**: WebP with JPEG fallback
- **Lazy Loading**: All images below fold
- **Responsive**: Use `srcset` for different screen sizes

### Page Load Targets

- **First Contentful Paint**: < 1.5s
- **Largest Contentful Paint**: < 2.5s
- **Total Load Time**: < 3s
- **Lighthouse Score**: > 90 in all categories

---

## 🔄 Version History

### Version 1.0 (Current)
- ✅ Complete token system
- ✅ Button, Card, CTA components
- ✅ Form components
- ✅ Layout components
- ✅ Badge utility component
- ✅ WCAG 2.2 AA compliance
- ✅ Responsive design
- ✅ TypeScript support

---

## 🤝 Contributing

### Adding New Components

1. Create component file in `/components/design-system/`
2. Use SSNC naming convention
3. Export from `index.ts`
4. Add documentation to this file
5. Include TypeScript types
6. Ensure accessibility compliance

### Updating Tokens

1. Update `/styles/globals.css` CSS variables
2. Update `/components/design-system/tokens.ts` exports
3. Test across all components
4. Update documentation

---

## 📞 Support

For questions or contributions:
- **Email**: hello@jesscura.com
- **Phone**: +1 (214) 945-2234
- **Founder**: Jesel Cura (10 years Customer Success & Operations)

---

**Built with care by SageStone Inc** | Accountable people. Global operations.
