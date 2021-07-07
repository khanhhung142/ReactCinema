import React from 'react'
import FilmCard from "../../../components/FilmCard";
// Item slider, nhận dữ liệu từ các component slider
export default function FilmBlockItem({films}) {
  return (
    <div className="filmBlock__content--item row container" id="showtime">
      {films.map((item, index)=>(
        <div key={index} className="col-6 col-md-4 col-lg-3">
          <FilmCard film = {item}/>
        </div>
      ))}
    </div>
  )
}
