import { useLanguage } from "@/contexts/LanguageContext";

type WhatYouGetFeature = {
  title: string;
  description: string;
  imageSrc: string;
};

const WhatYouGetSection = () => {
  const { t, language } = useLanguage();

  // Main mockup (use WebP only)
  const langSuffix = ["fr", "de", "it", "nl", "pl"].includes(language) ? language : "fr";
  const mainMockupSrc = `/what-you-get/main-mockup-${langSuffix}.webp`;
  const mainMockupSrcSet = `/what-you-get/main-mockup-${langSuffix}-sm.webp 512w, /what-you-get/main-mockup-${langSuffix}-md.webp 768w, /what-you-get/main-mockup-${langSuffix}.webp 1024w`;

  // Small safety: avoid rendering raw keys if a string is missing.
  const safe = (key: string, fallback = "") => {
    const v = t(key);
    return !v || v === key ? fallback : v;
  };

  const features: WhatYouGetFeature[] = [
    { title: safe("wyg4Title"), description: safe("wyg4Desc"), imageSrc: "/what-you-get/wyg-04-kit-marketing.webp" },
    { title: safe("wyg8Title"), description: safe("wyg8Desc"), imageSrc: "/what-you-get/wyg-08-fundamentos.webp" },
    { title: safe("wyg2Title"), description: safe("wyg2Desc"), imageSrc: "/what-you-get/wyg-02-metodo.webp" },
    { title: safe("wyg1Title"), description: safe("wyg1Desc"), imageSrc: "/what-you-get/wyg-01-recetas.webp" },
    { title: safe("wyg11Title"), description: safe("wyg11Desc"), imageSrc: "/what-you-get/wyg-11-vegan.webp" },

    { title: safe("wyg5Title"), description: safe("wyg5Desc"), imageSrc: "/what-you-get/wyg-05-precios.webp" },
    { title: safe("wyg3Title"), description: safe("wyg3Desc"), imageSrc: "/what-you-get/wyg-03-plan-negocio.webp" },
    { title: safe("wyg7Title"), description: safe("wyg7Desc"), imageSrc: "/what-you-get/wyg-07-empaque.webp" },
    { title: safe("wyg9Title"), description: safe("wyg9Desc"), imageSrc: "/what-you-get/wyg-09-tematicas.webp" },
    { title: safe("wyg10Title"), description: safe("wyg10Desc"), imageSrc: "/what-you-get/wyg-10-troubleshooting.webp" },

    { title: safe("wyg6Title"), description: safe("wyg6Desc"), imageSrc: "/what-you-get/wyg-06-proveedores.webp" },
    { title: safe("wyg12Title"), description: safe("wyg12Desc"), imageSrc: "/what-you-get/wyg-12-emprendimiento.webp" },
  ].filter((f) => f.title && f.description);

  return (
    <section className="py-20 bg-card fade-in-section" id="what-you-get">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 rounded-full bg-gold/10 border border-gold/30">
            <span className="text-gold font-semibold">{safe("wygTag", "🎁 EVERYTHING INCLUDED")}</span>
          </div>
          <h2 className="section-title">{safe("wygTitle", "What You'll Get")}</h2>
          <p className="section-subtitle">{safe("wygSubtitle", "")}</p>
        </div>

        <div className="max-w-4xl mx-auto mb-12 animate-fade-in">
          <div className="premium-card overflow-hidden">
            <img
              src={mainMockupSrc}
              srcSet={mainMockupSrcSet}
              sizes="(max-width: 640px) 512px, (max-width: 1024px) 768px, 896px"
              alt={String(safe("heroTitle", "Ebook mockup"))}
              width={1024}
              height={1024}
              loading="eager"
              decoding="async"
              fetchPriority="high"
              className="w-full h-auto object-cover"
              onError={(e) => {
                e.currentTarget.style.display = "none";
              }}
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={`${feature.title}-${index}`}
              className="premium-card p-6 transition-all duration-300 hover:border-gold/30 animate-fade-in"
            >
              <div className="flex justify-center mb-4">
                <img
                  src={feature.imageSrc}
                  alt={feature.title}
                  width={128}
                  height={128}
                  loading="lazy"
                  decoding="async"
                  className="w-14 h-14 md:w-16 md:h-16 rounded-2xl object-cover border border-white/10 shadow-sm"
                  onError={(e) => {
                    e.currentTarget.style.display = "none";
                  }}
                />
              </div>

              <h3 className="font-heading font-bold text-lg text-foreground mb-2 text-center uppercase">
                {feature.title}
              </h3>
              <p className="text-sm text-muted-foreground text-center">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatYouGetSection;
