import { useLanguage } from '@/contexts/LanguageContext';
import { ChevronDown } from 'lucide-react';

const FAQSection = () => {
  const { t } = useLanguage();

  const objectionFaqs = [
    { question: t('objection1Title'), answer: t('objection1Body') + ' ' + t('objection1Inside') },
    { question: t('objection2Title'), answer: t('objection2Body') + ' ' + t('objection2Inside') },
    { question: t('objection3Title'), answer: t('objection3Body') + ' ' + t('objection3Inside') },
    { question: t('objection4Title'), answer: t('objection4Body') + ' ' + t('objection4Inside') },
    { question: t('objection5Title'), answer: t('objection5Body') + ' ' + t('objection5Inside') },
    { question: t('objection6Title'), answer: t('objection6Body') + ' ' + t('objection6Inside') },
  ];

  const faqs = [
    { question: t('faq1Question'), answer: t('faq1Answer') },
    { question: t('faq2Question'), answer: t('faq2Answer') },
    { question: t('faq4Question'), answer: t('faq4Answer') },
    { question: t('faq5Question'), answer: t('faq5Answer') },
    { question: t('faq6Question'), answer: t('faq6Answer') },
    { question: t('faq10Question'), answer: t('faq10Answer') },
    { question: t('faq11Question'), answer: t('faq11Answer') },
    { question: t('faq12Question'), answer: t('faq12Answer') },
    { question: t('faq13Question'), answer: t('faq13Answer') },
    { question: t('faq14Question'), answer: t('faq14Answer') },
    { question: t('faq15Question'), answer: t('faq15Answer') },
  ];

  const allFaqs = [...objectionFaqs, ...faqs];

  return (
    <section className="py-24 bg-transparent fade-in-section" id="faq" style={{ background: "var(--gradient-section)" }}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="section-title">{t('faqTitle')}</h2>
        </div>

        <div className="max-w-3xl mx-auto space-y-4 animate-fade-in">
          {allFaqs.map((faq, index) => (
            <details
              key={index}
              className="premium-card p-6 group hover:border-gold/30 transition-colors"
            >
              <summary className="font-bold text-foreground cursor-pointer text-base flex items-center justify-between list-none">
                <span>{faq.question}</span>
                <ChevronDown className="w-5 h-5 text-pink transition-transform group-open:rotate-180" />
              </summary>
              <p className="text-muted-foreground mt-4 leading-relaxed text-sm">{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
