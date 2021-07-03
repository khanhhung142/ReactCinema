import React, { useEffect, useState } from "react";
import ListSchedule from "./ListSchedule";
import { useSelector, useDispatch } from "react-redux";
import { getTheaters } from "../../actions/cinemaAction";
import { getScheduleOnTheater } from "../../actions/cinemaAction";
export default function ListCinema({ cinema }) {
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.theaters);
  const [activeID, setActiveID] = useState(false);
  const { schedule } = useSelector((state) => state.schedulesTheater);
  const [index, setIndex] = useState(-1);
  useEffect(() => {
    dispatch(getTheaters(cinema));
    dispatch(getScheduleOnTheater(cinema));
    return setActiveID(false);
  }, [cinema]);
  const search = (id) => {
    setIndex(schedule.map((item) => item.maCumRap).indexOf(id));
  };
  return (
    <div className="cinemaComplex__content--list row">
      <div className="cinemaComplex__content--listCinema col-md-4 col-12">
        {data.map((item, index) => {
          return (
            <div
              key={item.maCumRap}
              className={
                activeID === item.maCumRap ||
                (index === 0 && activeID === false)
                  ? "active cinema"
                  : "cinema"
              }
              id={item.maCumRap}
              onClick={(e) => {
                setActiveID(e.target.id);
                search(e.target.id);
              }}
            >
              <img
                src={
                  process.env.PUBLIC_URL +
                  "/images/bhd-star-bitexco-16105952137769.png"
                }
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
      <ListSchedule
        index={index}
        schedule={index === -1 ? [] : schedule[index]}
      />
    </div>
  );
}
