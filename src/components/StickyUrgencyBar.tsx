import { useLanguage } from "@/contexts/LanguageContext";
import { useOfferCountdown } from "@/hooks/useOfferCountdown";
import { useMemo, useState, useEffect, useRef } from "react";
import { Clock, ArrowRight } from "lucide-react";

/* ── scarcity config ── */
const SOLD = 43;
const TOTAL = 50;
const REMAINING = TOTAL - SOLD;
const PCT = Math.round((SOLD / TOTAL) * 100);

const SCARCITY: Record<string, { sold: string; remaining: string }> = {
  fr: { sold: "Exemplaires vendus", remaining: `Plus que ${REMAINING} à ce prix` },
  de: { sold: "Verkaufte Exemplare", remaining: `Nur noch ${REMAINING} zu diesem Preis` },
  it: { sold: "Copie vendute", remaining: `Solo ${REMAINING} rimaste a questo prezzo` },
  nl: { sold: "Verkochte exemplaren", remaining: `Nog maar ${REMAINING} voor deze prijs` },
  pl: { sold: "Sprzedanych egzemplarzy", remaining: `Tylko ${REMAINING} pozostało w tej cenie` },
};

interface StickyUrgencyBarProps {
  checkoutUrl: string;
}

const StickyUrgencyBar = ({ checkoutUrl }: StickyUrgencyBarProps) => {
  const { t } = useLanguage();

  const timeLeft = useOfferCountdown();

  const [isVisible, setIsVisible] = useState(false);
  const [animatedSold, setAnimatedSold] = useState(0);
  const [barWidth, setBarWidth] = useState(0);
  const hasAnimated = useRef(false);

  const safe = useMemo(() => {
    const get = (key: string, fallback: string) => {
      const v = t(key);
      return !v || v === key ? fallback : v;
    };

    return {
      stickyCtaText: get("stickyCtaText", "Get my copy"),
      offerEndsIn: get("offerEndsIn", "Offer ends in"),
      currentPrice: get("currentPrice", "€6.97"),
    };
  }, [t]);

  /* Detect language for scarcity text */
  const lang = useMemo(() => {
    const path = window.location.search;
    if (path.includes("lang=de")) return "de";
    if (path.includes("lang=it")) return "it";
    if (path.includes("lang=nl")) return "nl";
    if (path.includes("lang=pl")) return "pl";
    const browserLang = navigator.language?.slice(0, 2);
    if (browserLang === "de") return "de";
    if (browserLang === "it") return "it";
    if (browserLang === "nl") return "nl";
    if (browserLang === "pl") return "pl";
    return "fr";
  }, []);

  const scarcity = SCARCITY[lang] || SCARCITY.fr;

  /* Show once visitor scrolls past the hero — stays visible from then on */
  useEffect(() => {
    const heroHeight = window.innerHeight * 0.8;

    const handleScroll = () => {
      setIsVisible(window.scrollY > heroHeight);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* Animate count-up + progress bar when first visible */
  useEffect(() => {
    if (!isVisible || hasAnimated.current) return;
    hasAnimated.current = true;

    const duration = 1200;
    const start = performance.now();
    const tick = (now: number) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
      setAnimatedSold(Math.round(eased * SOLD));
      setBarWidth(Math.round(eased * PCT));
      if (progress < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [isVisible]);

  const hh = String(timeLeft.hours).padStart(2, "0");
  const mm = String(timeLeft.minutes).padStart(2, "0");
  const ss = String(timeLeft.seconds).padStart(2, "0");

  const goCheckout = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    if (typeof (window as any).trackInitiateCheckout === 'function') {
      (window as any).trackInitiateCheckout(checkoutUrl);
    } else {
      window.location.assign(checkoutUrl);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 shadow-lg transition-transform duration-300 ${isVisible ? "translate-y-0" : "-translate-y-full"}`}
      aria-label="Sticky urgency bar"
    >
      {/* Row 1: Timer + Price + CTA */}
      <div style={{ background: "rgba(59, 36, 29, 0.95)", backdropFilter: "blur(12px)" }}>
        <div className="container mx-auto py-2 px-3 sm:px-4">
          <div className="flex items-center justify-between gap-2 text-white">
            <div className="flex items-center gap-2 min-w-0" aria-live="polite">
              <Clock className="w-4 h-4 text-gold animate-pulse flex-shrink-0" />
              <div className="flex items-center gap-1.5 sm:gap-2 text-gold font-bold tabular-nums text-sm">
                <span>{hh}</span>:<span>{mm}</span>:<span>{ss}</span>
              </div>
              <span className="text-gold font-extrabold text-base sm:text-lg flex-shrink-0">
                {safe.currentPrice}
              </span>
            </div>

            <a
              href={checkoutUrl}
              onClick={goCheckout}
              className="flex items-center gap-1.5 px-4 sm:px-5 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-bold transition-all hover:scale-105 flex-shrink-0 whitespace-nowrap"
              style={{ background: "var(--gradient-cta)", color: "hsl(var(--chocolate))" }}
              aria-label={safe.stickyCtaText}
            >
              <span>{safe.stickyCtaText}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>

      {/* Row 2: Scarcity progress bar */}
      <div className="relative" style={{ background: "#1a1a1a" }}>
        <div className="container mx-auto px-3 sm:px-4 py-1">
          <div className="flex items-center justify-between gap-2 text-[11px] sm:text-xs">
            <span className="text-white/80 font-medium">
              {scarcity.sold}: <span className="text-white font-bold tabular-nums">{animatedSold}</span>
              <span className="text-white/50 mx-1.5">–</span>
              <span className="text-red-400 font-semibold animate-pulse">{scarcity.remaining}</span>
            </span>
            <span className="text-white/60 font-bold tabular-nums">{barWidth}%</span>
          </div>
          <div className="w-full h-1.5 rounded-full mt-0.5 overflow-hidden" style={{ background: "#333" }}>
            <div
              className="h-full rounded-full relative"
              style={{
                width: `${barWidth}%`,
                background: "linear-gradient(90deg, #dc2626, #ef4444, #f87171)",
                transition: "width 0.1s linear",
              }}
            >
              <div
                className="absolute inset-0 rounded-full"
                style={{
                  background: "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.3) 50%, transparent 100%)",
                  animation: "shimmer 2s ease-in-out infinite",
                }}
              />
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(200%); }
        }
      `}</style>
    </header>
  );
};

export default StickyUrgencyBar;
