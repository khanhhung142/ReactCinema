import React from "react";
import { Link, useLocation } from "react-router-dom";

const menu = [
  {
    path: "",
    render: <div className="sb-sidenav-menu-heading">Core</div>,
  },
  {
    path: "/admin",
    render: (
      <Link className="nav-link" to="/admin">
        <div className="sb-nav-link-icon">
          <i className="fas fa-tachometer-alt"></i>
        </div>
        Dashboard
      </Link>
    ),
  },
  {
    path: "",
    render: <div className="sb-sidenav-menu-heading">Quản lý đặt vé</div>,
  },
  {
    path: "/admin/add-showtime",
    render: (
      <Link className="nav-link collapsed" to="/admin/add-showtime">
        <div className="sb-nav-link-icon">
          <i className="fas fa-plus-square"></i>
        </div>
        Tạo lịch chiếu
      </Link>
    ),
  },
  {
    path: "/admin/film",
    render: (
      <Link className="nav-link collapsed" to="/admin/showtime">
        <div className="sb-nav-link-icon">
          <i className="fas fa-video"></i>
        </div>
        Danh sách suất chiếu
      </Link>
    ),
  },
  {
    path: "",
    render: <div className="sb-sidenav-menu-heading">Quản lý phim</div>,
  },
  {
    path: "/admin/add-film",
    render: (
      <Link className="nav-link collapsed" to="/admin/add-film">
        <div className="sb-nav-link-icon">
          <i className="fas fa-plus-square"></i>
        </div>
        Thêm phim mới
      </Link>
    ),
  },
  {
    path: "/admin/film",
    render: (
      <Link className="nav-link collapsed" to="/admin/film">
        <div className="sb-nav-link-icon">
          <i className="fas fa-film"></i>
        </div>
        Danh sách phim
      </Link>
    ),
  },
  {
    path: "",
    render: <div className="sb-sidenav-menu-heading">Quản lý rạp</div>,
  },
  {
    path: "/admin/theater",
    render: (
      <Link className="nav-link collapsed" to="/admin/theater">
        <div className="sb-nav-link-icon">
          <i className="fas fa-couch"></i>
        </div>
        Danh sách rạp
      </Link>
    ),
  },
];

function SideNav(props) {
  const location = useLocation();
  const path = location.pathname;
  return (
    <div id="layoutSidenav_nav">
      <nav className="admin__sidenav sb-sidenav accordion sb-sidenav-dark">
        <div className="sb-sidenav-menu">
          <div className="nav">
            {menu.map((item) => {
              if (item.path)
                return (
                  <li className={item.path == path ? "active" : ""}>
                    {item.render}
                  </li>
                );
              else return <li>{item.render}</li>;
            })}
          </div>
        </div>
        <div className="sb-sidenav-footer">
          <div className="small">Logged in as:</div>
          Admin
        </div>
      </nav>
    </div>
  );
}

export default SideNav;
