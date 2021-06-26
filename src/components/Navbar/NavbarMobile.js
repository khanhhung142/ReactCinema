import React, { useState } from "react";
import { Link } from "react-router-dom";
import SideMenu from "./SideMenu";

export default function NavbarMobile() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
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

        <div className="navbar__sideMenu--btn" onClick={() => toggle()}>
          <div className="icon">
            <i className="fa fa-align-right"></i>
          </div>
        </div>
        <div className="navbar__sideMenu">
          {isOpen ? <SideMenu toggle={toggle} /> : null}
        </div>
      </div>
    </nav>
  );
}
