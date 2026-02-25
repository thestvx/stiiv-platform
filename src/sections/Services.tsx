import { useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  Palette, 
  Layout, 
  Monitor, 
  Sparkles, 
  Share2, 
  Eye 
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function Services() {
  const { t } = useTranslation();
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header animation
      if (headerRef.current) {
        gsap.set(headerRef.current.children, { opacity: 0, y: 30 });
        
        ScrollTrigger.create({
          trigger: headerRef.current,
          start: 'top 85%',
          once: true,
          onEnter: () => {
            gsap.to(headerRef.current?.children || [], {
              opacity: 1,
              y: 0,
              duration: 0.6,
              stagger: 0.1,
              ease: 'power3.out',
            });
          },
        });
      }

      // Cards stagger animation
      if (gridRef.current) {
        const cards = gridRef.current.querySelectorAll('.service-card');
        gsap.set(cards, { opacity: 0, y: 40 });
        
        ScrollTrigger.create({
          trigger: gridRef.current,
          start: 'top 80%',
          once: true,
          onEnter: () => {
            gsap.to(cards, {
              opacity: 1,
              y: 0,
              duration: 0.6,
              stagger: 0.1,
              ease: 'power3.out',
            });
          },
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const services = [
    { key: 'brandIdentity', icon: Palette },
    { key: 'visualDesign', icon: Layout },
    { key: 'digitalExperiences', icon: Monitor },
    { key: 'motionDesign', icon: Sparkles },
    { key: 'socialMedia', icon: Share2 },
    { key: 'artDirection', icon: Eye },
  ];

  return (
    <section 
      ref={sectionRef}
      id="services"
      className="section-padding relative overflow-hidden"
      style={{ backgroundColor: 'var(--bg-primary)' }}
    >
      <div className="container-custom">
        {/* Header */}
        <div ref={headerRef} className="text-center max-w-2xl mx-auto mb-16 lg:mb-20">
          <span 
            className="inline-block text-sm font-medium tracking-widest uppercase mb-6"
            style={{ color: 'var(--accent)' }}
          >
            {t('services.label')}
          </span>
          <h2 
            className="text-3xl sm:text-4xl lg:text-5xl font-bold"
            style={{ color: 'var(--text-primary)' }}
          >
            {t('services.heading')}
          </h2>
        </div>

        {/* Services Grid */}
        <div 
          ref={gridRef}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.key}
                className="service-card group relative p-8 rounded-2xl transition-all duration-500 ease-premium hover:-translate-y-3"
                style={{ 
                  backgroundColor: 'var(--bg-secondary)',
                  border: '1px solid var(--border)',
                }}
              >
                {/* Hover Border Effect */}
                <div 
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{ 
                    border: '1px solid var(--accent)',
                  }}
                />

                {/* Icon */}
                <div 
                  className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 transition-all duration-500 group-hover:scale-110"
                  style={{ 
                    backgroundColor: 'var(--bg-tertiary)',
                  }}
                >
                  <Icon 
                    className="w-7 h-7 transition-colors duration-500"
                    style={{ color: 'var(--accent)' }}
                  />
                </div>

                {/* Content */}
                <h3 
                  className="text-xl font-semibold mb-4 transition-colors duration-300"
                  style={{ color: 'var(--text-primary)' }}
                >
                  {t(`services.items.${service.key}.title`)}
                </h3>
                <p 
                  className="text-sm leading-relaxed"
                  style={{ color: 'var(--text-secondary)' }}
                >
                  {t(`services.items.${service.key}.description`)}
                </p>

                {/* Hover Glow */}
                <div 
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none -z-10"
                  style={{
                    boxShadow: '0 20px 40px rgba(201, 169, 98, 0.1)',
                  }}
                />
              </div>
            );
          })}
        </div>
      </div>

      {/* Background Decoration */}
      <div 
        className="absolute bottom-0 left-0 w-1/2 h-1/2 opacity-5 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at bottom left, var(--accent), transparent 70%)',
        }}
      />
    </section>
  );
}
