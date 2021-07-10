import React, { useEffect, useState } from "react";
import PopupVideo from "../../components/PopupVideo";
import { CircularProgressbar } from "react-circular-progressbar";
import CinemaComplex from "../../components/CinemaComplex";
import { Link, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {getFilmInfo} from '../../actions/filmActions'
// import CinemaComplexDetail from "../../components/CinemaComplexDetail";
export default function FilmDetail() {
  const {filmID} = useParams()
  const [activeID, setactiveID] = useState("scheduleID");
  const star = [];
  const dispatch = useDispatch();
  const {data} = useSelector(state => state.filmInfo)
  // Hàm render số sao đánh giá
  const renderStar = (danhGia) => {
    const fullStar = Math.floor(danhGia / 2);
    const halfStar = danhGia % 2;
    for (let i = 0; i < fullStar; i++) {
      star.push(<i class="fa fa-star"></i>);
    }
    if (halfStar !== 0) {
      star.push(<i class="fa fa-star-half"></i>);
    }
  };
  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(getFilmInfo(filmID))
  }, []);
  return (
    <div className="filmDetail warrper">
      <div className="filmDetail__content">
        <div className="filmDetail__content--top">
          <div className="blurBackGround">
            <img
              src={data.hinhAnh}
              alt=""
              className="img_bg"
            />
          </div>
          <div
            className="supBackGround"
            style={{
              background:
                "linear-gradient(to top, rgb(10, 32, 41), transparent 100%)",
            }}
          ></div>
          <div className="detail row">
            <div
              className="col-3 imgBanner"
              style={{
                backgroundImage: `url(${data.hinhAnh})`,
              }}
            >
              <div className="imgBanner--trailer">
                <PopupVideo trailer={data.trailer} />
              </div>
            </div>
            <div className="col-5 mainInfo">
              <p className="date">16.05.2021</p>
              <h1 className="name">
                <span>C16</span> {data.tenPhim}
              </h1>
              <p>120 phút - 6.5 IMDb - 2D/Digitals</p>
              <Link to={`/checkout/${filmID}`}>
                <button className="orangButton">
                  <span>Mua vé</span>
                </button>
              </Link>
            </div>
            <div className="col-2 score">
              <div className="cycle">
                <CircularProgressbar
                  value={data.danhGia}
                  maxValue={10}
                  text={data.danhGia}
                />
              </div>
              <div className="star">
                {renderStar(data.danhGia)}
                {star.map((item) => item)}
              </div>
              <div className="numberCmt">
                <span>0 người đánh giá</span>
              </div>
            </div>
          </div>
          <div className="trailerMobile">
            <PopupVideo trailer={data.trailer} />
          </div>
        </div>
        <div className="filmDetail__content--bottom">
          <div className="infoShowMoblie">
            <div className="row">
              <div className="col-12">
                <p>16.05.2021</p>
                <h1>
                {data.tenPhim}
                </h1>
                <p>120 phút - 6.5 IMDb - 2D/Digitals</p>
              </div>
            </div>
          </div>
          <div className="nav">
            <h1
              id="scheduleID"
              onClick={(e) => setactiveID(e.target.id)}
              className={activeID === "scheduleID" ? "active" : null}
            >
              Lịch chiếu
            </h1>
            <h1
              id="infoID"
              onClick={(e) => setactiveID(e.target.id)}
              className={activeID === "infoID" ? "active" : null}
            >
              Thông tin
            </h1>
            <h1
              id="rateID"
              onClick={(e) => setactiveID(e.target.id)}
              className={activeID === "rateID" ? "active" : null}
            >
              Đánh giá
            </h1>
          </div>
          <div className="bottomContent">
            <div
              className={
                activeID === "scheduleID"
                  ? "schedule showContent"
                  : "schedule hideContent"
              }
            >
              <CinemaComplex isHome={false} filmID={filmID}/>
            </div>
            <div
              className={
                activeID === "infoID"
                  ? "infoDetail showContent"
                  : "infoDetail hideContent"
              }
            >
              <div className="row">
                <div className="col-md-6 col-xs-12 left">
                  <div className="row">
                    <h1 className="col-5">Ngày công chiếu</h1>
                    <p className="col-5">16.05.2021</p>
                  </div>
                  <div className="row">
                    <h1 className="col-5">Đạo diễn</h1>
                    <p className="col-5">Lorem, ipsum dolor.</p>
                  </div>
                  <div className="row">
                    <h1 className="col-5">Diễn viên</h1>
                    <p className="col-5">Lorem, ipsum.</p>
                  </div>
                  <div className="row">
                    <h1 className="col-5">Thể loại</h1>
                    <p className="col-5">Lorem, dolor</p>
                  </div>
                  <div className="row">
                    <h1 className="col-5">Định dạnh</h1>
                    <p className="col-5">2D/Digital</p>
                  </div>
                  <div className="row">
                    <h1 className="col-5">Quốc gia sản xuất</h1>
                    <p className="col-5">Mỹ</p>
                  </div>
                </div>
                <div className="col-md-6 col-xs-12 right">
                  <h1 className="infoHeader">Nội dung</h1>
                  <p>
                    {data.moTa}
                  </p>
                </div>
              </div>
            </div>
            <div
              className={
                activeID === "rateID"
                  ? "commentDetail showContent"
                  : "commentDetail hideContent"
              }
            >
              <h1>Chưa có thông tin</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
