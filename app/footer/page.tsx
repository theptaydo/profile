'use client'

import '@/styles/main.css';
import Head from 'next/head';
import Script from 'next/script';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
// import 'bootstrap/dist/css/bootstrap.min.css';

export default function Footer() {
  return (
    <div>

      <footer id="footer" className="footer">
        <div className="footer-newsletter">
          <div className="container">
            <div className="row justify-content-center text-center">
              <div className="col-lg-6">
                <h4>Đăng Ký Nhận Thông Tin</h4>
                <p>Đăng ký để nhận được các tin tức mới nhất về sản phẩm và dịch vụ của Thép Tây Đô!</p>
                <form action="forms/newsletter.php" method="post" className="php-email-form">
                  <div className="newsletter-form">
                    <input type="email" name="email" placeholder="Nhập email của bạn" />
                    <input type="submit" value="Đăng Ký" />
                  </div>
                  <div className="loading">Đang xử lý...</div>
                  <div className="error-message"></div>
                  <div className="sent-message">Yêu cầu đăng ký của bạn đã được gửi. Cảm ơn!</div>
                </form>
              </div>
            </div>
          </div>
        </div>

        <div className="container footer-top">
          <div className="row gy-4">
            <div className="col-lg-3 col-md-6 footer-about">
              <a href="index.html" className="d-flex align-items-center">
                <span className="sitename" style={{ fontWeight: 'bold', marginBottom: '15px' }}>
                  Thép Tây Đô
                </span>
              </a>
              <div className="footer-contact pt-3">
                <p>123 Đường Công Nghiệp</p>
                <p>Quận Bình Thủy, TP. Cần Thơ</p>
                <p className="mt-3">
                  <strong>Điện thoại:</strong> <span>+84 292 123 4567</span>
                </p>
                <p>
                  <strong>Email:</strong> <span>info@theptaydo.com</span>
                </p>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 footer-about">
              <a href="index.html" className="d-flex align-items-center">
                <span className="sitename">VP Xưởng Liệu</span>
              </a>
              <div className="footer-contact pt-3">
                <p>27 Lê Hồng Phong, P. Trà An,</p>
                <p>Quận Bình Thủy, TP. Cần Thơ</p>
                <p className="mt-3">
                  <strong>Điện thoại:</strong> <span>+84.796 65 65 65</span>
                </p>
                <p>
                  <strong>Email:</strong> <span>info@theptaydo.com</span>
                </p>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 footer-about">
              <a href="index.html" className="d-flex align-items-center">
                <span className="sitename">VP đại diện tại Cần Thơ</span>
              </a>
              <div className="footer-contact pt-3">
                <p>Số 44, CMT8, Phường Cái Khế,</p>
                <p>Quận Ninh Kiều, TP. Cần Thơ</p>
                <p className="mt-3">
                  <strong>Điện thoại:</strong> <span>+84.796 65 65 65</span>
                </p>
                <p>
                  <strong>Email:</strong> <span>info@theptaydo.com</span>
                </p>
              </div>
            </div>

            <div className="col-lg-2 col-md-3 footer-links">
              <h4>Chính Sách Khách Hàng</h4>
              <ul>
                <li>
                  <i className="bi bi-chevron-right"></i> <a href="#">Hệ Thống Phân Phối</a>
                </li>
                <li>
                  <i className="bi bi-chevron-right"></i> <a href="#">Chính Sách Chung</a>
                </li>
                <li>
                  <i className="bi bi-chevron-right"></i> <a href="#">Chính Sách Chất Lượng</a>
                </li>
                <li>
                  <i className="bi bi-chevron-right"></i> <a href="#">Chính Sách Bán Hàng</a>
                </li>
              </ul>
            </div>

            <div className="col-lg-4 col-md-12">
              <p>
                <b>Giấy chứng nhận đăng ký kinh doanh số:</b> 1800156657
              </p>
              <p>
                <b>Ngày cấp:</b> 27/06/2008 - Nơi cấp: Sở KH & ĐT TP Cần Thơ
              </p>
              <p>
                <b>Tổng Giám Đốc:</b> Huỳnh Trung Quang
              </p>
            </div>

            <div className="col-lg-4 col-md-12">
              <h4>Theo Dõi Chúng Tôi</h4>
              <p>Hãy kết nối với chúng tôi trên các kênh truyền thông xã hội để cập nhật thông tin mới nhất về thị trường thép.</p>
              <div className="social-links d-flex">
                <a href="#"><i className="bi bi-twitter"></i></a>
                <a href="#"><i className="bi bi-facebook"></i></a>
                <a href="#"><i className="bi bi-instagram"></i></a>
                <a href="#"><i className="bi bi-linkedin"></i></a>
              </div>
            </div>
          </div>
        </div>

        <div className="container copyright text-center mt-4">
          <p>
            © <span>Bản quyền</span> <strong className="px-1 sitename">Thép Tây Đô</strong> <span>Đã Đăng Ký Bản Quyền</span>
          </p>
          <div className="credits">
            Thiết kế bởi <a href="https://bootstrapmade.com/">Davisoft</a>
          </div>
        </div>
      </footer>


      {/* Scroll Top  */}
      <a href="#" id="scroll-top" className="scroll-top d-flex align-items-center justify-content-center">
        <i className="bi bi-arrow-up-short"></i>
      </a>


      {/* Preloader */}
      {/* <div id="preloader">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div> */}


      <Script src="/js/main.js" />
    </div>
  );
}
