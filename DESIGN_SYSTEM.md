# PrimeRole Design System

This design system defines the visual language for PrimeRole. All UI implementation must follow these guidelines exactly.

---

## Color Palette

### Brand Colors

**Primary Accent**
- `#6640FF` - Purple (primary accent only, NOT for large backgrounds)
- Use for: CTAs, links, highlights, active states, borders

**Accent Variations**
- Light: `#8066FF` (hover states for primary elements)
- Dark: `#5232E6` (pressed states)
- Subtle: `#6640FF10` (10% opacity - subtle backgrounds)
- Muted: `#6640FF20` (20% opacity - hover backgrounds)

### Neutral Palette

**Backgrounds**
- White: `#FFFFFF` (primary background)
- Gray 50: `#F9FAFB` (subtle section backgrounds)
- Gray 100: `#F3F4F6` (card backgrounds, secondary surfaces)
- Gray 200: `#E5E7EB` (borders, dividers)

**Text Colors**
- Primary: `#111827` (headings, primary text)
- Secondary: `#4B5563` (body text, descriptions)
- Tertiary: `#6B7280` (labels, captions)
- Muted: `#9CA3AF` (placeholder text, disabled states)

### Semantic Colors

**Success**
- `#10B981` (success states, positive metrics)
- Background: `#ECFDF5`

**Warning**
- `#F59E0B` (warnings, alerts)
- Background: `#FFFBEB`

**Error**
- `#EF4444` (errors, destructive actions)
- Background: `#FEF2F2`

---

## Typography Scale

### Font Family
- Primary: `Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif`
- Monospace: `'JetBrains Mono', 'Fira Code', monospace` (for code snippets only)

### Type Scale

**Headings**

```
H1 - Hero Headline
- Size: 3.5rem (56px) / 3rem (48px) mobile
- Weight: 700 (Bold)
- Line height: 1.1
- Letter spacing: -0.02em
- Color: #111827

H2 - Section Heading
- Size: 2.25rem (36px) / 2rem (32px) mobile
- Weight: 700 (Bold)
- Line height: 1.2
- Letter spacing: -0.015em
- Color: #111827

H3 - Subsection Heading
- Size: 1.5rem (24px)
- Weight: 600 (Semi-bold)
- Line height: 1.3
- Letter spacing: -0.01em
- Color: #111827

H4 - Card Heading
- Size: 1.25rem (20px)
- Weight: 600 (Semi-bold)
- Line height: 1.4
- Color: #111827

H5 - Small Heading
- Size: 1rem (16px)
- Weight: 600 (Semi-bold)
- Line height: 1.5
- Color: #111827
```

**Body Text**

```
Large Body
- Size: 1.125rem (18px)
- Weight: 400 (Regular)
- Line height: 1.7
- Color: #4B5563

Body (Default)
- Size: 1rem (16px)
- Weight: 400 (Regular)
- Line height: 1.6
- Color: #4B5563

Small Body
- Size: 0.875rem (14px)
- Weight: 400 (Regular)
- Line height: 1.5
- Color: #6B7280
```

**Labels & UI Text**

```
Label
- Size: 0.875rem (14px)
- Weight: 500 (Medium)
- Line height: 1.4
- Color: #111827

Caption
- Size: 0.75rem (12px)
- Weight: 500 (Medium)
- Line height: 1.4
- Color: #6B7280
```

---

## Button Styles

### Primary Button

**Default State**
```
Background: #6640FF
Color: #FFFFFF
Padding: 0.75rem 1.5rem (12px 24px)
Border radius: 0.5rem (8px)
Font size: 1rem (16px)
Font weight: 500 (Medium)
Border: none
Shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05)
```

**Hover State**
```
Background: #5232E6
Shadow: 0 4px 6px -1px rgba(102, 64, 255, 0.15)
Transform: translateY(-1px)
Transition: all 150ms ease
```

**Pressed State**
```
Background: #4528CC
Transform: translateY(0)
Shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05)
```

**Disabled State**
```
Background: #E5E7EB
Color: #9CA3AF
Cursor: not-allowed
```

### Secondary Button

**Default State**
```
Background: transparent
Color: #6640FF
Padding: 0.75rem 1.5rem (12px 24px)
Border radius: 0.5rem (8px)
Font size: 1rem (16px)
Font weight: 500 (Medium)
Border: 1.5px solid #6640FF
Shadow: none
```

**Hover State**
```
Background: #6640FF10
Border color: #5232E6
```

**Pressed State**
```
Background: #6640FF20
```

**Disabled State**
```
Border color: #E5E7EB
Color: #9CA3AF
Cursor: not-allowed
```

### Ghost Button

**Default State**
```
Background: transparent
Color: #4B5563
Padding: 0.75rem 1.5rem
Border radius: 0.5rem
Font size: 1rem
Font weight: 500
Border: none
```

**Hover State**
```
Background: #F3F4F6
Color: #111827
```

---

## Card Styles

### Department Card

