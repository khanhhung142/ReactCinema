import React from "react";
import FilmSchedule from "./FilmSchedule";
export default function ListSchedule({ index, schedule }) {
  if (index === -1) {
    return (
      <div className="cinemaComplex__content--listSchedule col-md-8 col-12">
        <h1 className="cinemaComplex__content--inform">Cụm rạp này hôm nay không có phim</h1>
      </div>
    );
  } else {
    return (
      <div className="cinemaComplex__content--listSchedule col-md-8 col-12">
        {schedule.danhSachPhim.map((item)=>{
          return <FilmSchedule info={item}/>
        })}
      </div>
    );
  }
}
