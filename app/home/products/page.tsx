'use client';

import Head from 'next/head';
import '@/styles/home/products.css';

export default function Products() {
  return (
    <>
      <section id="products" className="products  section section pt-0">

        <div className="container" style={{ marginTop: "50px" }}>
          <div className="container section-title" data-aos="fade-up">
            <h2>SẢN PHẨM</h2>
            <p><span>Những sản phẩm tiêu biếu</span> <span className="description-title">của chúng tôi</span></p>
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
                        <img src="http://shenglivn.com/uploads/san-pham/thep-cuon-tron-tron-5.jpg" className="d-block w-100" alt="Steel Coil Image 1" />
                      </div>
                      <div className="carousel-item">
                        <img src="http://shenglivn.com/uploads/san-pham/thep-cuon-tron-tron-3.jpg" className="d-block w-100" alt="Steel Coil Image 2" />
                      </div>
                      <div className="carousel-item">
                        <img src="http://shenglivn.com/uploads/san-pham/thep-cuon-tron-tron-6.jpg" className="d-block w-100" alt="Steel Coil Image 3" />
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
                    <h2>THÉP CUỘN TRÒN TRƠN</h2>

                    <p>Chủng loại: <span>CB240T, HPB300, SAE 1018</span></p>
                    <p>Đặc điểm: <span>Bề mặt bóng, không trầy xước, không khuyết tật, không bavia, không nứt,...</span></p>
                    <p>Tiêu chuẩn: <span>TCVN (Việt Nam), GB (Trung Quốc), ASTM (Mỹ)</span></p>
                    <p>Đường kính: <span>6mm, 6.5mm, 8 mm, 10mm, 12mm, 14mm</span></p>

                    <p>Trọng lượng 1m:</p>
                    <ul className="feature-list">
                      <li>Ф6 = 0.222 kg</li>
                      <li>Ф6.5 = 0.260 kg</li>
                      <li>Ф8 = 0.395 kg</li>
                      <li>Ф10 = 0.617 kg</li>
                      <li>Ф12 = 0.888 kg</li>
                      <li>Ф14 = 1.21 kg</li>
                    </ul>

                    <a href="#" className="btn-contact mt-3">Liên hệ</a>
                  </div>
                </div>
              </div>

              <div className="row align-items-center">
                {/* Right Column: Details */}
                <div className="col-md-6">
                  <div className="product-details">
                    <h2>THÉP CUỘN TRÒN TRƠN</h2>

                    <p>Chủng loại: <span>CB240T, HPB300, SAE 1018</span></p>
                    <p>Đặc điểm: <span>Bề mặt bóng, không trầy xước, không khuyết tật, không bavia, không nứt,...</span></p>
                    <p>Tiêu chuẩn: <span>TCVN (Việt Nam), GB (Trung Quốc), ASTM (Mỹ)</span></p>
                    <p>Đường kính: <span>6mm, 6.5mm, 8 mm, 10mm, 12mm, 14mm</span></p>

                    <p>Trọng lượng 1m:</p>
                    <ul className="feature-list">
                      <li>Ф6 = 0.222 kg</li>
                      <li>Ф6.5 = 0.260 kg</li>
                      <li>Ф8 = 0.395 kg</li>
                      <li>Ф10 = 0.617 kg</li>
                      <li>Ф12 = 0.888 kg</li>
                      <li>Ф14 = 1.21 kg</li>
                    </ul>

                    <a href="#" className="btn-contact mt-3">Liên hệ</a>
                  </div>
                </div>

                {/* Left Column: Image */}
                <div className="col-md-6">
                  <div id="productCarousel1" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-inner">
                      <div className="carousel-item active">
                        <img src="http://shenglivn.com/uploads/san-pham/thep-cuon-van-8.jpg" className="d-block w-100" alt="Steel Coil Image 1" />
                      </div>
                      <div className="carousel-item">
                        <img src="http://shenglivn.com/uploads/san-pham/thep-cuon-van-9.jpg" className="d-block w-100" alt="Steel Coil Image 2" />
                      </div>
                      <div className="carousel-item">
                        <img src="http://shenglivn.com/uploads/san-pham/thep-cuon-van-8.jpg" className="d-block w-100" alt="Steel Coil Image 3" />
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
