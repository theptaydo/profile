import '@/styles/login.css';

export default function Login() {
  return (
    <div className="signup-container">
      {/* Left side: Form */}
      <div className="form-container">
        <h2>Đăng nhập</h2>

        <div className="form-group">
          <input type="text" placeholder="Email hoặc Username" />
        </div>

        <div className="form-group">
          <input type="password" placeholder="Mật khẩu" />
        </div>

        <div className="form-group">
          <button className="btn-signin">Đăng nhập</button>
        </div>
      </div>

      {/* Right side: Image */}
      <div className="image-container">
        <img src="/img/working.png" alt="Sign up illustration" />
      </div>
    </div>
  );
}
