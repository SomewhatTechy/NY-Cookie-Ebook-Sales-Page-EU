import { useLanguage } from '@/contexts/LanguageContext';
import { Globe } from 'lucide-react';

const LANG_LABELS: Record<string, string> = {
  fr: 'Français',
  de: 'Deutsch',
  it: 'Italiano',
  nl: 'Nederlands',
  pl: 'Polski',
};

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
      <button
        onClick={handleToggle}
        className="flex items-center gap-1.5 px-3 py-2 rounded-full text-sm font-semibold tracking-wide transition-all duration-300 shadow-lg border border-white/20 backdrop-blur-md hover:scale-105 active:scale-95"
        style={{ background: 'var(--gradient-cta)' }}
        aria-label="Switch language"
      >
        <Globe className="w-4 h-4 text-primary-foreground" />
        <span className="text-primary-foreground">{LANG_LABELS[language] || 'Français'}</span>
      </button>
    </div>
  );
};

export default LanguageToggle;
