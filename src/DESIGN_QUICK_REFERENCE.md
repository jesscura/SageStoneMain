# SageStone Design System - Quick Reference

> **One-page cheatsheet for designers and developers**

---

## 🎨 Color Palette

### Primary Purple
```
#F3E8FF (100) - Backgrounds, light fills
#B14EFF (400) - Brand primary
#8E3AFF (500) - Most common usage ⭐
#6419CC (700) - Dark mode, emphasis
```

### Accent
```
#FF72E1 - Pink accent, highlights
```

### Text
```
#1C1B20 - Primary text
#6D6A73 - Secondary text
#9B98A3 - Muted text
```

### Backgrounds
```
#FFFFFF - White
#F9F8FB - Soft gray
#2A044A - Dark purple (footer)
```

---

## 📏 Spacing Scale

```
4px  (xs)  - Tight spacing, icon gaps
8px  (sm)  - Small gaps, compact layouts
16px (md)  - Default spacing ⭐
24px (lg)  - Section gaps
32px (xl)  - Large section spacing
64px (2xl) - Hero padding
```

---

## 🔤 Typography

### Fonts
- **Headings**: Inter Tight (700)
- **Body**: Plus Jakarta Sans (400-500)

### Scale
```
h1: 56px (3.5rem)
h2: 44px (2.75rem)
h3: 32px (2rem)
h4: 24px (1.5rem)
p:  16px (1rem) ⭐
```

### Line Heights
```
1.1 - Headlines
1.5 - Body text ⭐
1.6 - Long-form
```

---

## 🎯 Border Radius

```
8px  (sm) - Badges, small elements
16px (md) - Cards, inputs ⭐
24px (lg) - Large cards, hero images
9999px   - Pills, circular
```

---

## 💫 Shadows

```
sm:   0 1px 2px rgba(0,0,0,0.06)
md:   0 4px 12px rgba(177,78,255,0.15) ⭐
lg:   0 10px 30px rgba(177,78,255,0.2)
glow: 0 0 20px rgba(177,78,255,0.3)
```

**Hover Effect**: Cards lift 2px + shadow increases

---

## 🌈 Gradients

### Primary (Most Common)
```
linear-gradient(135deg, #B14EFF → #8E3AFF → #E055FF)
```

### Secondary
```
linear-gradient(135deg, #C37BFF → #F3B6FF)
```

### Accent
```
linear-gradient(135deg, #E055FF → #FF72E1)
```

---

## 🔘 Button States

### Primary Button
```
Default: Purple gradient + glow shadow
Hover:   Brightness +10% + larger shadow
Active:  Scale 0.98
Focus:   2px purple ring
```

### Secondary Button
```
Default: Purple outline, transparent
Hover:   Light purple fill (#F3E8FF)
Active:  Scale 0.98
```

---

## 🎴 Card Variants

### Service Card
- Gradient border (top)
- Icon in purple gradient background
- Hover: Scale icon 110%, lift card

### Testimonial Card
- 5-star rating
- Metric badge (optional)
- Quote + author

### Metric Card
- Large gradient number
- Icon + label
- Decorative gradient blob

---

## 📱 Responsive Breakpoints

```
Mobile:  < 768px  (single column)
Tablet:  768px+   (2 columns)
Desktop: 1024px+  (3-4 columns)
```

---

## ♿ Accessibility Checklist

✅ **Contrast**: 4.5:1 minimum for text  
✅ **Touch Targets**: 44×44px minimum  
✅ **Focus Rings**: 2px purple outline  
✅ **Alt Text**: All images  
✅ **Semantic HTML**: Proper heading hierarchy  
✅ **ARIA Labels**: Icon-only buttons  

---

## 🧭 Component Naming

### Format
```
[Component]/[Variant]/[State]
```

### Examples
```
Button/Primary/Default
Card/Service/Hover
Layout/Hero/Desktop
Form/Input/Focused
```

---

## 💬 CTA Copy Examples

### Primary (Action)
- "Book a Free Consultation"
- "Start Your Build"
- "Get Your Custom Quote"

### Secondary (Explore)
- "See How It Works"
- "Learn More"
- "View Pricing"

---

## 🎬 Animation Timings

```
Fast:   150ms - Micro-interactions
Normal: 200ms - Standard ⭐
Slow:   300ms - Page transitions
```

**Easing**: `cubic-bezier(0.4, 0, 0.2, 1)`

---

## 📐 Grid Systems

### 2-Column
```tsx
grid md:grid-cols-2 gap-6
```

### 3-Column
```tsx
grid md:grid-cols-2 lg:grid-cols-3 gap-6
```

### 4-Column
```tsx
grid md:grid-cols-2 lg:grid-cols-4 gap-6
```

---

## 🖼️ Image Guidelines

- **Format**: WebP (JPEG fallback)
- **Alt Text**: Descriptive, not "image of..."
- **Aspect Ratio**: 4:3 for hero images
- **Lazy Load**: All below-fold images

---

## 🏷️ Badge Usage

### Variant Guide
- **Default**: Section labels, categories
- **Primary**: Feature highlights
- **Secondary**: Gradients for emphasis
- **Accent**: "New", "Popular", time-sensitive

---

## 📊 Common Layouts

### Hero (Split)
```
[Text Content]  |  [Image]
     50%        |    50%
```

### Services Grid
```
[Card] [Card] [Card]
[Card] [Card] [Card]
    3 columns
```

### Timeline
```
[Icon] → [Content Card]
  |
[Icon] → [Content Card]
  |
[Icon] → [Content Card]
```

---

## 🔗 Quick Links

- **Full Documentation**: `/DESIGN_SYSTEM.md`
- **Components**: `/components/design-system/`
- **Tokens**: `/components/design-system/tokens.ts`
- **Styles**: `/styles/globals.css`

---

## 💡 Pro Tips

1. **Consistency**: Use tokens, not raw hex values
2. **Hierarchy**: Establish clear visual hierarchy
3. **White Space**: Let content breathe
4. **Accessibility**: Always test contrast and focus states
5. **Performance**: Optimize images, lazy load

---

## 📞 Need Help?

**Founder**: Jesel Cura  
**Email**: hello@jesscura.com  
**Phone**: +1 (214) 945-2234  

---

**SageStone Inc** | Accountable people. Global operations.
