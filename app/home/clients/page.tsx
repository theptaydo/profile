'use client';

import { useState, useRef, useEffect } from 'react';

export default function Clients() {
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [currentTranslate, setCurrentTranslate] = useState(0);
  const [prevTranslate, setPrevTranslate] = useState(0);
  const sliderRef = useRef<HTMLDivElement | null>(null);

  const slides = [
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

  useEffect(() => {
    const handleResize = () => {
      setCurrentTranslate(0);
      setPrevTranslate(0);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

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

    if (!sliderRef.current) return;

    const slideWidth = sliderRef.current.querySelector('.client-slide')?.clientWidth || 0;
    const totalSlides = slides.length;
    const maxTranslate = -(slideWidth * (totalSlides - 1));

    const rawIndex = currentTranslate / slideWidth;
    const nearestSlides = Math.round(rawIndex);
    const targetSlides = nearestSlides % 3 === 0 ? nearestSlides : Math.round(nearestSlides / 3) * 3;
    const nearestTranslate = targetSlides * slideWidth;

    const finalTranslate = Math.max(Math.min(nearestTranslate, 0), maxTranslate);

    setCurrentTranslate(finalTranslate);
    setPrevTranslate(finalTranslate);
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
