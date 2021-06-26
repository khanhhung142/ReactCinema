import React from "react";
import Slider from "react-slick";
export default function Banner() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    // variableWidth: true
  };
  return (
    <div className="banner__content col-xs-12">
      <div className="banner__content--warrper row">
        <div className="left col-12 col-lg-6">
          <h1>Ứng dụng tiện lợi dành cho người yêu điện ảnh</h1>
          <p>
            Không chỉ đặt vé, bạn còn có thể bình luận phim, chấm điểm rạp và
            đổi quà hấp dẫn.
          </p>
          <button>App miễn phí tải về ngay</button>
        </div>
        <div className="right col-12 col-lg-6">
          <img
            className="phone-img"
            src="./images/mobile.png"
            alt="Loading..."
          />
          <Slider {...settings} className="phoneCarousel">
            <div className="phoneCarousel--item">
              <img src="./images/slide2.jpg" alt="slide-1" />
            </div>
            <div className="phoneCarousel--item">
              <img src="./images/slide4.jpg" alt="slide-2" />
            </div>
            <div className="phoneCarousel--item">
              <img src="./images/slide5.jpg" alt="slide-3" />
            </div>
            <div className="phoneCarousel--item">
              <img src="./images/slide16.jpg" alt="slide-4" />
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
}
