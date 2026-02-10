import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';
import { Cookie } from 'lucide-react';
import { useEffect, useState } from 'react';

interface FloatingCTAProps {
  checkoutUrl: string;
}

const FloatingCTA = ({ checkoutUrl }: FloatingCTAProps) => {
  const { t } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling 500px
      setIsVisible(window.scrollY > 500);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // set initial state
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <motion.a
      href={checkoutUrl}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: 100, opacity: 0 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-5 right-5 z-50 flex items-center gap-2 px-5 py-3 rounded-full font-semibold premium-pill"
      style={{
        background: 'var(--gradient-cta)',
        color: 'hsl(var(--chocolate))',
        boxShadow: '0 4px 20px hsl(38 65% 56% / 0.4)',
      }}
    >
      <Cookie className="w-5 h-5" />
      <span className="hidden sm:inline text-sm">{t('floatingCta')}</span>
    </motion.a>
  );
};

export default FloatingCTA;
