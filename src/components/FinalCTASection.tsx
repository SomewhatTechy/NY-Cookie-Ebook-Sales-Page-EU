import { useLanguage } from '@/contexts/LanguageContext';
import { ArrowRight, Lock, Check, X, CheckCircle } from 'lucide-react';

interface FinalCTASectionProps {
  checkoutUrl: string;
}

const FinalCTASection = ({ checkoutUrl }: FinalCTASectionProps) => {
  const { t } = useLanguage();

  const goCheckout = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    if (typeof (window as any).trackInitiateCheckout === 'function') {
      (window as any).trackInitiateCheckout(checkoutUrl);
    } else {
      window.location.assign(checkoutUrl);
    }
  };

  const benefits = [
    t('finalBenefit1'),
    t('finalBenefit2'),
    t('finalBenefit3'),
    t('finalBenefit4'),
    t('finalBenefit5'),
  ];

  return (
    <section className="py-16 relative overflow-hidden" style={{ background: 'var(--gradient-hero)' }}>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('finalCtaTitle')}</h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">{t('finalCtaSubtitle')}</p>

          {/* Two-Choice Close */}
          <div className="max-w-2xl mx-auto mb-8">
            <p className="text-lg font-bold mb-4">{t('choiceTitle')}</p>
            <div className="grid sm:grid-cols-2 gap-4 text-left text-sm">
              <div className="rounded-xl border border-muted/30 bg-card/40 p-4">
                <X className="w-6 h-6 text-red-500 mb-2" />
                <p className="text-muted-foreground">{t('choiceA')}</p>
              </div>
              <div className="rounded-xl border-2 border-gold/40 bg-card/60 p-4">
                <CheckCircle className="w-6 h-6 text-green-500 mb-2" />
                <p className="text-foreground">{t('choiceB')}</p>
              </div>
            </div>
            <p className="text-sm italic text-muted-foreground mt-3">{t('choiceQuestion')}</p>
          </div>

          {/* Offer recap */}
          <p className="text-sm font-semibold text-gold mb-3">{t('finalCtaRecap')}</p>
          <ul className="inline-flex flex-col items-start gap-1.5 mb-8 text-sm text-left">
            {benefits.map((b, i) => (
              <li key={i} className="flex items-center gap-2">
                <Check className="w-4 h-4 text-green-500 flex-shrink-0" />
                <span>{b}</span>
              </li>
            ))}
          </ul>

          <div>
            <a
              href={checkoutUrl}
              onClick={goCheckout}
              className="cta-button text-base md:text-lg inline-flex justify-center hover:scale-105 active:scale-95 transition-transform"
              aria-label={t('finalCtaButton')}
            >
              {t('finalCtaButton')}
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>

          <div className="flex items-center justify-center gap-2 mt-6 text-sm text-muted-foreground">
            <Lock className="w-4 h-4 text-gold" />
            <span>{t('secureCheckoutHotmart')}</span>
          </div>

          {/* P.S. */}
          <p className="mt-8 text-xs text-muted-foreground italic max-w-lg mx-auto">{t('finalCtaPS')}</p>
        </div>
      </div>
    </section>
  );
};

export default FinalCTASection;
