'use client';

import { useState, useRef, useEffect } from 'react';

export default function Clients() {
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [currentTranslate, setCurrentTranslate] = useState(0);
  const [prevTranslate, setPrevTranslate] = useState(0);
  const sliderRef = useRef<HTMLDivElement | null>(null);

  const originalSlides = [
    { src: '/img/clients/Chip_Mong_Group.png', alt: 'Chip Mong Group' },
    { src: '/img/clients/VGS.png', alt: 'VGS' },
    { src: '/img/clients/itouchu.png', alt: 'Itouchu' },
    { src: '/img/clients/client-4.png', alt: 'Client 4' },
    { src: '/img/clients/client-5.png', alt: 'Client 5' },
    { src: '/img/clients/client-6.png', alt: 'Client 6' },
    { src: '/img/clients/client-7.png', alt: 'Client 7' },
    { src: '/img/clients/client-8.png', alt: 'Client 8' },
    { src: '/img/clients/client-1.png', alt: 'Client 9' },
    { src: '/img/clients/client-2.png', alt: 'Client 10' },
    { src: '/img/clients/client-3.png', alt: 'Client 11' },
  ];

  // Add duplicates for infinite scrolling effect
  const slides = [...originalSlides, ...originalSlides, ...originalSlides];
  const totalSlides = slides.length;

  useEffect(() => {
    const handleResize = () => {
      setCurrentTranslate(-(originalSlides.length * getSlideWidth())); // Center on original slides
      setPrevTranslate(-(originalSlides.length * getSlideWidth()));
    };
    window.addEventListener('resize', handleResize);
    handleResize(); // Initial centering
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const getSlideWidth = () => sliderRef.current?.querySelector('.client-slide')?.clientWidth || 0;

  const startDrag = (event: React.MouseEvent | React.TouchEvent) => {
    event.preventDefault();
    setIsDragging(true);
    const clientX = event.type === 'touchstart' ? (event as React.TouchEvent).touches[0].clientX : (event as React.MouseEvent).clientX;
    setStartX(clientX);
    setPrevTranslate(currentTranslate);
  };

  const dragging = (event: React.MouseEvent | React.TouchEvent) => {
    if (!isDragging) return;
    event.preventDefault();
    const clientX = event.type === 'touchmove' ? (event as React.TouchEvent).touches[0].clientX : (event as React.MouseEvent).clientX;
    const diff = clientX - startX;
    setCurrentTranslate(prevTranslate + diff);
  };

  const endDrag = () => {
    if (!isDragging) return;
    setIsDragging(false);

    const slideWidth = getSlideWidth();
    const maxTranslate = -(slideWidth * (totalSlides - 1));

    const nearestSlide = Math.round(currentTranslate / slideWidth) * slideWidth;
    const finalTranslate = Math.max(Math.min(nearestSlide, 0), maxTranslate);

    setCurrentTranslate(finalTranslate);
    setPrevTranslate(finalTranslate);

    // Adjust position for infinite loop effect
    if (finalTranslate === 0) {
      setTimeout(() => {
        setCurrentTranslate(-(originalSlides.length * slideWidth));
        setPrevTranslate(-(originalSlides.length * slideWidth));
      }, 300);
    } else if (finalTranslate === maxTranslate) {
      setTimeout(() => {
        setCurrentTranslate(-(originalSlides.length - 1) * slideWidth);
        setPrevTranslate(-(originalSlides.length - 1) * slideWidth);
      }, 300);
    }
  };

  return (
    <section id="clients" className="clients-section">
      <div className="container">
        <div
          className="clients-wrapper"
          ref={sliderRef}
          style={{
            transform: `translateX(${currentTranslate}px)`,
            transition: isDragging ? 'none' : 'transform 0.3s ease',
          }}
          onMouseDown={(e) => startDrag(e as React.MouseEvent)}
          onMouseMove={(e) => isDragging && dragging(e as React.MouseEvent)}
          onMouseUp={endDrag}
          onMouseLeave={endDrag}
          onTouchStart={(e) => startDrag(e as React.TouchEvent)}
          onTouchMove={(e) => isDragging && dragging(e as React.TouchEvent)}
          onTouchEnd={endDrag}
        >
          {slides.map((slide, index) => (
            <div key={index} className="client-slide">
              <img src={slide.src} alt={slide.alt} className="img-fluid" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
