'use client';

import Head from 'next/head';
import '@/styles/home/products.css';
import useTrans from '../../pages/useTrans';

export default function Products() {
    const trans = useTrans();
  return (
    <>
      <section id="products" className="products  section section pt-0">

        <div className="container" style={{ marginTop: "50px" }}>
          <div className="container section-title" data-aos="fade-up">
            <h2>{trans.HomePage.products.badge}</h2>
            <p><span>{trans.HomePage.products.title}</span> <span className="description-title">{trans.HomePage.products.subTitle}</span></p>
          </div>
          {/* <h2 className="section__title"><span>Sản phẩm</span></h2> */}
          <div className="section__content">
            <div className="product-2" >
              <div className="row align-items-center">
                {/* Left Column: Image */}
                <div className="col-md-6">
                  <div id="productCarousel0" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-inner">
                      <div className="carousel-item active">
                        <img src="/img/products/thep-cuon-tron-tron-5.jpg" className="d-block w-100" alt="Steel Coil Image 1" />
                      </div>
                      <div className="carousel-item">
                        <img src="/img/products/thep-cuon-tron-tron-3.jpg" className="d-block w-100" alt="Steel Coil Image 2" />
                      </div>
                      <div className="carousel-item">
                        <img src="/img/products/thep-cuon-tron-tron-7.jpg" className="d-block w-100" alt="Steel Coil Image 3" />
                      </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#productCarousel0" data-bs-slide="prev">
                      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                      <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#productCarousel0" data-bs-slide="next">
                      <span className="carousel-control-next-icon" aria-hidden="true"></span>
                      <span className="visually-hidden">Next</span>
                    </button>
                  </div>
                </div>

                {/* Right Column: Details */}
                <div className="col-md-6">
                  <div className="product-details">
                    <h2>{trans.HomePage.products.items[0].name}</h2>

                    <p>{trans.HomePage.products.generic} <span>{trans.HomePage.products.items[0].types}</span></p>
                    <p>{trans.HomePage.products.characteristic} <span>{trans.HomePage.products.items[0].features}</span></p>
                    <p>{trans.HomePage.products.standard} <span>{trans.HomePage.products.items[0].standards}</span></p>
                    <p>{trans.HomePage.products.diameter} <span>{trans.HomePage.products.items[0].diameters}</span></p>

                    <p>{trans.HomePage.products.weight}</p>
                    <ul className="feature-list">
                      <li>{trans.HomePage.products.items[0].weightPerMeter[0].diameter}</li>
                      <li>{trans.HomePage.products.items[0].weightPerMeter[1].diameter}</li>
                      <li>{trans.HomePage.products.items[0].weightPerMeter[2].diameter}</li>
                      <li>{trans.HomePage.products.items[0].weightPerMeter[3].diameter}</li>
                      <li>{trans.HomePage.products.items[0].weightPerMeter[4].diameter}</li>
                      <li>{trans.HomePage.products.items[0].weightPerMeter[5].diameter}</li>
                    </ul>

                    <a href="#" className="btn-contact mt-3">{trans.HomePage.products.contactLink}</a>
                  </div>
                </div>
              </div>

              <div className="row align-items-center">
                {/* Right Column: Details */}
                <div className="col-md-6">
                  <div className="product-details">
                    <h2>{trans.HomePage.products.items[1].name}</h2>

                    <p>{trans.HomePage.products.generic} <span>{trans.HomePage.products.items[1].types}</span></p>
                    <p>{trans.HomePage.products.characteristic} <span>{trans.HomePage.products.items[1].features}</span></p>
                    <p>{trans.HomePage.products.standard}<span>{trans.HomePage.products.items[1].standards}</span></p>
                    <p>{trans.HomePage.products.diameter}  <span>{trans.HomePage.products.items[1].diameters}</span></p>

                    <p>{trans.HomePage.products.weight}</p>
                    <ul className="feature-list">
                    <li>{trans.HomePage.products.items[1].weightPerMeter[0].diameter}</li>
                      <li>{trans.HomePage.products.items[1].weightPerMeter[1].diameter}</li>
                      <li>{trans.HomePage.products.items[1].weightPerMeter[2].diameter}</li>
                      <li>{trans.HomePage.products.items[1].weightPerMeter[3].diameter}</li>
                      <li>{trans.HomePage.products.items[1].weightPerMeter[4].diameter}</li>
                      <li>{trans.HomePage.products.items[1].weightPerMeter[5].diameter}</li>
                    </ul>

                    <a href="#" className="btn-contact mt-3">{trans.HomePage.products.contactLink}</a>
                  </div>
                </div>

                {/* Left Column: Image */}
                <div className="col-md-6">
                  <div id="productCarousel1" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-inner">
                      <div className="carousel-item active">
                        <img src="/img/products/thep-cuon-van-8.jpg" className="d-block w-100" alt="Steel Coil Image 1" />
                      </div>
                      <div className="carousel-item">
                        <img src="/img/products/thep-cuon-van-9.jpg" className="d-block w-100" alt="Steel Coil Image 2" />
                      </div>
                      <div className="carousel-item">
                        <img src="/img/products/thep-cuon-van-8.jpg" className="d-block w-100" alt="Steel Coil Image 3" />
                      </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#productCarousel1" data-bs-slide="prev">
                      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                      <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#productCarousel1" data-bs-slide="next">
                      <span className="carousel-control-next-icon" aria-hidden="true"></span>
                      <span className="visually-hidden">Next</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
