'use client';

import Head from 'next/head';
import { profile } from 'console';
import { useEffect } from 'react';
import useTrans from '../../pages/useTrans';
import useScrollEffect from '@/app/hook/useScrollEffect';
import '@/styles/animation.css';
export default function Portfolio() {
  const trans = useTrans();

   useScrollEffect();
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
              <a href="" className="animations left h-entry v-height gradient" style={{ marginBottom: '20px' }}>
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
              <a href="single.html" className="animations left h-entry v-height gradient">
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
              <a href="single.html" className="animations bottom h-entry img-5 h-100 gradient">
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
              <a href="single.html" className="animations right h-entry mb-30 v-height gradient" style={{ marginBottom: '20px' }}>
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
              <a href="single.html" className="animations right h-entry v-height gradient">
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



