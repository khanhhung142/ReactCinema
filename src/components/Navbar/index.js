import React from "react";
import useWindownResize from "../../hook/useWindownResize";
import NavbarDesktop from "./NavbarDesktop";
import NavbarMobile from "./NavbarMobile";

export default function Navbar() {
  const { width, height } = useWindownResize();
  const isMobileClient = () => {
    if (width <= 768) {
      return true;
    }
    return false;
  };
  return <>{isMobileClient() ? <NavbarMobile /> : <NavbarDesktop />}</>;
}
