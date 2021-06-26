import React, { useEffect, useState } from "react";
import { listCinema } from "../../data/data";
import ListSchedule from "./ListSchedule";
export default function ListCinema({ cinema }) {
  const index = listCinema.map((item) => item.maHeThongRap).indexOf(cinema);
  const list = listCinema[index].cumRap;
  const [activeID, setactiveID] = useState(list[0].maCumRap);
  useEffect(() => {
    setactiveID(list[0].maCumRap);
  }, [list]);
  return (
    <div className="cinemaComplex__content--list row">
      <div className="cinemaComplex__content--listCinema col-md-4 col-12">
        {list.map((item) => {
          return (
            <div
              key={item.maCumRap}
              className={
                activeID === item.maCumRap ? "active cinema" : "cinema"
              }
              id={item.maCumRap}
              onClick={(e) => setactiveID(e.target.id)}
            >
              <img
                src={process.env.PUBLIC_URL + "/images/bhd-star-bitexco-16105952137769.png"}
                alt="cinema"
              />
              <div className="info">
                <h1>{item.tenCumRap}</h1>
                <p>{item.diaChi}</p>
                <span>
                  Chi tiết <i class="fa fa-angle-right"></i>
                </span>
              </div>
            </div>
          );
        })}
      </div>
        <ListSchedule cinema={activeID}/>
    </div>
  );
}
