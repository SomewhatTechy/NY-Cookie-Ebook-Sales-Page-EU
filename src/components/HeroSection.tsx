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
    fr: '1160031930',
    de: '1160035263',
    it: '1160035539',
    nl: '1160035991',
    pl: '1160036542',
  };

  const currentVideoId = videoIds[language] ?? videoIds.fr;

  const videoTitleByLang: Record<string, string> = {
    fr: 'Vidéo',
    de: 'Video',
    it: 'Video',
    nl: 'Video',
    pl: 'Wideo',
  };
  const videoTitle = videoTitleByLang[language] ?? videoTitleByLang.fr;

  // Build Vimeo URL - use ? or & depending on whether videoId already has query params
  const separator = currentVideoId.includes('?') ? '&' : '?';
  const vimeoSrc =
    `https://player.vimeo.com/video/${currentVideoId}` +
    `${separator}autoplay=1&muted=1&loop=1&autopause=0&playsinline=1` +
    `&title=0&byline=0&portrait=0&dnt=1`;

  const vimeoThumb = `https://vumbnail.com/${currentVideoId}.jpg`;

  const goCheckout = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.location.assign(checkoutUrl);
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
                    src={vimeoSrc}
                    title={videoTitle}
                    referrerPolicy="strict-origin-when-cross-origin"
                    allow="autoplay; fullscreen; picture-in-picture"
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
                      src={vimeoThumb}
                      alt={videoTitle}
                      className="w-full h-full object-cover"
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
