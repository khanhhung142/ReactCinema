import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import Swal from "sweetalert2/dist/sweetalert2.js";

export default function Step01({ triggleStep02, thongTinPhim }) {
  const [standard, setStandard] = useState(0);
  const [vip, setVip] = useState(0);
  const [cost, setCost] = useState(0);
  useEffect(() => {
    setCost(standard * 75000 + vip * 90000);
  });
  const history = useHistory();
  const minusStandard = () => {
    if (standard > 0) {
      setStandard(standard - 1);
    }
  };
  const minusVip = () => {
    if (vip > 0) {
      setVip(vip - 1);
    }
  };
  const plusStandard = () => {
    if (standard < 10) {
      setStandard(standard + 1);
    }
  };
  const plusVip = () => {
    if (vip < 10) {
      setVip(vip + 1);
    }
  };
  const handleTriggle = () => {
    if (standard !== 0 || vip !== 0) {
      return triggleStep02(standard, vip, cost);
    }
    Swal.fire({
      title: "Vui lòng chọn số lượng vé",
      icon: "warning",
      confirmButtonText: "OK",
    });
  };
  return (
    <div className="checkout__step01 row">
      <div className="checkout__step01--left col-3 hideMobile">
        <div className="left--background">
          <div className="img">
            <img
              src={thongTinPhim.hinhAnh}
              alt=""
            />
          </div>

          <div
            className="blackBackground"
            style={{
              background: "rgba(0, 0, 0, 0.5)",
            }}
          ></div>
          <div className="left--backBtn" onClick={() => history.goBack()}>
            <i class="fa fa-arrow-left"></i>
          </div>
          <div className="left--info">
            <p>{thongTinPhim.ngayChieu}</p>
            <h1>
              <span>C16</span> {thongTinPhim.tenPhim}
            </h1>
            <p>120 phút - 6.5 IMDb - 2D/Digitals</p>
          </div>
        </div>
      </div>
      <div className="checkout__step01--right col-9 hideMobile">
        <div className="right--info">
          <h1>{thongTinPhim.tenCumRap}</h1>
          <p>{thongTinPhim.ngayChieu} - {thongTinPhim.gioChieu} - {thongTinPhim.tenRap}</p>
        </div>
        <div className="right--buyInfo">
          <div className="item row">
            <div className="item--ticketType col-2">
              <span>Vé thường</span>
            </div>
            <div className="item--cost col-8">
              <span>75.000đ</span>
            </div>
            <div className="item--amount col-2">
              <button onClick={() => minusStandard()}>-</button>
              <span>{standard}</span>
              <button onClick={() => plusStandard()}>+</button>
            </div>
          </div>
          <div className="item row">
            <div className="item--ticketType col-2">
              <span>Vé VIP</span>
            </div>
            <div className="item--cost col-8">
              <span>90.000đ</span>
            </div>
            <div className="item--amount col-2">
              <button onClick={() => minusVip()}>-</button>
              <span>{vip}</span>
              <button onClick={() => plusVip()}>+</button>
            </div>
          </div>
        </div>
        <div className="right--cost">
          <div className="totalCost ">
            <h1>Tổng tiền</h1>
            <p>{cost}</p>
          </div>
          <div className="select">
            <button className="greenButton" onClick={() => handleTriggle()}>
              <span>Chọn ghế</span>
            </button>
          </div>
        </div>
        <div className="right--footer mt-5">
          <p>
            Xin lưu ý, bạn không thể hủy hoặc thay đổi suất chiếu cho vé đã mua
          </p>
          <h1>
            HOTLINE <span>1909 1991</span>
          </h1>
        </div>
      </div>
      <div className="checkout__step01--mobile showMobile col-12">
        <div className="top" style={{ height: "150px" }}>
          <div className="banner">
            <img
              src={thongTinPhim.hinhAnh}
              alt=""
            />
          </div>
          <div
            className="blurBackground"
            style={{
              background:
                "linear-gradient(to top, rgb(255, 255, 255), transparent 100%)",
            }}
          ></div>
        </div>
        <div className="bottom pl-3">
          <div className="filmInfo">
            <p>{thongTinPhim.ngayChieu}</p>
            <h1>
              <span>C16</span> {thongTinPhim.tenPhim}
            </h1>
            <p>120 phút - 6.5 IMDb - 2D/Digitals</p>
          </div>
          <div className="cinemaInfo">
            <h1>{thongTinPhim.tenCumRap}</h1>
            <p>{thongTinPhim.ngayChieu} - {thongTinPhim.gioChieu} - {thongTinPhim.tenRap}</p>
          </div>
          <div className="buyInfo px-3">
            <div className="item mt-3 p-3 row">
              <div className="item--ticketType col-4">
                <h1>Vé thường</h1>
                <p>75.000đ</p>
              </div>
              <div className="col-5"></div>
              <div className="item--amount col-3">
                <button onClick={() => minusStandard()}>-</button>
                <span>{standard}</span>
                <button onClick={() => plusStandard()}>+</button>
              </div>
            </div>
            <div className="item p-3 row">
              <div className="item--ticketType col-4">
                <h1>Vé VIP</h1>
                <p>90.000đ</p>
              </div>
              <div className="col-5"></div>
              <div className="item--amount col-3">
              <button onClick={() => minusVip()}>-</button>
              <span>{vip}</span>
              <button onClick={() => plusVip()}>+</button>
              </div>
            </div>
          </div>
          <div className="cost row">
            <div className="totalCost col-6 p-3">
            <h1>Tổng tiền</h1>
            <p>{cost}</p>
            </div>
            <div className="select col-6">
              <button className="greenButton" onClick={() => handleTriggle()}>
                <span>Chọn ghế</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
