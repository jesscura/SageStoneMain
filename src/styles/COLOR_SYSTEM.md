# SageStone Color System Guide

## Overview
This document describes the centralized color system for the SageStone website, ensuring consistent and accessible color usage across all pages.

## Core Principles

1. **Always use CSS custom properties (variables)** instead of hardcoded colors
2. **Use semantic tokens** that adapt to light/dark contexts
3. **Ensure proper contrast** for WCAG AA compliance
4. **Test text visibility** on all background colors

## Color Variable Hierarchy

### Level 1: Raw Palette (defined in `globals.css`)
```css
--color-primary-100 through --color-primary-800
--color-accent
--color-text, --color-text-muted, --color-text-light
```

### Level 2: Semantic Tokens (defined in `globals.css`)
```css
--primary, --secondary, --accent
--background, --foreground
--muted, --muted-foreground
--border, --input, --ring
```

### Level 3: Context-Specific (defined in `tokens.css`)
```css
--dark-bg, --dark-bg-secondary, --dark-surface
--dark-text, --dark-text-muted
```

## Usage Guidelines

### For Light Backgrounds (white/light colored sections)

✅ **DO:**
```tsx
// Text
className="text-foreground"           // Dark text on light bg
className="text-muted-foreground"     // Muted dark text

// Buttons
className="bg-primary text-primary-foreground"  // Purple bg, white text
className="border border-primary text-primary"  // Purple border & text
```

❌ **DON'T:**
```tsx
className="text-white"               // White text on white bg - INVISIBLE!
className="text-[var(--dark-text)]"  // Wrong semantic context
```

### For Dark Backgrounds (purple/dark sections)

✅ **DO:**
```tsx
// Text
className="text-white"
className="text-[var(--dark-text-muted)]"

// Buttons
className="bg-[var(--color-primary-400)] text-white"
className="border border-white text-white"
```

❌ **DON'T:**
```tsx
className="text-foreground"          // Dark text on dark bg - INVISIBLE!
className="text-primary"             // Purple text on purple bg - LOW CONTRAST
```

## Button Color Patterns

### On Light Backgrounds
```tsx
// Primary action
<Button variant="default">Action</Button>
// Uses: bg-primary text-primary-foreground

// Secondary action  
<Button variant="outline">Action</Button>
// Uses: border text-foreground hover:bg-accent

// Tertiary action
<Button variant="ghost">Action</Button>
// Uses: text-foreground hover:bg-accent
```

### On Dark Backgrounds
```tsx
// Primary action (bright button)
<Button className="bg-[var(--color-primary-400)] text-white">
  Action
</Button>

// Secondary action (outline)
<Button className="border border-white text-white hover:bg-white/10">
  Action
</Button>

// Filter/Category buttons (inactive state)
<Button 
  variant="outline"
  className="border-[var(--dark-surface)] text-[var(--dark-text-muted)] hover:border-[var(--color-primary-400)] hover:text-[var(--color-primary-400)]"
>
  Filter
</Button>

// Filter/Category buttons (active state)
<Button className="bg-[var(--color-primary-400)] text-white">
  Active Filter
</Button>
```

## Quick Reference: Common Scenarios

| Scenario | Background | Text Color | Button Style |
|----------|-----------|------------|--------------|
| Hero section (light) | `bg-white` or `bg-muted` | `text-foreground` | `variant="default"` or `variant="outline"` |
| Hero section (dark) | `bg-[var(--dark-bg)]` | `text-white` | `bg-[var(--color-primary-400)] text-white` |
| Content cards (light) | `bg-card` | `text-card-foreground` | `variant="outline"` |
| Content cards (dark) | `bg-[var(--dark-bg-secondary)]` | `text-white` | `border-[var(--dark-surface)] text-[var(--dark-text-muted)]` |
| Filter buttons (light bg) | `bg-white` | `text-foreground` (inactive), `text-primary-foreground` (active) | See below |
| Filter buttons (dark bg) | `bg-[var(--dark-bg)]` | `text-[var(--dark-text-muted)]` (inactive), `text-white` (active) | See below |

## Filter/Category Button Pattern

### Light Background Context
```tsx
const isActive = activeCategory === category.name;

<Button
  variant={isActive ? "default" : "outline"}
  className={isActive
    ? "bg-primary text-primary-foreground"
    : "border-border text-muted-foreground hover:border-primary hover:text-primary hover:bg-primary/5"
  }
>
  {category.name}
</Button>
```

### Dark Background Context
```tsx
const isActive = activeCategory === category.name;

<Button
  variant={isActive ? "default" : "outline"}
  className={isActive
    ? "bg-[var(--color-primary-400)] text-white"
    : "border-[var(--dark-surface)] text-[var(--dark-text-muted)] hover:border-[var(--color-primary-400)] hover:text-[var(--color-primary-400)] hover:bg-[var(--color-primary-400)]/10"
  }
>
  {category.name}
</Button>
```

## Testing Checklist

Before deploying changes, verify:

- [ ] Text is readable on both light and dark backgrounds
- [ ] Inactive buttons have sufficient contrast (4.5:1 minimum)
- [ ] Active buttons are clearly distinguishable from inactive
- [ ] Hover states provide clear visual feedback
- [ ] Focus states are visible for keyboard navigation
- [ ] Colors work in both light mode and dark mode

## Common Fixes

### Issue: White text on white background
**Problem:** Using dark-theme text colors on light backgrounds
**Fix:** Replace `text-white` or `text-[var(--dark-text-muted)]` with `text-foreground` or `text-muted-foreground`

### Issue: Dark text on dark background  
**Problem:** Using light-theme text colors on dark backgrounds
**Fix:** Replace `text-foreground` with `text-white` or `text-[var(--dark-text-muted)]`

### Issue: Low contrast buttons
**Problem:** Inactive filter buttons barely visible
**Fix:** Ensure inactive state uses `text-muted-foreground` (light bg) or `text-[var(--dark-text-muted)]` (dark bg)

## Resources

- CSS Variables: `src/styles/globals.css` (canonical source)
- Compatibility Layer: `src/styles/tokens.css`
- Design System Notes: `DESIGN_SYSTEM_NOTES.md`
- Button Component: `src/components/ui/button.tsx`
