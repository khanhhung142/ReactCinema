import React from "react";
import FilmSchedule from "./FilmSchedule";
export default function ListSchedule({ index, schedule, isHome }) {
  const test = (array) => {
    for (let i = 0; i < array.length; i++) {
      if (array[i] === -1) {
        return false;
      }
    }
    return true;
  };
  if (isHome) {
    if (index === -1) {
      return (
        <div className="cinemaComplex__content--listSchedule col-md-8 col-12 scrollBar">
          <h1 className="cinemaComplex__content--inform">
            Cụm rạp này hôm nay không có phim
          </h1>
        </div>
      );
    } else {
      return (
        <div className="cinemaComplex__content--listSchedule col-md-8 col-12 scrollBar">
          {schedule.danhSachPhim.map((item) => {
            return <FilmSchedule info={item} isHome={isHome}/>;
          })}
        </div>
      );
    }
  }
  if (!isHome) {
    if (test(index) === false) {
      return (
        <div className="cinemaComplex__content--listSchedule col-md-8 col-12 scrollBar">
          <h1 className="cinemaComplex__content--inform">
            Cụm rạp này hôm nay không chiếu phim này
          </h1>
        </div>
      );
    } else {
      return (
        <div className="cinemaComplex__content--listSchedule col-md-8 col-12 scrollBar">
            <FilmSchedule info={schedule} index={index} isHome={isHome} />;
        </div>
      );
    }
  }
  return <h1>Lỗi</h1>;
}

// .heThongRapChieu[filmIndex[0]].cumRapChieu[
//   filmIndex[1]
// ].lichChieuPhim
