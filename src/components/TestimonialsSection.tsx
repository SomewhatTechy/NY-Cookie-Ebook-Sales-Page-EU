import { useMemo } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";
import { Star } from "lucide-react";

type Testimonial = {
  name: string;
  image: string;
  countryKey: string;
  textKey: string;
};

const TestimonialsSection = () => {
  const { t } = useLanguage();

  // PT readiness:
  // - No flags (they can feel “off” when language switches, and they're not localized).
  // - Safe fallback if a PT key is missing so you don’t render raw keys on-screen.
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
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="section-title">{title}</h2>
          <p className="section-subtitle">{subtitle}</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {testimonials.map((item, index) => {
            const country = safe(item.countryKey, "");
            const text = safe(item.textKey, "");

            return (
              <motion.div
                key={`${item.name}-${index}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.06 }}
                className="premium-card p-6 hover:border-gold/30 transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-pink/20 to-gold/20 overflow-hidden flex items-center justify-center">
                    {item.image ? (
                      <img
                        src={item.image}
                        alt={item.name}
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
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
