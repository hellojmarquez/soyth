# Soyth Volunteer Initiative Landing Page Design Guidelines

## Design Approach
**Reference-Based Approach** inspired by modern volunteer/community platforms like GitHub's open source initiatives and Figma's community pages. This approach balances professional credibility with community warmth.

## Core Design Elements

### Color Palette
**Primary Brand Colors:**
- Primary: 220 85% 45% (vibrant blue for trust and technology)
- Secondary: 160 70% 40% (complementary teal for growth/community)

**Supporting Colors:**
- Background (Light): 0 0% 98%
- Background (Dark): 220 15% 8%
- Text Primary: 220 20% 15% (light) / 0 0% 95% (dark)
- Accent: 280 60% 55% (purple for highlights, used sparingly)

**Gradients:**
- Hero background: Subtle gradient from primary to secondary (220 85% 45% to 160 70% 40%)
- Card hover states: Light gradient overlay for depth

### Typography
**Font Stack:** Inter (Google Fonts)
- Headings: 700 weight, sizes from text-6xl (hero) down to text-2xl
- Body text: 400 weight, text-base and text-lg
- Buttons/CTAs: 600 weight, text-sm to text-base

### Layout System
**Tailwind Spacing Units:** Consistent use of 4, 8, 12, 16, 24 for spacing (p-4, m-8, gap-12, etc.)
- Sections: py-16 to py-24 for vertical rhythm
- Container: max-w-6xl mx-auto px-4 for content width
- Grid systems: 1, 2, 3 column layouts using grid-cols-1 md:grid-cols-2 lg:grid-cols-3

### Component Library

**Navigation:**
- Sticky header with subtle backdrop blur
- Mobile hamburger menu with slide-in animation
- Smooth scroll navigation links

**Hero Section:**
- Full-viewport height with gradient background
- Large typography hierarchy
- Primary CTA button with strong contrast
- Subtle geometric background elements

**Cards (Volunteer Roles):**
- Clean white/dark cards with subtle shadows
- Hover effects with gentle scale and shadow increase
- Consistent internal padding and typography hierarchy

**Forms:**
- Clean input styling with focus states
- Validation feedback with color-coded messages
- Rounded corners for modern feel

## Visual Treatment

**Background Treatments:**
- Hero: Gradient with subtle geometric shapes or dots pattern
- Sections: Alternating light/white backgrounds for visual separation
- Cards: Elevated appearance with subtle shadows

**Interactive Elements:**
- Hover states on all clickable elements
- Smooth transitions (300ms duration)
- Focus states for accessibility

## Images

**Large Hero Image:** Yes - use a diverse group of people collaborating on laptops/coding
- **Hero Background:** Wide shot of diverse developers working together, overlaid with gradient for text readability
- **About Section:** Smaller image of community/teamwork (side-by-side with text)
- **Volunteer Roles:** Icon-style illustrations or photos for each role card
- **Contact Section:** Subtle background pattern or community image

**Image Sources:** Use Unsplash or similar for high-quality, diverse tech community photos

## Layout Structure (5 sections maximum)

1. **Hero/Banner** - Full viewport with CTA
2. **About Soyth** - Two-column layout with image
3. **Volunteer Opportunities** - Card-based grid layout
4. **How to Apply** - Step-by-step visual process
5. **Contact** - Simple form with multiple contact methods

## Responsive Behavior
- Mobile-first approach
- Breakpoints: sm (640px), md (768px), lg (1024px)
- Single column on mobile, expanding to 2-3 columns on larger screens
- Touch-friendly button sizes (minimum 44px tap targets)

This design balances modern web development aesthetics with community warmth, using strategic color placement and clean typography to build trust while encouraging participation.