import { useLanguage } from '@/contexts/LanguageContext';
import { Cookie } from 'lucide-react';
import { useState, useEffect } from 'react';

interface FloatingCTAProps {
  checkoutUrl: string;
}

const FloatingCTA = ({ checkoutUrl }: FloatingCTAProps) => {
  const { t } = useLanguage();
  const [stickyBarActive, setStickyBarActive] = useState(false);

  useEffect(() => {
    const threshold = window.innerHeight * 0.8;
    const handleScroll = () => {
      setStickyBarActive(window.scrollY > threshold);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
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

  return (
    <a
      href={checkoutUrl}
      onClick={goCheckout}
      className={`fixed bottom-5 right-5 z-50 flex items-center gap-2 px-5 py-3 rounded-full font-semibold premium-pill hover:scale-105 active:scale-95 transition-transform ${stickyBarActive ? 'hidden sm:flex' : ''}`}
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
