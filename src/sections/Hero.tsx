import { useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import gsap from 'gsap';
import { ArrowDown } from 'lucide-react';

export default function Hero() {
  const { t, i18n } = useTranslation();
  const heroRef = useRef<HTMLElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subheadlineRef = useRef<HTMLParagraphElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLButtonElement>(null);
  const isRTL = i18n.language === 'ar';

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      // Headline words animation with mask reveal
      const headlineWords = headlineRef.current?.querySelectorAll('.word');
      if (headlineWords) {
        gsap.set(headlineWords, { 
          clipPath: 'inset(100% 0 0 0)',
          y: 30 
        });
        
        tl.to(headlineWords, {
          clipPath: 'inset(0% 0 0 0)',
          y: 0,
          duration: 1,
          stagger: 0.15,
          delay: 0.3,
        });
      }

      // Subheadline fade in
      if (subheadlineRef.current) {
        gsap.set(subheadlineRef.current, { opacity: 0, y: 20 });
        tl.to(subheadlineRef.current, {
          opacity: 1,
          y: 0,
          duration: 0.8,
        }, '-=0.4');
      }

      // Description fade in
      if (descRef.current) {
        gsap.set(descRef.current, { opacity: 0, y: 20 });
        tl.to(descRef.current, {
          opacity: 1,
          y: 0,
          duration: 0.8,
        }, '-=0.5');
      }

      // CTA button scale + fade
      if (ctaRef.current) {
        gsap.set(ctaRef.current, { opacity: 0, scale: 0.9 });
        tl.to(ctaRef.current, {
          opacity: 1,
          scale: 1,
          duration: 0.6,
          ease: 'back.out(1.7)',
        }, '-=0.4');
      }

      // Scroll indicator animation
      gsap.to('.scroll-indicator', {
        y: 10,
        duration: 1.5,
        repeat: -1,
        yoyo: true,
        ease: 'power1.inOut',
      });

    }, heroRef);

    return () => ctx.revert();
  }, []);

  const scrollToWork = () => {
    const workSection = document.getElementById('work');
    if (workSection) {
      workSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ backgroundColor: 'var(--bg-primary)' }}
    >
      {/* Background Gradient */}
      <div className="absolute inset-0 pointer-events-none">
        <div 
          className="absolute inset-0 opacity-30 dark:opacity-20"
          style={{
            background: isRTL 
              ? 'radial-gradient(ellipse at 30% 50%, var(--accent) 0%, transparent 50%)'
              : 'radial-gradient(ellipse at 70% 50%, var(--accent) 0%, transparent 50%)',
          }}
        />
        <div 
          className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full opacity-10 dark:opacity-10"
          style={{ 
            background: 'var(--accent)',
            filter: 'blur(100px)',
          }}
        />
      </div>

      {/* Content */}
      <div className="container-custom relative z-10 pt-24">
        <div className="max-w-5xl mx-auto text-center">
          {/* Headline */}
          <h1 
            ref={headlineRef}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-extrabold tracking-tight mb-6"
            style={{ color: 'var(--text-primary)' }}
          >
            <span className="word inline-block">{t('hero.headline')}</span>{' '}
            <span 
              className="word inline-block font-display italic"
              style={{ color: 'var(--accent)' }}
            >
              {t('hero.headlineAccent')}
            </span>
          </h1>

          {/* Subheadline */}
          <p 
            ref={subheadlineRef}
            className="text-2xl sm:text-3xl md:text-4xl font-light mb-8"
            style={{ color: 'var(--text-secondary)' }}
          >
            {t('hero.subheadline')}
          </p>

          {/* Description */}
          <p 
            ref={descRef}
            className="text-base sm:text-lg max-w-2xl mx-auto mb-12 leading-relaxed"
            style={{ color: 'var(--text-muted)' }}
          >
            {t('hero.description')}
          </p>

          {/* CTA Button */}
          <button
            ref={ctaRef}
            onClick={scrollToWork}
            className="btn-primary inline-flex items-center gap-3 text-base sm:text-lg"
          >
            {t('hero.cta')}
            <ArrowDown className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 scroll-indicator">
        <div 
          className="w-6 h-10 rounded-full border-2 flex items-start justify-center p-2"
          style={{ borderColor: 'var(--border)' }}
        >
          <div 
            className="w-1.5 h-1.5 rounded-full"
            style={{ backgroundColor: 'var(--accent)' }}
          />
        </div>
      </div>

      {/* Decorative Elements */}
      <div 
        className="absolute top-1/3 left-10 w-px h-32 hidden lg:block"
        style={{ 
          background: 'linear-gradient(to bottom, transparent, var(--accent), transparent)',
          opacity: 0.5 
        }}
      />
      <div 
        className="absolute bottom-1/3 right-10 w-px h-32 hidden lg:block"
        style={{ 
          background: 'linear-gradient(to bottom, transparent, var(--accent), transparent)',
          opacity: 0.5 
        }}
      />
    </section>
  );
}
