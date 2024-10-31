'use client'; // Thêm dòng này nếu bạn sử dụng các hook hoặc sự kiện liên quan đến client

import useTrans from '../../pages/useTrans';


export default function Hero() {
  const trans = useTrans();

  return (

    // <section id="hero" className="hero section light-background">

    //   <div className="container">
    //     <div className="row gy-4">
    //       <div className="col-lg-6 order-2 order-lg-1 d-flex flex-column justify-content-center" data-aos="zoom-out">
    //         <h1>{trans.HomePage.hero.welcome} <span> {trans.HomePage.hero.brand}</span></h1>
    //         <p>{trans.HomePage.hero.description}</p>
    //         <div className="d-flex">
    //           <a href="#about" className="btn-get-started">{trans.HomePage.hero.buy}</a>
    //           <a href="https://www.youtube.com/watch?v=DKEG8bgipvc"
    //             className="glightbox btn-watch-video d-flex align-items-center"><i className="bi bi-play-circle"></i><span>{trans.HomePage.hero.more}</span></a>
    //         </div>
    //       </div>
    //     </div>
    //   </div>

    // </section>

    <section id="hero" className="hero section light-background position-relative" style={{ overflow: 'hidden' }}>
      {/* Dark Overlay */}
      <div className="overlay position-absolute top-0 start-0 w-100 h-100" style={{ backgroundColor: 'rgba(0, 0, 0, 0.25)', zIndex: 1 }}></div>

      {/* Fixed Content Section */}
      <div className="container position-absolute top-50 start-50 translate-middle text-white" style={{ zIndex: 2 }}>
        <div className="row gy-4">
          <div className="col-lg-8  d-flex flex-column justify-content-center" data-aos="zoom-out" >
            <h1>{trans.HomePage.hero.welcome} <span>{trans.HomePage.hero.brand}</span></h1>
            <p>{trans.HomePage.hero.description}</p>
            <div className="d-flex ">
              <a href="#about" className="btn-get-started me-3">{trans.HomePage.hero.buy}</a>
              <a href="https://www.youtube.com/watch?v=DKEG8bgipvc" className="glightbox btn-watch-video d-flex align-items-center">
                <i className="bi bi-play-circle"></i><span>{trans.HomePage.hero.more}</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Background Image Carousel */}
      <div id="backgroundCarousel" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner" style={{ height: '100vh' }}>

          {/* Carousel Image 1 */}
          <div className="carousel-item active" style={{ backgroundImage: 'url(https://th.bing.com/th/id/R.cfecc143b914f4d5232b983009703edc?rik=SnyTYJN83wVmkQ&pid=ImgRaw&r=0)', backgroundSize: 'cover', backgroundPosition: 'center', height: '100vh' }}>
          </div>

          {/* Carousel Image 2 */}
          <div className="carousel-item" style={{ backgroundImage: 'url(https://theptaydo.com/files/images/slider/thep_1.png)', backgroundSize: 'cover', backgroundPosition: 'center', height: '100vh' }}>
          </div>

          {/* Carousel Image 3 */}
          <div className="carousel-item" style={{ backgroundImage: 'url(https://dreamnotion.com/wp-content/uploads/2016/04/bg-image-1.jpg)', backgroundSize: 'cover', backgroundPosition: 'center', height: '100vh' }}>
          </div>

        </div>

        {/* Carousel Controls */}
        <button className="carousel-control-prev" type="button" data-bs-target="#backgroundCarousel" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#backgroundCarousel" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </section >






  );
}
