import React, { useEffect, useState } from "react";
import PopupVideo from "../../components/PopupVideo";
import { CircularProgressbar } from "react-circular-progressbar";
import CinemaComplex from "../../components/CinemaComplex";
import { Link, useParams } from "react-router-dom";
// import CinemaComplexDetail from "../../components/CinemaComplexDetail";
export default function FilmDetail() {
  const {filmID} = useParams()
  const [activeID, setactiveID] = useState("scheduleID");
  const danhGia = 8.5;
  const star = [];
  // Hàm render số sao đánh giá
  const renderStar = (rate) => {
    const fullStar = Math.floor(danhGia / 2);
    const halfStar = danhGia % 2;
    for (let i = 0; i < fullStar; i++) {
      star.push(<i class="fa fa-star"></i>);
    }
    if (halfStar != 0) {
      star.push(<i class="fa fa-star-half"></i>);
    }
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="filmDetail warrper">
      <div className="filmDetail__content">
        <div className="filmDetail__content--top">
          <div className="blurBackGround">
            <img
              src={process.env.PUBLIC_URL + "/images/default-trailer.webp"}
              alt=""
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
                backgroundImage: `url(${
                  process.env.PUBLIC_URL +
                  "/images/films-poster/coomingSoon/john-wick-chapter-4-15827770304921_215x318.jpg"
                })`,
              }}
            >
              <div className="imgBanner--trailer">
                <PopupVideo trailer="https://www.youtube.com/embed/VagES3pxttQ" />
              </div>
            </div>
            <div className="col-5 mainInfo">
              <p className="date">16.05.2021</p>
              <h1 className="name">
                <span>C16</span> John Wick: Chapter 4
              </h1>
              <p>110 phút - 6.5 IMDb - 2D/Digitals</p>
              <Link to={`/checkout/${filmID}`}>
                <button className="orangButton">
                  <span>Mua vé</span>
                </button>
              </Link>
            </div>
            <div className="col-2 score">
              <div className="cycle">
                <CircularProgressbar
                  value={danhGia}
                  maxValue={10}
                  text={danhGia}
                />
              </div>
              <div className="star">
                {renderStar()}
                {star.map((item) => item)}
              </div>
              <div className="numberCmt">
                <span>0 người đánh giá</span>
              </div>
            </div>
          </div>
          <div className="trailerMobile">
            <PopupVideo trailer="https://www.youtube.com/embed/VagES3pxttQ" />
          </div>
        </div>
        <div className="filmDetail__content--bottom">
          <div className="infoShowMoblie">
            <div className="row">
              <div className="col-12">
                <p>16.05.2021</p>
                <h1>
                  John Wick: Chapter 4
                </h1>
                <p>110 phút - 6.5 IMDb - 2D/Digitals</p>
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
              <CinemaComplex />
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
                    <p className="col-5"></p>
                  </div>
                  <div className="row">
                    <h1 className="col-5">Diễn viên</h1>
                    <p className="col-5">Keanu Reeves</p>
                  </div>
                  <div className="row">
                    <h1 className="col-5">Thể loại</h1>
                    <p className="col-5">Hành động, tội phạm</p>
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
                    Chưa đầy một giờ sau khi kết thúc phần phim trước, cựu sát
                    thủ John Wick hiện đang bị truy sát và phải chạy trốn ở
                    Manhattan. Sau vụ giết chết trùm mafia Santino D'Antonio tại
                    khách sạn Continental New York, John bị tuyên án "Trừ khử"
                    và bị treo thưởng 14 triệu đôla. Trên đường tẩu thoát khỏi
                    những kẻ muốn giết mình, John ghé vào Thư viện Công cộng New
                    York để lấy một sợi dây chuyền hình thánh giá và một huyết
                    ấn. Anh đã chiến đấu căng thẳng, tiêu diệt nhiều sát thủ
                    quanh vùng này cho đến khi gặp lại Director, một người đàn
                    bà anh quen biết trong quá khứ, và bà đang điều hành trường
                    đào tạo sát thủ dưới vỏ bọc một nhà hát.
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
