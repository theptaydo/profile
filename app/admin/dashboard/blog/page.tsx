 'use client'; // Thêm dòng này để báo rằng đây là một Client Component
import"@/styles/home/blog.css";

export default function Blog() {
    const posts = [
        {
          id: 1,
          date: "08 Nov 2023",
          title: "Whiteboard Templates By Industry Leaders",
          image: "https://via.placeholder.com/300x200", // Thay URL bằng ảnh thực
          avatar: "https://via.placeholder.com/50", // Thay URL bằng avatar thực
        },
        {
          id: 2,
          date: "09 Apr 2024",
          title: "Tesla Cybertruck-inspired camper trailer for Tesla fans...",
          image: "https://via.placeholder.com/300x200",
          avatar: "https://via.placeholder.com/50",
        },
        {
          id: 3,
          date: "12 Sep 2023",
          title: "Designify Agency Landing Page Design",
          image: "https://via.placeholder.com/300x200",
          avatar: "https://via.placeholder.com/50",
        },
      ];
      const handleButtonClick = () => {
        window.location.href = "admin/dashboard/blog/blognew"; // Đường dẫn bạn muốn chuyển đến
      };
      return (
        <div className="blog-container">
            <div className="blog-body">
        {/* Header */}
        <header className="blog-header">
        <h3 className="page-title">
            <span className="page-title-icon bg-gradient-primary text-white me-2">
              <i className="bi bi-house"></i>
            </span> Blog
          </h3>
          <div className="header-actions">
            <input
              type="text"
              placeholder="Search post..."
              className="search-input"
            />
            <button className="new-post-button" onClick={handleButtonClick}>+ New post</button>
          </div>
        </header>
  
        {/* Blog Posts */}
        <div className="blog-posts">
          {posts.map((post) => (
            <div key={post.id} className="post-card">
              <img src={post.image} alt={post.title} className="post-image" />
              <div className="post-content">
                <div className="author-info">
                  <img src={post.avatar} alt="Author" className="avatar" />
                </div>
                <p className="post-date">{post.date}</p>
                <h2 className="post-title">{post.title}</h2>
              </div>
            </div>
          ))}
        </div>
        </div>
      </div>
  );
};

 