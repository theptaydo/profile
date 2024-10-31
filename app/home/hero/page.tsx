'use client'; // Thêm dòng này nếu bạn sử dụng các hook hoặc sự kiện liên quan đến client

import useTrans from '../../pages/useTrans';


export default function Hero() {
  const trans = useTrans();

  return (

    <section id="hero" className="hero section light-background">

      <div className="container">
        <div className="row gy-4">
          <div className="col-lg-6 order-2 order-lg-1 d-flex flex-column justify-content-center" data-aos="zoom-out">
            <h1>{trans.HomePage.hero.welcome} <span> {trans.HomePage.hero.brand}</span></h1>
            <p>{trans.HomePage.hero.description}</p>
            <div className="d-flex">
              <a href="#about" className="btn-get-started">{trans.HomePage.hero.buy}</a>
              <a href="https://www.youtube.com/watch?v=DKEG8bgipvc"
                className="glightbox btn-watch-video d-flex align-items-center"><i className="bi bi-play-circle"></i><span>{trans.HomePage.hero.more}</span></a>
            </div>
          </div>
        </div>
      </div>

    </section>

  );
}
