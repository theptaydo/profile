'use client';
import React,  { useEffect, useState } from "react";
import "@/styles/home/postdetails.css";
 
export default function Postdetails() {
    // State để lưu dữ liệu chi tiết bài viết và trạng thái tải
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  // Gọi API để lấy chi tiết bài viết
  const fetchPosts = async () => {
    try {
      const response = await axios.get("https://tsc-eshop.vercel.app/api/v1/posts");
      const formattedData = response.data.map((post) => ({
        id: post.id,
        title: post.title,
        date: post.date || "Chưa có ngày",
        image: post.image || "https://via.placeholder.com/140", // Hình ảnh mặc định
      }));
      setPosts(formattedData);
    } catch (error) {
      console.error("Lỗi khi lấy danh sách bài viết:", error);
    }
  };

  // Hiển thị trạng thái tải dữ liệu
  if (loading) {
    return <div>Loading...</div>;
  }

  // Nếu không có bài viết
  if (!post) {
    return <div>No post found</div>;
  }

    return (
      <div className="home-article">
      {/* Bài viết chi tiết */}
      <div className="article-content">
        <div className="article-header">
          <div>
            <h4>{post.title}</h4>
            <p>{new Date(post.createAt).toLocaleDateString()}</p>
          </div>
        </div>
        <div className="article-body">
          <p>{post.content || "No content available"}</p>
          <img src={post.banner} alt={post.title} className="article-image" />
        </div>
        <img src="/img/news/5.jpg" alt="Example" className="article-image" />
      </div>

      {/* Danh sách bài viết nổi bật */}
      <div className="sidebar">
        <h3>Tin Nổi Bật</h3>
        <div className="story">
          <img src="/img/news/3.jpg" alt="Story" className="story-image" />
          <div>
            <p>How Did van Gogh’s Turbulent Mind</p>
            <small>Katy Liu • Sep 29</small>
          </div>
        </div>
        <div className="story">
          <img src="/img/news/1.jpg" alt="Story" className="story-image" />
          <div>
            <p>How Did van Gogh’s Turbulent Mind</p>
            <small>Katy Liu • Sep 29</small>
          </div>
        </div>
        <div className="story">
          <img src="/img/news/4.jpg" alt="Feature" className="story-image" />
          <div>
            <p>How Did van Gogh’s Turbulent Mind</p>
          </div>
        </div>
      </div>
    </div>
    
    );
}