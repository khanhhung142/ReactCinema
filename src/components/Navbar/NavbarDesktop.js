import React, { useState, useRef, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
// import DropdownMenu from "./DropdownMenu";
// import useOnClickOutside from "../../hook/useOnClickOutside";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";

export default function NavbarDesktop() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [place, setPlace] = useState("Hồ Chí Minh");
  const history = useHistory();
  const places = [
    "Hồ Chí Minh",
    "Đà Nẵng",
    "Hải Phòng",
    "Biên Hòa",
    "Nha Trang",
    "Phan Thiết",
    "Hạ Long",
    "Cần Thơ",
    "Long Xuyên",
    "Vũng Tàu",
    "Cà Mau",
    "An Giang",
    "Đồng Tháp",
  ];
  const toggle = () => setDropdownOpen((prevState) => !prevState);
  const handleClickLogin = () => {
    history.push('/login')
  }

  return (
    <nav>
      <div className="navbar__content">
        <Link to="/">
          <div className="navbar__logo">
            <a href="#">
              <img
                src={process.env.PUBLIC_URL + "/images/web-logo.png"}
                alt="logo"
              />
            </a>
          </div>
        </Link>

        <div className="navbar__menu">
          <a href="#showtime">Lịch chiếu</a>
          <a href="#cinema">Cụm rạp</a>
          <a href="#">Tin tức</a>
          <a href="#app">Ứng dụng</a>
        </div>
        <div className="navbar__login">
          <div className="navbar__login--avatar">
            <a href="">
              <img
                src={process.env.PUBLIC_URL + "/images/avatar.png"}
                alt="avatar"
              />
              <p onClick={handleClickLogin}>Đăng nhập</p>
            </a>
          </div>
          <Dropdown isOpen={dropdownOpen} toggle={toggle}>
            <DropdownToggle
              tag="span"
              data-toggle="dropdown"
              aria-expanded={dropdownOpen}
            >
              <div className="navbar__login--dropdown">
                <img
                  src={process.env.PUBLIC_URL + "/images/location-header.png"}
                  alt="location"
                />
                <span>{place}</span>
                <i className="fa fa-angle-down" />
              </div>
            </DropdownToggle>
            <DropdownMenu className="dropdown__content scrollBar">
              {places.map((item) => (
                <DropdownItem
                  className="dropdown__item"
                  value={item}
                  onClick={() => setPlace(item)}
                >
                  {item}
                </DropdownItem>
              ))}
            </DropdownMenu>
          </Dropdown>
        </div>
      </div>
    </nav>
  );
}
