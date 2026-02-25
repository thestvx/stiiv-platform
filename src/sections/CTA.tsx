import { useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, ArrowLeft } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function CTA() {
  const { t, i18n } = useTranslation();
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const isRTL = i18n.language === 'ar';

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (contentRef.current) {
        const elements = contentRef.current.children;
        gsap.set(elements, { opacity: 0, y: 40 });
        
        ScrollTrigger.create({
          trigger: contentRef.current,
          start: 'top 80%',
          once: true,
          onEnter: () => {
            gsap.to(elements, {
              opacity: 1,
              y: 0,
              duration: 0.8,
              stagger: 0.15,
              ease: 'power3.out',
            });
          },
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={sectionRef}
      id="contact"
      className="py-32 lg:py-40 relative overflow-hidden"
      style={{ backgroundColor: 'var(--bg-primary)' }}
    >
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full opacity-10"
          style={{
            background: 'radial-gradient(circle, var(--accent) 0%, transparent 70%)',
            filter: 'blur(100px)',
          }}
        />
      </div>

      <div className="container-custom relative z-10">
        <div 
          ref={contentRef}
          className="max-w-4xl mx-auto text-center"
        >
          {/* Heading */}
          <h2 
            className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-6"
            style={{ color: 'var(--text-primary)' }}
          >
            {t('cta.heading')}
          </h2>

          {/* Subtext */}
          <p 
            className="text-lg sm:text-xl mb-12"
            style={{ color: 'var(--text-secondary)' }}
          >
            {t('cta.subtext')}
          </p>

          {/* CTA Button */}
          <button 
            className="btn-primary inline-flex items-center gap-3 text-lg px-10 py-5 relative overflow-hidden group"
          >
            {/* Glow Effect */}
            <span 
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              style={{
                boxShadow: '0 0 40px rgba(201, 169, 98, 0.4)',
              }}
            />
            <span className="relative z-10">{t('cta.button')}</span>
            <span className="relative z-10">
              {isRTL ? (
                <ArrowLeft className="w-5 h-5 transition-transform duration-300 group-hover:-translate-x-1" />
              ) : (
                <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
              )}
            </span>
          </button>
        </div>
      </div>

      {/* Decorative Lines */}
      <div 
        className="absolute top-1/2 left-0 w-32 h-px hidden lg:block"
        style={{ 
          background: 'linear-gradient(to right, transparent, var(--accent))',
          opacity: 0.3 
        }}
      />
      <div 
        className="absolute top-1/2 right-0 w-32 h-px hidden lg:block"
        style={{ 
          background: 'linear-gradient(to left, transparent, var(--accent))',
          opacity: 0.3 
        }}
      />
    </section>
  );
}
