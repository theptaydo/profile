'use client';

import Head from 'next/head';
 


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
          <div      
          >
            <div>
              <img src="/img/clients/Chip_Mong_Group.png" className="img-fluid" alt="Chip Mong Group" />
            </div>
            <div>
              <img src="/img/clients/VGS.png" className="img-fluid" alt="VGS" />
            </div>
            <div>
              <img src="/img/clients/itouchu.png" className="img-fluid" alt="Itouchu" />
            </div>
            <div>
              <img src="/img/clients/client-4.png" className="img-fluid" alt="Client 4" />
            </div>
            <div>
              <img src="/img/clients/client-5.png" className="img-fluid" alt="Client 5" />
            </div>
            <div>
              <img src="/img/clients/client-6.png" className="img-fluid" alt="Client 6" />
            </div>
            <div>
              <img src="/img/clients/client-7.png" className="img-fluid" alt="Client 7" />
            </div>
            <div>
              <img src="/img/clients/client-8.png" className="img-fluid" alt="Client 8" />
            </div>
          </div>
          <div className="swiper-pagination"></div>
        </div>
      </section>
    </>
  );
}
