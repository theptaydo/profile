'use client'; // Thêm dòng này để báo rằng đây là một Client Component

import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import 'bootstrap-icons/font/bootstrap-icons.css'; // Import Bootstrap Icons CSS

export default function Sidebar() {
  return (
    <>
      <nav className="sidebar sidebar-offcanvas" id="sidebar">
        <ul className="nav">
          <li className="nav-item nav-profile">
            <a href="#" className="nav-link">
              <div className="nav-profile-image">
                <img src="/admin/images/faces/face1.jpg" alt="profile" />
                <span className="login-status online"></span>
              </div>
              <div className="nav-profile-text d-flex flex-column">
                <span className="font-weight-bold mb-2">David Grey. H</span>
                <span className="text-secondary text-small">Project Manager</span>
              </div>
              <i className="bi bi-bookmark-check-fill"></i>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="index.html">
              <span className="menu-title">Dashboard</span>
              <i className="bi bi-house"></i>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" data-bs-toggle="collapse" href="#ui-basic" aria-expanded="false" aria-controls="ui-basic">
              <span className="menu-title">Basic UI Elements</span>
              <i className="bi bi-chevron-down"></i>
              <i className="bi bi-bullseye"></i>
            </a>
            <div className="collapse" id="ui-basic">
              <ul className="nav flex-column sub-menu">
                <li className="nav-item">
                  <a className="nav-link" href="pages/ui-features/buttons.html">Buttons</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="pages/ui-features/dropdowns.html">Dropdowns</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="pages/ui-features/typography.html">Typography</a>
                </li>
              </ul>
            </div>
          </li>
          <li className="nav-item">
            <a className="nav-link" data-bs-toggle="collapse" href="#icons" aria-expanded="false" aria-controls="icons">
              <span className="menu-title">Icons</span>
              <i className="bi bi-person-lines-fill"></i>
            </a>
            <div className="collapse" id="icons">
              <ul className="nav flex-column sub-menu">
                <li className="nav-item">
                  <a className="nav-link" href="pages/icons/font-awesome.html">Font Awesome</a>
                </li>
              </ul>
            </div>
          </li>

        </ul>
      </nav>
    </>
  );
}
