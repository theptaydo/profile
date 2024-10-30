'use client'; // Thêm dòng này để báo rằng đây là một Client Component

import Link from 'next/link';
import { useState } from 'react';
import '@/styles/main.css';
import useTrans from '../pages/useTrans';
import { usePathname } from 'next/navigation';

export default function Header() {
  const pathname = usePathname();
  const newLocale = pathname.startsWith('/en') ? '/vi' : '/en';

  const trans = useTrans();
  const setLanguage = (lang: string) => {
    localStorage.setItem('lang', lang);
    window.location.reload();
  };
  return (
    <div>
      <header id="header" className="header sticky-top">
        <div className="topbar d-flex align-items-center">
          <div className="container d-flex justify-content-center justify-content-md-between">
            <div className="contact-info d-flex align-items-center">
              <i className="bi bi-envelope d-flex align-items-center">
                <a href="mailto:contact@example.com">contact@theptaydo.com</a>
              </i>
              <i className="bi bi-phone d-flex align-items-center ms-4">
                <span>+1 5589 55488 55</span>
              </i>
            </div>
            <div className="social-links d-none d-md-flex align-items-center">
              <a href="#" className="twitter"><i className="bi bi-twitter"></i></a>
              <a href="#" className="facebook"><i className="bi bi-facebook"></i></a>
              <a href="#" className="instagram"><i className="bi bi-instagram"></i></a>
              <a href="#" className="linkedin"><i className="bi bi-linkedin"></i></a>
            </div>
          </div>
        </div>

        <div className="branding d-flex align-items-center">
          <div className="container position-relative d-flex align-items-center justify-content-between">
            <a href="index.html" className="logo d-flex align-items-center">
              {/* Uncomment the line below if you also wish to use an image logo */}
              {/* <img src="./assets/img/logo.png" alt="Logo" /> */}
              <h1 className="sitename">
                <img src="/img/LOGO-slogan-xich-ma.png" alt="Slogan" />
              </h1>
            </a>

            <nav id="navmenu" className="navmenu">
              <ul>
                <li><a href="#hero" className="active">{trans.HomePage.home}</a></li>
                <li><a href="#about">Giới thiệu</a></li>
                <li><a href="#services">Dịch vụ</a></li>
                <li><a href="#portfolio">Hồ sơ</a></li>
                <li><a href="#team">Đội ngũ</a></li>
                <li className="dropdown">
                  <a href="#"><span>Sản phẩm</span> <i className="bi bi-chevron-down toggle-dropdown"></i></a>
                  <ul>
                    <li><a href="#">Phôi thép</a></li>
                    <li className="dropdown">
                      <a href="#"><span>Thép xây dựng</span> <i className="bi bi-chevron-down toggle-dropdown"></i></a>
                      <ul>
                        <li><a href="#">Thép thanh vằn</a></li>
                        <li><a href="#">Thép ...</a></li>
                        <li><a href="#">Thép ...</a></li>
                        <li><a href="#">Thép ...</a></li>
                        <li><a href="#">Thép ...</a></li>
                      </ul>
                    </li>
                    <li><a href="#">Thép gì đó</a></li>
                    <li><a href="#">Thép ba chấm</a></li>
                    <li><a href="#">Thép</a></li>
                  </ul>
                </li>
                <li><a href="#contact">Liên hệ</a></li>
                <li className="dropdown">
                  {/* <Link href="/">
                    TV
                  </Link> */}


                  <a href="#">
                    <span>
                      <img className="flag" src="/img/langs/Flag_of_Vietnam.svg.png" alt="Vietnam Flag" />Tiếng Việt
                    </span>
                    <i className="bi bi-chevron-down toggle-dropdown"></i>
                  </a>
                  <ul>
                    <li><a href="#" className="langs">
                      <img className="flag" src="/img/langs/Flag_of_Cambodia.svg.png" alt="Cambodia Flag" />
                      Cambodia
                    </a></li>
                    <li><a onClick={() => setLanguage('en')} className="langs">
                      <img className="flag" src="/img/langs/Flag_of_the_United_Kingdom.png" alt="UK Flag" />
                      English
                    </a></li>
                    <li><a href="#" className="langs">
                      <img className="flag" src="/img/langs/china.png" alt="China Flag" />
                      中国
                    </a></li>
                    <li><a href="#" className="langs">
                      <img className="flag" src="/img/langs/Flag_of_Japan_(bordered).svg.png" alt="Japan Flag" />
                      日本
                    </a></li>
                  </ul>
                </li>
              </ul>
              <i className="mobile-nav-toggle d-xl-none bi bi-list"></i>
            </nav>
          </div>
        </div>
      </header>
    </div>
  );
}
