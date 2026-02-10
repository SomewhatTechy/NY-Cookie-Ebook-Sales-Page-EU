import { useLanguage } from '@/contexts/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="py-12 px-4 bg-chocolate text-white/70 text-sm">
      <div className="container mx-auto text-center space-y-4">
        {/* Disclaimer */}
        <p className="max-w-2xl mx-auto">{t('footerDisclaimer')}</p>

        {/* Contact */}
        <p>
          {t('footerContact')}:{' '}
          <a
            href="mailto:thesweethustleinfo@gmail.com"
            className="text-gold hover:underline"
          >
            thesweethustleinfo@gmail.com
          </a>
        </p>

        {/* Copyright */}
        <p className="text-white/50">{t('footerCopyright')}</p>

        {/* Facebook disclaimer */}
        <p className="text-white/40 text-xs mt-4">
          {t('')}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
