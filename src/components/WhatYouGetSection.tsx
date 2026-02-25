import { Check } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

type WhatYouGetFeature = {
  title: string;
  description: string;
  imageSrc: string;
};

type SellingFeature = {
  title: string;
  description: string;
};

const WhatYouGetSection = () => {
  const { t, language } = useLanguage();

  // Main mockup (use WebP only)
  const langSuffix = ["fr", "de", "it", "nl", "pl"].includes(language) ? language : "fr";
  const mainMockupSrc = `/what-you-get/main-mockup-${langSuffix}.webp`;
  const mainMockupSrcSet = `/what-you-get/main-mockup-${langSuffix}-xs.webp 384w, /what-you-get/main-mockup-${langSuffix}-sm.webp 512w, /what-you-get/main-mockup-${langSuffix}-md.webp 768w, /what-you-get/main-mockup-${langSuffix}.webp 1024w`;

  // Small safety: avoid rendering raw keys if a string is missing.
  const safe = (key: string, fallback = "") => {
    const v = t(key);
    return !v || v === key ? fallback : v;
  };

  // Recipe-focused items (above the bridge)
  const recipeFeatures: WhatYouGetFeature[] = [
    { title: safe("wyg2Title"), description: safe("wyg2Desc"), imageSrc: "/what-you-get/wyg-02-metodo.webp" },
    { title: safe("wyg1Title"), description: safe("wyg1Desc"), imageSrc: "/what-you-get/wyg-01-recetas.webp" },
    { title: safe("wyg11Title"), description: safe("wyg11Desc"), imageSrc: "/what-you-get/wyg-11-vegan.webp" },
    { title: safe("wyg10Title"), description: safe("wyg10Desc"), imageSrc: "/what-you-get/wyg-10-troubleshooting.webp" },
    { title: safe("wyg9Title"), description: safe("wyg9Desc"), imageSrc: "/what-you-get/wyg-09-tematicas.webp" },
    { title: safe("wyg6Title"), description: safe("wyg6Desc"), imageSrc: "/what-you-get/wyg-06-proveedores.webp" },
  ].filter((f) => f.title && f.description);

  // Selling items (below the bridge — optional upside)
  const sellingFeatures: SellingFeature[] = [
    { title: safe("wyg5Title"), description: safe("wyg5Desc") },
    { title: safe("wyg3Title"), description: safe("wyg3Desc") },
    { title: safe("wyg7Title"), description: safe("wyg7Desc") },
    { title: safe("wyg12Title"), description: safe("wyg12Desc") },
  ].filter((f) => f.title && f.description);

  const bridgeTitle = safe("wygBridgeTitle");
  const bridgeText = safe("wygBridgeText");

  return (
    <section className="py-20 bg-card fade-in-section" id="what-you-get">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 rounded-full bg-gold/10 border border-gold/30">
            <span className="text-gold-dark font-semibold">{safe("wygTag", "EVERYTHING INCLUDED")}</span>
          </div>
          <h2 className="section-title">{safe("wygTitle", "What You'll Get")}</h2>
          <p className="section-subtitle">{safe("wygSubtitle", "")}</p>
        </div>

        <div className="max-w-4xl mx-auto mb-12 animate-fade-in">
          <div className="premium-card overflow-hidden">
            <img
              src={mainMockupSrc}
              srcSet={mainMockupSrcSet}
              sizes="(max-width: 420px) 384px, (max-width: 640px) 512px, (max-width: 1024px) 768px, 896px"
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

        {/* Recipe-focused items — full cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {recipeFeatures.map((feature, index) => (
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

        {/* Bridge: recipe → selling transition */}
        {bridgeTitle && (
          <div className="mx-auto mt-12 mb-8 max-w-2xl text-center animate-fade-in">
            <h3 className="text-xl md:text-2xl font-heading font-bold text-chocolate mb-2">
              {bridgeTitle}
            </h3>
            {bridgeText && (
              <p className="text-sm md:text-base text-muted-foreground">
                {bridgeText}
              </p>
            )}
          </div>
        )}

        {/* Selling items — simple checklist */}
        <div className="max-w-2xl mx-auto grid gap-3">
          {sellingFeatures.map((feature, index) => (
            <div
              key={`selling-${index}`}
              className="flex items-start gap-3 rounded-xl border border-gold/15 bg-card/50 px-5 py-4 animate-fade-in"
            >
              <Check className="w-5 h-5 text-gold mt-0.5 flex-shrink-0" />
              <div>
                <span className="font-semibold text-foreground">{feature.title}</span>
                <span className="text-muted-foreground"> — {feature.description}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatYouGetSection;
