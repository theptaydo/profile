'use client'; // Thêm dòng này nếu bạn sử dụng các hook hoặc sự kiện liên quan đến client


export default function Hero() {
  return (

    <section id="hero" className="hero section light-background">

      <div className="container">
        <div className="row gy-4">
          <div className="col-lg-6 order-2 order-lg-1 d-flex flex-column justify-content-center" data-aos="zoom-out">
            <h1>Chào mừng đến với <span>Thép tây đô</span></h1>
            <p>Doanh nghiệp hàng đầu về lĩnh vực sản xuất và kinh doanh các sản phẩm về Thép xây dựng tại ĐBSCL.</p>
            <div className="d-flex">
              <a href="#about" className="btn-get-started">Mua sản phẩm</a>
              <a href="https://www.youtube.com/watch?v=DKEG8bgipvc"
                className="glightbox btn-watch-video d-flex align-items-center"><i className="bi bi-play-circle"></i><span>Xem
                  thêm</span></a>
            </div>
          </div>
        </div>
      </div>

    </section>

  );
}
