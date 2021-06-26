import Slider from "react-slick";
import React from "react";
import FilmBlockItem from "./FilmBlockItem";
import useWindownResize from "../../../hook/useWindownResize";
// import { filmListNowShowing } from "../../../data/data";
export default function NowShowing({filmList}) {
  const settings = {
    dots: false,
    infinite: true,
    arrows: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: (
      <div>
        <i class="fa fa-angle-right"></i>
      </div>
    ),
    prevArrow: (
      <div>
        <i class="fa fa-angle-left"></i>
      </div>
    ),
  };
  const { width } = useWindownResize();
  return <Slider {...settings} className="filmBlock__content">
    {filmList.map((item, index)=> {
      if (width >= 1200) {
        if (index % 8 === 0) {
          return <FilmBlockItem key={index} films={filmList.slice(index, index + 8)}/>
        }
      }
      if (width >= 768 && width < 1200) {
        if (index % 6 === 0) {
          return <FilmBlockItem key={index} films={filmList.slice(index, index + 6)}/>
        }
      }
      if (width < 768) {
        if (index % 4 === 0) {
          return <FilmBlockItem key={index} films={filmList.slice(index, index + 4)}/>
        }
      }
      return ;
    })}
  </Slider>;
}
