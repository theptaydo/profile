'use client';

import Head from 'next/head';
import { profile } from 'console';
import { useEffect } from 'react';
import useTrans from '../../pages/useTrans';

export default function Portfolio() {
  const trans = useTrans();
  
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
          <h2>{trans.HomePage.portfolio.title}</h2>
          <p>
            <span>{trans.HomePage.portfolio.title}</span> <span className="description-title">{trans.HomePage.portfolio.subTitle}</span>
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
                  <span className="date">{trans.HomePage.portfolio.attributes[0].date}</span>
                  <h2>{trans.HomePage.portfolio.attributes[0].name}</h2>
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
              <a href="single.html" className="h-entry mb-30 v-height gradient right-slide" style={{ marginBottom: '20px' }}>
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
              <a href="single.html" className="h-entry v-height gradient right-slide ">
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



