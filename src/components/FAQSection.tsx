import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';
import { HelpCircle, ChevronDown } from 'lucide-react';

const FAQSection = () => {
  const { t } = useLanguage();

  const faqs = [
    { question: t('faq1Question'), answer: t('faq1Answer') },
    { question: t('faq2Question'), answer: t('faq2Answer') },
    { question: t('faq3Question'), answer: t('faq3Answer') },
    { question: t('faq4Question'), answer: t('faq4Answer') },
    { question: t('faq5Question'), answer: t('faq5Answer') },
    { question: t('faq6Question'), answer: t('faq6Answer') },
    { question: t('faq7Question'), answer: t('faq7Answer') },
    { question: t('faq8Question'), answer: t('faq8Answer') },
    { question: t('faq9Question'), answer: t('faq9Answer') },
    { question: t('faq10Question'), answer: t('faq10Answer') },
    { question: t('faq11Question'), answer: t('faq11Answer') },
    { question: t('faq12Question'), answer: t('faq12Answer') },
  ];

  return (
    <section className="py-24 bg-transparent fade-in-section" id="faq" style={{ background: "var(--gradient-section)" }}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="section-title">{t('faqTitle')}</h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="max-w-3xl mx-auto space-y-4"
        >
          {faqs.map((faq, index) => (
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
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;
