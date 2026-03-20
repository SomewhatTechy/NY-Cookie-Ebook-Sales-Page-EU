import { useLanguage } from '@/contexts/LanguageContext';
import { Gift } from 'lucide-react';

const BONUS_IMAGES = [
  'bonus-kids-healthy.webp',
  'bonus-no-bake.webp',
  'bonus-flavor-combos.webp',
  'bonus-dessert-encyclopedia.webp',
  'bonus-vegan-desserts.webp',
  'bonus-low-sugar-chilled.webp',
  'bonus-science-art-selling.webp',
  'bonus-allergy-friendly.webp',
];

const BonusesSection = () => {
  const { t, language } = useLanguage();

  const langFolder = language === 'pt' ? 'pt' : language;

  const bonuses = [
    { title: t('bonus1Title'), desc: t('bonus1Desc'), value: t('bonus1Value') },
    { title: t('bonus2Title'), desc: t('bonus2Desc'), value: t('bonus2Value') },
    { title: t('bonus3Title'), desc: t('bonus3Desc'), value: t('bonus3Value') },
    { title: t('bonus4Title'), desc: t('bonus4Desc'), value: t('bonus4Value') },
    { title: t('bonus5Title'), desc: t('bonus5Desc'), value: t('bonus5Value') },
    { title: t('bonus6Title'), desc: t('bonus6Desc'), value: t('bonus6Value') },
    { title: t('bonus7Title'), desc: t('bonus7Desc'), value: t('bonus7Value') },
    { title: t('bonus8Title'), desc: t('bonus8Desc'), value: t('bonus8Value') },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-background to-secondary/30 fade-in-section" id="bonuses">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 animate-fade-in">
          <div className="inline-flex items-center gap-2 mb-4 px-6 py-2 rounded-full bg-gold text-chocolate font-bold">
            <Gift className="w-5 h-5" />
            <span>{t('bonusTag')}</span>
          </div>
          <h2 className="section-title">{t('bonusesTitle')}</h2>
          <p className="section-subtitle">{t('bonusesSubtitle')}</p>
        </div>

        <div className="space-y-4 max-w-3xl mx-auto mb-10">
          {bonuses.map((bonus, index) => (
            <div
              key={index}
              className="premium-card p-4 sm:p-5 flex items-center gap-4 transition-all duration-300 animate-fade-in"
            >
              {/* Book cover thumbnail */}
              <div className="flex-shrink-0 w-16 h-16 sm:w-20 sm:h-20 rounded-xl overflow-hidden bg-muted/20">
                <img
                  src={`/bonuses/gallery/${langFolder}/${BONUS_IMAGES[index]}`}
                  alt={bonus.title}
                  loading="lazy"
                  decoding="async"
                  width={80}
                  height={80}
                  onError={(e) => {
                    const target = e.currentTarget;
                    const fallback = `/bonuses/gallery/en/${BONUS_IMAGES[index]}`;
                    if (!target.src.endsWith(fallback)) target.src = fallback;
                  }}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Title + description */}
              <div className="flex-1 min-w-0">
                <h3 className="text-base sm:text-lg font-bold text-foreground mb-0.5 leading-tight">{bonus.title}</h3>
                <p className="text-muted-foreground text-xs sm:text-sm leading-snug">{bonus.desc}</p>
              </div>

              {/* Price badge */}
              <div className="flex-shrink-0 w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-gold to-pink rounded-xl flex flex-col items-center justify-center">
                {String(bonus.value).startsWith('$') ? (
                  <>
                    <span className="text-white/60 text-[10px] line-through">{bonus.value}</span>
                    <span className="text-white font-bold text-xs sm:text-sm">FREE</span>
                  </>
                ) : (
                  <span className="text-white font-bold text-xs sm:text-sm leading-tight text-center">
                    {String(bonus.value).split(' ').filter(Boolean).map((part, i) => (
                      <span key={i} className="block">{part}</span>
                    ))}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Total Value Banner */}
        <div className="max-w-2xl mx-auto p-6 rounded-2xl premium-card bg-gold/10 border border-gold/25 text-center animate-scale-in">
          <p className="text-xl md:text-2xl font-semibold text-foreground">
            {t('totalBonusValue')}: <span className="text-gold-dark font-bold">{t('bonusesTotalAmount')}</span> — {t('freeToday')}
          </p>
        </div>
      </div>
    </section>
  );
};

export default BonusesSection;
