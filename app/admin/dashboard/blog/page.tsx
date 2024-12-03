 'use client'; // Thêm dòng này để báo rằng đây là một Client Component
import"@/styles/home/blog.css";
import { useState, useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
export default function Blog() {
  const router = useRouter();
  const [posts, setPosts] = useState([]);

  // Hàm gọi API để lấy danh sách bài viết
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

  useEffect(() => {
    fetchPosts(); // Gọi API khi thành phần được render
  }, []);

  // Điều hướng đến trang chỉnh sửa bài viết
  const handleEditPost = (post) => {
    router.push({
      pathname: "/admin/dashboard/blog/blognew",
      query: post,
    });
  };
       
      return (
        <div className="blog-container">
        <div className="blog-body">
          {/* Header */}
          <header className="blog-header">
            <h3 className="page-title">
              <span className="page-title-icon bg-gradient-primary text-white me-2">
                <i className="bi bi-house"></i>
              </span>{" "}
              Blog
            </h3>
            <div className="header-actions">
              <input
                type="text"
                placeholder="Search post..."
                className="search-input"
              />
              <button className="new-post-button" onClick={() => router.push("/admin/dashboard/blog/blognew")} >
                + New post
              </button>
            </div>
          </header>
  
          {/* Blog Posts */}
          <div className="blog-posts">
            {posts.length === 0 ? (
              <p>Loading posts...</p>
            ) : (
              posts.map((post) => (
                <div key={post.id} className="post-card" onClick={() => handleEditPost(post)}>
                  <img src={post.banner}  className="post-image" />
                  <div className="post-content">
                    <p className="post-date">{post.date}</p>
                    <h2 className="post-title" >{post.title}</h2>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
  );
};

 