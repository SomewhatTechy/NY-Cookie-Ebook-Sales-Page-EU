import { useLanguage } from '@/contexts/LanguageContext';
import { ArrowRight, Lock } from 'lucide-react';

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

  return (
    <section className="py-16 relative overflow-hidden" style={{ background: 'var(--gradient-hero)' }}>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('finalCtaTitle')}</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">{t('finalCtaSubtitle')}</p>

          <a
            href={checkoutUrl}
            onClick={goCheckout}
            className="cta-button text-base md:text-lg inline-flex justify-center hover:scale-105 active:scale-95 transition-transform"
            aria-label={t('finalCtaButton')}
          >
            {t('finalCtaButton')}
            <ArrowRight className="w-5 h-5" />
          </a>

          <div className="flex items-center justify-center gap-2 mt-6 text-sm text-muted-foreground">
            <Lock className="w-4 h-4 text-gold" />
            <span>{t('secureCheckoutHotmart')}</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTASection;
