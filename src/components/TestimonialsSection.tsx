import { useMemo } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

type Testimonial = {
  name: string;
  file: string;
};

const TestimonialsSection = () => {
  const { t, language } = useLanguage();

  const safe = (key: string, fallback: string) => {
    const v = t(key);
    return !v || v === key ? fallback : v;
  };

  const testimonials: Testimonial[] = useMemo(
    () => [
      { name: "María González", file: "fb-maria.webp" },
      { name: "Carmen Silva", file: "fb-carmen.webp" },
      { name: "Laura Mendoza", file: "fb-laura.webp" },
      { name: "Sofia Martinez", file: "fb-sofia.webp" },
      { name: "Jessica Thompson", file: "fb-jessica.webp" },
      { name: "Emily Brown", file: "fb-emily.webp" },
      { name: "Sarah Mitchell", file: "fb-sarah.webp" },
      { name: "Ana Santos", file: "fb-ana.webp" },
      { name: "Olivia Harper", file: "fb-olivia.webp" },
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
          {testimonials.map((item, index) => (
            <div
              key={`${item.name}-${index}`}
              className="animate-fade-in group"
            >
              <img
                src={`/testimonials/${language}/${item.file}`}
                alt={item.name}
                width={1024}
                height={1024}
                loading="lazy"
                decoding="async"
                className="w-full h-auto rounded-2xl drop-shadow-md transition-transform duration-300 group-hover:scale-[1.02]"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
