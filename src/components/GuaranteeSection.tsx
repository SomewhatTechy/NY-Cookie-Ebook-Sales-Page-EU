import { useLanguage } from '@/contexts/LanguageContext';
import { ShieldCheck, ArrowRight, CheckCircle } from 'lucide-react';

interface GuaranteeSectionProps {
  checkoutUrl: string;
}

const GuaranteeSection = ({ checkoutUrl }: GuaranteeSectionProps) => {
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
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto premium-card p-8 md:p-12 border-2 border-gold/20">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="flex-shrink-0">
              <div className="w-24 h-24 rounded-full bg-gold/10 border-2 border-gold/30 flex items-center justify-center">
                <ShieldCheck className="w-12 h-12 text-gold" />
              </div>
            </div>

            <div className="text-center md:text-left flex-1">
              <div className="animate-fade-in">
                <h2 className="text-2xl md:text-3xl font-bold mb-2 text-chocolate">
                  {t('guaranteeTitle')}
                </h2>
                <p className="text-gold-dark font-semibold mb-4">
                  {t('guaranteeSubtitle')}
                </p>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {t('guaranteeText')}
                </p>

                <a
                  href={checkoutUrl}
                  onClick={goCheckout}
                  className="cta-button inline-flex justify-center hover:scale-105 active:scale-95 transition-transform"
                  aria-label={t('guaranteeCta')}
                >
                  {t('guaranteeCta')}
                  <ArrowRight className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GuaranteeSection;
