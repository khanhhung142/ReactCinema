import React from "react";
import { Link } from "react-router-dom";
import PopupVideo from "../PopupVideo";

export default function FilmCard({ film }) {
  const { maPhim, tenPhim, biDanh, trailer, hinhAnh, ngayKhoiChieu, danhGia } =
    film;
  // Biến link film xác định url film-detail
  const linkFilm = `/films/${maPhim}`;
  const star = [];
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
  return (
    <div className="film__card mb-5">
      <div>
        <Link to={linkFilm}>
          <div
            className="film__card__banner"
            style={{ backgroundImage: `url(${hinhAnh})` }}
          >
            <div className="film__card__banner--rate">
              <p>{danhGia}</p>
              {renderStar(danhGia)}
              <div className="film__card__banner--star">
                {star.map((item) => item)}
              </div>
            </div>
            <div className="film__card__banner--hover showHover"></div>
          </div>
        </Link>
        <div className="film__card__banner--playButton showHover">
        <PopupVideo trailer={trailer} />
        </div>
      </div>
      <div className="film__card__info mt-2">
        <div className="hideHover">
          <h1>
            <span>C16</span> {tenPhim}
          </h1>
        </div>
        <Link to={linkFilm}>
          <button className="buy-button showHover">
            <span>Mua vé</span>
          </button>
        </Link>
      </div>
    </div>
  );
}
