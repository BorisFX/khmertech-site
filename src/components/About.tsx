import { useI18n } from '../i18n/context';

const About = () => {
  const { t } = useI18n();

  return (
    <section id="about" className="py-20 bg-bg-light">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="max-w-2xl mx-auto text-center">
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
