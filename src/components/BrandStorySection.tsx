import { useLanguage } from '@/contexts/LanguageContext';
import { ChefHat } from 'lucide-react';

const BrandStorySection = () => {
  const { t } = useLanguage();

  const safe = (key: string, fallback: string) => {
    const v = t(key);
    return !v || v === key ? fallback : v;
  };

  return (
    <section className="py-14 bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 rounded-full bg-gold/10 border border-gold/30">
            <ChefHat className="w-4 h-4 text-gold" />
            <span className="text-gold-dark font-semibold text-sm">
              {safe('brandStoryEyebrow', 'About This Guide')}
            </span>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-chocolate mb-4 font-heading">
            {safe('brandStoryTitle', 'Built by Bakers, For Bakers')}
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            {safe('brandStoryText', 'The NY Cookie Method was created by a small team of professional pastry chefs and home baking coaches who spent 2 years testing and refining these recipes in real home kitchens. Every technique was validated by beginners before being included.')}
          </p>
        </div>
      </div>
    </section>
  );
};

export default BrandStorySection;
