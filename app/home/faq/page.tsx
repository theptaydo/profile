'use client';

import 'bootstrap/dist/css/bootstrap.min.css';
import '@/styles/home/faq.css';

export default function Faq() {
  return (
    <section id="faq" className="faq section light-background">
      {/* Section Title */}
      <div className="container section-title" data-aos="fade-up">
        <h2>Câu hỏi thường gặp</h2>
        <p>
          <span>Những câu hỏi thường gặp về</span> <span className="description-title">Thép Tây Đô</span>
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
                    Các sản phẩm thép của Thép Tây Đô có đạt tiêu chuẩn chất lượng quốc tế không?
                  </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#faqAccordion">
                  <div className="accordion-body">
                    Tất cả các sản phẩm thép của chúng tôi đều đạt tiêu chuẩn chất lượng quốc tế như ASTM, JIS, và EN, đảm bảo độ bền và an toàn cho mọi công trình xây dựng.
                  </div>
                </div>
              </div>

              {/* Câu hỏi 2 */}
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingTwo">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                    Thép Tây Đô có cung cấp dịch vụ gia công thép theo yêu cầu không?
                  </button>
                </h2>
                <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#faqAccordion">
                  <div className="accordion-body">
                    Chúng tôi cung cấp dịch vụ gia công thép theo yêu cầu kỹ thuật của khách hàng, bao gồm cắt, uốn, và mạ kẽm, đảm bảo đáp ứng đầy đủ các tiêu chuẩn và yêu cầu của từng dự án.
                  </div>
                </div>
              </div>

              {/* Câu hỏi 3 */}
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingThree">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                    Thời gian giao hàng của Thép Tây Đô là bao lâu?
                  </button>
                </h2>
                <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#faqAccordion">
                  <div className="accordion-body">
                    Thời gian giao hàng thông thường là từ 3-5 ngày làm việc tùy thuộc vào địa điểm và khối lượng đặt hàng. Chúng tôi cũng cung cấp dịch vụ vận chuyển nhanh theo yêu cầu của khách hàng.
                  </div>
                </div>
              </div>

              {/* Câu hỏi 4 */}
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingFour">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                    Thép Tây Đô có hỗ trợ tư vấn cho các dự án lớn không?
                  </button>
                </h2>
                <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#faqAccordion">
                  <div className="accordion-body">
                    Chúng tôi có đội ngũ kỹ thuật chuyên môn cao, sẵn sàng hỗ trợ tư vấn về sản phẩm thép và giải pháp phù hợp cho các dự án xây dựng lớn nhỏ trên toàn quốc.
                  </div>
                </div>
              </div>

              {/* Câu hỏi 5 */}
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingFive">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                    Thép Tây Đô có cung cấp dịch vụ bảo trì thép không?
                  </button>
                </h2>
                <div id="collapseFive" className="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#faqAccordion">
                  <div className="accordion-body">
                    Chúng tôi cung cấp dịch vụ bảo trì và kiểm định thép định kỳ, giúp khách hàng đảm bảo chất lượng và tuổi thọ của các sản phẩm thép sau khi sử dụng.
                  </div>
                </div>
              </div>

              {/* Câu hỏi 6 */}
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingSix">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
                    Thép Tây Đô có cung cấp thép cho các công trình quốc tế không?
                  </button>
                </h2>
                <div id="collapseSix" className="accordion-collapse collapse" aria-labelledby="headingSix" data-bs-parent="#faqAccordion">
                  <div className="accordion-body">
                    Chúng tôi không chỉ cung cấp thép cho thị trường trong nước mà còn xuất khẩu sang các quốc gia khác, đảm bảo đáp ứng các tiêu chuẩn quốc tế khắt khe nhất.
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
