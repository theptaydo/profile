import { useEffect } from 'react';

export default function useScrollEffect(threshold = 0.2) {
  useEffect(() => {
    const elements = document.querySelectorAll('.animations');

    if ('IntersectionObserver' in window) {
      const observer = new IntersectionObserver(
        (entries, observer) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              if (entry.target.classList.contains('left')) {
                entry.target.classList.add('left-slide');
              } else if (entry.target.classList.contains('right')) {
                entry.target.classList.add('right-slide');
              } else {
                entry.target.classList.add('bottom-slide');
              }
              observer.unobserve(entry.target);
            }
          });
        },
        {
          root: null,
          threshold,
        }
      );

      elements.forEach((element) => observer.observe(element));

      return () => observer.disconnect();
    } else {
      elements.forEach((element) => {
        if (element.classList.contains('left')) {
          element.classList.add('left-slide');
        } else if (element.classList.contains('right')) {
          element.classList.add('right-slide');
        } else {
          element.classList.add('bottom-slide');
        }
      });
    }
  }, [threshold]);
}
