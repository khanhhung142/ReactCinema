import React, { useState } from "react";
import { listLogoCinema } from "../../data/data";
import ListCinema from "./ListCinema";
export default function CinemaComplex() {
  const [activeID, setactiveID] = useState(listLogoCinema[0].maHeThongRap);
  // const addActive = (e) => {
  //   setactiveID(e.target.id);
  // }
  return (
    <div className="cinemaComplex container" id="cinema">
      <div className="cinemaComplex__content">
        <div className="cinemaComplex__content--logo mb-2">
          {listLogoCinema.map((item) => {
            return (
              <a
                key={item.maHeThongRap}
                className={activeID === item.maHeThongRap ? "active" : null}
                id={item.maHeThongRap}
                onClick={(e) => setactiveID(e.target.id)}
              >
                <img
                  src={item.logo}
                  alt={item.maHeThongRap}
                />
              </a>
            );
          })}
        </div>
          <ListCinema cinema={activeID} />
      </div>
    </div>
  );
}
