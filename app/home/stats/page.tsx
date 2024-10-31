import { useEffect } from 'react';

export default function Stats() {
  useEffect(() => {
    const counters = document.querySelectorAll('.purecounter');

    // Define counter type as HTMLElement
    const animateCounter = (counter: HTMLElement) => {
      const target = parseInt(counter.getAttribute('data-purecounter-end') || "0", 10);
      const speed = 200;
      const updateCount = () => {
        const count = parseInt(counter.innerText || "0", 10);
        const increment = target / speed;

        if (count < target) {
          counter.innerText = Math.ceil(count + increment).toString();
          setTimeout(updateCount, 20);
        } else {
          counter.innerText = target.toString();
        }
      };
      counter.innerText = "0";
      updateCount();
    };

    // Specify the parameter types for IntersectionObserver entries and observer
    const observer = new IntersectionObserver(
      (entries: IntersectionObserverEntry[], observer: IntersectionObserver) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const counter = entry.target as HTMLElement;
            animateCounter(counter);
            observer.unobserve(counter); // Stop observing once animated
          }
        });
      },
      { threshold: 0.5 }
    );

    counters.forEach((counter) => observer.observe(counter as HTMLElement));
  }, []);

  return (
    <>
      <section id="stats" className="stats section">
        <div className="container" data-aos="fade-up" data-aos-delay="100">
          <div className="row gy-4">
            <div className="col-lg-3 col-md-6 d-flex flex-column align-items-center">
              <i className="bi bi-emoji-smile"></i>
              <div className="stats-item">
                <span
                  data-purecounter-start="0"
                  data-purecounter-end="500"
                  className="purecounter"
                >0</span>
                <p>Khách hàng hài lòng</p>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 d-flex flex-column align-items-center">
              <i className="bi bi-journal-richtext"></i>
              <div className="stats-item">
                <span
                  data-purecounter-start="0"
                  data-purecounter-end="150"
                  className="purecounter"
                >0</span>
                <p>Dự án đã hoàn thành</p>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 d-flex flex-column align-items-center">
              <i className="bi bi-headset"></i>
              <div className="stats-item">
                <span
                  data-purecounter-start="0"
                  data-purecounter-end="2000"
                  className="purecounter"
                >0</span>
                <p>Giờ hỗ trợ khách hàng</p>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 d-flex flex-column align-items-center">
              <i className="bi bi-people"></i>
              <div className="stats-item">
                <span
                  data-purecounter-start="0"
                  data-purecounter-end="100"
                  className="purecounter"
                >0</span>
                <p>Nhân viên tài năng</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
