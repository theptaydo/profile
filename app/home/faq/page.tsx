'use client';

import Head from 'next/head';

export default function Faq() {
  return (
    <>
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
              <div className="faq-container">
                {/* Câu hỏi 1 */}
                <div className="faq-item faq-active">
                  <h3>Các sản phẩm thép của Thép Tây Đô có đạt tiêu chuẩn chất lượng quốc tế không?</h3>
                  <div className="faq-content">
                    <p>
                      Tất cả các sản phẩm thép của chúng tôi đều đạt tiêu chuẩn chất lượng quốc tế như ASTM, JIS, và
                      EN, đảm bảo độ bền và an toàn cho mọi công trình xây dựng.
                    </p>
                  </div>
                  <i className="faq-toggle bi bi-chevron-right"></i>
                </div>
                {/* End Faq item */}

                {/* Câu hỏi 2 */}
                <div className="faq-item">
                  <h3>Thép Tây Đô có cung cấp dịch vụ gia công thép theo yêu cầu không?</h3>
                  <div className="faq-content">
                    <p>
                      Chúng tôi cung cấp dịch vụ gia công thép theo yêu cầu kỹ thuật của khách hàng, bao gồm cắt, uốn,
                      và mạ kẽm, đảm bảo đáp ứng đầy đủ các tiêu chuẩn và yêu cầu của từng dự án.
                    </p>
                  </div>
                  <i className="faq-toggle bi bi-chevron-right"></i>
                </div>
                {/* End Faq item */}

                {/* Câu hỏi 3 */}
                <div className="faq-item">
                  <h3>Thời gian giao hàng của Thép Tây Đô là bao lâu?</h3>
                  <div className="faq-content">
                    <p>
                      Thời gian giao hàng thông thường là từ 3-5 ngày làm việc tùy thuộc vào địa điểm và khối lượng đặt
                      hàng. Chúng tôi cũng cung cấp dịch vụ vận chuyển nhanh theo yêu cầu của khách hàng.
                    </p>
                  </div>
                  <i className="faq-toggle bi bi-chevron-right"></i>
                </div>
                {/* End Faq item */}

                {/* Câu hỏi 4 */}
                <div className="faq-item">
                  <h3>Thép Tây Đô có hỗ trợ tư vấn cho các dự án lớn không?</h3>
                  <div className="faq-content">
                    <p>
                      Chúng tôi có đội ngũ kỹ thuật chuyên môn cao, sẵn sàng hỗ trợ tư vấn về sản phẩm thép và giải pháp
                      phù hợp cho các dự án xây dựng lớn nhỏ trên toàn quốc.
                    </p>
                  </div>
                  <i className="faq-toggle bi bi-chevron-right"></i>
                </div>
                {/* End Faq item */}

                {/* Câu hỏi 5 */}
                <div className="faq-item">
                  <h3>Thép Tây Đô có cung cấp dịch vụ bảo trì thép không?</h3>
                  <div className="faq-content">
                    <p>
                      Chúng tôi cung cấp dịch vụ bảo trì và kiểm định thép định kỳ, giúp khách hàng đảm bảo chất lượng
                      và tuổi thọ của các sản phẩm thép sau khi sử dụng.
                    </p>
                  </div>
                  <i className="faq-toggle bi bi-chevron-right"></i>
                </div>
                {/* End Faq item */}

                {/* Câu hỏi 6 */}
                <div className="faq-item">
                  <h3>Thép Tây Đô có cung cấp thép cho các công trình quốc tế không?</h3>
                  <div className="faq-content">
                    <p>
                      Chúng tôi không chỉ cung cấp thép cho thị trường trong nước mà còn xuất khẩu sang các quốc gia
                      khác, đảm bảo đáp ứng các tiêu chuẩn quốc tế khắt khe nhất.
                    </p>
                  </div>
                  <i className="faq-toggle bi bi-chevron-right"></i>
                </div>
                {/* End Faq item */}
              </div>
            </div>
            {/* End Faq Column */}
          </div>
        </div>
      </section>
    </>
  );
}
