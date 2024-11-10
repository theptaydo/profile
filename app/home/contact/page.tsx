'use client';

import useTrans from '../../pages/useTrans';
import { useEffect } from 'react';
export default function Contact() {
  const trans = useTrans();
  useEffect(() => {
    // Chọn phần địa chỉ và form liên hệ
    const addressSection = document.querySelector('.info-wrap');
    const formSection = document.querySelector('.php-email-form');
  
    if ('IntersectionObserver' in window) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              // Kiểm tra từng phần tử và áp dụng lớp trượt phù hợp
              if (entry.target === addressSection) {
                entry.target.classList.add('slide-left'); // Phần địa chỉ trượt từ trái sang phải
              } else if (entry.target === formSection) {
                entry.target.classList.add('slide-right'); // Phần form trượt từ phải sang trái
              }
              observer.unobserve(entry.target); // Ngừng giám sát sau khi hiệu ứng đã kích hoạt
            }
          });
        },
        {
          root: null,
          threshold: 0.2, // Kích hoạt khi 20% của phần tử đã vào viewport
        }
      );
  
      // Bắt đầu quan sát phần địa chỉ và form
      if (addressSection) observer.observe(addressSection);
      if (formSection) observer.observe(formSection);
  
      // Dọn dẹp khi component bị hủy
      return () => observer.disconnect();
    }
  }, []);
  
  return (
    <>

      <section id="contact" className="contact section">
        {/* Section Title */}
        <div className="container section-title" data-aos="fade-up">
          <h2>{trans.HomePage.contact.badge}</h2>
          <p>
            <span>{trans.HomePage.contact.title}</span> <span className="description-title">{trans.HomePage.contact.subTitle}</span>
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
                    <h3>{trans.HomePage.contact.attributes[0].title}</h3>
                    <p>
                    {trans.HomePage.contact.attributes[0].value}
                    </p>
                  </div>
                </div>

                <div className="info-item d-flex" data-aos="fade-up" data-aos-delay="300">
                  <i className="bi bi-telephone flex-shrink-0"></i>
                  <div>
                    <h3>{trans.HomePage.contact.attributes[1].title}</h3>
                    <p>{trans.HomePage.contact.attributes[1].value}</p>
                  </div>
                </div>

                <div className="info-item d-flex" data-aos="fade-up" data-aos-delay="400">
                  <i className="bi bi-envelope flex-shrink-0"></i>
                  <div>
                    <h3>{trans.HomePage.contact.attributes[2].title}</h3>
                    <p>{trans.HomePage.contact.attributes[2].value}</p>
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
                    {trans.HomePage.contact.form[0].name}
                    </label>
                    <input type="text" name="name" id="name-field" className="form-control" required />
                  </div>

                  <div className="col-md-6">
                    <label htmlFor="email-field" className="pb-2">
                    {trans.HomePage.contact.form[0].email}
                    </label>
                    <input type="email" className="form-control" name="email" id="email-field" required />
                  </div>

                  <div className="col-md-12">
                    <label htmlFor="subject-field" className="pb-2">
                    {trans.HomePage.contact.form[0].subject}
                    </label>
                    <input type="text" className="form-control" name="subject" id="subject-field" required />
                  </div>

                  <div className="col-md-12">
                    <label htmlFor="message-field" className="pb-2">
                    {trans.HomePage.contact.form[0].message}
                    </label>
                    <textarea className="form-control" name="message" rows={10} id="message-field" required></textarea>
                  </div>

                  <div className="col-md-12 text-center">
                    <div className="loading">  {trans.HomePage.contact.form[0].loading}</div>
                    <div className="error-message"></div>
                    <div className="sent-message">  {trans.HomePage.contact.form[0].sent}</div>

                    <button type="submit">  {trans.HomePage.contact.form[0].submit}</button>
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
