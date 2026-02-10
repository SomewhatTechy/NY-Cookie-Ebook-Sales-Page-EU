import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';
import { ShoppingCart, Mail, Download, Smartphone } from 'lucide-react';

const DeliverySection = () => {
  const { t } = useLanguage();

  const steps = [
    { 
      step: 1, 
      icon: ShoppingCart, 
      title: t('deliveryStep1Title'), 
      desc: t('deliveryStep1Desc') 
    },
    { 
      step: 2, 
      icon: Mail, 
      title: t('deliveryStep2Title'), 
      desc: t('deliveryStep2Desc') 
    },
    { 
      step: 3, 
      icon: Download, 
      title: t('deliveryStep3Title'), 
      desc: t('deliveryStep3Desc') 
    },
  ];

  return (
    <section className="py-20 bg-card" id="how-it-works">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="section-title">{t('deliveryTitle')}</h2>
          <p className="section-subtitle">{t('deliverySubtitle')}</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-10">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="text-center relative"
            >
              {/* Step number */}
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gold/10 border border-gold/60 flex items-center justify-center">
                <step.icon className="w-8 h-8 text-gold" />
              </div>
              
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-8 left-[60%] w-[80%] h-0.5 bg-gold/20" />
              )}
              
              <h3 className="font-heading text-xl font-bold text-foreground mb-2">
                {t('step')} {step.step}: {step.title}
              </h3>
              <p className="text-sm text-muted-foreground">{step.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Device compatibility */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex items-center justify-center gap-2 text-sm text-muted-foreground"
        >
          <Smartphone className="w-4 h-4" />
          {t('deviceCompatibility')}
        </motion.div>
      </div>
    </section>
  );
};

export default DeliverySection;