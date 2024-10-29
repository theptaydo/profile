'use client';


export default function Team() {
  return (
    <>
      <section id="team" className="team section light-background">
        {/* Section Title */}
        <div className="container section-title" data-aos="fade-up">
          <h2>Đội Ngũ</h2>
          <p>
            <span>Những thành viên</span> <span className="description-title">chủ chốt của chúng tôi</span>
          </p>
        </div>
        {/* End Section Title */}

        <div className="container">
          <div className="row gy-4">
            {/* Thành viên 1 */}
            <div className="col-lg-3 col-md-6 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="100">
              <div className="team-member">
                <div className="member-img">
                  <img src="/img/team/hungddt.png" className="img-fluid" alt="Giám đốc điều hành Thép Tây Đô" />
                  <div className="social">
                    <a href="#"><i className="bi bi-facebook"></i></a>
                    <a href="#"><i className="bi bi-linkedin"></i></a>
                  </div>
                </div>
                <div className="member-info">
                  <h4>Ông Đào Duy Tuấn Hùng</h4>
                  <span>Phó Tổng Giám Đốc Quản lí chất lượng</span>
                </div>
              </div>
            </div>
            {/* End Team Member */}

            {/* Thành viên 2 */}
            <div className="col-lg-3 col-md-6 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="200">
              <div className="team-member">
                <div className="member-img">
                  <img src="/img/team/quanght.png" className="img-fluid" alt="Trưởng phòng sản xuất Thép Tây Đô" />
                  <div className="social">
                    <a href="#"><i className="bi bi-facebook"></i></a>
                    <a href="#"><i className="bi bi-linkedin"></i></a>
                  </div>
                </div>
                <div className="member-info">
                  <h4>Ông Huỳnh Trung Quang</h4>
                  <span>Tổng Giám Đốc kiêm CT.HĐTV</span>
                </div>
              </div>
            </div>
            {/* End Team Member */}

            {/* Thành viên 3 */}
            <div className="col-lg-3 col-md-6 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="300">
              <div className="team-member">
                <div className="member-img">
                  <img src="/img/team/khaivv.png" className="img-fluid" alt="Giám đốc công nghệ Thép Tây Đô" />
                  <div className="social">
                    <a href="#"><i className="bi bi-facebook"></i></a>
                    <a href="#"><i className="bi bi-linkedin"></i></a>
                  </div>
                </div>
                <div className="member-info">
                  <h4>Ông Võ Văn Khải</h4>
                  <span>Phó Tổng Giám Đốc Kinh doanh</span>
                </div>
              </div>
            </div>
            {/* End Team Member */}

            {/* Thành viên 4 */}
            <div className="col-lg-3 col-md-6 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="400">
              <div className="team-member">
                <div className="member-img">
                  <img src="/img/team/team-4.jpg" className="img-fluid" alt="Kế toán trưởng Thép Tây Đô" />
                  <div className="social">
                    <a href="#"><i className="bi bi-facebook"></i></a>
                    <a href="#"><i className="bi bi-linkedin"></i></a>
                  </div>
                </div>
                <div className="member-info">
                  <h4>Phạm Thị D</h4>
                  <span>Kế toán trưởng</span>
                </div>
              </div>
            </div>
            {/* End Team Member */}
          </div>
        </div>
      </section>
    </>
  );
}
