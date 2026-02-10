import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';

const LANG_ORDER = ['fr', 'de', 'it', 'nl', 'pl'] as const;

const LanguageToggle = () => {
  const { language, setLanguage } = useLanguage();

  const handleToggle = () => {
    const idx = LANG_ORDER.indexOf(language as (typeof LANG_ORDER)[number]);
    const next = LANG_ORDER[(idx + 1) % LANG_ORDER.length];
    setLanguage(next);
  };

  return (
    <div className="fixed top-16 right-4 z-30">
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={handleToggle}
        className="px-3 py-2 rounded-full text-sm font-semibold tracking-wide transition-all duration-300 shadow-lg border border-white/20 backdrop-blur-md"
        style={{ background: 'var(--gradient-cta)' }}
      >
        <span className="text-primary-foreground">FR / DE / IT / NL / PL</span>
      </motion.button>
    </div>
  );
};

export default LanguageToggle;
