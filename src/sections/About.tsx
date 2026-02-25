import { useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const { t, i18n } = useTranslation();
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const visualRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const isRTL = i18n.language === 'ar';

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Content slide in animation
      if (contentRef.current) {
        gsap.set(contentRef.current, { 
          opacity: 0, 
          x: isRTL ? 60 : -60 
        });
        
        ScrollTrigger.create({
          trigger: contentRef.current,
          start: 'top 80%',
          once: true,
          onEnter: () => {
            gsap.to(contentRef.current, {
              opacity: 1,
              x: 0,
              duration: 0.8,
              ease: 'power3.out',
            });
          },
        });
      }

      // Visual slide in animation
      if (visualRef.current) {
        gsap.set(visualRef.current, { 
          opacity: 0, 
          x: isRTL ? -60 : 60 
        });
        
        ScrollTrigger.create({
          trigger: visualRef.current,
          start: 'top 80%',
          once: true,
          onEnter: () => {
            gsap.to(visualRef.current, {
              opacity: 1,
              x: 0,
              duration: 0.8,
              delay: 0.2,
              ease: 'power3.out',
            });
          },
        });
      }

      // Stats counter animation
      const statNumbers = statsRef.current?.querySelectorAll('.stat-number');
      if (statNumbers) {
        statNumbers.forEach((stat) => {
          const target = parseInt(stat.getAttribute('data-target') || '0');
          
          ScrollTrigger.create({
            trigger: stat,
            start: 'top 85%',
            once: true,
            onEnter: () => {
              gsap.fromTo(stat, 
                { innerText: 0 },
                {
                  innerText: target,
                  duration: 2,
                  ease: 'power2.out',
                  snap: { innerText: 1 },
                  onUpdate: function() {
                    const current = Math.round(Number(gsap.getProperty(stat, 'innerText')));
                    stat.textContent = current + '+';
                  },
                }
              );
            },
          });
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, [isRTL]);

  const stats = [
    { value: 150, label: t('about.stats.projects') },
    { value: 8, label: t('about.stats.experience') },
    { value: 50, label: t('about.stats.clients') },
  ];

  return (
    <section 
      ref={sectionRef}
      id="about"
      className="section-padding relative overflow-hidden"
      style={{ backgroundColor: 'var(--bg-primary)' }}
    >
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Content */}
          <div ref={contentRef} className={isRTL ? 'lg:order-2' : ''}>
            {/* Label */}
            <span 
              className="inline-block text-sm font-medium tracking-widest uppercase mb-6"
              style={{ color: 'var(--accent)' }}
            >
              {t('about.label')}
            </span>

            {/* Heading */}
            <h2 
              className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-8"
              style={{ color: 'var(--text-primary)' }}
            >
              {t('about.heading')}
            </h2>

            {/* Body */}
            <p 
              className="text-base sm:text-lg leading-relaxed mb-12"
              style={{ color: 'var(--text-secondary)' }}
            >
              {t('about.body')}
            </p>

            {/* Stats */}
            <div 
              ref={statsRef}
              className="grid grid-cols-3 gap-6"
            >
              {stats.map((stat, index) => (
                <div key={index} className="text-center lg:text-left">
                  <span 
                    className="stat-number block text-3xl sm:text-4xl lg:text-5xl font-bold mb-2"
                    style={{ color: 'var(--accent)' }}
                    data-target={stat.value}
                  >
                    0+
                  </span>
                  <span 
                    className="text-sm sm:text-base"
                    style={{ color: 'var(--text-muted)' }}
                  >
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Visual */}
          <div 
            ref={visualRef} 
            className={`relative ${isRTL ? 'lg:order-1' : ''}`}
          >
            <div className="relative aspect-square max-w-lg mx-auto">
              {/* Main Image Container */}
              <div 
                className="absolute inset-0 rounded-3xl overflow-hidden"
                style={{ backgroundColor: 'var(--bg-secondary)' }}
              >
                <img 
                  src="/stvx-logo.png" 
                  alt="STVX"
                  className="w-full h-full object-contain p-8"
                />
              </div>

              {/* Decorative Elements */}
              <div 
                className="absolute -top-6 -right-6 w-32 h-32 rounded-2xl -z-10"
                style={{ 
                  backgroundColor: 'var(--accent)',
                  opacity: 0.2 
                }}
              />
              <div 
                className="absolute -bottom-6 -left-6 w-24 h-24 rounded-full -z-10"
                style={{ 
                  backgroundColor: 'var(--accent)',
                  opacity: 0.15 
                }}
              />

              {/* Floating Badge */}
              <div 
                className="absolute -bottom-4 right-8 px-6 py-3 rounded-xl shadow-soft-lg"
                style={{ backgroundColor: 'var(--bg-secondary)' }}
              >
                <span 
                  className="text-sm font-medium"
                  style={{ color: 'var(--accent)' }}
                >
                  Premium Creative Studio
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Background Decoration */}
      <div 
        className="absolute top-0 right-0 w-1/3 h-full opacity-5 pointer-events-none"
        style={{
          background: isRTL 
            ? 'linear-gradient(to left, var(--accent), transparent)'
            : 'linear-gradient(to right, var(--accent), transparent)',
        }}
      />
    </section>
  );
}
