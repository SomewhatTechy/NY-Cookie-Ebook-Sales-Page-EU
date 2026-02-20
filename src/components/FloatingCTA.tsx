import { useLanguage } from '@/contexts/LanguageContext';
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

  const goCheckout = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    if (typeof (window as any).trackInitiateCheckout === 'function') {
      (window as any).trackInitiateCheckout(checkoutUrl);
    } else {
      window.location.assign(checkoutUrl);
    }
  };

  if (!isVisible) return null;

  return (
    <a
      href={checkoutUrl}
      onClick={goCheckout}
      className="fixed bottom-5 right-5 z-50 flex items-center gap-2 px-5 py-3 rounded-full font-semibold premium-pill animate-fade-in hover:scale-105 active:scale-95 transition-transform"
      style={{
        background: 'var(--gradient-cta)',
        color: 'hsl(var(--chocolate))',
        boxShadow: '0 4px 20px hsl(38 65% 56% / 0.4)',
      }}
    >
      <Cookie className="w-5 h-5" />
      <span className="hidden sm:inline text-sm">{t('floatingCta')}</span>
    </a>
  );
};

export default FloatingCTA;
