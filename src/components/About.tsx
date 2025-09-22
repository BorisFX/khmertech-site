const About = () => {
  return (
    <section id="about" className="py-20 bg-bg-light">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                From Global Finance to Cambodian Growth
              </h2>
              <div className="space-y-4 text-secondary leading-relaxed">
                <p>
                  My name is <strong>Oleg Matyakubov</strong>. I am a senior software developer with over nine years of experience building enterprise-level financial systems in Europe.
                </p>
                <p>
                  In 2025, I moved to Phnom Penh to apply my expertise to help local businesses and startups thrive in the digital economy. My passion is creating technology that is not only powerful but also reliable and easy to use.
                </p>
                <p>
                  Having worked with major financial institutions, I understand the critical importance of security, performance, and user trust. Now, I bring these enterprise-level standards to Cambodian businesses at affordable rates.
                </p>
                <p>
                  Whether you need a simple website or a complex payment integration, I approach every project with the same commitment to excellence and attention to detail.
                </p>
              </div>
              <div className="mt-8">
                <button
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="bg-accent text-white px-6 py-3 rounded-lg hover:bg-amber-500 transition-colors font-semibold"
                >
                  Let's Work Together
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
            <div className="text-center">
              <div className="text-2xl font-bold text-primary mb-2">.NET</div>
              <div className="text-sm text-secondary">Core Platform</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary mb-2">React</div>
              <div className="text-sm text-secondary">Frontend</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary mb-2">WordPress</div>
              <div className="text-sm text-secondary">CMS Expert</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary mb-2">APIs</div>
              <div className="text-sm text-secondary">Integration</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;