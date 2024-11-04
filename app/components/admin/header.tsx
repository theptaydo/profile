'use client'; // Thêm dòng này để báo rằng đây là một Client Component

import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import 'bootstrap-icons/font/bootstrap-icons.css'; // Import Bootstrap Icons CSS

export default function Header() {
  return (
    <>
      <nav className="navbar default-layout-navbar col-lg-12 col-12 p-0 fixed-top d-flex flex-row">
        <div className="text-center navbar-brand-wrapper d-flex align-items-center justify-content-start">
          <a className="navbar-brand brand-logo" href="index.html">
            <img src="/admin/images/logo.svg" alt="logo" />
          </a>
          <a className="navbar-brand brand-logo-mini" href="index.html">
            <img src="/admin/images/logo-mini.svg" alt="logo" />
          </a>
        </div>
        <div className="navbar-menu-wrapper d-flex align-items-stretch">
          <button className="navbar-toggler navbar-toggler align-self-center" type="button" data-toggle="minimize">
            <i className="bi bi-list"></i>
          </button>
          <div className="search-field d-none d-md-block">
            <form className="d-flex align-items-center h-100" action="#">
              <div className="input-group">
                <div className="input-group-prepend bg-transparent">
                  <i className="bi bi-search"></i>
                </div>
                <input type="text" className="form-control bg-transparent border-0" placeholder="Search projects" />
              </div>
            </form>
          </div>
          <ul className="navbar-nav navbar-nav-right">
            {/* Profile Dropdown */}
            <li className="nav-item nav-profile dropdown">
              <a className="nav-link dropdown-toggle" id="profileDropdown" href="#" data-bs-toggle="dropdown" aria-expanded="false">
                <div className="nav-profile-img">
                  <img src="/admin/images/faces/face1.jpg" alt="image" />
                  <span className="availability-status online"></span>
                </div>
                <div className="nav-profile-text">
                  <p className="mb-1 text-black">David Greymaax</p>
                </div>
                <i className="bi bi-chevron-down"></i>
              </a>
              <div className="dropdown-menu navbar-dropdown" aria-labelledby="profileDropdown">
                <a className="dropdown-item" href="#">
                  <i className="bi bi-power"></i>
                  Activity Log
                </a>
                <div className="dropdown-divider"></div>
                <a className="dropdown-item" href="#">
                  <i className="bi bi-power"></i>
                  Signout
                </a>
              </div>
            </li>

            {/* Other Navbar Items */}
            <li className="nav-item d-none d-lg-block full-screen-link">
              <a className="nav-link">
                <i className="bi bi-fullscreen"></i>
              </a>
            </li>

            {/* Messages Dropdown */}
            <li className="nav-item dropdown">
              <a className="nav-link count-indicator dropdown-toggle" id="messageDropdown" href="#" data-bs-toggle="dropdown" aria-expanded="false">
                <i className="bi bi-envelope"></i>
                <span className="count-symbol bg-warning"></span>
              </a>
              <div className="dropdown-menu dropdown-menu-end navbar-dropdown preview-list" aria-labelledby="messageDropdown">
                <h6 className="p-3 mb-0">Messages</h6>
                <div className="dropdown-divider"></div>
                {/* Message Items */}
                <a className="dropdown-item preview-item">
                  <div className="preview-thumbnail">
                    <img src="/admin/images/faces/face4.jpg" alt="image" className="profile-pic" />
                  </div>
                  <div className="preview-item-content d-flex align-items-start flex-column justify-content-center">
                    <h6 className="preview-subject ellipsis mb-1 font-weight-normal">Mark sent you a message</h6>
                    <p className="text-gray mb-0">1 Minute ago</p>
                  </div>
                </a>
                {/* Repeat other message items as needed */}
                <h6 className="p-3 mb-0 text-center">4 new messages</h6>
              </div>
            </li>

            {/* Notifications Dropdown */}
            <li className="nav-item dropdown">
              <a className="nav-link count-indicator dropdown-toggle" id="notificationDropdown" href="#" data-bs-toggle="dropdown">
                <i className="bi bi-bell"></i>
                <span className="count-symbol bg-danger"></span>
              </a>
              <div className="dropdown-menu dropdown-menu-end navbar-dropdown preview-list" aria-labelledby="notificationDropdown">
                <h6 className="p-3 mb-0">Notifications</h6>
                <div className="dropdown-divider"></div>
                {/* Notification Items */}
                <a className="dropdown-item preview-item">
                  <div className="preview-thumbnail">
                    <div className="preview-icon bg-success">
                      <i className="bi bi-calendar"></i>
                    </div>
                  </div>
                  <div className="preview-item-content d-flex align-items-start flex-column justify-content-center">
                    <h6 className="preview-subject font-weight-normal mb-1">Event today</h6>
                    <p className="text-gray ellipsis mb-0">Just a reminder that you have an event today</p>
                  </div>
                </a>
                {/* Repeat other notification items as needed */}
                <h6 className="p-3 mb-0 text-center">See all notifications</h6>
              </div>
            </li>

            {/* Logout and Settings */}
            <li className="nav-item nav-logout d-none d-lg-block">
              <a className="nav-link" href="#">
                <i className="bi bi-power"></i>
              </a>
            </li>
            <li className="nav-item nav-settings d-none d-lg-block">
              <a className="nav-link" href="#">
                <i className="mdi mdi-format-line-spacing"></i>
              </a>
            </li>
          </ul>
          <button className="navbar-toggler navbar-toggler-right d-lg-none align-self-center" type="button" data-toggle="offcanvas">
            <i className="bi bi-list"></i>
          </button>
        </div>
      </nav>
    </>
  );
}
