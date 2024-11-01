'use client';

import { useEffect } from 'react';

export default function Portfolio() {
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
          <h2>Dự Án</h2>
          <p>
            <span>Khám Phá Các</span> <span className="description-title">Dự án của Chúng Tôi</span>
          </p>
        </div>
        {/* End Section Title */}

        <div className="container">
          <div className="row align-items-stretch retro-layout">
            <div className="col-md-4">
              <a href="" className="h-entry v-height gradient " style={{ marginBottom: '20px' }}>
                <div
                  className="featured-img"
                  style={{
                    backgroundImage: "url('/img/portfolio/cau-can-tho-su-dung-thep-tay-do.png')"
                  }}
                ></div>
                <div className="text">
                  <span className="date">Apr. 14th, 2022</span>
                  <h2>AI can now kill those annoying cookie pop-ups</h2>
                </div>
              </a>
              <a href="single.html" className="h-entry v-height gradient ">
                <div
                  className="featured-img"
                  style={{
                    backgroundImage: "url('/img/portfolio/da-khoa-tpct-su-dung-thep-tay-do.png')"
                  }}
                ></div>
                <div className="text">
                  <span className="date">Apr. 14th, 2022</span>
                  <h2>Don’t assume your user data in the cloud is safe</h2>
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
                  <span className="date">Apr. 14th, 2022</span>
                  <h2>Why is my internet so slow?</h2>
                </div>
              </a>
            </div>

            <div className="col-md-4">
              <a href="single.html" className="h-entry mb-30 v-height gradient " style={{ marginBottom: '20px' }}>
                <div
                  className="featured-img"
                  style={{
                    backgroundImage: "url('/img/portfolio/dai-hoc-can-tho-su-dung-thep-tay-do.png')"
                  }}
                ></div>
                <div className="text">
                  <span className="date">Apr. 14th, 2022</span>
                  <h2>Startup vs corporate: What job suits you best?</h2>
                </div>
              </a>
              <a href="single.html" className="h-entry v-height gradient ">
                <div
                  className="featured-img"
                  style={{
                    backgroundImage: "url('/img/portfolio/da-khoa-tpct-su-dung-thep-tay-do.png')"
                  }}
                ></div>
                <div className="text">
                  <span className="date">Apr. 14th, 2022</span>
                  <h2>Don’t assume your user data in the cloud is safe</h2>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
