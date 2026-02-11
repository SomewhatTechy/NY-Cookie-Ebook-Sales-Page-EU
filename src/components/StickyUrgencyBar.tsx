import { useLanguage } from "@/contexts/LanguageContext";
import { useOfferCountdown } from "@/hooks/useOfferCountdown";
import { useMemo, useState, useEffect } from "react";
import { Clock, ArrowRight, Cookie } from "lucide-react";

interface StickyUrgencyBarProps {
  checkoutUrl: string;
}

const StickyUrgencyBar = ({ checkoutUrl }: StickyUrgencyBarProps) => {
  const { t } = useLanguage();

  const durationSec = 30 * 60;
  const timeLeft = useOfferCountdown(durationSec);

  const [isVisible, setIsVisible] = useState(false);

  const safe = useMemo(() => {
    const get = (key: string, fallback: string) => {
      const v = t(key);
      return !v || v === key ? fallback : v;
    };

    return {
      stickyCtaText: get("stickyCtaText", "Get my copy"),
      offerEndsIn: get("offerEndsIn", "Offer ends in"),
      priceIncreasesTo: get("priceIncreasesTo", "Price goes to $27 in"),
    };
  }, [t]);

  useEffect(() => {
    // Don't show scroll behavior if offer is expired
    if (timeLeft.isExpired) {
      setIsVisible(false);
      return;
    }

    let lastScrollY = window.scrollY;
    const heroHeight = window.innerHeight * 0.8;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const scrollingUp = currentScrollY < lastScrollY;
      const pastHero = currentScrollY > heroHeight;

      if (currentScrollY < 100) {
        setIsVisible(false);
      } else if (pastHero && scrollingUp) {
        setIsVisible(true);
      } else if (!scrollingUp && currentScrollY - lastScrollY > 50) {
        setIsVisible(false);
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [timeLeft.isExpired]);

  // Don't render at all if expired
  if (timeLeft.isExpired) {
    return null;
  }

  const hh = String(timeLeft.hours).padStart(2, "0");
  const mm = String(timeLeft.minutes).padStart(2, "0");
  const ss = String(timeLeft.seconds).padStart(2, "0");

  const goCheckout = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.location.assign(checkoutUrl);
  };

  return (
    <>
      {isVisible && (
        <header
          className="fixed top-0 left-0 w-full z-50 border-b border-white/10 shadow-lg animate-fade-in"
          style={{ background: "rgba(59, 36, 29, 0.92)", backdropFilter: "blur(12px)" }}
          aria-label="Sticky urgency bar"
        >
          <div className="container mx-auto py-2 px-4">
            <div className="flex items-center justify-between gap-2 text-white">
              <div className="flex items-center gap-2" aria-live="polite">
                <Clock className="w-4 h-4 text-gold animate-pulse hidden sm:block" />
                <div className="flex flex-col sm:flex-row sm:items-center gap-0.5 sm:gap-2">
                  <span className="text-xs text-white/70 hidden sm:inline">
                    {safe.priceIncreasesTo}
                  </span>
                  <span className="sr-only">{safe.offerEndsIn}</span>
                  <div className="flex items-center gap-1 text-gold font-bold tabular-nums">
                    <span>{hh}</span>:<span>{mm}</span>:<span>{ss}</span>
                  </div>
                </div>
              </div>

              <a
                href={checkoutUrl}
                onClick={goCheckout}
                className="flex items-center gap-1 px-4 py-1.5 rounded-full text-sm font-semibold transition-all hover:scale-105"
                style={{ background: "var(--gradient-cta)", color: "hsl(var(--chocolate))" }}
                aria-label={safe.stickyCtaText}
              >
                <span className="hidden sm:inline">{safe.stickyCtaText}</span>
                <Cookie className="h-5 w-5 sm:hidden text-gold-light" />
                <ArrowRight className="w-3 h-3" />
              </a>
            </div>
          </div>
        </header>
      )}
    </>
  );
};

export default StickyUrgencyBar;
