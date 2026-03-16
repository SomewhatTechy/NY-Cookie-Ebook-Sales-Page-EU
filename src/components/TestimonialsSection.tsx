import { useMemo } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Star, ArrowRight } from "lucide-react";

type Testimonial = {
  nameKey: string;
  textKey: string;
  cityKey: string;
};

const TESTIMONIALS: Testimonial[] = [
  { nameKey: "testimonialName1", textKey: "testimonial1", cityKey: "testimonialCity1" },
  { nameKey: "testimonialName2", textKey: "testimonial2", cityKey: "testimonialCity2" },
  { nameKey: "testimonialName3", textKey: "testimonial3", cityKey: "testimonialCity3" },
  { nameKey: "testimonialName4", textKey: "testimonial4", cityKey: "testimonialCity4" },
  { nameKey: "testimonialName5", textKey: "testimonial5", cityKey: "testimonialCity5" },
  { nameKey: "testimonialName6", textKey: "testimonial6", cityKey: "testimonialCity6" },
  { nameKey: "testimonialName7", textKey: "testimonial7", cityKey: "testimonialCity7" },
  { nameKey: "testimonialName8", textKey: "testimonial8", cityKey: "testimonialCity8" },
  { nameKey: "testimonialName9", textKey: "testimonial9", cityKey: "testimonialCity9" },
];

/**
 * Each language has its own unique set of 9 cookie photos.
 * Path: /testimonials/cookies/{lang}/cookie-{n}.webp
 * Zero image reuse across languages.
 */
const getImageForIndex = (lang: string, idx: number): string => {
  return `/testimonials/cookies/${lang}/cookie-${idx + 1}.webp`;
};

interface TestimonialsSectionProps {
  checkoutUrl?: string;
}

const TestimonialsSection = ({ checkoutUrl }: TestimonialsSectionProps) => {
  const { t, language } = useLanguage();

  const safe = (key: string, fallback: string) => {
    const v = t(key);
    return !v || v === key ? fallback : v;
  };

  const goCheckout = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    if (typeof (window as any).trackInitiateCheckout === 'function') {
      (window as any).trackInitiateCheckout(checkoutUrl);
    } else {
      window.location.assign(checkoutUrl || '#');
    }
  };

  const title = safe("testimonialsTitle", "Look What Other Cookie Business Owners are Saying");
  const subtitle = safe("testimonialsSubtitle", "Women like you who started baking and never looked back");

  const cards = useMemo(
    () =>
      TESTIMONIALS.map((item, idx) => ({
        name: safe(item.nameKey, ""),
        text: safe(item.textKey, ""),
        city: safe(item.cityKey, ""),
        image: getImageForIndex(language, idx),
      })).filter((c) => c.text),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [t, language]
  );

  // Duplicate for seamless infinite scroll
  const doubled = [...cards, ...cards];

  return (
    <section className="py-20 bg-card fade-in-section" id="testimonials">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="section-title">{title}</h2>
          <p className="section-subtitle">{subtitle}</p>
        </div>
      </div>

      {/* Full-width carousel overflow container */}
      <div className="relative [overflow-x:clip] overflow-y-visible py-6">
        {/* Fade edges */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-card to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-card to-transparent" />

        {/* Scrolling track */}
        <div
          className="flex gap-6 animate-marquee hover:[animation-play-state:paused]"
          style={{ width: "max-content" }}
        >
          {doubled.map((card, index) => (
            <div
              key={`${card.name}-${index}`}
              className="flex-shrink-0 w-[280px] sm:w-[320px] md:w-[340px] bg-white rounded-2xl shadow-md border border-border/50 transition-transform duration-300 hover:scale-[1.02] overflow-hidden"
            >
              {/* Customer cookie photo */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={card.image}
                  alt=""
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
                {/* Subtle gradient overlay at bottom for blending */}
                <div className="absolute inset-x-0 bottom-0 h-8 bg-gradient-to-t from-white to-transparent" />
              </div>

              {/* Review content */}
              <div className="px-6 pb-5 pt-2">
                {/* Review text */}

                {/* Review text */}
                <p className="text-sm text-foreground/80 leading-relaxed mb-4 line-clamp-4">
                  {card.text}
                </p>

                {/* Divider */}
                <div className="border-t border-border/30 pt-3 mt-auto">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-semibold text-sm text-foreground">{card.name}</p>
                      {card.city && (
                        <p className="text-xs text-muted-foreground">{card.city}</p>
                      )}
                    </div>
                    {/* 5 stars */}
                    <div className="flex gap-0.5">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 text-gold fill-gold" />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

        {/* CTA after social proof */}
        {checkoutUrl && (
          <div className="container mx-auto px-4 mt-10 text-center">
            <a
              href={checkoutUrl}
              onClick={goCheckout}
              className="cta-button text-base md:text-lg inline-flex justify-center hover:scale-105 active:scale-95 transition-transform"
            >
              {t('heroCta')}
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        )}
    </section>
  );
};

export default TestimonialsSection;
