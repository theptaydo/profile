'use client'; // Thêm dòng này để báo rằng đây là một Client Component

import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import 'bootstrap-icons/font/bootstrap-icons.css'; // Import Bootstrap Icons CSS
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function Header() {
  const [isActive, setIsActive] = useState(false);
  const router = useRouter();
  // Hàm xử lý click
  const handleSidebarClick = () => {
    setIsActive(!isActive);
  };

  const signout = () => {
    localStorage.removeItem('token');
    router.push('/admin');
  }

  const [avatar, setAvatar] = useState<string | null>(null);
  const [name, setName] = useState<string | null>(null);

  useEffect(() => {
    // Chỉ chạy trên client, lấy avatar từ localStorage
    const storedAvatar = localStorage.getItem('avatar');
    const storedName = localStorage.getItem("fullname");
    setAvatar(storedAvatar);
    setName(storedName);
  }, []);

  useEffect(() => {
    // Chỉ chạy trên client, lấy avatar từ localStorage
    const storedAvatar = localStorage.getItem('avatar');
    setAvatar(storedAvatar);
  }, []);


  return (
    <>
      <nav className="navbar default-layout-navbar col-lg-12 col-12 p-0 fixed-top d-flex flex-row">
        <div className="text-center navbar-brand-wrapper d-flex align-items-center justify-content-start">
          <a className="navbar-brand brand-logo" href="/">
            <img src="/img/logo/LOGO-slogan-xich-ma.png" alt="logo" />
          </a>
          <a className="navbar-brand brand-logo-mini" href="/">
            <img src="/img/logo/logo-xichma-mini.png" alt="logo" />
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
                  <img src={avatar || ""} alt="image" />
                  <span className="availability-status online"></span>
                </div>
                <div className="nav-profile-text">
                  <p className="mb-1 text-black">{name}</p>
                </div>
                {/* <i className="bi bi-chevron-down"></i> */}
              </a>
              <div className="dropdown-menu navbar-dropdown" aria-labelledby="profileDropdown">
                <a className="dropdown-item" href="#">
                  <i className="bi bi-arrow-clockwise"></i>
                  Activity Log
                </a>
                <div className="dropdown-divider"></div>
                {/* <a className="dropdown-item" href="#">
                  <i className="bi bi-power text-primary"></i>
                  Signout
                </a> */}
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
              <a className="nav-link" href="#" onClick={signout}>
                <i className="bi bi-power"></i>
              </a>
            </li>
            <li className="nav-item nav-settings d-none d-lg-block">
              <a className="nav-link" href="#">
                <i className="mdi mdi-format-line-spacing"></i>
              </a>
            </li>
          </ul>
          <button className="navbar-toggler navbar-toggler-right d-lg-none align-self-center" type="button" data-toggle="offcanvas"
            onClick={handleSidebarClick}
          >
            <i className="bi bi-list"></i>
          </button>
        </div>
      </nav>

      <nav className={`sidebar sidebar-offcanvas ${isActive ? 'active' : ''}`} id="sidebar">
        <ul className="nav">
          <li className="nav-item nav-profile">
            <a href="#" className="nav-link">
              <div className="nav-profile-image">
                <img src={avatar || ""} alt="profile" />
                <span className="login-status online"></span>
              </div>
              <div className="nav-profile-text d-flex flex-column">
                <span className="font-weight-bold mb-2">{name}</span>
                <span className="text-secondary text-small">Project Manager</span>
              </div>
              <i className="bi bi-bookmark-check-fill menu-icon"></i>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="index.html">
              <span className="menu-title">Dashboard</span>
              <i className="bi bi-house menu-icon"></i>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" data-bs-toggle="collapse" href="#ui-basic" aria-expanded="false" aria-controls="ui-basic">
              <span className="menu-title">Basic UI Elements</span>
              <i className="bi bi-chevron-down menu-icon"></i>
              <i className="bi bi-bullseye menu-icon"></i>
            </a>
            <div className="collapse" id="ui-basic">
              <ul className="nav flex-column sub-menu">
                <li className="nav-item">
                  <a className="nav-link" href="pages/ui-features/buttons.html"><i className="bi bi-arrow-right-short"></i> Buttons</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="pages/ui-features/dropdowns.html"><i className="bi bi-arrow-right-short"></i>Dropdowns</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="pages/ui-features/typography.html"><i className="bi bi-arrow-right-short"></i>Typography</a>
                </li>
              </ul>
            </div>
          </li>

          <li className="nav-item">
            <a className="nav-link" data-bs-toggle="collapse" href="#icons" aria-expanded="false" aria-controls="icons">
              <span className="menu-title">Icons</span>
              <i className="bi bi-person-lines-fill menu-icon"></i>
            </a>
            <div className="collapse" id="icons">
              <ul className="nav flex-column sub-menu">
                <li className="nav-item">
                  <a className="nav-link" href="pages/icons/font-awesome.html">Font Awesome</a>
                </li>
              </ul>
            </div>
          </li>


          <li className="nav-item">
          <Link href={"/admin/dashboard/account"} className="menu-title">
            <p className="nav-link" aria-expanded="false" aria-controls="icons">
              <span className="menu-title">Người dùng</span>
              <i className="bi bi-person-lines-fill menu-icon"></i>
            </p>
          </Link>            
          </li>
          
        </ul>
      </nav>
    </>
  );
}
