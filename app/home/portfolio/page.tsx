'use client';

import Head from 'next/head';
import { profile } from 'console';
import { useEffect } from 'react';


export default function Portfolio() {
  
  // Sử dụng useEffect để thực hiện hiệu ứng khi trang được tải
  useEffect(() => {
    const entries = document.querySelectorAll('.portfolio .h-entry');

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target); // Dừng theo dõi sau khi hiệu ứng chạy
        }
      });
    }, { threshold: 0.1 });

    entries.forEach((entry) => observer.observe(entry));

    return () => {
      // Cleanup observer khi component unmount
      observer.disconnect();
    };
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
              <a href="" className="h-entry v-height gradient left-slide" style={{ marginBottom: '20px' }}>
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
              <a href="single.html" className="h-entry v-height gradient left-slide">
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
              <a href="single.html" className="h-entry mb-30 v-height gradient right-slide" style={{ marginBottom: '20px' }}>
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
              <a href="single.html" className="h-entry v-height gradient right-slide ">
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



