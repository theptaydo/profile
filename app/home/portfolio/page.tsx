'use client';

import Head from 'next/head';
import { profile } from 'console';
import { useEffect } from 'react';
import useTrans from '../../pages/useTrans';

export default function Portfolio() {
  const trans = useTrans();

  useEffect(() => {
    // Select all elements you want to animate
    const elements = document.querySelectorAll('.portfolio .h-entry');

    // Check if the Intersection Observer API is available
    if ('IntersectionObserver' in window) {
      // Create a new Intersection Observer
      const observer = new IntersectionObserver(
        (entries, observer) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              // Add the 'visible' class to trigger the animation
              // entry.target.classList.add('visible');

              // Determine the position of the element relative to the viewport
              const rect = entry.target.getBoundingClientRect();
              if (rect.left < window.innerWidth / 2) {
                // If the element is on the left half of the viewport
                entry.target.classList.add('left-slide');
              } else {
                // If the element is on the right half of the viewport
                entry.target.classList.add('right-slide');
              }

              // Stop observing the element once it has been animated
              observer.unobserve(entry.target);
            }
          });
        },
        {
          root: null, // Use the viewport as the root
          threshold: 0.2, // Trigger when 20% of the element is visible
        }
      );

      // Observe each element
      elements.forEach((element) => observer.observe(element));

      // Cleanup the observer on component unmount
      return () => observer.disconnect();
    } else {
      // Fallback for older browsers: make all elements visible
      elements.forEach((element) => {
        // element.classList.add('visible');

        // Determine the position of the element relative to the viewport
        const rect = element.getBoundingClientRect();
        if (rect.left < window.innerWidth / 2) {
          // If the element is on the left half of the viewport
          element.classList.add('left-slide');
        } else {
          // If the element is on the right half of the viewport
          element.classList.add('right-slide');
        }
      });
    }
  }, []);

  return (
    <>
      <section id="portfolio" className="portfolio section">
        <div className="container section-title" data-aos="fade-up">
          <h2>{trans.HomePage.portfolio.badge}</h2>
          <p>
            <span>{trans.HomePage.portfolio.title}</span> <span className="description-title">{trans.HomePage.portfolio.subTitle}</span>
          </p>
        </div>
        {/* End Section Title */}

        <div className="container">
          <div className="row align-items-stretch retro-layout">
            <div className="col-md-4">
              <a href="" className="h-entry v-height gradient" style={{ marginBottom: '20px' }}>
                <div
                  className="featured-img"
                  style={{
                    backgroundImage: "url('/img/portfolio/cau-can-tho-su-dung-thep-tay-do.png')"
                  }}
                ></div>
                <div className="text">
                  <span className="date">{trans.HomePage.portfolio.attributes[0].date}</span>
                  <h2>{trans.HomePage.portfolio.attributes[0].name}</h2>
                </div>
              </a>
              <a href="single.html" className="h-entry v-height gradient">
                <div
                  className="featured-img"
                  style={{
                    backgroundImage: "url('/img/portfolio/da-khoa-tpct-su-dung-thep-tay-do.png')"
                  }}
                ></div>
                <div className="text">
                  <span className="date">{trans.HomePage.portfolio.attributes[1].date}</span>
                  <h2>{trans.HomePage.portfolio.attributes[1].name}</h2>
                </div>
              </a>
            </div>

            <div className="col-md-4">
              <a href="single.html" className="h-entry img-5 h-100 gradient">
                <div
                  className="featured-img"
                  style={{
                    backgroundImage: "url('/img/portfolio/da-khoa-trung-uong-ct-su-dung-thep-tay-do.png')"
                  }}
                ></div>
                <div className="text">
                  <span className="date">{trans.HomePage.portfolio.attributes[2].date}</span>
                  <h2>{trans.HomePage.portfolio.attributes[2].name}</h2>
                </div>
              </a>
            </div>

            <div className="col-md-4">
              <a href="single.html" className="h-entry mb-30 v-height gradient" style={{ marginBottom: '20px' }}>
                <div
                  className="featured-img"
                  style={{
                    backgroundImage: "url('/img/portfolio/dai-hoc-can-tho-su-dung-thep-tay-do.png')"
                  }}
                ></div>
                <div className="text">
                  <span className="date">{trans.HomePage.portfolio.attributes[3].date}</span>
                  <h2>{trans.HomePage.portfolio.attributes[3].name}</h2>
                </div>
              </a>
              <a href="single.html" className="h-entry v-height gradient">
                <div
                  className="featured-img"
                  style={{
                    backgroundImage: "url('/img/portfolio/da-khoa-tpct-su-dung-thep-tay-do.png')"
                  }}
                ></div>
                <div className="text">
                  <span className="date">{trans.HomePage.portfolio.attributes[4].date}</span>
                  <h2>{trans.HomePage.portfolio.attributes[4].name}</h2>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}



