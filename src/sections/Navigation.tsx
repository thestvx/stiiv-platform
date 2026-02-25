import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useTheme } from '@/contexts/ThemeContext';
import { Sun, Moon, Menu, X } from 'lucide-react';
import gsap from 'gsap';

export default function Navigation() {
  const { t, i18n } = useTranslation();
  const { theme, toggleTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const isRTL = i18n.language === 'ar';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Animate nav items on mount
    const navItems = document.querySelectorAll('.nav-item');
    gsap.fromTo(navItems, 
      { opacity: 0, y: -20 },
      { opacity: 1, y: 0, duration: 0.6, stagger: 0.05, ease: 'power3.out', delay: 0.2 }
    );
  }, []);

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'ar' : 'en';
    i18n.changeLanguage(newLang);
    document.documentElement.dir = newLang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = newLang;
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  const navLinks = [
    { id: 'work', label: t('nav.work') },
    { id: 'about', label: t('nav.about') },
    { id: 'services', label: t('nav.services') },
    { id: 'contact', label: t('nav.contact') },
  ];

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-premium ${
          isScrolled 
            ? 'bg-stvx-dark-bg-secondary/80 dark:bg-stvx-dark-bg-secondary/80 bg-stvx-light-bg-secondary/80 backdrop-blur-xl shadow-soft' 
            : 'bg-transparent'
        }`}
      >
        <div className="container-custom">
          <div className="flex items-center justify-between h-20 lg:h-24">
            {/* Logo */}
            <a 
              href="#" 
              className="nav-item relative z-10 transition-transform duration-300 hover:scale-105"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            >
              <img 
                src="/stvx-logo.png" 
                alt="STVX" 
                className="h-10 lg:h-12 w-auto object-contain"
              />
            </a>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-10">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className="nav-item text-primary-custom text-sm font-medium link-underline transition-colors duration-300 hover:text-accent-custom"
                >
                  {link.label}
                </button>
              ))}
            </div>

            {/* Toggles */}
            <div className="flex items-center gap-4">
              {/* Theme Toggle */}
              <button
                onClick={toggleTheme}
                className="nav-item p-2 rounded-full transition-all duration-300 hover:bg-stvx-dark-border dark:hover:bg-stvx-dark-border hover:bg-stvx-light-border"
                aria-label={theme === 'dark' ? t('theme.light') : t('theme.dark')}
              >
                {theme === 'dark' ? (
                  <Sun className="w-5 h-5 text-stvx-accent transition-transform duration-500 rotate-0" />
                ) : (
                  <Moon className="w-5 h-5 text-stvx-accent-dark transition-transform duration-500 rotate-0" />
                )}
              </button>

              {/* Language Toggle */}
              <button
                onClick={toggleLanguage}
                className="nav-item px-3 py-1.5 text-sm font-semibold rounded-lg border border-stvx-dark-border dark:border-stvx-dark-border border-stvx-light-border transition-all duration-300 hover:border-stvx-accent hover:text-stvx-accent text-primary-custom"
              >
                {isRTL ? t('language.en') : t('language.ar')}
              </button>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden nav-item p-2 rounded-lg transition-colors duration-300 hover:bg-stvx-dark-border dark:hover:bg-stvx-dark-border hover:bg-stvx-light-border"
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? (
                  <X className="w-6 h-6 text-primary-custom" />
                ) : (
                  <Menu className="w-6 h-6 text-primary-custom" />
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div 
        className={`fixed inset-0 z-40 lg:hidden transition-all duration-500 ease-premium ${
          isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div 
          className="absolute inset-0 bg-stvx-dark-bg/95 dark:bg-stvx-dark-bg/95 bg-stvx-light-bg/95 backdrop-blur-xl"
          onClick={() => setIsMobileMenuOpen(false)}
        />
        <div 
          className={`absolute top-24 left-0 right-0 p-6 transition-transform duration-500 ease-premium ${
            isMobileMenuOpen ? 'translate-y-0' : '-translate-y-10'
          }`}
        >
          <div className="flex flex-col gap-6">
            {navLinks.map((link, index) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="text-2xl font-semibold text-primary-custom text-left transition-colors duration-300 hover:text-stvx-accent"
                style={{ 
                  transitionDelay: isMobileMenuOpen ? `${index * 50}ms` : '0ms',
                  opacity: isMobileMenuOpen ? 1 : 0,
                  transform: isMobileMenuOpen ? 'translateX(0)' : isRTL ? 'translateX(20px)' : 'translateX(-20px)',
                  transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)'
                }}
              >
                {link.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
