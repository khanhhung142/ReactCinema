import React, {useState} from "react";
import useWindownResize from "../../hook/useWindownResize";
import NavbarDesktop from "./NavbarDesktop";
import NavbarMobile from "./NavbarMobile";
import { useSelector } from "react-redux";
export default function Navbar() {
  const { userInfo } = useSelector((state) => state.account);
  const { width, height } = useWindownResize();
  const isMobileClient = () => {
    if (width <= 768) {
      return true;
    }
    return false;
  };
  return <>{isMobileClient() ? <NavbarMobile userInfo={userInfo}/> : <NavbarDesktop userInfo={userInfo}/>}</>;
}
