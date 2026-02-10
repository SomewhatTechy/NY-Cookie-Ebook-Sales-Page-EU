import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';
import { Gift, Check } from 'lucide-react';
import BonusStackGallery from './BonusStackGallery';

const BonusesSection = () => {
  const { t } = useLanguage();

  const bonuses = [
    { icon: '🍪', title: t('bonus1Title'), desc: t('bonus1Desc'), value: t('bonus1Value') },
    { icon: '🧁', title: t('bonus2Title'), desc: t('bonus2Desc'), value: t('bonus2Value') },
    { icon: '🛒', title: t('bonus3Title'), desc: t('bonus3Desc'), value: t('bonus3Value') },
    { icon: '❄️', title: t('bonus4Title'), desc: t('bonus4Desc'), value: t('bonus4Value') },
    { icon: '🍫', title: t('bonus5Title'), desc: t('bonus5Desc'), value: t('bonus5Value') },
    { icon: '📦', title: t('bonus6Title'), desc: t('bonus6Desc'), value: t('bonus6Value') },
    { icon: '🎨', title: t('bonus7Title'), desc: t('bonus7Desc'), value: t('bonus7Value') },
    { icon: '✅', title: t('bonus8Title'), desc: t('bonus8Desc'), value: t('bonus8Value') },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-background to-secondary/30 fade-in-section" id="bonuses">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-4"
        >
          <div className="inline-flex items-center gap-2 mb-4 px-6 py-2 rounded-full bg-gold text-chocolate font-bold">
            <Gift className="w-5 h-5" />
            <span>{t('bonusTag')}</span>
          </div>
          <h2 className="section-title">{t('bonusesTitle')}</h2>
          <p className="section-subtitle">{t('bonusesSubtitle')}</p>
        </motion.div>

        <BonusStackGallery />

        <div className="mt-6 space-y-4 max-w-3xl mx-auto mb-10">
          {bonuses.map((bonus, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="premium-card p-6 flex items-start gap-4 transition-all duration-300"
            >
              <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-gold to-pink rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-sm leading-tight text-center">
                  {String(bonus.value)
                    .split(' ')
                    .filter(Boolean)
                    .map((part, i) => (
                      <span key={i} className="block">
                        {part}
                      </span>
                    ))}
                </span>
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-bold text-foreground mb-1">{bonus.title}</h3>
                <p className="text-muted-foreground text-sm">{bonus.desc}</p>
              </div>
              <div className="flex-shrink-0">
                <Check className="w-6 h-6 text-gold" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Total Value Banner */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="max-w-2xl mx-auto p-6 rounded-2xl premium-card bg-gold/10 border border-gold/25 text-center"
        >
          <p className="text-xl md:text-2xl font-semibold text-foreground">
            {t('totalBonusValue')}: <span className="text-gold font-bold">{t('bonusesTotalAmount')}</span> — {t('freeToday')}
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default BonusesSection;
