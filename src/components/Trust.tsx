import { Shield, TrendingUp, MapPin, MessageSquare } from 'lucide-react';
import { useI18n } from '../i18n/context';

const iconMap = {
  trending: <TrendingUp className="w-8 h-8" />,
  shield: <Shield className="w-8 h-8" />,
  mappin: <MapPin className="w-8 h-8" />,
  message: <MessageSquare className="w-8 h-8" />,
};

const Trust = () => {
  const { t } = useI18n();

  return (
    <section id="trust" className="py-20 bg-bg-light">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            {t.trust.title}
          </h2>
          <p className="text-lg text-secondary max-w-2xl mx-auto">
            {t.trust.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {t.trust.points.map((point, index) => (
            <div key={index} className="flex items-start space-x-4">
              <div className="flex-shrink-0 text-accent bg-white p-3 rounded-lg shadow-md">
                {iconMap[point.icon]}
              </div>
              <div>
                <h3 className="text-xl font-semibold text-primary mb-2">
                  {point.title}
                </h3>
                <p className="text-secondary leading-relaxed">
                  {point.text}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-white rounded-2xl shadow-lg p-8 max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {t.trust.stats.map((stat, i) => (
              <div key={i}>
                <div className="text-4xl font-bold text-accent mb-2">{stat.value}</div>
                <div className="text-secondary">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Trust;
