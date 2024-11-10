'use client'

import '@/styles/main.css';
import Head from 'next/head';
import Script from 'next/script';
import useTrans from '@/app/pages/useTrans';
import { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
// import 'bootstrap/dist/css/bootstrap.min.css';

export default function AppFooter() {
  const trans = useTrans();
  useEffect(() => {
    // Chọn phần tử footer-newsletter
    const newsletterSection = document.querySelector('.footer-newsletter');
  
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
  
      // Quan sát phần tử footer-newsletter
      if (newsletterSection) observer.observe(newsletterSection);
  
      // Dọn dẹp khi component bị hủy
      return () => observer.disconnect();
    }
  }, []);
  
  return (
    <div>

      <footer id="footer" className="footer">
        <div className="footer-newsletter">
          <div className="container">
            <div className="row justify-content-center text-center">
              <div className="col-lg-6">
                <h4>{trans.footer.content}</h4>
                <p>{trans.footer.message}</p>
                <form action="forms/newsletter.php" method="post" className="php-email-form">
                  <div className="newsletter-form">
                    <input type="email" name="email" placeholder={trans.footer.placeholder}/>
                    <input type="submit" value="Đăng Ký" />
                  </div>
                  <div className="loading">{trans.footer.loading}</div>
                  <div className="error-message"></div>
                  <div className="sent-message">{trans.footer.sent}</div>
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
                  {trans.footer.section[0].brand}
                </span>
              </a>
              <div className="footer-contact pt-3">
                <p>{trans.footer.section[0].address}</p>
                {/* <p>Quận Bình Thủy, TP. Cần Thơ</p> */}
                <p className="mt-3">
                  <strong>{trans.footer.section[0].phone.title}</strong> <span>{trans.footer.section[0].phone.value}</span>
                </p>
                <p>
                  <strong>{trans.footer.section[0].email.title}</strong> <span>{trans.footer.section[0].email.value}</span>
                </p>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 footer-about">
              <a href="index.html" className="d-flex align-items-center">
                <span className="sitename">{trans.footer.section[1].brand}</span>
              </a>
              <div className="footer-contact pt-3">
                <p>{trans.footer.section[1].address}</p>
                {/* <p>Quận Bình Thủy, TP. Cần Thơ</p> */}
                <p className="mt-3">
                  <strong>{trans.footer.section[1].phone.title}</strong> <span>{trans.footer.section[1].phone.value}</span>
                </p>
                <p>
                  <strong>{trans.footer.section[1].email.title}</strong> <span>{trans.footer.section[1].email.value}</span>
                </p>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 footer-about">
              <a href="index.html" className="d-flex align-items-center">
                <span className="sitename">{trans.footer.section[2].brand}</span>
              </a>
              <div className="footer-contact pt-3">
                <p>{trans.footer.section[2].address}</p>
                {/* <p>Quận Ninh Kiều, TP. Cần Thơ</p> */}
                <p className="mt-3">
                  <strong>{trans.footer.section[2].phone.title}</strong> <span>{trans.footer.section[2].phone.value}</span>
                </p>
                <p>
                  <strong>{trans.footer.section[2].email.title}</strong> <span>{trans.footer.section[2].email.value}</span>
                </p>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 footer-about">
              <a href="index.html" className="d-flex align-items-center">
                <span className="sitename">{trans.footer.section[3].brand}</span>
              </a>
              <div className="footer-contact pt-3">
                <p>{trans.footer.section[3].address}</p>
                {/* <p>Quận Bình Thủy, TP. Cần Thơ</p> */}
                <p className="mt-3">
                  <strong>{trans.footer.section[3].phone.title}</strong> <span>{trans.footer.section[1].phone.value}</span>
                </p>
                <p>
                  <strong>{trans.footer.section[3].email.title}</strong> <span>{trans.footer.section[1].email.value}</span>
                </p>
              </div>
            </div>


            <div className="col-lg-4 col-md-12">
              <p>
                <b>{trans.footer.cert.title}</b>
              </p>
              <p>
                <b>{trans.footer.cert.dateOfPlace}</b>
              </p>
              <p>
                <b>{trans.footer.cert.grant}</b>
              </p>
            </div>

            <div className="col-lg-4 col-md-12">
              <h4>{trans.footer.infor.title}</h4>
              <p>{trans.footer.infor.description}</p>
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
            © <span>{trans.footer.coppyright.title}</span> <strong className="px-1 sitename">{trans.footer.coppyright.brand}</strong> <span>{trans.footer.coppyright.subTitle}</span>
          </p>
          <div className="credits">
            {trans.footer.coppyright.developer} <a href="https://theanishtar.github.io">Davisoft</a>
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
