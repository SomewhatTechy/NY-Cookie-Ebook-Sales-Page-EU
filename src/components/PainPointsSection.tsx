import { AlertCircle, Clock, Heart, ShoppingBag, Sparkles, TrendingUp } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const PAIN_POINT_KEYS = [
  "painQ1",
  "painQ2",
  "painQ3",
  "painQ4",
  "painQ5",
  "painQ6",
] as const;

const ICONS = [Heart, AlertCircle, Clock, TrendingUp, ShoppingBag, Sparkles] as const;

export default function PainPointsSection() {
  const { t } = useLanguage();

  const subtitleKey = "painSubtitle";
  const subtitle = t(subtitleKey);
  const hasSubtitle = Boolean(subtitle) && subtitle !== subtitleKey;

  return (
    <section className="relative py-14 md:py-16 bg-gradient-to-b from-background via-secondary/30 to-background">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center">
          <p className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-card px-4 py-2 text-sm font-semibold text-chocolate shadow-sm">
            <span className="h-2 w-2 rounded-full bg-pink" />
            {t("painEyebrow")}
          </p>

          <h2 className="mt-5 text-3xl md:text-4xl font-heading tracking-tight text-chocolate">
            {t("painTitle")}
          </h2>

          {hasSubtitle ? (
            <p className="mt-3 text-base md:text-lg text-muted-foreground">
              {subtitle}
            </p>
          ) : null}
        </div>

        <div className="mt-10 grid gap-4 md:gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {PAIN_POINT_KEYS.map((key, idx) => {
            const Icon = ICONS[idx % ICONS.length];
            return (
              <div
                key={key}
                className="group rounded-2xl border border-gold/20 bg-card p-6 shadow-[0_10px_30px_hsl(var(--chocolate)/0.06)] transition-all duration-300 hover:-translate-y-1 hover:border-gold/40"
              >
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-gold/20 to-pink/15 ring-1 ring-gold/25">
                    <Icon className="h-6 w-6 text-chocolate" />
                  </div>
                  <p className="text-base font-medium leading-relaxed text-chocolate">
                    {t(key)}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mx-auto mt-8 max-w-3xl rounded-2xl border border-gold/25 bg-card/60 p-5 text-center shadow-sm">
          <p className="text-sm md:text-base text-muted-foreground">
            {t("painBridge")}
          </p>
        </div>
      </div>
    </section>
  );
}
