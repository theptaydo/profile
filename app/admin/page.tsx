'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import '@/assets/admin/css/style.css';
import { CircularProgress } from '@mui/material';
export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter(); // Sử dụng useRouter để chuyển hướng
  const [loading,setLoading] =useState(true);
  // Hàm xử lý đăng nhập
  const handleSignIn = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch('https://tsc-eshop.vercel.app/api/v1/auth/signin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();
      if (response.ok) {
        // Lưu token, refreshToken, và avatar vào localStorage
        localStorage.setItem('token', data.user.token);
        localStorage.setItem('refreshToken', data.user.refreshToken);
        localStorage.setItem('avatar', data.user.picture);
        localStorage.setItem('fullname', data.user.fullName);

        // Chuyển hướng đến trang /admin/dashboard
        router.push('/admin/dashboard');
      } else {
        setError(data.message || 'Đăng nhập không thành công');
      }
    } catch (err) {
      setError('Có lỗi xảy ra. Vui lòng thử lại.');
    }
  };
  return (
    <>
      <div className="container-scroller">
        <div className="container-fluid page-body-wrapper full-page-wrapper">
          <div className="content-wrapper d-flex align-items-center auth">
            <div className="row flex-grow">
              <div className="col-lg-4 mx-auto">
                <div className="auth-form-light text-left p-5">
                  <div className="brand-logo">
                    <img src="/img/LOGO-slogan-xich-ma.png" alt="Logo" />
                  </div>
                  <h4>Hello! let&apos;s get started</h4>
                  <h6 className="font-weight-light">Sign in to continue.</h6>
                  {error && <div className="alert alert-danger">{error}</div>}
                  <form className="pt-3" onSubmit={handleSignIn}>
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control form-control-lg"
                        placeholder="Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="password"
                        className="form-control form-control-lg"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                    </div>
                    <div className="mt-3 d-grid gap-2">
                      <button
                        type="submit"
                        className="btn btn-block btn-gradient-primary btn-lg font-weight-medium auth-form-btn"
                      >
                        SIGN IN
                      </button>
                    </div>
                    <div className="my-2 d-flex justify-content-between align-items-center">
                      <div className="form-check">
                        <label className="form-check-label text-muted">
                          <input type="checkbox" className="form-check-input" /> Keep me signed in
                        </label>
                      </div>
                      <a href="#" className="auth-link text-primary">
                        Forgot password?
                      </a>
                    </div>
                    <div className="mb-2 d-grid gap-2">
                      <button type="button" className="btn btn-block btn-facebook auth-form-btn">
                        <i className="mdi mdi-facebook me-2"></i>Connect using facebook
                      </button>
                    </div>
                    <div className="text-center mt-4 font-weight-light">
                      Don&apos;t have an account?{' '}
                      <a href="/" className="text-primary">
                        Create
                      </a>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
