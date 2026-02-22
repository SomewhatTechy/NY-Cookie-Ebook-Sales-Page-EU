import { useMemo } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

type Testimonial = {
  name: string;
  fbCard: string;
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
      { name: "María González", fbCard: "/testimonials/fb-maria.webp", textKey: "testimonial1" },
      { name: "Carmen Silva", fbCard: "/testimonials/fb-carmen.webp", textKey: "testimonial2" },
      { name: "Laura Mendoza", fbCard: "/testimonials/fb-laura.webp", textKey: "testimonial3" },
      { name: "Sofia Martinez", fbCard: "/testimonials/fb-sofia.webp", textKey: "testimonial4" },
      { name: "Jessica Thompson", fbCard: "/testimonials/fb-jessica.webp", textKey: "testimonial5" },
      { name: "Emily Brown", fbCard: "/testimonials/fb-emily.webp", textKey: "testimonial6" },
      { name: "Sarah Mitchell", fbCard: "/testimonials/fb-sarah.webp", textKey: "testimonial7" },
      { name: "Ana Santos", fbCard: "/testimonials/fb-ana.webp", textKey: "testimonial8" },
      { name: "Olivia Harper", fbCard: "/testimonials/fb-olivia.webp", textKey: "testimonial9" },
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
            const text = safe(item.textKey, "");

            return (
              <div
                key={`${item.name}-${index}`}
                className="relative animate-fade-in group"
              >
                {/* FB comment card image */}
                <img
                  src={item.fbCard}
                  alt={item.name}
                  width={1024}
                  height={1024}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-auto rounded-2xl drop-shadow-md transition-transform duration-300 group-hover:scale-[1.02]"
                />

                {/* Text overlay positioned over the blank area of the FB card */}
                {text ? (
                  <div
                    className="absolute flex items-start px-1"
                    style={{
                      top: "33%",
                      left: "14%",
                      right: "8%",
                      bottom: "18%",
                    }}
                  >
                    <p className="text-gray-700 text-[11px] sm:text-xs md:text-[11px] lg:text-xs leading-relaxed">
                      {text}
                    </p>
                  </div>
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
