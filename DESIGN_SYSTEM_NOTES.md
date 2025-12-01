# SageStone Design System — Quick Reference

> **Canonical Source**: `src/styles/globals.css`  
> **Alias Layer**: `src/styles/tokens.css`

This document provides a quick reference for using the unified SageStone design system.

---

## Color System

### Semantic Tokens (Preferred)

Use these semantic tokens instead of raw hex values for automatic dark/light mode support:

| Token | Light Mode | Usage |
|-------|------------|-------|
| `--primary` | `#8E3AFF` | Primary purple actions, links |
| `--accent` | `#FF72E1` | Pink accent, highlights |
| `--background` | `#FFFFFF` | Page backgrounds |
| `--foreground` | `#1C1B20` | Primary text |
| `--muted` | `#F9F8FB` | Muted backgrounds |
| `--muted-foreground` | `#6D6A73` | Secondary text |
| `--border` | `#E7E2EE` | Borders, dividers |
| `--card` | `#FFFFFF` | Card backgrounds |

### Primary Palette Scale

For gradient and accent variations:

| Token | Value | Usage |
|-------|-------|-------|
| `--color-primary-100` | `#F3E8FF` | Light purple backgrounds |
| `--color-primary-400` | `#B14EFF` | Bright purple (buttons, badges) |
| `--color-primary-500` | `#8E3AFF` | Core purple |
| `--color-primary-700` | `#6419CC` | Dark purple |

### Dark Section Colors

For dark-themed sections (hero, footer, etc.):

| Token | Value | Usage |
|-------|-------|-------|
| `--dark-bg` | `#0A0118` | Dark section main background |
| `--dark-bg-secondary` | `#1A0B2E` | Dark section secondary background |
| `--dark-surface` | `#2A1B3D` | Dark cards, borders |
| `--dark-text` | `#FFFFFF` | White text on dark |
| `--dark-text-muted` | `#C4B8D4` | Muted text on dark |

---

## Typography

### Fonts

- **Headings**: `var(--font-heading)` — Playfair Display
- **Body/UI**: `var(--font-body)` — Inter

### Default Scale

The base typography is defined in `globals.css`:

| Element | Size | Weight |
|---------|------|--------|
| h1 | 3.5rem | 700 |
| h2 | 2.75rem | 700 |
| h3 | 2rem | 600 |
| h4 | 1.5rem | 600 |
| h5 | 1.25rem | 600 |
| h6 | 1.125rem | 600 |
| p | 1rem | 400 |
| button | 0.9375rem | 500 |

---

## Usage Examples

### Using CSS Variables

```css
/* Preferred: Use semantic tokens */
.my-button {
  background: var(--primary);
  color: var(--primary-foreground);
}

/* For dark sections */
.dark-section {
  background: var(--dark-bg);
  color: var(--dark-text);
}

/* For palette variations */
.highlight {
  background: var(--color-primary-100);
  border-color: var(--color-primary-400);
}
```

### Using Tailwind Classes

```jsx
{/* Semantic colors via Tailwind */}
<button className="bg-primary text-primary-foreground">
  Click me
</button>

{/* Dark sections */}
<section className="bg-dark-bg text-dark-text">
  Dark content
</section>

{/* Gradients */}
<div style={{ background: 'var(--gradient-primary)' }}>
  Gradient
</div>
```

---

## Hex to Token Reference

When refactoring components, replace hex values with tokens:

| Hex Value | Replace With |
|-----------|--------------|
| `#8E3AFF` | `var(--primary)` |
| `#B14EFF` | `var(--color-primary-400)` |
| `#FF72E1` | `var(--accent)` |
| `#1C1B20` | `var(--foreground)` |
| `#6D6A73` | `var(--muted-foreground)` |
| `#F9F8FB` | `var(--muted)` |
| `#E7E2EE` | `var(--border)` |
| `#F3E8FF` | `var(--color-primary-100)` |
| `#0A0118` | `var(--dark-bg)` |
| `#1A0B2E` | `var(--dark-bg-secondary)` |
| `#2A1B3D` | `var(--dark-surface)` |
| `#C4B8D4` | `var(--dark-text-muted)` |

---

## Gradients

```css
--gradient-primary: linear-gradient(135deg, #B14EFF 0%, #8E3AFF 50%, #E055FF 100%);
--gradient-secondary: linear-gradient(135deg, #C37BFF 0%, #F3B6FF 100%);
--gradient-accent: linear-gradient(135deg, #E055FF 0%, #FF72E1 100%);
```

---

## File Structure

- **`src/styles/globals.css`**: Canonical design system (DO NOT duplicate tokens)
- **`src/styles/tokens.css`**: Compatibility aliases only (aliases into globals.css)
- **`src/DESIGN_SYSTEM.md`**: Full design system documentation

---

## Contributing

When adding new styles:

1. Check if a semantic token already exists in `globals.css`
2. Use `var(--token-name)` instead of raw hex values
3. For new tokens, add them to `globals.css` first
4. Update `tokens.css` only for compatibility aliases
5. Prefer Tailwind utility classes where possible

---

*Built with care by SageStone Inc*
