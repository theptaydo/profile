'use client'; // Thêm dòng này để chỉ định đây là một Client Component
import dynamic from 'next/dynamic';
 import '@/styles/blognew.css';
import { CKEditor } from 'ckeditor4-react';
import { title } from 'process';
import { useRouter } from "next/navigation";
import { useState } from "react";
import axios from "axios";
interface FormData {
  index: string;
  title: string;
  content: string;
  description: string;
  category: string;
  status: boolean;
  SEO: string;
}
export default function BlogNew() {
  const router = useRouter();
 

  const [formData, setFormData] = useState<FormData>({
    index: "",
    title:  "",
    content: "",
    description: "",
    category: "",
    status: false, 
    SEO: ""
  });
  const [previewImage, setPreviewImage] = useState(""); // Lưu URL của ảnh xem trước

 
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  

   

  // Gửi dữ liệu bài viết lên API
  const handleSubmit = async (e:any) => {
    e.preventDefault(); // Ngăn chặn tải lại trang

     
    const token = localStorage.getItem('token');
    
    // Kiểm tra token có tồn tại hay không
    if (!token) {
      console.error('Token không tồn tại. Vui lòng đăng nhập lại.');
      return; // Dừng hàm nếu không có token
    }
   
  
    try {
      // Gửi yêu cầu API với token
      const response = await axios.post(
        "https://tsc-eshop.vercel.app/api/v1/post", 
        formData, 
        {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`, // Đưa token vào header Authorization
          },
        }
      );
  
      // Kiểm tra phản hồi từ API
      if (response.status === 200 || response.status === 201) {
        console.log("Bài viết đã được lưu thành công");
      } else {
        console.error("Lỗi từ server:", response.data);
      }
    } catch (error) {
      console.error("Lỗi khi lưu bài viết:", error);
    }
  };
      

      
      console.log('>>> call render: ', formData);
    return (
    
      <div className="news-form-container">
      <form onSubmit={handleSubmit}>
        <div className="row" >
          
          <div className="col-lg-8">
            <section className="section">
              <h3>Nội Dung</h3>
              <div className="form-group">
                <label>Tiêu đề *</label>
                <input 
                type="text" 
                name="title"
                value={formData.title}
                onChange={handleChange}
                placeholder="Nhập tiêu đề" 
                required />

              </div>
              <div className="form-group">
                <label>Mô tả ngắn *</label>
                <textarea 
                name="description"
                value={formData.description}
                onChange={handleChange}
                placeholder="Nhập mô tả ngắn"
                 required></textarea>
              </div>
              <div className="form-group full-width">
                <label>Nội dung chi tiết *</label>
                <textarea 
                 name="content"
                 value={formData.content}
                 onChange={handleChange}
                placeholder="Nhập nội dung chi tiết"
                 required></textarea>
              </div>
            </section>
            <section>
            <h3>SEO</h3>
              <div className="form-group">
                <label>Thẻ từ khóa *</label>
                <textarea 
                name="SEO"
                value={formData.SEO}
                onChange={handleChange}
                placeholder="Nhập mô tả ngắn"
                 required></textarea>
              </div> 
            </section>
          </div>
    
        
          <div className="col-lg-4">
            <section className="section">
              <h3>Hiển Thị</h3>
              <div className="form-group">
                <label>Index</label>
                <input 
                 type="text"
                 name="index"
                 value={formData.index}
                 onChange={handleChange}
                placeholder="Nhập index" />
              </div>
              <div className="form-group">
              <label>Trạng Thái *</label>
              <div className="dropdown-wrapper">
                <select
                  name="status"
                  value={formData.status ? 'true' : 'false'}
                  onChange={handleChange}
                  required
                >
                  <option value="true">Hiển Thị</option>
                  <option value="false">Nháp</option>
                  
                </select>
              </div>
            </div>
              <div className="form-group">
              <label>Danh mục tin *</label>
              <div className="dropdown-wrapper">
                <select 
                 name="category"
                 value={formData.category}
                 onChange={handleChange}
                required>
                   
                  <option value="news">Tin tức</option>
                  <option value="introduction">Giới thiệu chung</option>
                  <option value="partners">Đối tác phân phối</option>
                </select>
              </div>
            </div>

             
                
            </section>
     
    
            
          </div>
        </div>
    
        {/* Nút */}
        <div className="form-actions">
          <button type="button" className="cancel-btn" onClick={() => router.push("/admin/dashboard/blog")} >Hủy</button>
          <button type="submit"   className="save-btn" >Lưu</button>
        </div>
      </form>
    </div>
    
    );
}




