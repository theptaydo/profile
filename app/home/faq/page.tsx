'use client';

import 'bootstrap/dist/css/bootstrap.min.css';
import '@/styles/home/faq.css';
import useTrans from '../../pages/useTrans';
import { useEffect } from 'react';

export default function Faq() {
  const trans = useTrans();
  
  useEffect(() => {
    // Chọn tất cả các phần tử accordion-item cần áp dụng hiệu ứng
    const faqItems = document.querySelectorAll('.accordion-item');
  
    if ('IntersectionObserver' in window) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              // Thêm lớp 'slide-down' để kích hoạt hiệu ứng trượt từ trên xuống
              entry.target.classList.add('slide-down');
              observer.unobserve(entry.target); // Ngừng giám sát sau khi hiệu ứng đã kích hoạt
            }
          });
        },
        {
          root: null,
          threshold: 0.2, // Kích hoạt khi 20% của phần tử đã vào viewport
        }
      );
  
      // Quan sát từng accordion-item
      faqItems.forEach((item) => observer.observe(item));
  
      // Dọn dẹp khi component bị hủy
      return () => observer.disconnect();
    }
  }, []);
  
  return (
    <section id="faq" className="faq section light-background">
      {/* Section Title */}
      <div className="container section-title" data-aos="fade-up">
        <h2>{trans.HomePage.faq.badge}</h2>
        <p>
          <span>{trans.HomePage.faq.title}</span> <span className="description-title">{trans.HomePage.faq.subTitle}</span>
        </p>
      </div>
      {/* End Section Title */}

      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-10" data-aos="fade-up" data-aos-delay="100">
            <div className="accordion" id="faqAccordion">
              {/* Câu hỏi 1 */}
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingOne">
                  <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                  {trans.HomePage.faq.attributes[0].title}
                  </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#faqAccordion">
                  <div className="accordion-body">
                  {trans.HomePage.faq.attributes[0].value}
                  </div>
                </div>
              </div>

              {/* Câu hỏi 2 */}
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingTwo">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                  {trans.HomePage.faq.attributes[1].title}
                  </button>
                </h2>
                <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#faqAccordion">
                  <div className="accordion-body">
                  {trans.HomePage.faq.attributes[1].value}
                  </div>
                </div>
              </div>

              {/* Câu hỏi 3 */}
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingThree">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                  {trans.HomePage.faq.attributes[2].title}
                  </button>
                </h2>
                <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#faqAccordion">
                  <div className="accordion-body">
                  {trans.HomePage.faq.attributes[2].value}
                  </div>
                </div>
              </div>

              {/* Câu hỏi 4 */}
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingFour">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                  {trans.HomePage.faq.attributes[3].title}
                  </button>
                </h2>
                <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#faqAccordion">
                  <div className="accordion-body">
                  {trans.HomePage.faq.attributes[3].value}
                  </div>
                </div>
              </div>

              {/* Câu hỏi 5 */}
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingFive">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                  {trans.HomePage.faq.attributes[4].title}
                  </button>
                </h2>
                <div id="collapseFive" className="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#faqAccordion">
                  <div className="accordion-body">
                  {trans.HomePage.faq.attributes[4].value}
                  </div>
                </div>
              </div>

              {/* Câu hỏi 6 */}
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingSix">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
                  {trans.HomePage.faq.attributes[5].title}
                  </button>
                </h2>
                <div id="collapseSix" className="accordion-collapse collapse" aria-labelledby="headingSix" data-bs-parent="#faqAccordion">
                  <div className="accordion-body">
                  {trans.HomePage.faq.attributes[5].value}
                  </div>
                </div>
              </div>

            </div>
          </div>
          {/* End Faq Column */}
        </div>
      </div>
    </section>
  );
}
