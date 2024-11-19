'use client';

import useTrans from '@/app/pages/useTrans';

export default function Team() {

  const trans = useTrans();

  return (
    <>
      <section id="team" className="team section light-background">
        {/* Section Title */}
        <div className="container section-title" data-aos="fade-up">
          <h2>{trans.HomePage.team.badge}</h2>
          <p>
            <span>{trans.HomePage.team.title}</span> <span className="description-title">{trans.HomePage.team.subTitle}</span>
          </p>
        </div>
        {/* End Section Title */}

        <div className="container">
          <div className="row gy-4">
            {/* Thành viên 1 */}
            <div className="col-lg-3 col-md-6 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="100">
              <div className="team-member">
                <div className="member-img">
                  <img src={trans.HomePage.team.attributes[0].images} className="img-fluid" alt="Giám đốc điều hành Thép Tây Đô" />
                  <div className="social">
                    <a href="#"><i className="bi bi-facebook"></i></a>
                    <a href="#"><i className="bi bi-linkedin"></i></a>
                  </div>
                </div>
                <div className="member-info">
                  <h4>{trans.HomePage.team.attributes[0].titles} {trans.HomePage.team.attributes[0].name}</h4>
                  <span>{trans.HomePage.team.attributes[0].role}</span>
                </div>
              </div>
            </div>
            {/* End Team Member */}

            {/* Thành viên 2 */}
            <div className="col-lg-3 col-md-6 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="200">
              <div className="team-member">
                <div className="member-img">
                  <img src={trans.HomePage.team.attributes[1].images} className="img-fluid" alt="Trưởng phòng sản xuất Thép Tây Đô" />
                  <div className="social">
                    <a href="#"><i className="bi bi-facebook"></i></a>
                    <a href="#"><i className="bi bi-linkedin"></i></a>
                  </div>
                </div>
                <div className="member-info">
                  <h4>{trans.HomePage.team.attributes[1].titles} {trans.HomePage.team.attributes[1].name}</h4>
                  <span>{trans.HomePage.team.attributes[1].role}</span>
                </div>
              </div>
            </div>
            {/* End Team Member */}

            {/* Thành viên 3 */}
            <div className="col-lg-3 col-md-6 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="300">
              <div className="team-member">
                <div className="member-img">
                  <img src={trans.HomePage.team.attributes[2].images} className="img-fluid" alt="Giám đốc công nghệ Thép Tây Đô" />
                  <div className="social">
                    <a href="#"><i className="bi bi-facebook"></i></a>
                    <a href="#"><i className="bi bi-linkedin"></i></a>
                  </div>
                </div>
                <div className="member-info">
                  <h4>{trans.HomePage.team.attributes[2].titles} {trans.HomePage.team.attributes[2].name}</h4>
                  <span>{trans.HomePage.team.attributes[2].role}</span>
                </div>
              </div>
            </div>
            {/* End Team Member */}

            {/* Thành viên 4 */}
            <div className="col-lg-3 col-md-6 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="400">
              <div className="team-member">
                <div className="member-img">
                  <img src={trans.HomePage.team.attributes[3].images} className="img-fluid" alt="Kế toán trưởng Thép Tây Đô" />
                  <div className="social">
                    <a href="#"><i className="bi bi-facebook"></i></a>
                    <a href="#"><i className="bi bi-linkedin"></i></a>
                  </div>
                </div>
                <div className="member-info">
                  <h4>{trans.HomePage.team.attributes[3].titles} {trans.HomePage.team.attributes[3].name}</h4>
                  <span>{trans.HomePage.team.attributes[3].role}</span>
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
