import { useLanguage } from "@/contexts/LanguageContext";
import { useOfferCountdown } from "@/hooks/useOfferCountdown";
import { useMemo, useState, useEffect } from "react";
import { Clock, ArrowRight } from "lucide-react";

interface StickyUrgencyBarProps {
  checkoutUrl: string;
}

const StickyUrgencyBar = ({ checkoutUrl }: StickyUrgencyBarProps) => {
  const { t } = useLanguage();
  const timeLeft = useOfferCountdown();

  const [isVisible, setIsVisible] = useState(false);

  const safe = useMemo(() => {
    const get = (key: string, fallback: string) => {
      const v = t(key);
      return !v || v === key ? fallback : v;
    };
    return {
      stickyCtaText: get("stickyCtaText", "Get my copy"),
      currentPrice: get("currentPrice", "$9.97"),
    };
  }, [t]);

  /* Show once visitor scrolls past the hero */
  useEffect(() => {
    const heroHeight = window.innerHeight * 0.8;
    let ticking = false;
    const handleScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        setIsVisible(window.scrollY > heroHeight);
        ticking = false;
      });
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const hh = String(timeLeft.hours).padStart(2, "0");
  const mm = String(timeLeft.minutes).padStart(2, "0");
  const ss = String(timeLeft.seconds).padStart(2, "0");

  const goCheckout = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    if (typeof (window as any).trackInitiateCheckout === "function") {
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
    </header>
  );
};

export default StickyUrgencyBar;
