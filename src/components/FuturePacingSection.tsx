import { useLanguage } from '@/contexts/LanguageContext';
import { Sparkles } from 'lucide-react';

const FuturePacingSection = () => {
  const { t } = useLanguage();

  return (
    <section className="py-16 bg-gradient-to-b from-background via-secondary/20 to-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <Sparkles className="w-8 h-8 text-gold mx-auto mb-4" />
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-chocolate">
            {t('futurePacingTitle')}
          </h2>
          <p className="text-base md:text-lg leading-relaxed text-muted-foreground italic">
            {t('futurePacingText')}
          </p>
        </div>
      </div>
    </section>
  );
};

export default FuturePacingSection;
