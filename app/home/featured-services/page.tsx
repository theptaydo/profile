'use client'; // Để báo rằng đây là một Client Component


export default function FeaturedServices() {


  return (
    <section id="featured-services" className="featured-services section">

      <div className="container">
        <div className="row gy-4">

          <div className="col-xl-3 col-md-6 d-flex" data-aos="fade-up" data-aos-delay="100">
            <div className="service-item position-relative">
              <div className="icon"><i className="bi bi-building icon"></i></div>
              <h4><a href="" className="stretched-link">Cung cấp thép xây dựng</a></h4>
              <p>Chuyên cung cấp các loại thép xây dựng như thép cây, thép hình, thép cuộn cho các công trình lớn nhỏ.
              </p>
            </div>
          </div>

          <div className="col-xl-3 col-md-6 d-flex" data-aos="fade-up" data-aos-delay="200">
            <div className="service-item position-relative">
              <div className="icon"><i className="bi bi-wrench icon"></i></div>
              <h4><a href="" className="stretched-link">Gia công thép theo yêu cầu</a></h4>
              <p>Dịch vụ gia công thép theo yêu cầu của khách hàng, đáp ứng các tiêu chuẩn kỹ thuật chính xác.</p>
            </div>
          </div>

          <div className="col-xl-3 col-md-6 d-flex" data-aos="fade-up" data-aos-delay="300">
            <div className="service-item position-relative">
              <div className="icon"><i className="bi bi-lightbulb icon"></i></div>
              <h4><a href="" className="stretched-link">Tư vấn giải pháp thép</a></h4>
              <p>Chúng tôi cung cấp tư vấn chuyên sâu về các loại thép phù hợp cho từng loại công trình.</p>
            </div>
          </div>

          <div className="col-xl-3 col-md-6 d-flex" data-aos="fade-up" data-aos-delay="400">
            <div className="service-item position-relative">
              <div className="icon"><i className="bi bi-truck icon"></i></div>
              <h4><a href="" className="stretched-link">Vận chuyển và lắp đặt thép</a></h4>
              <p>Dịch vụ vận chuyển nhanh chóng và lắp đặt thép tận nơi với đội ngũ chuyên nghiệp.</p>
            </div>
          </div>

        </div>
      </div>

    </section>
  );
}
