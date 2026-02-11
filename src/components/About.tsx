import { useI18n } from '../i18n/context';

const About = () => {
  const { t } = useI18n();

  return (
    <section id="about" className="py-20 bg-bg-light">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                {t.about.title}
              </h2>
              <div className="space-y-4 text-secondary leading-relaxed">
                {t.about.paragraphs.map((p, i) => (
                  <p key={i} dangerouslySetInnerHTML={{ __html: p }} />
                ))}
              </div>
              <div className="mt-8">
                <button
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="bg-accent text-white px-6 py-3 rounded-lg hover:bg-amber-500 transition-colors font-semibold"
                >
                  {t.about.cta}
                </button>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-primary/20 rounded-2xl transform rotate-6"></div>
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=600&fit=crop"
                  alt="Professional headshot"
                  className="relative rounded-2xl shadow-xl w-full"
                />
              </div>
            </div>
          </div>

          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
            {t.about.skills.map((skill, i) => (
              <div key={i} className="text-center">
                <div className="text-2xl font-bold text-primary mb-2">{skill.name}</div>
                <div className="text-sm text-secondary">{skill.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