```
Background: #FFFFFF
Border: 1px solid #E5E7EB
Border radius: 0.75rem (12px)
Padding: 2rem (32px)
Shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.1)
```

**Hover State**
```
Border color: #6640FF40
Shadow: 0 10px 15px -3px rgba(102, 64, 255, 0.1), 0 4px 6px -4px rgba(102, 64, 255, 0.1)
Transform: translateY(-2px)
Transition: all 200ms ease
```

**Card Header**
```
Department name: H4 style
Outcome: Large Body, color #4B5563
```

**Card Content**
```
List items: Body style
Spacing: 0.75rem between items
```

**Card Footer**
```
Padding top: 1.5rem
Border top: 1px solid #E5E7EB
```

### AI Employee Card

```
Background: #FFFFFF
Border: 1px solid #E5E7EB
Border radius: 0.75rem (12px)
Padding: 1.5rem (24px)
Shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1)
```

**Hover State**
```
Border color: #6640FF40
Shadow: 0 4px 6px -1px rgba(102, 64, 255, 0.1)
Transform: translateY(-1px)
Transition: all 150ms ease
```

**Avatar**
```
Size: 3rem (48px)
Border radius: 50% (circle)
Background: gradient or image
Border: 2px solid #F3F4F6
```

**Name**
```
Font: H5 style
Color: #111827
```

**Role**
```
Font: Small Body
Color: #6B7280
```

### Feature Card

```
Background: #F9FAFB
Border: 1px solid #E5E7EB
Border radius: 0.5rem (8px)
Padding: 1.5rem (24px)
```

**Icon Container**
```
Size: 2.5rem (40px)
Background: #6640FF10
Border radius: 0.5rem (8px)
Display: flex center
```

**Title**
```
Font: H5 style
Margin top: 1rem
```

**Description**
```
Font: Body style
Margin top: 0.5rem
```

---

## Spacing System

Use a consistent 4px base unit system:

```
xs: 0.25rem (4px)
sm: 0.5rem (8px)
md: 0.75rem (12px)
base: 1rem (16px)
lg: 1.5rem (24px)
xl: 2rem (32px)
2xl: 2.5rem (40px)
3xl: 3rem (48px)
4xl: 4rem (64px)
5xl: 6rem (96px)
6xl: 8rem (128px)
```

**Section Spacing**
```
Between sections: 5xl (96px) desktop / 4xl (64px) mobile
Within sections: 3xl (48px) desktop / 2xl (40px) mobile
Between elements: lg (24px) or xl (32px)
```

**Container Padding**
```
Desktop: 2xl (40px)
Tablet: xl (32px)
Mobile: lg (24px)
```

---

## Border Radius

```
none: 0
sm: 0.25rem (4px)
base: 0.5rem (8px)
md: 0.75rem (12px)
lg: 1rem (16px)
xl: 1.25rem (20px)
full: 9999px (circle/pill)
```

**Usage**
- Buttons: base (8px)
- Cards: md (12px) or base (8px)
- Inputs: base (8px)
- Avatars: full (circle)
- Feature icons: base (8px)

---

## Shadows

```
sm: 0 1px 2px 0 rgba(0, 0, 0, 0.05)
base: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.1)
md: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)
lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1)
xl: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)

accent-sm: 0 1px 2px 0 rgba(102, 64, 255, 0.05)
accent-md: 0 4px 6px -1px rgba(102, 64, 255, 0.1)
accent-lg: 0 10px 15px -3px rgba(102, 64, 255, 0.1), 0 4px 6px -4px rgba(102, 64, 255, 0.1)
```

---

## Tailwind Utility Guidance

### Custom Color Classes

Add to `tailwind.config.js`:

```js
colors: {
  primary: {
    DEFAULT: '#6640FF',
    light: '#8066FF',
    dark: '#5232E6',
    subtle: 'rgba(102, 64, 255, 0.1)',
    muted: 'rgba(102, 64, 255, 0.2)',
  },
  neutral: {
    50: '#F9FAFB',
    100: '#F3F4F6',
    200: '#E5E7EB',
    300: '#D1D5DB',
    400: '#9CA3AF',
    500: '#6B7280',
    600: '#4B5563',
    700: '#374151',
    800: '#1F2937',
    900: '#111827',
  }
}
```

### Custom Spacing

Already covered by Tailwind's default spacing scale (4px base).

### Custom Shadows

Add to `tailwind.config.js`:

```js
boxShadow: {
  'accent-sm': '0 1px 2px 0 rgba(102, 64, 255, 0.05)',
  'accent-md': '0 4px 6px -1px rgba(102, 64, 255, 0.1)',
  'accent-lg': '0 10px 15px -3px rgba(102, 64, 255, 0.1), 0 4px 6px -4px rgba(102, 64, 255, 0.1)',
}
```

---

## Reusable Class Patterns

### Typography Classes

