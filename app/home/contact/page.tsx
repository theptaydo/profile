'use client';


export default function Contact() {
  return (
    <>

      <section id="contact" className="contact section">
        {/* Section Title */}
        <div className="container section-title" data-aos="fade-up">
          <h2>Liên hệ</h2>
          <p>
            <span>Liên hệ với</span> <span className="description-title">Chúng tôi</span>
          </p>
        </div>
        {/* End Section Title */}

        <div className="container" data-aos="fade-up" data-aos-delay="100">
          <div className="row gy-4">
            <div className="col-lg-5">
              <div className="info-wrap">
                <div className="info-item d-flex" data-aos="fade-up" data-aos-delay="200">
                  <i className="bi bi-geo-alt flex-shrink-0"></i>
                  <div>
                    <h3>Địa chỉ</h3>
                    <p>
                      Lô đất số 45, đường số 2, KCN Trà Nóc 1, P. Trà Nóc, Q. Bình Thủy, TP Cần Thơ Hotline: (+84)
                      2923.841822
                    </p>
                  </div>
                </div>

                <div className="info-item d-flex" data-aos="fade-up" data-aos-delay="300">
                  <i className="bi bi-telephone flex-shrink-0"></i>
                  <div>
                    <h3>Điện thoại</h3>
                    <p>+1 5589 55488 55</p>
                  </div>
                </div>

                <div className="info-item d-flex" data-aos="fade-up" data-aos-delay="400">
                  <i className="bi bi-envelope flex-shrink-0"></i>
                  <div>
                    <h3>Email</h3>
                    <p>info@example.com</p>
                  </div>
                </div>

                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d48389.78314118045!2d-74.006138!3d40.710059!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a22a3bda30d%3A0xb89d1fe6bc499443!2sDowntown%20Conference%20Center!5e0!3m2!1sen!2sus!4v1676961268712!5m2!1sen!2sus"
                  style={{ border: 0, width: '100%', height: '270px' }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>

            <div className="col-lg-7">
              <form action="" method="post" className="php-email-form" data-aos="fade-up" data-aos-delay="200">
                <div className="row gy-4">
                  <div className="col-md-6">
                    <label htmlFor="name-field" className="pb-2">
                      Tên của bạn
                    </label>
                    <input type="text" name="name" id="name-field" className="form-control" required />
                  </div>

                  <div className="col-md-6">
                    <label htmlFor="email-field" className="pb-2">
                      Email
                    </label>
                    <input type="email" className="form-control" name="email" id="email-field" required />
                  </div>

                  <div className="col-md-12">
                    <label htmlFor="subject-field" className="pb-2">
                      Tiêu đề
                    </label>
                    <input type="text" className="form-control" name="subject" id="subject-field" required />
                  </div>

                  <div className="col-md-12">
                    <label htmlFor="message-field" className="pb-2">
                      Tin nhắn
                    </label>
                    <textarea className="form-control" name="message" rows={10} id="message-field" required></textarea>
                  </div>

                  <div className="col-md-12 text-center">
                    <div className="loading">Đang tải</div>
                    <div className="error-message"></div>
                    <div className="sent-message">Đã gửi tin nhắn của bạn. Thank you!</div>

                    <button type="submit">Gửi tin nhắn</button>
                  </div>
                </div>
              </form>
            </div>
            {/* End Contact Form */}
          </div>
        </div >
      </section >
    </>
  );
}
