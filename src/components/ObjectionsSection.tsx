import { motion } from "framer-motion";
import { CheckCircle2, ShieldCheck } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

type ObjectionCard = {
  title: string;
  body: string;
  inside: string;
};

const ObjectionsSection = () => {
  const { t } = useLanguage();

  const subtitleKey = "objectionsSubtitle";
  const objectionsSubtitle = t(subtitleKey);
  const hasSubtitle = Boolean(objectionsSubtitle) && objectionsSubtitle !== subtitleKey;

  const cards: ObjectionCard[] = [
    { title: t("objection1Title"), body: t("objection1Body"), inside: t("objection1Inside") },
    { title: t("objection2Title"), body: t("objection2Body"), inside: t("objection2Inside") },
    { title: t("objection3Title"), body: t("objection3Body"), inside: t("objection3Inside") },
    { title: t("objection4Title"), body: t("objection4Body"), inside: t("objection4Inside") },
    { title: t("objection5Title"), body: t("objection5Body"), inside: t("objection5Inside") },
    { title: t("objection6Title"), body: t("objection6Body"), inside: t("objection6Inside") },
  ];

  return (
    <section className="py-20 bg-white/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-10"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold/10 text-chocolate mb-4 premium-pill">
            <ShieldCheck className="h-4 w-4" />
            <span className="text-sm font-semibold">{t("objectionsPill")}</span>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-chocolate mb-4 font-heading">
            {t("objectionsTitle")}
          </h2>

          {hasSubtitle ? (
            <p className="text-lg text-muted-foreground font-body">{objectionsSubtitle}</p>
          ) : null}
        </motion.div>

        <div className="max-w-5xl mx-auto mb-6 text-center">
          <p className="text-sm md:text-base text-muted-foreground font-body">{t("objectionsLead")}</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {cards.map((card, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="premium-card p-6"
            >
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="sm:w-2/5">
                  <div className="flex items-start gap-3">
                    <div className="mt-0.5">
                      <CheckCircle2 className="h-5 w-5 text-gold" />
                    </div>
                    <h3 className="text-base md:text-lg font-semibold text-chocolate leading-snug font-heading">
                      {card.title}
                    </h3>
                  </div>
                </div>

                <div className="sm:w-3/5">
                  <p className="text-sm md:text-base text-muted-foreground leading-relaxed font-body">
                    {card.body}
                  </p>

                  <div className="mt-3 flex items-start gap-2">
                    <span className="mt-2 inline-block h-1.5 w-1.5 rounded-full bg-gold/70" />
                    <p className="text-sm text-chocolate/80 leading-relaxed font-body">{card.inside}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ObjectionsSection;
