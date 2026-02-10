# Ebook Sales Landing Page Guidelines

## Project Overview

This is a high-converting ebook sales landing page for a digital product teaching users how to make professional cookies fast and earn from home. The page is bilingual (Spanish/English) and follows direct-response marketing best practices.

---

## 🎨 Design System

### Font
- **Primary Font**: Poppins (Google Fonts)
- **Weights Used**: 300, 400, 500, 600, 700, 800
- **Usage**: All text throughout the site uses Poppins for consistency

### Color Palette (HSL Values)
```css
--vanilla: 22 100% 97%;        /* #FFF6EF - Background cream */
--pink: 336 100% 72%;          /* #FF6FAE - Primary accent */
--chocolate: 15 38% 17%;       /* #3B241D - Dark text */
--gold: 38 65% 56%;            /* #D9A441 - CTA/highlights */
```

### Gradients
- `--gradient-hero`: Cream to gold fade for hero section
- `--gradient-cta`: Gold gradient for call-to-action buttons
- `--gradient-pink`: Pink gradient for urgency elements
- `--gradient-dark`: Chocolate brown for final CTA section

### Shadows
- `--shadow-card`: Subtle card elevation
- `--shadow-glow`: Gold glow for CTAs
- `--shadow-pink`: Pink glow for urgency elements

---

## 📁 Architecture

### Key Files
```
src/
├── pages/Index.tsx              # Main page wrapper
├── contexts/LanguageContext.tsx # i18n translations (ES/EN)
├── components/
│   ├── Preloader.tsx            # Loading animation
│   ├── StickyUrgencyBar.tsx     # Countdown timer header
│   ├── FloatingCTA.tsx          # Fixed bottom-right button
│   ├── LanguageToggle.tsx       # EN/ES switcher
│   ├── HeroSection.tsx          # Video + main headline
│   ├── WhatYouGetSection.tsx    # 9 feature cards
│   ├── BonusesSection.tsx       # 7 bonus items list
│   ├── PriceDropSection.tsx     # Pricing + timer + scarcity
│   ├── DeliverySection.tsx      # 3-step process
│   ├── TestimonialsSection.tsx  # 8 social proof cards
│   ├── GuaranteeSection.tsx     # Risk reversal
│   ├── FAQSection.tsx           # 12 accordion items
│   ├── FinalCTASection.tsx      # Dark closing section
│   └── Footer.tsx               # Disclaimer + contact
```

### Translation System
All text content lives in `src/contexts/LanguageContext.tsx` with keys for both `es` and `en`. Use the `t('keyName')` function from `useLanguage()` hook.

---

## 🚀 Component Guidelines

### Animation Standards
- Use `framer-motion` for all animations
- Standard reveal: `initial={{ opacity: 0, y: 20 }}` → `animate={{ opacity: 1, y: 0 }}`
- Use `whileInView` with `viewport={{ once: true }}` for scroll-triggered animations
- Stagger delays: `delay: index * 0.05` or `0.1` for lists

### CTA Buttons
```tsx
// Primary CTA (Gold)
<a className="cta-button">...</a>

// Pink variant
<a className="cta-button-pink">...</a>
```

### Cards
- Use `card-shadow` for subtle elevation
- Border: `border-2 border-pink/20 hover:border-gold/40`
- Rounded corners: `rounded-2xl`

### Section Structure
```tsx
<section className="py-20 bg-card fade-in-section" id="section-name">
  <div className="container mx-auto px-4">
    <motion.div className="text-center mb-12">
      <h2 className="section-title">{t('sectionTitle')}</h2>
      <p className="section-subtitle">{t('sectionSubtitle')}</p>
    </motion.div>
    {/* Content */}
  </div>
</section>
```

---

## ⏱️ Urgency Elements

### Countdown Timer Pattern
```tsx
const [timeLeft, setTimeLeft] = useState({ hours: 2, minutes: 34, seconds: 17 });

useEffect(() => {
  const timer = setInterval(() => {
    setTimeLeft((prev) => {
      let { hours, minutes, seconds } = prev;
      seconds--;
      if (seconds < 0) { seconds = 59; minutes--; }
      if (minutes < 0) { minutes = 59; hours--; }
      if (hours < 0) { hours = 2; minutes = 34; seconds = 17; } // Reset
      return { hours, minutes, seconds };
    });
  }, 1000);
  return () => clearInterval(timer);
}, []);
```

### Scarcity Bar
Show a progress bar with remaining spots: `7/50` (86% full)

---

## 📝 Content Guidelines

### Hero Section
1. Logo/brand badge
2. Main headline (benefit-focused)
3. Subheadline (what they get)
4. Video embed (YouTube)
5. Primary CTA button
6. Trust badges (instant download, beginner-friendly, secure checkout)

### Pricing Display
- Strike-through original price: `$27`
- Current price: `$9.99`
- Reason for discount
- Urgency timer
- Scarcity indicator

### Testimonials
- Mix of countries (Mexico, Colombia, USA, UK, Brazil, etc.)
- First name + country flag emoji
- 5-star rating display
- Short, specific quotes

### FAQ
- Use `<details>` elements for accordion
- 12 common objections/questions
- Keep answers concise but thorough

---

## 🔧 Technical Notes

### Checkout URL
The Hotmart checkout URL is passed as a prop through all CTA components:
```tsx
const HOTMART_CHECKOUT_URL = "https://pay.hotmart.com/YOUR_PRODUCT_ID";
```

### Responsive Breakpoints
- Mobile: Default
- Tablet: `md:` (768px)
- Desktop: `lg:` (1024px)
- Large: `xl:` (1280px)

### Performance
- Use `viewport={{ once: true }}` to prevent re-animations
- Preloader has 1600ms timeout
- Lazy load YouTube iframes

---

## ✅ Best Practices for AI

When making changes:

1. **Always use translation keys** - Never hardcode text in components
2. **Follow the color system** - Use `text-foreground`, `text-muted-foreground`, `text-gold`, `text-pink`
3. **Use semantic tokens** - `bg-card`, `bg-background`, not raw colors
4. **Maintain Poppins** - All text uses Poppins font family
5. **Keep animations consistent** - Use framer-motion patterns
6. **Respect the section structure** - Container, padding, motion wrappers
7. **Use utility classes** - `cta-button`, `section-title`, `section-subtitle`, `card-shadow`

### Adding New Translations
1. Add keys to both `es` and `en` objects in `LanguageContext.tsx`
2. Use descriptive key names: `sectionNameItemDescription`
3. Keep Spanish as the primary language (target audience)

### Adding New Sections
1. Create component in `src/components/`
2. Import and add to `Index.tsx`
3. Add all text to translations
4. Follow existing animation patterns
5. Use consistent styling classes

---

## 📦 Dependencies

Key packages used:
- `framer-motion` - Animations
- `lucide-react` - Icons
- `react-router-dom` - Routing (if needed)
- Tailwind CSS - Styling
- shadcn/ui - UI components base

---

## 🎯 Conversion Optimization

The page follows AIDA structure:
1. **Attention**: Hero + video
2. **Interest**: What You Get + Bonuses
3. **Desire**: Testimonials + Guarantee
4. **Action**: Price Drop + Final CTA

Key elements:
- Multiple CTA placements (hero, price section, guarantee, final)
- Floating CTA for mobile
- Sticky urgency bar on scroll
- Social proof throughout
- Risk reversal (guarantee)
- FAQ for objection handling