```
.heading-hero {
  @apply text-5xl md:text-6xl font-bold leading-tight tracking-tight text-neutral-900;
}

.heading-section {
  @apply text-3xl md:text-4xl font-bold leading-tight tracking-tight text-neutral-900;
}

.heading-subsection {
  @apply text-2xl font-semibold leading-snug tracking-tight text-neutral-900;
}

.heading-card {
  @apply text-xl font-semibold leading-snug text-neutral-900;
}

.body-large {
  @apply text-lg leading-relaxed text-neutral-600;
}

.body {
  @apply text-base leading-relaxed text-neutral-600;
}

.body-small {
  @apply text-sm leading-normal text-neutral-500;
}

.label {
  @apply text-sm font-medium leading-snug text-neutral-900;
}

.caption {
  @apply text-xs font-medium leading-snug text-neutral-500;
}
```

### Button Classes

```
.btn {
  @apply px-6 py-3 rounded-lg text-base font-medium transition-all duration-150 ease-in-out;
}

.btn-primary {
  @apply btn bg-primary text-white shadow-sm hover:bg-primary-dark hover:shadow-accent-md hover:-translate-y-px active:translate-y-0 active:shadow-sm disabled:bg-neutral-200 disabled:text-neutral-400 disabled:cursor-not-allowed disabled:transform-none;
}

.btn-secondary {
  @apply btn bg-transparent text-primary border-[1.5px] border-primary hover:bg-primary-subtle hover:border-primary-dark active:bg-primary-muted disabled:border-neutral-200 disabled:text-neutral-400 disabled:cursor-not-allowed;
}

.btn-ghost {
  @apply btn bg-transparent text-neutral-600 hover:bg-neutral-100 hover:text-neutral-900;
}
```

### Card Classes

```
.card {
  @apply bg-white border border-neutral-200 rounded-xl p-8 shadow-base transition-all duration-200 ease-in-out;
}

.card-department {
  @apply card hover:border-primary/25 hover:shadow-accent-lg hover:-translate-y-0.5;
}

.card-employee {
  @apply bg-white border border-neutral-200 rounded-xl p-6 shadow-base transition-all duration-150 ease-in-out hover:border-primary/25 hover:shadow-accent-md hover:-translate-y-px;
}

.card-feature {
  @apply bg-neutral-50 border border-neutral-200 rounded-lg p-6;
}
```

### Layout Classes

```
.container-page {
  @apply max-w-7xl mx-auto px-6 md:px-10 lg:px-10;
}

.section {
  @apply py-24 md:py-24;
}

.section-content {
  @apply space-y-12 md:space-y-10;
}
```

### Link Classes

```
.link {
  @apply text-primary hover:text-primary-dark transition-colors duration-150 ease-in-out;
}

.link-underline {
  @apply link underline underline-offset-2 decoration-1 hover:decoration-2;
}
```

---

## Animation Guidelines

Keep animations subtle and purposeful:

**Allowed Transitions**
- Opacity fades: 150-200ms
- Color changes: 150ms
- Transform (translate, scale): 150-200ms
- Shadow changes: 200ms

**Easing**
- Default: `ease-in-out`
- Entrances: `ease-out`
- Exits: `ease-in`

**No Bounce**
- Do not use spring or bounce easing
- Keep motion calm and controlled

**Framer Motion Usage**
- Use only for light page transitions
- Stagger animations for lists (50ms delay)
- Fade + slight translate for entrance animations

```jsx
// Example subtle entrance
<motion.div
  initial={{ opacity: 0, y: 8 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.2, ease: 'easeOut' }}
>
```

---

## Visual Hierarchy Rules

1. **Primary accent (#6640FF) usage:**
   - CTAs (primary buttons)
   - Active links
   - Important UI highlights
   - Icon accents
   - Borders on hover states
   - **Never use for large background areas**

2. **Neutrals for structure:**
   - White (#FFFFFF) for primary backgrounds
   - Gray 50 (#F9FAFB) for subtle section backgrounds
   - Gray 100 (#F3F4F6) for cards and secondary surfaces

3. **Text hierarchy:**
   - Primary text (#111827) for headings and important content
   - Secondary text (#4B5563) for body and descriptions
   - Tertiary text (#6B7280) for labels and captions

4. **Elevation through shadows:**
   - Base cards: shadow-base
   - Hover states: shadow-accent-md or shadow-accent-lg
   - Never stack multiple strong shadows

---

## Implementation Notes

1. **Premium but calm aesthetic:**
   - Clean layouts with generous whitespace
   - Subtle interactions
   - Polished details (proper shadows, smooth transitions)
   - No aggressive gradients or loud effects

2. **Design-forward approach:**
   - Consistent spacing and alignment
   - Thoughtful typography scale
   - Purposeful use of accent color
   - Quality over quantity

3. **Accessibility:**
   - Minimum 4.5:1 contrast ratio for body text
   - 3:1 for large text (18px+)
   - Focus states visible on all interactive elements
   - Hover states distinct from default states

---

This design system is locked. Do not introduce new patterns without updating this document.
