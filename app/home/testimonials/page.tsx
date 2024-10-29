'use client';

import Head from 'next/head';

export default function Testimonials() {
  return (
    <>

      <section id="testimonials" className="testimonials section dark-background">
        <img src="/img/testimonials-bg.jpg" className="testimonials-bg" alt="Testimonials Background" />

        <div className="container" data-aos="fade-up" data-aos-delay="100">
          <div className="swiper init-swiper">
            <div className="swiper-wrapper">
              <div className="swiper-slide">
                <div className="testimonial-item">
                  <img src="/img/testimonials/testimonials-1.jpg" className="testimonial-img" alt="Saul Goodman" />
                  <h3>Saul Goodman</h3>
                  <h4>Ceo &amp; Founder</h4>
                  <div className="stars">
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                  </div>
                  <p>
                    <i className="bi bi-quote quote-icon-left"></i>
                    <span>Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus.
                      Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.</span>
                    <i className="bi bi-quote quote-icon-right"></i>
                  </p>
                </div>
              </div>

              {/* Thêm các SwiperSlide khác tương tự ở đây */}

            </div>
            <div className="swiper-pagination"></div>
          </div>
        </div>
      </section>

      <script
        dangerouslySetInnerHTML={{
          __html: `
          document.addEventListener("DOMContentLoaded", function () {
            const swiper = new Swiper('.init-swiper', {
              loop: true,
              speed: 600,
              autoplay: {
                delay: 5000,
              },
              slidesPerView: 'auto',
              pagination: {
                el: '.swiper-pagination',
                type: 'bullets',
                clickable: true,
              }
            });
          });
        `,
        }}
      ></script>
    </>
  );
}
