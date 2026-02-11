import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { useI18n } from '../i18n/context';

const Navbar = () => {
  const { lang, t, setLang } = useI18n();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-lg' : 'bg-white/95 backdrop-blur'
    }`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          <div className="flex items-center">
            <a
              href="#"
              className="text-xl md:text-2xl font-bold text-primary"
              onClick={(e) => { e.preventDefault(); scrollToSection('hero'); }}
            >
              khmertech<span className="text-accent">.dev</span>
            </a>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('services')}
              className="text-secondary hover:text-primary transition-colors font-medium"
            >
              {t.nav.services}
            </button>
            <button
              onClick={() => scrollToSection('portfolio')}
              className="text-secondary hover:text-primary transition-colors font-medium"
            >
              {t.nav.portfolio}
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="text-secondary hover:text-primary transition-colors font-medium"
            >
              {t.nav.about}
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-secondary hover:text-primary transition-colors font-medium"
            >
              {t.nav.contact}
            </button>

            {/* Language Switcher */}
            <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden text-sm">
              <button
                onClick={() => setLang('en')}
                className={`px-3 py-1.5 font-medium transition-colors ${
                  lang === 'en' ? 'bg-primary text-white' : 'text-secondary hover:bg-gray-100'
                }`}
              >
                EN
              </button>
              <button
                onClick={() => setLang('zh')}
                className={`px-3 py-1.5 font-medium transition-colors ${
                  lang === 'zh' ? 'bg-primary text-white' : 'text-secondary hover:bg-gray-100'
                }`}
              >
                中文
              </button>
            </div>

            <button
              onClick={() => scrollToSection('contact')}
              className="bg-accent text-white px-4 py-2 rounded-lg hover:bg-amber-500 transition-colors font-semibold"
            >
              {t.nav.cta}
            </button>
          </div>

          <div className="flex items-center gap-3 md:hidden">
            {/* Mobile Language Switcher */}
            <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden text-xs">
              <button
                onClick={() => setLang('en')}
                className={`px-2 py-1 font-medium transition-colors ${
                  lang === 'en' ? 'bg-primary text-white' : 'text-secondary'
                }`}
              >
                EN
              </button>
              <button
                onClick={() => setLang('zh')}
                className={`px-2 py-1 font-medium transition-colors ${
                  lang === 'zh' ? 'bg-primary text-white' : 'text-secondary'
                }`}
              >
                中文
              </button>
            </div>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-primary"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden pb-4 space-y-2">
            <button
              onClick={() => scrollToSection('services')}
              className="block w-full text-left px-4 py-2 text-secondary hover:text-primary transition-colors font-medium"
            >
              {t.nav.services}
            </button>
            <button
              onClick={() => scrollToSection('portfolio')}
              className="block w-full text-left px-4 py-2 text-secondary hover:text-primary transition-colors font-medium"
            >
              {t.nav.portfolio}
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="block w-full text-left px-4 py-2 text-secondary hover:text-primary transition-colors font-medium"
            >
              {t.nav.about}
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="block w-full text-left px-4 py-2 text-secondary hover:text-primary transition-colors font-medium"
            >
              {t.nav.contact}
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="block w-full text-left px-4 py-2 bg-accent text-white rounded-lg hover:bg-amber-500 transition-colors font-semibold mx-4"
            >
              {t.nav.cta}
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
