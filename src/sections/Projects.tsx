import { useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowUpRight, ArrowLeft } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

// Project images - using generated images
const projectImages = [
  'https://images.unsplash.com/photo-1634942537034-2531766767d1?w=800&q=80',
  'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
  'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800&q=80',
  'https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800&q=80',
];

export default function Projects() {
  const { t, i18n } = useTranslation();
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const isRTL = i18n.language === 'ar';

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
        const cards = gridRef.current.querySelectorAll('.project-card');
        gsap.set(cards, { opacity: 0, y: 80 });
        
        ScrollTrigger.create({
          trigger: gridRef.current,
          start: 'top 75%',
          once: true,
          onEnter: () => {
            gsap.to(cards, {
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

  const projects = [
    { key: 'lumina', image: projectImages[0] },
    { key: 'nexus', image: projectImages[1] },
    { key: 'artisan', image: projectImages[2] },
    { key: 'techflow', image: projectImages[3] },
  ];

  return (
    <section 
      ref={sectionRef}
      id="work"
      className="section-padding relative overflow-hidden"
      style={{ backgroundColor: 'var(--bg-primary)' }}
    >
      <div className="container-custom">
        {/* Header */}
        <div 
          ref={headerRef}
          className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-16 lg:mb-20"
        >
          <div>
            <span 
              className="inline-block text-sm font-medium tracking-widest uppercase mb-6"
              style={{ color: 'var(--accent)' }}
            >
              {t('projects.label')}
            </span>
            <h2 
              className="text-3xl sm:text-4xl lg:text-5xl font-bold"
              style={{ color: 'var(--text-primary)' }}
            >
              {t('projects.heading')}
            </h2>
          </div>
          <button 
            className="btn-outline inline-flex items-center gap-2 self-start sm:self-auto"
          >
            {t('projects.cta')}
            {isRTL ? <ArrowLeft className="w-4 h-4" /> : <ArrowUpRight className="w-4 h-4" />}
          </button>
        </div>

        {/* Projects Grid */}
        <div 
          ref={gridRef}
          className="grid md:grid-cols-2 gap-6 lg:gap-8"
        >
          {projects.map((project) => (
            <div
              key={project.key}
              className="project-card group relative aspect-[16/10] rounded-2xl overflow-hidden cursor-pointer"
            >
              {/* Image */}
              <div className="absolute inset-0 img-zoom">
                <img 
                  src={project.image}
                  alt={t(`projects.items.${project.key}.title`)}
                  className="w-full h-full object-cover transition-all duration-700 ease-premium group-hover:scale-110 group-hover:brightness-50"
                />
              </div>

              {/* Overlay Gradient */}
              <div 
                className="absolute inset-0 transition-opacity duration-500"
                style={{
                  background: 'linear-gradient(to top, rgba(0,0,0,0.8) 0%, transparent 60%)',
                }}
              />

              {/* Content */}
              <div className="absolute inset-0 p-6 lg:p-8 flex flex-col justify-end">
                {/* Category & Year */}
                <div 
                  className="flex items-center gap-3 mb-3 transition-transform duration-500 ease-premium group-hover:translate-y-0 translate-y-2 opacity-80 group-hover:opacity-100"
                >
                  <span 
                    className="text-xs font-medium px-3 py-1 rounded-full"
                    style={{ 
                      backgroundColor: 'var(--accent)',
                      color: 'var(--bg-primary)',
                    }}
                  >
                    {t(`projects.items.${project.key}.category`)}
                  </span>
                  <span className="text-xs text-white/60">
                    {t(`projects.items.${project.key}.year`)}
                  </span>
                </div>

                {/* Title */}
                <h3 
                  className="text-xl lg:text-2xl font-bold text-white transition-transform duration-500 ease-premium group-hover:translate-y-0"
                >
                  {t(`projects.items.${project.key}.title`)}
                </h3>

                {/* View Project Link */}
                <div 
                  className="flex items-center gap-2 mt-4 opacity-0 translate-y-4 transition-all duration-500 ease-premium group-hover:opacity-100 group-hover:translate-y-0"
                >
                  <span 
                    className="text-sm font-medium"
                    style={{ color: 'var(--accent)' }}
                  >
                    View Project
                  </span>
                  {isRTL ? (
                    <ArrowLeft className="w-4 h-4" style={{ color: 'var(--accent)' }} />
                  ) : (
                    <ArrowUpRight className="w-4 h-4" style={{ color: 'var(--accent)' }} />
                  )}
                </div>
              </div>

              {/* Border on Hover */}
              <div 
                className="absolute inset-0 rounded-2xl border-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{ borderColor: 'var(--accent)' }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
