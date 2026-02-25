import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { ThemeProvider } from '@/contexts/ThemeContext';
import { useLenis } from '@/hooks/useLenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Sections
import Navigation from '@/sections/Navigation';
import Hero from '@/sections/Hero';
import About from '@/sections/About';
import Services from '@/sections/Services';
import Projects from '@/sections/Projects';
import CTA from '@/sections/CTA';
import Footer from '@/sections/Footer';

// Import i18n
import '@/i18n';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

function AppContent() {
  const { i18n } = useTranslation();
  
  // Initialize Lenis smooth scrolling
  useLenis();

  useEffect(() => {
    // Set initial direction based on language
    const isRTL = i18n.language === 'ar';
    document.documentElement.dir = isRTL ? 'rtl' : 'ltr';
    document.documentElement.lang = i18n.language;

    // Refresh ScrollTrigger on language change
    const handleLanguageChange = () => {
      ScrollTrigger.refresh();
    };

    i18n.on('languageChanged', handleLanguageChange);

    return () => {
      i18n.off('languageChanged', handleLanguageChange);
    };
  }, [i18n]);

  // Page load animation
  useEffect(() => {
    // Ensure page starts at top
    window.scrollTo(0, 0);
    
    // Initial page fade in
    gsap.fromTo('main', 
      { opacity: 0 },
      { opacity: 1, duration: 0.5, ease: 'power2.out' }
    );
  }, []);

  return (
    <div className="relative min-h-screen" style={{ backgroundColor: 'var(--bg-primary)' }}>
      <Navigation />
      <main className="relative">
        <Hero />
        <About />
        <Services />
        <Projects />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

export default App;
