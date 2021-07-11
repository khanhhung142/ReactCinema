import React, { useEffect } from "react";

export default function SideMenu({ toggle }) {
  const ele = document.getElementsByClassName("navbar__sideMenu--menu")
  const handleToggle = () => {
    toggle();
  };
  // useEffect(() => {
  //   ele.style.width = "100%";
  //   return () => {
  //     ele.style.width = "0";
  //   }
  // } , [])
  return (
    <div className="navbar__sideMenu--menu" id="navbar-sideMenu-content">
      <div className="exit" onClick={() => handleToggle()}></div>
      <div className="content">
        <div className="top">
          <a href="#">
            <img src="./images/avatar.png" alt="avatar" />
            <p>Đăng nhập</p>
          </a>
          <i className="fa fa-angle-right" onClick={() => handleToggle()}></i>
        </div>
        <div className="link">
          <a href="#showtime">Lịch chiếu</a>
          <a href="#theaters">Cụm rạp</a>
          <a href="#">Tin tức</a>
          <a href="#app">Admin</a>
          <a href="#">Hồ Chí Minh</a>
        </div>
      </div>
    </div>
  );
}
