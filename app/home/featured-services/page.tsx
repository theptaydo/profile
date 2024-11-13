'use client'; // Để báo rằng đây là một Client Component
 
import useTrans from '../../pages/useTrans';
import { useEffect } from 'react';

export default function FeaturedServices() {

  const trans = useTrans();
  
  useEffect(() => {
    // Chọn tất cả các phần tử cần áp dụng hiệu ứng
    const elements = document.querySelectorAll('.featured-services .col-xl-3');
  
    if ('IntersectionObserver' in window) {
      const observer = new IntersectionObserver(
        (entries, observer) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('top-slide'); // Thêm lớp để kích hoạt hiệu ứng
              observer.unobserve(entry.target); // Ngừng giám sát phần tử sau khi kích hoạt hiệu ứng
            }
          });
        },
        {
          root: null, // Sử dụng viewport làm root
          threshold: 0.2, // Kích hoạt khi 20% của phần tử đã vào viewport
        }
      );
  
      elements.forEach((element) => observer.observe(element));
  
      // Dọn dẹp Intersection Observer khi component bị hủy
      return () => observer.disconnect();
    }
  }, []);
  
  
  return (
    <section id="featured-services" className="featured-services section">
      <div className="container">
        <div className="row gy-4">

          {/* Service 1: Cung cấp thép xây dựng */}
          <div className=" col-xl-3 col-md-6 d-flex" data-aos="fade-up" data-aos-delay="100">
            <div className="service-item position-relative">
              <div className="icon"><i className="bi bi-building icon"></i></div>
              <h4><a href="#" className="stretched-link">{trans.HomePage.featuredServices.one.title}</a></h4>
              <p>{trans.HomePage.featuredServices.one.description}</p>
            </div>
          </div>

          {/* Service 2: Gia công thép theo yêu cầu */}
          <div className="   col-xl-3 col-md-6 d-flex" data-aos="fade-up" data-aos-delay="200">
            <div className="service-item position-relative">
              <div className="icon"><i className="bi bi-wrench icon"></i></div>
              <h4><a href="#" className="stretched-link">{trans.HomePage.featuredServices.two.title}</a></h4>
              <p>{trans.HomePage.featuredServices.two.description}</p>
            </div>
          </div>

          {/* Service 3: Tư vấn giải pháp thép */}
          <div className="   col-xl-3 col-md-6 d-flex" data-aos="fade-up" data-aos-delay="300">
            <div className="service-item position-relative">
              <div className="icon"><i className="bi bi-lightbulb icon"></i></div>
              <h4><a href="#" className="stretched-link">{trans.HomePage.featuredServices.three.title}</a></h4>
              <p>{trans.HomePage.featuredServices.three.description}</p>
            </div>
          </div>

          {/* Service 4: Vận chuyển và lắp đặt thép */}
          <div className="  col-xl-3 col-md-6 d-flex" data-aos="fade-up" data-aos-delay="400">
            <div className="service-item position-relative">
              <div className="icon"><i className="bi bi-truck icon"></i></div>
              <h4><a href="#" className="stretched-link">{trans.HomePage.featuredServices.four.title}</a></h4>
              <p>{trans.HomePage.featuredServices.four.description}</p>
            </div>
          </div>

        </div>
      </div>
    </section>

  );
}