import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import PopupVideo from "../../../components/PopupVideo";
import FastBooking from "./FastBooking";

export default function MainCarousel() {
  const settings = {
    dots: true,
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
  return (
    <div>
    <Slider {...settings} className="mainCarousel__content">
      <Link className="mainCarousel__content--item">
        <div className="img-warrper-16by9">
          <img
            src="./images/ban-tay-diet-quy-evil-expeller-16177781815781.png"
            alt="anh-1"
          />
        </div>
        <PopupVideo trailer={"https://www.youtube.com/embed/UeyaR8jWl2c"} />
      </Link>
      <Link className="mainCarousel__content--item">
        <div className="img-warrper-16by9">
          <img src="./images/lat-mat-48h-16177782153424.png" alt="anh-2" />
        </div>
        <PopupVideo trailer={"https://www.youtube.com/embed/UeyaR8jWl2c"} />
      </Link>
      <Link className="mainCarousel__content--item">
        <div className="img-warrper-16by9">
          <img src="./images/trang-ti-16194117174325.jpg" alt="anh-2" />
        </div>
        <PopupVideo trailer={"https://www.youtube.com/embed/UeyaR8jWl2c"} />
      </Link>
    </Slider>
    <FastBooking/>
    </div>
  );
}
