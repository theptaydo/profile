'use client';
import React from "react";
import "@/styles/home/postdetails.css";
 
export default function Postdetails() {
   
    return (
      <div className="home-article" >
      {/* Bài viết chi tiết */}
      <div className="article-content">
        <div className="article-header">
           
          <div>
            <h4>Thép Tây Đô Tổng Kết 9 Tháng Đầu Năm 2024: Thành Tựu và Kế Hoạch Phát Triển Cuối Năm</h4>
            <p>Sep 29, 2017 at 9:48 am</p>
          </div>
        </div>
        <div className="article-body">
          <p>Năm 2024, Công ty Thép Tây Đô đã đối mặt với những thách thức từ thị trường thép trong nước và quốc tế. Tuy nhiên, nhờ sự chỉ đạo quyết liệt từ Ban Lãnh đạo cùng sự nỗ lực của toàn thể cán bộ công nhân viên, Thép Tây Đô đã vượt qua nhiều khó khăn và đạt được các kết quả đáng khích lệ trong 9 tháng đầu năm.</p>
          <img src="/img/news/2.png" alt="Example" className="article-image" />
          <p>Kết quả sản xuất kinh doanh:
Phế liệu: Công ty thu mua được 142.000 tấn, đạt 105% kế hoạch trong nước và 62% kế hoạch nhập khẩu.
Phôi thép: Sản xuất đạt 130.700 tấn, chiếm tỷ trọng lớn trong doanh thu công ty.
Thép thành phẩm: Sản lượng đạt 19.000 tấn trong nước và 48.000 tấn xuất khẩu, nhưng sản xuất chưa ổn định do sự cố kỹ thuật.
Doanh thu: Tổng doanh thu đạt 3.018 tỷ đồng, đạt 100% kế hoạch 9 tháng và 75% kế hoạch cả năm.</p>
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