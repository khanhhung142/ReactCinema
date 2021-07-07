import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

export default function AdminRoute({ children, ...props }) {
  const { userInfo } = useSelector((state) => state.account);
  // Chưa đăng nhập
  if (!userInfo) {
    return <Redirect to={`/login?redirectTo=${props.path}`} />;
  }
  console.log(userInfo)
  if (userInfo.maLoaiNguoiDung !== "QuanTri") {
    return <Redirect to="/" />;
  }
  return <Route {...props}>{children}</Route>;
}
