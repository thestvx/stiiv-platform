import { useTranslation } from 'react-i18next';
import { useTheme } from '@/contexts/ThemeContext';
import { 
  Twitter, 
  Instagram, 
  Linkedin, 
  Dribbble, 
  Github,
  Mail,
  Sun,
  Moon
} from 'lucide-react';

export default function Footer() {
  const { t, i18n } = useTranslation();
  const { theme, toggleTheme } = useTheme();
  const isRTL = i18n.language === 'ar';

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
    }
  };

  const socialLinks = [
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Dribbble, href: '#', label: 'Dribbble' },
    { icon: Github, href: '#', label: 'GitHub' },
  ];

  const quickLinks = [
    { id: 'home', label: t('footer.links.home') },
    { id: 'work', label: t('footer.links.work') },
    { id: 'about', label: t('footer.links.about') },
    { id: 'contact', label: t('footer.links.contact') },
  ];

  const serviceLinks = [
    { label: t('footer.serviceLinks.brandIdentity') },
    { label: t('footer.serviceLinks.visualDesign') },
    { label: t('footer.serviceLinks.motion') },
    { label: t('footer.serviceLinks.digital') },
  ];

  return (
    <footer 
      className="pt-20 pb-10 relative"
      style={{ 
        backgroundColor: 'var(--bg-secondary)',
        borderTop: '1px solid var(--border)',
      }}
    >
      <div className="container-custom">
        {/* Main Footer Content */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 lg:gap-16 mb-16">
          {/* Brand Column */}
          <div className="col-span-2 md:col-span-1">
            <img 
              src="/stvx-logo.png" 
              alt="STVX" 
              className="h-12 w-auto object-contain mb-6"
            />
            <p 
              className="text-sm mb-6"
              style={{ color: 'var(--text-secondary)' }}
            >
              {t('footer.tagline')}
            </p>
            {/* Social Links */}
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    className="w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
                    style={{ 
                      backgroundColor: 'var(--bg-tertiary)',
                      color: 'var(--text-secondary)',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = 'var(--accent)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = 'var(--text-secondary)';
                    }}
                    aria-label={social.label}
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 
              className="text-sm font-semibold uppercase tracking-wider mb-6"
              style={{ color: 'var(--text-primary)' }}
            >
              {t('footer.quickLinks')}
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => link.id === 'home' ? window.scrollTo({ top: 0, behavior: 'smooth' }) : scrollToSection(link.id)}
                    className="text-sm link-underline transition-colors duration-300"
                    style={{ color: 'var(--text-secondary)' }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = 'var(--accent)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = 'var(--text-secondary)';
                    }}
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 
              className="text-sm font-semibold uppercase tracking-wider mb-6"
              style={{ color: 'var(--text-primary)' }}
            >
              {t('footer.services')}
            </h4>
            <ul className="space-y-3">
              {serviceLinks.map((service, index) => (
                <li key={index}>
                  <span
                    className="text-sm"
                    style={{ color: 'var(--text-secondary)' }}
                  >
                    {service.label}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 
              className="text-sm font-semibold uppercase tracking-wider mb-6"
              style={{ color: 'var(--text-primary)' }}
            >
              {t('footer.connect')}
            </h4>
            <a
              href="mailto:hello@stvx.studio"
              className="inline-flex items-center gap-2 text-sm transition-colors duration-300"
              style={{ color: 'var(--text-secondary)' }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = 'var(--accent)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = 'var(--text-secondary)';
              }}
            >
              <Mail className="w-4 h-4" />
              hello@stvx.studio
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div 
          className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-6"
          style={{ borderTop: '1px solid var(--border)' }}
        >
          {/* Copyright */}
          <p 
            className="text-sm"
            style={{ color: 'var(--text-muted)' }}
          >
            {t('footer.copyright')}
          </p>

          {/* Toggles */}
          <div className="flex items-center gap-4">
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm transition-all duration-300"
              style={{ 
                backgroundColor: 'var(--bg-tertiary)',
                color: 'var(--text-secondary)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = 'var(--accent)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = 'var(--text-secondary)';
              }}
            >
              {theme === 'dark' ? (
                <>
                  <Sun className="w-4 h-4" />
                  <span>{t('theme.light')}</span>
                </>
              ) : (
                <>
                  <Moon className="w-4 h-4" />
                  <span>{t('theme.dark')}</span>
                </>
              )}
            </button>

            {/* Language Toggle */}
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300"
              style={{ 
                backgroundColor: 'var(--bg-tertiary)',
                color: 'var(--text-secondary)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = 'var(--accent)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = 'var(--text-secondary)';
              }}
            >
              {isRTL ? t('language.en') : t('language.ar')}
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
