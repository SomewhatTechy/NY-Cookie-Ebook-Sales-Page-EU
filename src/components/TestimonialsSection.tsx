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

  const title = safe("testimonialsTitle", "Look What Other Cookie Business Owners are Saying");
  const subtitle = safe(
    "testimonialsSubtitle",
    "Women like you who started baking and never looked back"
  );

  // Duplicate array for seamless infinite loop
  const doubled = [...testimonials, ...testimonials];

  return (
    <section className="py-28 bg-card fade-in-section" id="testimonials">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="section-title">{title}</h2>
          <p className="section-subtitle">{subtitle}</p>
        </div>
      </div>

      {/* Full-width carousel overflow container */}
      <div className="relative overflow-hidden">
        {/* Fade edges */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-card to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-card to-transparent" />

        {/* Scrolling track */}
        <div
          className="flex gap-6 animate-marquee hover:[animation-play-state:paused]"
          style={{
            width: "max-content",
          }}
        >
          {doubled.map((item, index) => (
            <div
              key={`${item.name}-${index}`}
              className="flex-shrink-0 w-[220px] sm:w-[260px] md:w-[300px] overflow-hidden rounded-2xl drop-shadow-md transition-transform duration-300 hover:scale-[1.03]"
              style={{ aspectRatio: "4 / 3" }}
            >
              <img
                src={`/testimonials/${language}/${item.file}?v=2`}
                alt={item.name}
                width={1024}
                height={1024}
                loading={index < 9 ? "eager" : "lazy"}
                decoding="async"
                className="w-full h-full object-cover object-center"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
