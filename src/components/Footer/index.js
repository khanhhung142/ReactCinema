import React from "react";
import FooterDesktop from "./FooterDesktop";
import FooterMobile from "./FooterMobile";
import useWindownResize from "../../hook/useWindownResize";
export default function Footer() {
  const { width, height } = useWindownResize();
  const isMobileClient = () => {
    if (width <= 992) {
      return true;
    }
    return false;
  };
  return (
    <footer id="app">
      {isMobileClient() ? <FooterMobile /> : <FooterDesktop />}
      <div className="footer__bottom container">
        <div className="row">
          <div className="col-md-1">
            <img src={process.env.PUBLIC_URL + "/images/zion-logo.jpg"} alt="zion-logo"/>
          </div>
          <div className="col-md-11 pl-4 content">
            <h1>TIX – SẢN PHẨM CỦA CÔNG TY CỔ PHẦN ZION</h1>
            <p>Giấy chứng nhận đăng ký kinh doanh số:,</p>
            <p>đăng ký thay đổi lần thứ 30, ngày 22 tháng 01 năm 2020 do Sở kế hoạch và đầu tư Thành phố Hồ Chí Minh cấp.</p>
            <p>Số Điện Thoại (Hotline): 1900 545 436</p>
            <p>Email: <a href="mailto:support@tix.vn">support@tix.vn</a></p>
          </div>
        </div>
      </div>
    </footer>
  );
}
