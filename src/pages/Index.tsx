import { lazy, Suspense } from 'react';
import { LanguageProvider, useLanguage } from '@/contexts/LanguageContext';
import LanguageToggle from '@/components/LanguageToggle';
import StickyUrgencyBar from '@/components/StickyUrgencyBar';
import FloatingCTA from '@/components/FloatingCTA';
import HeroSection from '@/components/HeroSection';

// Lazy-load below-the-fold sections to reduce initial bundle size
const PainPointsSection = lazy(() => import('@/components/PainPointsSection'));
const TransformationSection = lazy(() => import('@/components/TransformationSection'));
const WhatYouGetSection = lazy(() => import('@/components/WhatYouGetSection'));
const BonusesSection = lazy(() => import('@/components/BonusesSection'));
const PriceDropSection = lazy(() => import('@/components/PriceDropSection'));
const DeliverySection = lazy(() => import('@/components/DeliverySection'));
const TestimonialsSection = lazy(() => import('@/components/TestimonialsSection'));
const FuturePacingSection = lazy(() => import('@/components/FuturePacingSection'));
const GuaranteeSection = lazy(() => import('@/components/GuaranteeSection'));
const FAQSection = lazy(() => import('@/components/FAQSection'));
const ObjectionsSection = lazy(() => import('@/components/ObjectionsSection'));
const FinalCTASection = lazy(() => import('@/components/FinalCTASection'));
const Footer = lazy(() => import('@/components/Footer'));

type LangKey = 'fr' | 'de' | 'it' | 'nl' | 'pl';

// Checkout URLs: Single price ($6.97) for all visitors
const CHECKOUT_URLS: Record<LangKey, string> = {
  fr: 'https://pay.hotmart.com/L104188666N?off=pfucgmvq&checkoutMode=10',
  de: 'https://pay.hotmart.com/I104188883L?off=7x40hb7m&checkoutMode=10',
  it: 'https://pay.hotmart.com/I104189077B?off=15ln9ygm&checkoutMode=10',
  nl: 'https://pay.hotmart.com/H104188739T?off=hu2ofnyo&checkoutMode=10',
  pl: 'https://pay.hotmart.com/V104189240T?off=7ku8bias&checkoutMode=10',
};

function normalizeLanguageToKey(language: unknown): LangKey {
  const raw = typeof language === 'string' ? language.trim().toLowerCase() : '';
  if (raw.startsWith('de')) return 'de';
  if (raw.startsWith('it')) return 'it';
  if (raw.startsWith('nl')) return 'nl';
  if (raw.startsWith('pl')) return 'pl';
  return 'fr';
}

const PageContent = () => {
  const { language } = useLanguage();

  const langKey = normalizeLanguageToKey(language);
  const checkoutUrl = CHECKOUT_URLS[langKey];

  return (
    <div className="min-h-screen premium-page text-foreground">
      <StickyUrgencyBar checkoutUrl={checkoutUrl} />
      <LanguageToggle />
      <FloatingCTA checkoutUrl={checkoutUrl} />

      <main>
        <HeroSection checkoutUrl={checkoutUrl} />
        <Suspense fallback={null}>
          <PainPointsSection />
          <TransformationSection />
          <WhatYouGetSection />
          <BonusesSection />
          <PriceDropSection checkoutUrl={checkoutUrl} />
          <DeliverySection />
          <TestimonialsSection />
          <FuturePacingSection />
          <GuaranteeSection checkoutUrl={checkoutUrl} />
          <FAQSection />
          <ObjectionsSection />
          <FinalCTASection checkoutUrl={checkoutUrl} />
        </Suspense>
      </main>

      <Suspense fallback={null}>
        <Footer />
      </Suspense>
    </div>
  );
};

const Index = () => {
  return (
    <LanguageProvider>
      <PageContent />
    </LanguageProvider>
  );
};

export default Index;
