import { useLanguage } from '@/contexts/LanguageContext';
import { ArrowRight, Download, Sparkles, ShieldCheck, Cookie, DollarSign, Clock, Zap, Play } from 'lucide-react';
import { useState } from 'react';

interface HeroSectionProps {
  checkoutUrl: string;
}

const HeroSection = ({ checkoutUrl }: HeroSectionProps) => {
  const { t, language } = useLanguage();
  const [videoLoaded, setVideoLoaded] = useState(false);

  const videoIds: Record<string, string> = {
    fr: 'WDSINN3-BtM',
    de: 'Bu24UDDqAtE',
    it: 'nPV9NbsJijc',
    nl: 'JzX-J1JMNGc',
    pl: 'aKSmd_7uAOw',
  };

  const currentVideoId = videoIds[language] ?? videoIds.fr;

  const videoTitleByLang: Record<string, string> = {
    fr: 'Comment Faire des Cookies Parfaits Style New York a la Maison',
    de: 'Perfekte New York Style Cookies zu Hause Backen',
    it: 'Come Fare Cookie Perfetti Stile New York a Casa',
    nl: 'Perfecte New York-Style Koekjes Thuis Bakken',
    pl: 'Jak Zrobic Idealne Ciasteczka w Stylu Nowojorskim w Domu',
  };
  const videoTitle = videoTitleByLang[language] ?? videoTitleByLang.fr;

  // YouTube embed URL — no autoplay (manual play converts better on cold traffic)
  const youtubeSrc =
    `https://www.youtube.com/embed/${currentVideoId}` +
    `?rel=0&modestbranding=1&playsinline=1`;

  // YouTube thumbnails — responsive: small for mobile, large for desktop
  const thumbHq = `https://img.youtube.com/vi/${currentVideoId}/hqdefault.jpg`;       // 480×360
  const thumbSd = `https://img.youtube.com/vi/${currentVideoId}/sddefault.jpg`;       // 640×480
  const thumbMax = `https://img.youtube.com/vi/${currentVideoId}/maxresdefault.jpg`;  // 1280×720

  const goCheckout = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    if (typeof (window as any).trackInitiateCheckout === 'function') {
      (window as any).trackInitiateCheckout(checkoutUrl);
    } else {
      window.location.assign(checkoutUrl);
    }
  };

  // Effort minimizers data with icons
  const effortMinimizers = [
    { key: 'effortMinimizer1', icon: DollarSign },
    { key: 'effortMinimizer2', icon: Zap },
    { key: 'effortMinimizer3', icon: Clock },
  ];

  return (
    <section
      className="relative pt-8 pb-16 overflow-hidden"
      style={{ background: 'var(--gradient-hero)' }}
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-gold/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-pink/10 rounded-full blur-3xl" />
        <div className="absolute top-40 right-20 w-24 h-24 bg-pink/5 rounded-full blur-2xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-6 animate-fade-in">
            <div className="flex items-center px-4 py-2 rounded-full bg-gold/10 border border-gold/30">
              <Cookie className="w-5 h-5 text-gold" aria-label="Cookie" />
            </div>
          </div>

          <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 leading-tight text-foreground animate-fade-in">
            {t('heroTitle')}
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground mb-4 max-w-2xl mx-auto animate-fade-in">
            {t('heroSubtitle')}
          </p>

          {/* Effort Minimizers - Hormozi Framework */}
          <div className="flex flex-wrap justify-center gap-3 mb-6 animate-fade-in">
            {effortMinimizers.map((item) => {
              const Icon = item.icon;
              return (
                <span
                  key={item.key}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-green-50/80 border border-green-200/50 text-green-700 text-sm font-medium"
                >
                  <Icon className="w-4 h-4" />
                  {t(item.key)}
                </span>
              );
            })}
          </div>

          <p className="text-gold font-semibold mb-3 flex items-center justify-center gap-2 animate-fade-in">
            <span aria-hidden>👇</span>
            {t('watchVideoPrompt')}
            <span aria-hidden>👇</span>
          </p>

          <div className="mb-8">
            <div className="relative max-w-2xl mx-auto rounded-2xl overflow-hidden elevated-shadow gold-frame">
              <div className="aspect-video bg-chocolate/5">
                {videoLoaded ? (
                  <iframe
                    key={currentVideoId}
                    className="w-full h-full"
                    src={youtubeSrc}
                    title={videoTitle}
                    referrerPolicy="strict-origin-when-cross-origin"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                ) : (
                  <button
                    type="button"
                    className="relative w-full h-full cursor-pointer group"
                    onClick={() => setVideoLoaded(true)}
                    aria-label={`${t('watchVideoPrompt')} - ${videoTitle}`}
                  >
                    <img
                      src={thumbHq}
                      srcSet={`${thumbHq} 480w, ${thumbSd} 640w, ${thumbMax} 1280w`}
                      sizes="(max-width: 640px) 480px, (max-width: 1024px) 640px, 1280px"
                      alt={videoTitle}
                      className="w-full h-full object-cover"
                      width={640}
                      height={480}
                      loading="eager"
                      fetchPriority="high"
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/30 transition-colors">
                      <div className="w-16 h-16 rounded-full bg-gold/90 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                        <Play className="w-7 h-7 text-white fill-white ml-1" />
                      </div>
                    </div>
                  </button>
                )}
              </div>
            </div>
          </div>

          <a
            href={checkoutUrl}
            onClick={goCheckout}
            className="cta-button text-base md:text-lg animate-pulse-glow hover:scale-105 active:scale-95 transition-transform"
            aria-label={t('heroCta')}
          >
            {t('heroCta')}
            <ArrowRight className="w-5 h-5" />
          </a>

          <div className="flex flex-wrap justify-center gap-6 mt-6 text-sm text-muted-foreground animate-fade-in">
            <span className="flex items-center gap-2">
              <Download className="w-5 h-5 text-gold" />
              {t('instantDownload')}
            </span>
            <span className="flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-gold" />
              {t('beginnerFriendly')}
            </span>
          </div>

          <div className="mt-6 animate-fade-in">
            <span className="inline-flex items-center gap-2 text-sm text-muted-foreground bg-card px-4 py-2 rounded-full border border-border">
              <ShieldCheck className="w-5 h-5 text-gold" />
              {t('secureCheckoutHotmart')}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
