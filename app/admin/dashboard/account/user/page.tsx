'use client'; // Thêm dòng này để báo rằng đây là một Client Component
import"@/styles/formuser.css";
export default function UserFrom() {
    return (
        <div className="form-container">
        {/* Bố cục ngang */}
        <div className="section">
          {/* Thông tin cá nhân */}
          <div className="section-column">
            <h3>Thông tin cá nhân</h3>
            <div className="form-group">
              <div className="form-field">
                <label>
                  Họ đệm <span className="required">*</span>
                </label>
                <input type="text" placeholder="Nhập họ đệm" />
              </div>
              <div className="form-field">
                <label>
                  Tên <span className="required">*</span>
                </label>
                <input type="text" placeholder="Nhập tên" />
              </div>
            </div>
  
            <div className="form-group">
              <div className="form-field">
                <label>Số điện thoại</label>
                <input type="text" placeholder="Nhập số điện thoại" />
              </div>
              <div className="form-field">
                <label>Giới tính</label>
                <select>
                  <option value="">-- Chọn --</option>
                  <option value="male">Nam</option>
                  <option value="female">Nữ</option>
                  <option value="other">Khác</option>
                </select>
              </div>
            </div>
  
            <div className="form-field">
              <label>Địa chỉ</label>
              <textarea placeholder="Nhập địa chỉ"></textarea>
            </div>
          </div>
  
          {/* Tài khoản đăng nhập */}
          <div className="section-column">
            <h3>Tài khoản đăng nhập</h3>
            <div className="form-group">
              <div className="form-field">
                <label>
                  Tên đăng nhập <span className="optional">(Có thể bỏ trống)</span>
                </label>
                <input type="text" placeholder="Nhập tên đăng nhập" />
              </div>
              <div className="form-field">
                <label>
                  Địa chỉ Email <span className="required">*</span>
                </label>
                <input type="email" placeholder="Nhập email" />
              </div>
            </div>
  
            <div className="form-field">
              <label>
                Mật khẩu <span className="required">*</span>
              </label>
              <input type="password" placeholder="Nhập mật khẩu" />
            </div>
          </div>
        </div>
  
        {/* Nút hành động */}
        <div className="form-actions">
          <button className="cancel-btn">Hủy</button>
          <button className="save-btn">Lưu</button>
        </div>
      </div>
    );
}