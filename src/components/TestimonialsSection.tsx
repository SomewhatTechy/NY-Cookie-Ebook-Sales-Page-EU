import { useMemo } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Star } from "lucide-react";

type Testimonial = {
  name: string;
  image: string;
  countryKey: string;
  textKey: string;
};

const TestimonialsSection = () => {
  const { t } = useLanguage();

  const safe = (key: string, fallback: string) => {
    const v = t(key);
    return !v || v === key ? fallback : v;
  };

  const testimonials: Testimonial[] = useMemo(
    () => [
      { name: "María González", image: "/testimonials/maria.webp", countryKey: "countryMexico", textKey: "testimonial1" },
      { name: "Carmen Silva", image: "/testimonials/carmen.webp", countryKey: "countryColombia", textKey: "testimonial2" },
      { name: "Laura Mendoza", image: "/testimonials/laura.webp", countryKey: "countryPeru", textKey: "testimonial3" },
      { name: "Sofia Martinez", image: "/testimonials/sofia.webp", countryKey: "countryChile", textKey: "testimonial4" },
      { name: "Jessica Thompson", image: "/testimonials/jessica.webp", countryKey: "countryUSA", textKey: "testimonial5" },
      { name: "Emily Brown", image: "/testimonials/emily.webp", countryKey: "countryCanada", textKey: "testimonial6" },
      { name: "Sarah Mitchell", image: "/testimonials/sarah.webp", countryKey: "countryUK", textKey: "testimonial7" },
      { name: "Ana Santos", image: "/testimonials/ana.webp", countryKey: "countryBrazil", textKey: "testimonial8" },
      { name: "Olivia Harper", image: "/testimonials/olivia.webp", countryKey: "countryAustralia", textKey: "testimonial9" },
    ],
    []
  );

  const title = safe("testimonialsTitle", "Reviews (translated)");
  const subtitle = safe(
    "testimonialsSubtitle",
    "Real buyers sharing their results—translated for clarity"
  );

  return (
    <section className="py-20 bg-card fade-in-section" id="testimonials">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="section-title">{title}</h2>
          <p className="section-subtitle">{subtitle}</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {testimonials.map((item, index) => {
            const country = safe(item.countryKey, "");
            const text = safe(item.textKey, "");

            return (
              <div
                key={`${item.name}-${index}`}
                className="premium-card p-6 hover:border-gold/30 transition-all duration-300 animate-fade-in"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-pink/20 to-gold/20 overflow-hidden flex items-center justify-center">
                    {item.image ? (
                      <img
                        src={item.image}
                        alt={item.name}
                        width={96}
                        height={96}
                        loading="lazy"
                        decoding="async"
                        className="h-full w-full object-cover"
                      />
                    ) : (
                      <span className="text-white font-bold text-xl">
                        {item.name.charAt(0)}
                      </span>
                    )}
                  </div>
                  <div>
                    <div className="font-bold text-foreground">{item.name}</div>
                    {country ? (
                      <div className="text-sm text-muted-foreground">{country}</div>
                    ) : null}
                  </div>
                </div>

                <div className="flex gap-1 mb-3" role="img" aria-label="5-star rating">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-gold text-gold" />
                  ))}
                </div>

                {text ? (
                  <p className="text-foreground/80 italic text-sm">"{text}"</p>
                ) : null}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
