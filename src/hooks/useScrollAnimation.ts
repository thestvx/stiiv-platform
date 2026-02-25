import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function useRevealAnimation<T extends HTMLElement>(
  delay: number = 0,
  direction: 'up' | 'down' | 'left' | 'right' = 'up'
) {
  const elementRef = useRef<T>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const getInitialPosition = () => {
      switch (direction) {
        case 'up': return { y: 60, x: 0 };
        case 'down': return { y: -60, x: 0 };
        case 'left': return { y: 0, x: 60 };
        case 'right': return { y: 0, x: -60 };
        default: return { y: 60, x: 0 };
      }
    };

    const initial = getInitialPosition();

    const ctx = gsap.context(() => {
      gsap.set(element, { opacity: 0, ...initial });
      
      ScrollTrigger.create({
        trigger: element,
        start: 'top 85%',
        once: true,
        onEnter: () => {
          gsap.to(element, {
            opacity: 1,
            y: 0,
            x: 0,
            duration: 0.8,
            delay,
            ease: 'power3.out',
          });
        },
      });
    }, element);

    return () => ctx.revert();
  }, [delay, direction]);

  return elementRef;
}

export function useStaggerReveal<T extends HTMLElement>(
  childSelector: string,
  staggerDelay: number = 0.1
) {
  const containerRef = useRef<T>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const children = container.querySelectorAll(childSelector);
    if (children.length === 0) return;

    const ctx = gsap.context(() => {
      gsap.set(children, { opacity: 0, y: 40 });
      
      ScrollTrigger.create({
        trigger: container,
        start: 'top 80%',
        once: true,
        onEnter: () => {
          gsap.to(children, {
            opacity: 1,
            y: 0,
            duration: 0.6,
            stagger: staggerDelay,
            ease: 'power3.out',
          });
        },
      });
    }, container);

    return () => ctx.revert();
  }, [childSelector, staggerDelay]);

  return containerRef;
}
