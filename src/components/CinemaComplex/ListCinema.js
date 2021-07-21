import React, { useEffect, useState } from "react";
import ListSchedule from "./ListSchedule";
import { useSelector, useDispatch } from "react-redux";
import { getTheaters, getScheduleOnTheater } from "../../actions/cinemaAction";
import { getFilmSchedule } from "../../actions/filmActions";
export default function ListCinema({ cinema, isHome, filmID }) {
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.theaters);
  const [activeID, setActiveID] = useState(false);
  const { schedule } = useSelector((state) => state.schedulesTheater);
  const filmScheduleData = useSelector((state) => state.filmSchedule.data);
  const [index, setIndex] = useState(-1);
  const [filmIndex, setFilmIndex] = useState([-1,-1]);
  useEffect(() => {
    dispatch(getTheaters(cinema));
    dispatch(getScheduleOnTheater(cinema));
    dispatch(getFilmSchedule(filmID));
    return setActiveID(false), setFilmIndex([-1,-1]);
  }, [cinema]);
  const search = (id) => {
    if (isHome) {
      setIndex(schedule.map((item) => item.maCumRap).indexOf(id));
    }
    if (!isHome) {
      let subIndex = [];
      subIndex.push(filmScheduleData.heThongRapChieu
        .map((item) => item.maHeThongRap)
        .indexOf(cinema));
      if (subIndex[0] !== -1) {
        subIndex.push(filmScheduleData.heThongRapChieu[subIndex[0]].cumRapChieu
          .map((item) => item.maCumRap)
          .indexOf(id));
      }
      return subIndex;
    }
  };
  const renderSchedule = () => {
    if (isHome) {
      return (
        <ListSchedule
          index={index}
          schedule={index === -1 ? [] : schedule[index]}
          isHome={isHome}
        />
      );
    }
    if(!isHome){
      return (
        <ListSchedule
        isHome={isHome}
        index={filmIndex}
        schedule={filmScheduleData}
      />
      )
    }
  }
  return (
    <div className="cinemaComplex__content--list row">
      <div className="cinemaComplex__content--listCinema col-md-4 col-12 scrollBar">
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
                setFilmIndex(search(e.target.id));
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
                  Chi tiết <i className="fa fa-angle-right"></i>
                </span>
              </div>
            </div>
          );
        })}
      </div>
      {renderSchedule()}

    </div>
  );
}
