'use client'; // Thêm dòng này để chỉ định đây là một Client Component
import { useState } from 'react';
import dynamic from 'next/dynamic';
 import '@/styles/blognew.css';
import { CKEditor } from 'ckeditor4-react';

export default function BlogNew() {

  const handleCancel = () => {
    window.location.href = "/admin/dashboard/blog/blognew"; // Đường dẫn bạn muốn chuyển đến
  };
   

    return (
      <div className="news-form-container">
      <form>
        <div className="row">
          {/* Cột bên trái - Nội Dung */}
          <div className="col-lg-8">
            <section className="section">
              <h3>Nội Dung</h3>
              <div className="form-group">
                <label>Tiêu đề *</label>
                <input type="text" placeholder="Nhập tiêu đề" required />
              </div>
              <div className="form-group">
                <label>Mô tả ngắn *</label>
                <textarea placeholder="Nhập mô tả ngắn" required></textarea>
              </div>
              <div className="form-group full-width">
                <label>Nội dung chi tiết *</label>
                <textarea placeholder="Nhập nội dung chi tiết" required></textarea>
              </div>
            </section>
          </div>
    
          {/* Cột bên phải - Hiển Thị */}
          <div className="col-lg-4">
            <section className="section">
              <h3>Hiển Thị</h3>
              <div className="form-group">
                <label>URL</label>
                <input type="text" placeholder="Nhập URL" />
              </div>
              <div className="form-group">
                <label>Thời gian đăng</label>
                <input type="datetime-local" />
              </div>
              
              <div className="form-group">
                <label>Danh mục tin *</label>
                <input type="text" placeholder="Chọn danh mục" required />
              </div>
              <div className="form-group">
                <label>Hình Ảnh</label>
                <div className="image-upload">
                  <div className="image-preview">140x140</div>
                  <input type="file" accept="image/*" />
                </div>
              </div>
            </section>
     
    
            
          </div>
        </div>
    
        {/* Nút */}
        <div className="form-actions">
          <button type="button" className="cancel-btn"onClick={handleCancel} >Hủy</button>
          <button type="submit" className="save-btn">Lưu</button>
        </div>
      </form>
    </div>
    
    );
}




