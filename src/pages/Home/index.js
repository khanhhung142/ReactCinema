import React, { useEffect, useState, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getFlims } from "../../actions/filmActions";
import MainCarousel from "./MainCarousel";
import NowShowing from "./FilmBlock/NowShowing";
import useWindownResize from "../../hook/useWindownResize";
import CinemaComplex from "../../components/CinemaComplex";
import Banner from "./Banner";
//import { computeHeadingLevel } from "@testing-library/react";
//import LoadingPage from "../LoadingPage";

export default function Home() {
  // const { data, isLoading, error } = useSelector((state) => state.filmList);
  const [active, setActive] = useState(true);
  const refNowShowing = useRef("");
  const refCommingSoon = useRef("");
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.filmList);
  const middle = Math.ceil(data.length / 2);
  useEffect(() => {
    dispatch(getFlims());
  }, []);
  const toggleActiveNowShowing = () => {
    if (refNowShowing.current.className !== "active") {
      setActive(!active);
    }
  };
  const toggleActiveCommingSoon = () => {
    if (refCommingSoon.current.className !== "active") {
      setActive(!active);
    }
  };

  const { width } = useWindownResize();
  const isMobileClient = () => {
    if (width <= 768) {
      return true;
    }
    return false;
  };
  return (
    <div className="warrper">
      <div className="mainCarousel">
        {isMobileClient() ? null : <MainCarousel />}
      </div>
      <div className="filmBlock container">
        <div className="filmBlock__toggle">
          <h1
            onClick={() => toggleActiveNowShowing()}
            className={active ? "active" : ""}
            ref={refNowShowing}
          >
            Đang chiếu
          </h1>
          <h1
            onClick={() => toggleActiveCommingSoon()}
            className={active ? "" : "active"}
            ref={refCommingSoon}
          >
            Sắp chiếu
          </h1>
        </div>
        <div className="filmBlock__content mt-5">
          {active ? (
            <NowShowing filmList={data.slice(0, middle)} />
          ) : (
            <NowShowing filmList={data.slice(middle, data.length)} />
          )}
        </div>
      </div>
      <div className="cinemaBlock mb-5">
        <CinemaComplex isHome={true}/>
      </div>
      <div
        className="banner row"
        style={{ backgroundImage: `url("./images/backapp.jpg")` }}
      >
        <Banner />
      </div>
    </div>
  );
}
