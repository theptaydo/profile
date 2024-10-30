'use client';

import Head from 'next/head';
import Script from 'next/script';

export default function Stats() {
  return (
    <>

      <section id="stats" className="stats section">
        <div className="container" data-aos="fade-up" data-aos-delay="100">
          <div className="row gy-4">
            {/* Số khách hàng hài lòng */}
            <div className="col-lg-3 col-md-6 d-flex flex-column align-items-center">
              <i className="bi bi-emoji-smile"></i>
              <div className="stats-item">
                <span
                  data-purecounter-start="0"
                  data-purecounter-end="500"
                  data-purecounter-duration="1"
                  className="purecounter"
                >234</span>
                <p>Khách hàng hài lòng</p>
              </div>
            </div>

            {/* Số dự án đã hoàn thành */}
            <div className="col-lg-3 col-md-6 d-flex flex-column align-items-center">
              <i className="bi bi-journal-richtext"></i>
              <div className="stats-item">
                <span
                  data-purecounter-start="0"
                  data-purecounter-end="150"
                  data-purecounter-duration="1"
                  className="purecounter"
                >23</span>
                <p>Dự án đã hoàn thành</p>
              </div>
            </div>

            {/* Số giờ hỗ trợ khách hàng */}
            <div className="col-lg-3 col-md-6 d-flex flex-column align-items-center">
              <i className="bi bi-headset"></i>
              <div className="stats-item">
                <span
                  data-purecounter-start="0"
                  data-purecounter-end="2000"
                  data-purecounter-duration="1"
                  className="purecounter"
                >100</span>
                <p>Giờ hỗ trợ khách hàng</p>
              </div>
            </div>

            {/* Số nhân viên tài năng */}
            <div className="col-lg-3 col-md-6 d-flex flex-column align-items-center">
              <i className="bi bi-people"></i>
              <div className="stats-item">
                <span
                  data-purecounter-start="0"
                  data-purecounter-end="100"
                  data-purecounter-duration="1"
                  className="purecounter"
                >200</span>
                <p>Nhân viên tài năng</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Script
        src="/vendor/purecounter/purecounter_vanilla.js"
        strategy="afterInteractive"
      />
    </>
  );
}
