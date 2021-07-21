import React from "react";
import { Link } from "react-router-dom";
export default function FooterMobile() {
  return (
    <div className="footer__top container row py-4">
      <div className="col-5 row">
        <div className="footer__top--link ml-2">
          <Link to="/thoai-thuan-su-dung">Thoải thuận sử dụng</Link>
        </div>
        <div className="footer__top--link ml-2">
          <Link to="/chinh-sach-bao-mat">Chính sách bảo mật</Link>
        </div>
      </div>
      <div className="col-7 pl-5">
        <Link to="/faq">
          <i className="fab fa-facebook mr-2"></i>
        </Link>
        <Link to="/faq">
          <i className="fab fa-twitter"></i>
        </Link>
      </div>
    </div>
  );
}
