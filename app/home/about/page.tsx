'use client'; // Thêm dòng này nếu bạn sử dụng các hook hoặc sự kiện liên quan đến client

import useTrans from '../../pages/useTrans';

export default function About() {

  const trans = useTrans();

  return (

    <section id="about" className="about section light-background">

      {/* Section Title */}
      <div className="container section-title" data-aos="fade-up">
        <h2>{trans.HomePage.about.badge}</h2>
        <p><span>{trans.HomePage.about.title}</span> <span className="description-title">{trans.HomePage.about.subTitle}</span></p>
      </div>

      <div className="container">
        <div className="row gy-3">

          {/* Image Section */}
          <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
            <img src="https://theptaydo.com/files/images/gioi-thieu/z3925337497423_16cdc0821ed354add3239797beeec766.jpg"
              alt="" className="img-fluid" />
          </div>

          {/* Text Content */}
          <div className="col-lg-6 d-flex flex-column justify-content-center" data-aos="fade-up" data-aos-delay="200">
            <div className="about-content ps-0 ps-lg-3">
              <h3>{trans.HomePage.about.hightlight}</h3>
              <p className="fst-italic">
                {trans.HomePage.about.description}
              </p>

              {/* Attributes List */}
              <ul>
                <li>
                  <i className="bi bi-diagram-3"></i>
                  <div>
                    <h4>{trans.HomePage.about.attributes.one.title}</h4>
                    <p>{trans.HomePage.about.attributes.one.description}</p>
                  </div>
                </li>
                <li>
                  <i className="bi bi-fullscreen-exit"></i>
                  <div>
                    <h4>{trans.HomePage.about.attributes.two.title}</h4>
                    <p>{trans.HomePage.about.attributes.two.description}</p>
                  </div>
                </li>
              </ul>

              <p>
                {trans.HomePage.about.message}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>


  );
}
