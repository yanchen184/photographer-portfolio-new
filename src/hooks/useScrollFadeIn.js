// Custom hook for scroll fade-in animation
import { useEffect, useRef, useState } from 'react';

export const useScrollFadeIn = (options = {}) => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        // Reset when element leaves viewport to allow re-animation
        // Uncomment the line below if you want repeat animation
        // observer.unobserve(entry.target);
      } else {
        // Reset visibility when element leaves viewport
        setIsVisible(false);
      }
    }, {
      threshold: 0.1, // Trigger when 10% of element is visible
      ...options
    });

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [options]);

  return [ref, isVisible];
};
