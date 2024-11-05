'use client'

import '@/assets/admin/css/style.css';
//  plugins:css 
// import '@/assets/vendors/mdi/css/materialdesignicons.min.css';
// import '@/assets/vendors/ti-icons/css/themify-icons.css';
// import '@/assets/vendors/css/vendor.bundle.base.css';
// import '@/assets/vendors/font-awesome/css/font-awesome.min.css';

import Script from 'next/script';

export default function Login() {

  return (
    <>
      <div className="container-scroller">
        <div className="container-fluid page-body-wrapper full-page-wrapper">
          <div className="content-wrapper d-flex align-items-center auth">
            <div className="row flex-grow">
              <div className="col-lg-4 mx-auto">
                <div className="auth-form-light text-left p-5">
                  <div className="brand-logo">
                    <img src="/img/LOGO-slogan-xich-ma.png" />
                  </div>
                  <h4>Hello! let's get started</h4>
                  <h6 className="font-weight-light">Sign in to continue.</h6>
                  <form className="pt-3">
                    <div className="form-group">
                      <input type="email" className="form-control form-control-lg" id="exampleInputEmail1" placeholder="Username" />
                    </div>
                    <div className="form-group">
                      <input type="password" className="form-control form-control-lg" id="exampleInputPassword1" placeholder="Password" />
                    </div>
                    <div className="mt-3 d-grid gap-2">
                      <a className="btn btn-block btn-gradient-primary btn-lg font-weight-medium auth-form-btn" href="/">SIGN IN</a>
                    </div>
                    <div className="my-2 d-flex justify-content-between align-items-center">
                      <div className="form-check">
                        <label className="form-check-label text-muted">
                          <input type="checkbox" className="form-check-input" /> Keep me signed in </label>
                      </div>
                      <a href="#" className="auth-link text-primary">Forgot password?</a>
                    </div>
                    <div className="mb-2 d-grid gap-2">
                      <button type="button" className="btn btn-block btn-facebook auth-form-btn">
                        <i className="mdi mdi-facebook me-2"></i>Connect using facebook </button>
                    </div>
                    <div className="text-center mt-4 font-weight-light"> Don't have an account? <a href="/" className="text-primary">Create</a>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Script src="@/assets/vendors/js/vendor.bundle.base.js"></Script>
      <Script src="@/assets/js/off-canvas.js"></Script>
      <Script src="@/assets/js/misc.js"></Script>
      <Script src="@/assets/js/settings.js"></Script>
      <Script src="@/assets/js/todolist.js"></Script>
      <Script src="@/assets/js/jquery.cookie.js"></Script>
    </>
  );
}
