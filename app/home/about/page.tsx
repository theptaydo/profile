'use client'; // Thêm dòng này nếu bạn sử dụng các hook hoặc sự kiện liên quan đến client


export default function About() {
  return (

    <section id="about" className="about section light-background">


      <div className="container section-title" data-aos="fade-up">
        <h2>Giới thiệu</h2>
        <p><span>Giới thiệu về</span> <span className="description-title">chúng tôi</span></p>
      </div>

      <div className="container">

        <div className="row gy-3">

          <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
            <img src="https://theptaydo.com/files/images/gioi-thieu/z3925337497423_16cdc0821ed354add3239797beeec766.jpg"
              alt="" className="img-fluid" />
          </div>

          <div className="col-lg-6 d-flex flex-column justify-content-center" data-aos="fade-up" data-aos-delay="200">
            <div className="about-content ps-0 ps-lg-3">
              <h3>Tiên phong trong ngành công nghiệp thép</h3>
              <p className="fst-italic">
                Với hơn 20 năm kinh nghiệm, Thép Tây Đô chuyên cung cấp các sản phẩm thép chất lượng cao cho các công
                trình
                xây dựng và ngành công nghiệp.
              </p>
              <ul>
                <li>
                  <i className="bi bi-diagram-3"></i>
                  <div>
                    <h4>Chất lượng hàng đầu</h4>
                    <p>Sản phẩm thép được kiểm định theo tiêu chuẩn quốc tế, đảm bảo độ bền và an toàn.</p>
                  </div>
                </li>
                <li>
                  <i className="bi bi-fullscreen-exit"></i>
                  <div>
                    <h4>Giá cả cạnh tranh</h4>
                    <p>Chúng tôi cam kết cung cấp sản phẩm với mức giá cạnh tranh nhất trên thị trường.</p>
                  </div>
                </li>
              </ul>
              <p>
                Thép Tây Đô luôn cam kết chất lượng cao, đảm bảo sự hài lòng của khách hàng và xây dựng những công trình
                bền vững, an toàn.
              </p>
            </div>

          </div>
        </div>

      </div>

    </section>

  );
}
