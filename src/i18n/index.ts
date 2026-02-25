import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  en: {
    translation: {
      // Navigation
      nav: {
        work: 'Work',
        about: 'About',
        services: 'Services',
        contact: 'Contact',
      },
      
      // Hero
      hero: {
        headline: 'Crafting Digital',
        headlineAccent: 'Experiences',
        subheadline: 'That Define Brands',
        description: 'STVX is a premium creative studio specializing in brand identity, visual design, and digital experiences that leave lasting impressions.',
        cta: 'Explore My Work',
      },
      
      // About
      about: {
        label: 'About STVX',
        heading: 'Where Creativity Meets Strategy',
        body: 'With over 8 years of experience in the creative industry, I\'ve helped businesses transform their visual identity and connect with their audiences on a deeper level. Every project is an opportunity to push boundaries and create something extraordinary.',
        stats: {
          projects: 'Projects Completed',
          experience: 'Years Experience',
          clients: 'Happy Clients',
        },
      },
      
      // Services
      services: {
        label: 'Services',
        heading: 'What I Do Best',
        items: {
          brandIdentity: {
            title: 'Brand Identity',
            description: 'Complete brand systems that tell your story and resonate with your audience. From logo design to brand guidelines.',
          },
          visualDesign: {
            title: 'Visual Design',
            description: 'Stunning visuals that capture attention and communicate your message with clarity and impact.',
          },
          digitalExperiences: {
            title: 'Digital Experiences',
            description: 'Websites and digital products designed with user experience at the forefront, blending beauty with functionality.',
          },
          motionDesign: {
            title: 'Motion Design',
            description: 'Dynamic animations and motion graphics that bring your brand to life and engage your audience.',
          },
          socialMedia: {
            title: 'Social Media',
            description: 'Strategic social media designs that build community and drive engagement across all platforms.',
          },
          artDirection: {
            title: 'Art Direction',
            description: 'Creative vision and direction that ensures consistency and excellence across all touchpoints.',
          },
        },
      },
      
      // Projects
      projects: {
        label: 'Selected Work',
        heading: 'Projects That Speak',
        cta: 'View All Projects',
        items: {
          lumina: {
            title: 'Lumina Brand Identity',
            category: 'Brand Identity',
            year: '2024',
          },
          nexus: {
            title: 'Nexus Digital Platform',
            category: 'Digital Experience',
            year: '2024',
          },
          artisan: {
            title: 'Artisan Coffee Rebrand',
            category: 'Visual Design',
            year: '2023',
          },
          techflow: {
            title: 'TechFlow Motion Campaign',
            category: 'Motion Design',
            year: '2023',
          },
        },
      },
      
      // CTA
      cta: {
        heading: 'Ready to Create Something Amazing?',
        subtext: 'Let\'s bring your vision to life',
        button: 'Start a Project',
      },
      
      // Footer
      footer: {
        tagline: 'Crafting digital excellence',
        quickLinks: 'Quick Links',
        services: 'Services',
        connect: 'Connect',
        links: {
          home: 'Home',
          work: 'Work',
          about: 'About',
          contact: 'Contact',
        },
        serviceLinks: {
          brandIdentity: 'Brand Identity',
          visualDesign: 'Visual Design',
          motion: 'Motion',
          digital: 'Digital',
        },
        copyright: '© 2024 STVX. All rights reserved.',
      },
      
      // Language Toggle
      language: {
        en: 'EN',
        ar: 'AR',
      },
      
      // Theme Toggle
      theme: {
        dark: 'Dark',
        light: 'Light',
      },
    },
  },
  ar: {
    translation: {
      // Navigation
      nav: {
        work: 'الأعمال',
        about: 'عني',
        services: 'الخدمات',
        contact: 'تواصل',
      },
      
      // Hero
      hero: {
        headline: 'صناعة تجارب',
        headlineAccent: 'رقمية',
        subheadline: 'تُعرف العلامات التجارية',
        description: 'ستيفكس استوديو إبداعي متميز متخصص في الهوية البصرية والتصميم المرئي والتجارب الرقمية التي تترك انطباعات دائمة.',
        cta: 'استكشف أعمالي',
      },
      
      // About
      about: {
        label: 'عن ستيفكس',
        heading: 'حيث تلتقي الإبداع بالاستراتيجية',
        body: 'مع أكثر من 8 سنوات من الخبرة في الصناعة الإبداعية، ساعدت الشركات في تحويل هويتها البصرية والتواصل مع جمهورها بشكل أعمق. كل مشروع هو فرصة لدفع الحدود وخلق شيء استثنائي.',
        stats: {
          projects: 'مشروع منجز',
          experience: 'سنوات خبرة',
          clients: 'عميل سعيد',
        },
      },
      
      // Services
      services: {
        label: 'الخدمات',
        heading: 'ما أقوم به بتميز',
        items: {
          brandIdentity: {
            title: 'الهوية البصرية',
            description: 'أنظمة علامة تجارية كاملة تروي قصتك وتتردد صداها مع جمهورك. من تصميم الشعارات إلى إرشادات العلامة.',
          },
          visualDesign: {
            title: 'التصميم المرئي',
            description: 'مرئيات مذهلة تلفت الانتباه وتتواصل مع رسالتك بوضوح وتأثير.',
          },
          digitalExperiences: {
            title: 'التجارب الرقمية',
            description: 'مواقع إلكترونية ومنتجات رقمية مصممة مع وضع تجربة المستخدم في المقام الأول، مزج الجمال بالوظيفة.',
          },
          motionDesign: {
            title: 'تصميم الحركة',
            description: 'رسوم متحركة ديناميكية ورسوم بيانية تنقل حركة تُحيي علامتك التجارية وتشجع جمهورك.',
          },
          socialMedia: {
            title: 'وسائل التواصل',
            description: 'تصاميم استراتيجية لوسائل التواصل الاجتماعي تبني المجتمع وتدفع المشاركة عبر جميع المنصات.',
          },
          artDirection: {
            title: 'الإشراف الفني',
            description: 'رؤية إبداعية وإشراف يضمان الاتساق والتميز عبر جميع نقاط التواصل.',
          },
        },
      },
      
      // Projects
      projects: {
        label: 'أعمال مختارة',
        heading: 'مشاريع تتحدث',
        cta: 'عرض جميع المشاريع',
        items: {
          lumina: {
            title: 'هوية لومينا البصرية',
            category: 'الهوية البصرية',
            year: '2024',
          },
          nexus: {
            title: 'منصة نيكسوس الرقمية',
            category: 'التجربة الرقمية',
            year: '2024',
          },
          artisan: {
            title: 'إعادة علامة أرتيزان',
            category: 'التصميم المرئي',
            year: '2023',
          },
          techflow: {
            title: 'حملة تيك فلو المتحركة',
            category: 'تصميم الحركة',
            year: '2023',
          },
        },
      },
      
      // CTA
      cta: {
        heading: 'مستعد لخلق شيء مذهل؟',
        subtext: 'لنُحيِ رؤيتك',
        button: 'ابدأ مشروعاً',
      },
      
      // Footer
      footer: {
        tagline: 'صناعة التميز الرقمي',
        quickLinks: 'روابط سريعة',
        services: 'الخدمات',
        connect: 'تواصل',
        links: {
          home: 'الرئيسية',
          work: 'الأعمال',
          about: 'عني',
          contact: 'تواصل',
        },
        serviceLinks: {
          brandIdentity: 'الهوية البصرية',
          visualDesign: 'التصميم المرئي',
          motion: 'الحركة',
          digital: 'رقمي',
        },
        copyright: '© 2024 ستيفكس. جميع الحقوق محفوظة.',
      },
      
      // Language Toggle
      language: {
        en: 'EN',
        ar: 'AR',
      },
      
      // Theme Toggle
      theme: {
        dark: 'داكن',
        light: 'فاتح',
      },
    },
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage'],
    },
  });

export default i18n;
