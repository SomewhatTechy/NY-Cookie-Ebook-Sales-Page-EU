import { useLanguage } from '@/contexts/LanguageContext';
import { ArrowRight, Clock } from 'lucide-react';
import { useOfferCountdown } from '@/hooks/useOfferCountdown';

interface PriceDropSectionProps {
  checkoutUrl: string;
}

const PriceDropSection = ({ checkoutUrl }: PriceDropSectionProps) => {
  const { t } = useLanguage();

  const timeLeft = useOfferCountdown();

  const hh = String(timeLeft.hours).padStart(2, '0');
  const mm = String(timeLeft.minutes).padStart(2, '0');
  const ss = String(timeLeft.seconds).padStart(2, '0');

  const goCheckout = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    if (typeof (window as any).trackInitiateCheckout === 'function') {
      (window as any).trackInitiateCheckout(checkoutUrl);
    } else {
      window.location.assign(checkoutUrl);
    }
  };

  // Safe translation helper with fallbacks
  const safe = (key: string, fallback: string) => {
    const v = t(key);
    return !v || v === key ? fallback : v;
  };

  return (
    <section className="py-14 bg-chocolate text-white relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-fade-in">
            {safe('priceDropTitle', 'Limited-Time Special Offer')}
          </h2>

          <p className="text-white/80 mb-6">
            {safe('priceDropSubtitle', 'Launch price is active - grab your copy before time runs out')}
          </p>

          {/* Countdown timer */}
          <div className="flex items-center justify-center gap-3 mb-6">
            <Clock className="w-6 h-6 text-gold" />
            <div className="flex items-center gap-1 text-2xl md:text-3xl font-bold text-gold tabular-nums">
              <span className="bg-white/10 px-3 py-1 rounded">{hh}</span>
              <span>:</span>
              <span className="bg-white/10 px-3 py-1 rounded">{mm}</span>
              <span>:</span>
              <span className="bg-white/10 px-3 py-1 rounded">{ss}</span>
            </div>
          </div>

          {/* Price Display — always $6.97 */}
          <div className="mb-6">
            <span className="text-white/50 line-through text-xl mr-3">
              {safe('originalPrice', '$27')}
            </span>
            <span className="text-4xl md:text-5xl font-bold text-gold">
              {safe('currentPrice', '$6.97')}
            </span>
          </div>

          <a
            href={checkoutUrl}
            onClick={goCheckout}
            className="cta-button text-base md:text-lg inline-flex justify-center hover:scale-105 active:scale-95 transition-transform"
            aria-label={safe('priceDropCta', 'Get my copy now')}
          >
            {safe('priceDropCta', 'Get my copy now')}
            <ArrowRight className="w-5 h-5" />
          </a>

          {/* Price note */}
          <p className="text-white/60 text-sm mt-4">
            {safe('priceNote', 'One-time payment - Instant access')}
          </p>
        </div>
      </div>
    </section>
  );
};

export default PriceDropSection;
