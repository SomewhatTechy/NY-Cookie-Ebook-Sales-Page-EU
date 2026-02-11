import { useLanguage } from "@/contexts/LanguageContext";
import { X, Check, Lightbulb } from "lucide-react";

const TransformationSection = () => {
  const { t } = useLanguage();

  const transformations = [
    {
      oldWay: t("transform1Old"),
      newWay: t("transform1New"),
    },
    {
      oldWay: t("transform2Old"),
      newWay: t("transform2New"),
    },
    {
      oldWay: t("transform3Old"),
      newWay: t("transform3New"),
    },
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10 animate-fade-in">
          <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 rounded-full bg-pink/10 border border-pink/30">
            <Lightbulb className="w-4 h-4 text-pink" />
            <span className="text-pink font-semibold text-sm">{t("transformEyebrow")}</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-chocolate mb-4 font-heading">
            {t("transformTitle")}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {t("transformSubtitle")}
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-6">
          {transformations.map((item, index) => (
            <div
              key={index}
              className="grid md:grid-cols-2 gap-4 animate-fade-in"
            >
              {/* Old Way */}
              <div className="premium-card p-5 border-red-200/50 bg-red-50/30">
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-red-100 flex items-center justify-center">
                    <X className="w-4 h-4 text-red-500" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-red-500 uppercase tracking-wide">
                      {t("oldWayLabel")}
                    </span>
                    <p className="text-chocolate/80 mt-1">{item.oldWay}</p>
                  </div>
                </div>
              </div>

              {/* New Way */}
              <div className="premium-card p-5 border-green-200/50 bg-green-50/30">
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
                    <Check className="w-4 h-4 text-green-600" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-green-600 uppercase tracking-wide">
                      {t("newWayLabel")}
                    </span>
                    <p className="text-chocolate/80 mt-1">{item.newWay}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pattern Interrupt */}
        <div className="max-w-2xl mx-auto mt-10 p-6 rounded-2xl bg-gold/10 border border-gold/30 text-center animate-scale-in">
          <p className="text-lg font-semibold text-chocolate">
            {t("transformCta")}
          </p>
        </div>
      </div>
    </section>
  );
};

export default TransformationSection;
