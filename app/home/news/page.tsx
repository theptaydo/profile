'use client'; // Thêm dòng này nếu bạn sử dụng các hook hoặc sự kiện liên quan đến client
import "@/styles/home/news.css";
import "@/styles/animation.css";
import useScrollEffect from "@/app/hook/useScrollEffect";
import { useEffect, useState } from "react";

export default function News() {
useScrollEffect();


// State để lưu dữ liệu bài viết và trạng thái tải
const [newsPosts, setNewsPosts] = useState([]);
const [loading, setLoading] = useState(true);

// Gọi API để lấy danh sách bài viết
useEffect(() => {
  console.log(window.innerWidth);
  const fetchNews = async () => {
    try {
      const response = await fetch("https://tsc-eshop.vercel.app/api/v1/posts");
      const data = await response.json();

      console.log(data);

      // Lưu dữ liệu bài viết vào state
      if (data && data.data) {
        setNewsPosts(data.data); // `data.data` là nơi chứa danh sách bài viết
      } else {
        setNewsPosts(data); 
      }
      setLoading(false);
    } catch (error) {
      console.error("Error fetching news:", error);
      setLoading(false);
    }
  };

  fetchNews();
}, []);

// Hiển thị trạng thái tải dữ liệu
if (loading) {
  return <div>Loading...</div>;
}

 
    return(
<>
<section className="home-news">
      <div className="news-container">
        <div className="news-main-content">
          {/* Large Main News */}
          {newsPosts[0] && (
            <div className="animations bottom news-large-post">
              <img src={newsPosts[0]?.banner} alt="Main News Image" />
              <div className="news-large-post-content">
                <h2 className="news-large-post-title">
                  {newsPosts[0]?.title || "No Title Available"}
                </h2>
                <div className="news-large-post-meta">
                  {newsPosts[0]?.createByUser || "Unknown Author"} •{" "}
                  {newsPosts[0]?.createAt
                    ? new Date(newsPosts[0].createAt).toLocaleDateString()
                    : ""}
                </div>
              </div>
            </div>
          )}

          {/* Grid News Posts */}
          <div className="news-grid-posts">
            {newsPosts.slice(1, 3).map((post, index) => (
              <div
                key={post._id}
                className={`animations ${
                  index % 2 === 0 ? "left" : "right"
                } news-grid-post`}
              >
                <img src={newsPosts[0]?.banner} alt="News Image" />
                <div className="news-grid-post-content">
                  <h3 className="news-grid-post-title">{post.title}</h3>
                  <div className="news-grid-post-meta">
                    {post.createByUser || "Unknown Author"} •{" "}
                    {new Date(post.createAt).toLocaleDateString()}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="news-sidebar">
          {/* Small Sidebar News Posts */}
          {newsPosts.slice(3).map((post) => (
            <div key={post._id} className="animations right news-small-post">
              <img src={newsPosts[0]?.banner} alt="Sidebar News Image" />
              <div className="news-small-post-content">
                <div className="news-small-post-title">{post.title}</div>
                <div className="news-small-post-meta">
                  {post.createByUser || "Unknown Author"} •{" "}
                  {new Date(post.createAt).toLocaleDateString()}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
</>
    );
 
   
   
 
}
