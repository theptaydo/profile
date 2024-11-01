'use client';

import Head from 'next/head';
import 'swiper/swiper-bundle.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'bootstrap-icons/font/bootstrap-icons.css';

export default function Services() {
  return (
    <>
      <Head>
        {/* Swiper CSS từ thư viện npm */}
        <link rel="stylesheet" href="/vendor/swiper/swiper-bundle.min.css" />
      </Head>

      <section id="services" className="services section">
        {/* Section Title */}
        <div className="container section-title" data-aos="fade-up">
          <h2>Dịch Vụ</h2>
          <p>
            <span>Khám Phá Các</span> <span className="description-title">Dịch Vụ của Chúng Tôi</span>
          </p>
        </div>

        <div className="container">
          <div className="row gy-4">
            {/* Dịch vụ 1: Cung cấp thép xây dựng */}
            <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="100">
              <div className="service-item position-relative">
                <div className="icon">
                  <i className="bi bi-building"></i>
                </div>
                <a href="#" className="stretched-link">
                  <h3>Cung cấp thép xây dựng</h3>
                </a>
                <p>
                  Chúng tôi cung cấp các loại thép xây dựng chất lượng cao như thép cây, thép tấm, và thép cuộn cho các
                  công trình lớn và nhỏ.
                </p>
              </div>
            </div>

            {/* Dịch vụ 2: Gia công thép theo yêu cầu */}
            <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="200">
              <div className="service-item position-relative">
                <div className="icon">
                  <i className="bi bi-wrench"></i>
                </div>
                <a href="#" className="stretched-link">
                  <h3>Gia công thép theo yêu cầu</h3>
                </a>
                <p>
                  Chúng tôi cung cấp dịch vụ gia công thép theo yêu cầu, đáp ứng mọi tiêu chuẩn kỹ thuật của khách hàng.
                </p>
              </div>
            </div>

            {/* Dịch vụ 3: Tư vấn giải pháp thép */}
            <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="300">
              <div className="service-item position-relative">
                <div className="icon">
                  <i className="bi bi-lightbulb"></i>
                </div>
                <a href="#" className="stretched-link">
                  <h3>Tư vấn giải pháp thép</h3>
                </a>
                <p>
                  Chúng tôi tư vấn và cung cấp các giải pháp thép phù hợp cho mọi công trình, từ xây dựng dân dụng đến
                  công nghiệp.
                </p>
              </div>
            </div>

            {/* Dịch vụ 4: Vận chuyển thép tận nơi */}
            <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="400">
              <div className="service-item position-relative">
                <div className="icon">
                  <i className="bi bi-truck"></i>
                </div>
                <a href="#" className="stretched-link">
                  <h3>Vận chuyển thép tận nơi</h3>
                </a>
                <p>Dịch vụ vận chuyển thép nhanh chóng, an toàn đến các công trình trên toàn quốc.</p>
              </div>
            </div>

            {/* Dịch vụ 5: Lắp đặt thép tại công trình */}
            <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="500">
              <div className="service-item position-relative">
                <div className="icon">
                  <i className="bi bi-hammer"></i>
                </div>
                <a href="#" className="stretched-link">
                  <h3>Lắp đặt thép tại công trình</h3>
                </a>
                <p>
                  Chúng tôi cung cấp dịch vụ lắp đặt các cấu kiện thép, đảm bảo an toàn và độ bền cho mọi công trình.
                </p>
              </div>
            </div>

            {/* Dịch vụ 6: Bảo trì và kiểm định thép */}
            <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="600">
              <div className="service-item position-relative">
                <div className="icon">
                  <i className="bi bi-check-circle"></i>
                </div>
                <a href="#" className="stretched-link">
                  <h3>Bảo trì và kiểm định thép</h3>
                </a>
                <p>
                  Chúng tôi cung cấp dịch vụ kiểm định và bảo trì thép nhằm đảm bảo chất lượng và độ bền cho các dự án
                  xây dựng.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
