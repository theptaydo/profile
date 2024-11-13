'use client'; // Thêm dòng này nếu bạn sử dụng các hook hoặc sự kiện liên quan đến client
import "@/styles/main.css";
export default function News() {

    return(
<>
<section className="home-news">
  <div className="news-container">
  <div className="news-main-content">
          {/* Large Main News */}
          <div className="news-large-post">
            <img src="img/news/2.png" alt="Main News Image" />
            <div className="news-large-post-content">
              <h2 className="news-large-post-title">
                How Did van Gogh’s Turbulent Mind Depict One of the Most Complex Concepts in Physics?
              </h2>
              <div className="news-large-post-meta">Katy Liu • Sep 29, 2017 at 9:48 am</div>
            </div>
          </div>

          {/* Grid News Posts */}
          <div className="news-grid-posts">
            <div className="news-grid-post">
              <img src="img/news/1.jpg" alt="News Image" />
              <div className="news-grid-post-content">
                <h3 className="news-grid-post-title">
                  How Did van Gogh’s Turbulent Mind Depict One of the Most Complex Concepts in Physics?
                </h3>
                <div className="news-grid-post-meta">Katy Liu • Sep 29, 2017 at 9:48 am</div>
              </div>
            </div>
            <div className="news-grid-post">
              <img src="img/news/3.jpg" alt="News Image" />
              <div className="news-grid-post-content">
                <h3 className="news-grid-post-title">
                  How Did van Gogh’s Turbulent Mind Depict One of the Most Complex Concepts in Physics?
                </h3>
                <div className="news-grid-post-meta">Katy Liu • Sep 29, 2017 at 9:48 am</div>
              </div>
            </div>
          </div>
        </div>


            <div className="news-sidebar">
                {/* Small Sidebar News Posts */}
                <div className="news-small-post">
                    <img src="img/news/4.jpg" alt="Sidebar News Image" />
                    <div className="news-small-post-content">
                        <div className="news-small-post-title">How Did van Gogh’s Turbulent Mind</div>
                        <div className="news-small-post-meta">Katy Liu • Sep 29</div>
                    </div>
                </div>
                <div className="news-small-post">
                    <img src="img/news/5.jpg" alt="Sidebar News Image" />
                    <div className="news-small-post-content">
                        <div className="news-small-post-title">How Did van Gogh’s Turbulent Mind</div>
                        <div className="news-small-post-meta">Katy Liu • Sep 29</div>
                    </div>
                </div>
                <div className="news-small-post">
                    <img src="img/news/6.jpg" alt="Sidebar News Image" />
                    <div className="news-small-post-content">
                        <div className="news-small-post-title">How Did van Gogh’s Turbulent Mind</div>
                        <div className="news-small-post-meta">Katy Liu • Sep 29</div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</>
    );
}
