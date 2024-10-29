'use client';

import Head from 'next/head';
import 'swiper/swiper-bundle.css';
import SwiperCore from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';


export default function Clients() {
  return (
    <>
      <Head>
        {/* Liên kết đến các file CSS và JS từ thư mục public/vendor */}
        <link rel="stylesheet" href="/vendor/swiper/swiper-bundle.min.css" />
        <script src="/vendor/swiper/swiper-bundle.min.js" defer></script>
      </Head>

      <section id="clients" className="clients section light-background">
        <div className="container">
          <Swiper
            loop={true}
            speed={600}
            autoplay={{ delay: 5000 }}
            slidesPerView="auto"
            pagination={{
              el: '.swiper-pagination',
              type: 'bullets',
              clickable: true,
            }}
            breakpoints={{
              320: {
                slidesPerView: 2,
                spaceBetween: 40,
              },
              480: {
                slidesPerView: 3,
                spaceBetween: 60,
              },
              640: {
                slidesPerView: 4,
                spaceBetween: 80,
              },
              992: {
                slidesPerView: 6,
                spaceBetween: 120,
              },
            }}
            className="init-swiper"
          >
            <SwiperSlide>
              <img src="/img/clients/Chip_Mong_Group.png" className="img-fluid" alt="Chip Mong Group" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/img/clients/VGS.png" className="img-fluid" alt="VGS" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/img/clients/itouchu.png" className="img-fluid" alt="Itouchu" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/img/clients/client-4.png" className="img-fluid" alt="Client 4" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/img/clients/client-5.png" className="img-fluid" alt="Client 5" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/img/clients/client-6.png" className="img-fluid" alt="Client 6" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/img/clients/client-7.png" className="img-fluid" alt="Client 7" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/img/clients/client-8.png" className="img-fluid" alt="Client 8" />
            </SwiperSlide>
          </Swiper>
          <div className="swiper-pagination"></div>
        </div>
      </section>
    </>
  );
}
