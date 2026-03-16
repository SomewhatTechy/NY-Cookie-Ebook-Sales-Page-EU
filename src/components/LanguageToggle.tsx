import { useLanguage } from '@/contexts/LanguageContext';
import { Globe } from 'lucide-react';

const LANGUAGES = [
  { code: 'fr', label: 'Français' },
  { code: 'de', label: 'Deutsch' },
  { code: 'it', label: 'Italiano' },
  { code: 'nl', label: 'Nederlands' },
  { code: 'pl', label: 'Polski' },
] as const;

const LanguageToggle = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="fixed top-16 right-4 z-30">
      <div className="relative flex items-center gap-1.5 px-3 py-2 rounded-full text-sm font-semibold tracking-wide shadow-lg border border-white/20 backdrop-blur-md" style={{ background: 'var(--gradient-cta)' }}>
        <Globe className="w-4 h-4 text-primary-foreground" />
        <select
          value={language}
          onChange={(e) => setLanguage(e.target.value as any)}
          className="bg-transparent text-primary-foreground text-sm font-semibold appearance-none cursor-pointer outline-none pr-1"
          aria-label="Select language"
        >
          {LANGUAGES.map((lang) => (
            <option key={lang.code} value={lang.code} className="text-black bg-white">
              {lang.label}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default LanguageToggle;
