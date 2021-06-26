import React from "react";
import { Link } from "react-router-dom";

export default function FooterDesktop() {
  return (
    <div className="footer__top container">
      <div className="row">
        <div className="col-lg-4">
          <h1>TIX</h1>
          <div className="row">
            <div className="col-lg-6">
              <div className="footer__top--link">
                <Link to="/faq">FAQ</Link>
              </div>
              <div className="footer__top--link">
                <Link to="/brand-guidelines">Brand Guidelines</Link>
              </div>
            </div>
            <div className="col-lg-6">
              {/* <div className="footer__top--blank"></div> */}
              <div className="footer__top--link">
                <Link to="/thoai-thuan-su-dung">Thoải thuận sử dụng</Link>
              </div>
              <div className="footer__top--link">
                <Link to="/chinh-sach-bao-mat">Chính sách bảo mật</Link>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4">
          <h1>ĐỐI TÁC</h1>
          <div className="footer__top--partner">
            <div className="row col-lg-12 mb-3">
              <Link to="https://www.cgv.vn/">
                <img
                  src={process.env.PUBLIC_URL + "/images/cgv.png"}
                  alt="cgv-logo"
                  className="cgv"
                />
              </Link>
              <Link to="https://www.bhdstar.vn/">
                <img
                  src={process.env.PUBLIC_URL + "/images/bhd.png"}
                  alt="bhd-logo"
                />
              </Link>
              <Link to="https://www.galaxycine.vn/">
                <img
                  src={process.env.PUBLIC_URL + "/images/galaxycine.png"}
                  alt="galaxycine-logo"
                />
              </Link>
              <Link to="http://cinestar.com.vn/">
                <img
                  src={process.env.PUBLIC_URL + "/images/cinestar.png"}
                  alt="cinestar-logo"
                />
              </Link>
              <Link to="http://lottecinemavn.com/LCHS/index.aspx">
                <img
                  src={process.env.PUBLIC_URL + "/images/lotte.png"}
                  alt="lotte-logo"
                />
              </Link>
            </div>
            <div className="row col-lg-12 mb-3">
              <Link to="https://www.megagscinemas.vn/">
                <img
                  src={process.env.PUBLIC_URL + "/images/megags.png"}
                  alt="megags-logo"
                />
              </Link>
              <Link to="https://www.betacineplex.vn/">
                <img
                  src={process.env.PUBLIC_URL + "/images/bt.jpg"}
                  alt="bt-logo"
                />
              </Link>
              <Link to="http://ddcinema.vn/">
                <img
                  src={process.env.PUBLIC_URL + "/images/dongdacinema.png"}
                  alt="dongdacinema-logo"
                />
              </Link>
              <Link to="https://touchcinema.com/">
                <img
                  src={process.env.PUBLIC_URL + "/images/TOUCH.png"}
                  alt="TOUCH-logo"
                />
              </Link>
              <Link to="https://cinemaxvn.com/">
                <img
                  src={process.env.PUBLIC_URL + "/images/cnx.jpg"}
                  alt="cnx-logo"
                />
              </Link>
            </div>
            <div className="row col-lg-12 mb-3">
              <Link to="https://starlight.vn/">
                <img
                  src={process.env.PUBLIC_URL + "/images/STARLIGHT.png"}
                  alt="STARLIGHT-logo"
                />
              </Link>
              <Link to="https://www.dcine.vn/">
                <img
                  src={process.env.PUBLIC_URL + "/images/dcine.png"}
                  alt="dcine-logo"
                />
              </Link>
              <Link to="https://zalopay.vn/">
                <img
                  src={process.env.PUBLIC_URL + "/images/zalopay_icon.png"}
                  alt="zalopay_icon-logo"
                />
              </Link>
              <Link to="https://www.payoo.vn/">
                <img
                  src={process.env.PUBLIC_URL + "/images/payoo.jpg"}
                  alt="payoo-logo"
                />
              </Link>
              <Link to="https://portal.vietcombank.com.vn/Pages/Home.aspx">
                <img
                  src={process.env.PUBLIC_URL + "/images/VCB.png"}
                  alt="VCB-logo"
                />
              </Link>
            </div>
            <div className="row col-lg-12 mb-3">
              <Link to="http://www.agribank.com.vn/">
                <img
                  src={process.env.PUBLIC_URL + "/images/AGRIBANK.png"}
                  alt="AGRIBANK-logo"
                />
              </Link>
              <Link to="https://www.vietinbank.vn/web/home/vn/index.html">
                <img
                  src={process.env.PUBLIC_URL + "/images/VIETTINBANK.png"}
                  alt="VIETTINBANK-logo"
                />
              </Link>
              <Link to="https://www.indovinabank.com.vn//">
                <img
                  src={process.env.PUBLIC_URL + "/images/IVB.png"}
                  alt="IVB-logo"
                />
              </Link>
              <Link to="https://webv3.123go.vn/">
                <img
                  src={process.env.PUBLIC_URL + "/images/123go.png"}
                  alt="123go-logo"
                />
              </Link>
              <Link to="https://laban.vn/">
                <img
                  src={process.env.PUBLIC_URL + "/images/laban.png"}
                  alt="laban-logo"
                />
              </Link>
            </div>
          </div>
        </div>
        <div className="col-lg-2">
          <h1>MOBILE APP</h1>
          <Link to="/faq">
            <i class="fab fa-apple mr-2"></i>
          </Link>
          <Link to="/faq">
            <i class="fa fa-mobile"></i>
          </Link>
        </div>
        <div className="col-lg-2">
          <h1 className="pl-4">SOCIAL</h1>
          <Link to="/faq">
            <i class="fab fa-facebook mr-2"></i>
          </Link>
          <Link to="/faq">
            <i class="fab fa-twitter"></i>
          </Link>
        </div>
      </div>
    </div>
  );
}
