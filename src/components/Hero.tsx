import { ArrowRight } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center relative overflow-hidden pt-20">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/90 to-primary/80">
        <div className="absolute inset-0 opacity-10"
             style={{
               backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23FFC107' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
               backgroundSize: '60px 60px'
             }}
        ></div>

        {/* Floating Orbs */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-accent/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white/5 rounded-full blur-3xl animate-float-slow"></div>

        {/* Animated particles */}
        <div className="absolute inset-0">
          <div className="particle particle-1"></div>
          <div className="particle particle-2"></div>
          <div className="particle particle-3"></div>
          <div className="particle particle-4"></div>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center py-20">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight animate-fade-in-up">
            Secure Websites & Payment Solutions for Cambodian Businesses
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl text-white/90 mb-8 leading-relaxed animate-fade-in-up animation-delay-200">
            From simple online presence to custom FinTech integration, I help you get paid online, reliably and securely.
          </p>
          <button
            onClick={() => scrollToSection('contact')}
            className="bg-accent text-white text-lg px-8 py-4 rounded-lg hover:bg-amber-500 transition-all transform hover:scale-105 font-semibold inline-flex items-center group animate-fade-in-up animation-delay-400 shadow-xl hover:shadow-2xl"
          >
            Schedule a Free Consultation
            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
          </button>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="animate-fade-in-up animation-delay-600">
              <div className="text-3xl font-bold text-accent mb-2 animate-pulse">9+</div>
              <div className="text-white/80">Years Experience</div>
            </div>
            <div className="animate-fade-in-up animation-delay-700">
              <div className="text-3xl font-bold text-accent mb-2 animate-pulse animation-delay-200">100%</div>
              <div className="text-white/80">Security Focus</div>
            </div>
            <div className="animate-fade-in-up animation-delay-800">
              <div className="text-3xl font-bold text-accent mb-2 animate-pulse animation-delay-400">24/7</div>
              <div className="text-white/80">Support Available</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;