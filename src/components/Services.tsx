import { Globe, ShoppingCart, Code, Check, Clock, MapPin } from 'lucide-react';
import { useI18n } from '../i18n/context';

const iconMap = {
  globe: <Globe className="w-12 h-12" />,
  cart: <ShoppingCart className="w-12 h-12" />,
  code: <Code className="w-12 h-12" />,
};

const Services = () => {
  const { t } = useI18n();

  const scrollToContact = () => {
    const section = document.getElementById('contact');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-6">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            {t.services.title}
          </h2>
          <p className="text-lg text-secondary max-w-2xl mx-auto mb-4">
            {t.services.subtitle}
          </p>
          <div className="flex items-center justify-center gap-2 text-accent font-medium">
            <MapPin className="w-5 h-5" />
            <span>{t.services.localFocus}</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {t.services.packages.map((pkg, index) => (
            <div
              key={index}
              className={`p-8 rounded-xl border-2 transition-all duration-300 group relative ${
                pkg.highlight
                  ? 'border-accent shadow-xl bg-gradient-to-b from-amber-50 to-white'
                  : 'border-gray-200 hover:border-accent hover:shadow-xl'
              }`}
            >
              {pkg.highlight && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-accent text-white px-4 py-1 rounded-full text-sm font-semibold">
                  {t.services.popularLabel}
                </div>
              )}

              <div className="text-accent mb-4 group-hover:scale-110 transition-transform duration-300">
                {iconMap[pkg.icon]}
              </div>

              <h3 className="text-xl font-bold text-primary mb-1">
                {pkg.title}
              </h3>
              <p className="text-accent font-medium text-sm mb-3">
                {pkg.subtitle}
              </p>
              <p className="text-secondary text-sm leading-relaxed mb-4">
                {pkg.description}
              </p>

              <div className="flex items-center gap-2 text-sm text-secondary mb-6 pb-6 border-b border-gray-200">
                <Clock className="w-4 h-4 text-accent" />
                <span>{pkg.timeline}</span>
              </div>

              <ul className="space-y-3 mb-8">
                {pkg.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-sm text-secondary">
                    <Check className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                onClick={scrollToContact}
                className={`w-full py-3 rounded-lg font-semibold transition-all ${
                  pkg.highlight
                    ? 'bg-accent text-white hover:bg-amber-500'
                    : 'bg-primary text-white hover:bg-primary/90'
                }`}
              >
                {t.services.ctaButton}
              </button>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-secondary">
            <span className="font-semibold text-primary">{t.services.footer}</span>
            {t.services.footerSuffix}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services;
