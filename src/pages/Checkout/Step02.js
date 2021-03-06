import React, { useState, useEffect } from "react";
import Swal from "sweetalert2/dist/sweetalert2.js";
import { useHistory } from "react-router-dom";
import Countdown from "./Countdown";
import SlotRow from "./SlotRow";
import { useSelector, useDispatch } from "react-redux";
import { booking } from "../../actions/cinemaAction";
export default function Step02({ ...props }) {
  const history = useHistory();
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.booking);
  let values = {
    maLichChieu: props.scheduleID,
    danhSachGhe: [],
    taiKhoanNguoiDung: props.userInfo.taiKhoan,
  };
  const [slot, setSlot] = useState("");
  const [bookingActive, setBookingActive] = useState([]);
  const [standardSlot, setStandardSlot] = useState(props.standard);
  const [vipSlot, setVipSlot] = useState(props.vip);
  const full = props.standard + props.vip;
  const handleConfirm = async () => {
    await bookingActive.map((item) => {
      const index = parseInt(
        props.danhSachGhe.map((item) => item.stt).indexOf(item)
      );
      values.danhSachGhe.push({
        maGhe: props.danhSachGhe[index].maGhe,
        giaVe: props.danhSachGhe[index].giaVe,
      });
    });
    dispatch(booking(values));
  };
  // Hàm handleBooking xử lý trường hợp khách hàng chưa chọn đủ số ghế đã ấn đặt vé
  const handleBooking = () => {
    if (standardSlot === props.standard || vipSlot === props.vip) {
      Swal.fire({
        title: "Vui lòng chọn vị trí ghế",
        icon: "warning",
        confirmButtonText: "OK",
      });
    }
    if (standardSlot === 0 && vipSlot === 0) {
      handleConfirm();
      Swal.fire({
        title: "Đặt vé thành công",
        icon: "success",
        confirmButtonText: "OK",
      });
      history.goBack();
    }
    return;
  };
  // Hàm xử lý trường hợp hết thời gian giữ ghế
  // Khi hết thời gian giữ ghế, trở lại step01 và hiện thông báo
  const handleCountdown = () => {
    Swal.fire({
      title: "Hết thời gian giữ ghế",
      icon: "warning",
      confirmButtonText: "OK",
    });
    props.triggleStep01();
  };
  const handleActive = (stt, type, isActive, character) => {
    if (isActive) {
      if (type === "vip") {
        setVipSlot(vipSlot - 1);
      }
      if (type === "standard") {
        setStandardSlot(standardSlot - 1);
      }

      setBookingActive([...bookingActive, stt]);
      console.log(bookingActive);
      setSlot([...slot, character + stt + " "]);
    } else if (!isActive) {
      if (type === "vip") {
        setVipSlot(vipSlot + 1);
      }
      if (type === "standard") {
        setStandardSlot(standardSlot + 1);
      }
      const filterActive = bookingActive.filter((item) => item !== stt);
      setBookingActive(filterActive);
      const filterSlot = slot.filter((item) => item !== character + stt + " ");
      setSlot(filterSlot);
    }
  };
  return (
    <div className="checkout__step02">
      <div className="checkout__step02--sideBar hideMobile">
        <div className="content px-3">
          <div className="header">
            <h1>{props.cost}đ</h1>
          </div>
          <div className="info item">
            <h1>
              <span>C16</span>
              {props.thongTinPhim.tenPhim}
            </h1>
            <p>{props.thongTinPhim.tenCumRap}</p>
            <p>
              {props.thongTinPhim.ngayChieu} - {props.thongTinPhim.gioChieu} -{" "}
              {props.thongTinPhim.tenRap}
            </p>
          </div>
          <div className="ticket item userInfo">
            <p>Ghế {slot}</p>
            <h1>{props.cost}đ</h1>
          </div>
          <div className="email item userInfo text">
            <p>Email</p>
            <h1>{props.userInfo.email}</h1>
          </div>
          <div className="phone item userInfo text">
            <p>Họ tên</p>
            <h1>{props.userInfo.hoTen}</h1>
          </div>
          <div className="pay item userInfo text">
            <p>Hình thức thanh toán</p>
            <h1>Momo</h1>
          </div>
          <div className="blankDiv"></div>
        </div>
        <div className="warning">
          <p>
            <i class="fa fa-exclamation-circle"></i>Vé đã mua không thể đổi hoặc
            hoàn tiền
          </p>
          <p>
            Mã vé sẽ được gửi thông qua tin nhắn <span>SMS</span> và{" "}
            <span>Email</span> đã đăng nhập
          </p>
        </div>
        <div className="buyBtn">
          <button
            className={
              bookingActive.length !== full ? "nonActive" : "greenButton"
            }
            onClick={() => handleBooking()}
          >
            <span>Đặt vé</span>
          </button>
        </div>
      </div>
      <div className="checkout__step02--content">
        <div className="info">
          <div className="cinemaInfo">
            <h1>{props.thongTinPhim.tenCumRap}</h1>
            <p>
              {props.thongTinPhim.ngayChieu} - {props.thongTinPhim.gioChieu} -{" "}
              {props.thongTinPhim.tenRap}
            </p>
          </div>
          <div className="countdown">
            <p>Thời gian giữ ghế</p>
            <Countdown
              initialMinute={0}
              initialSeconds={30}
              handleCountdown={handleCountdown}
            />
          </div>
        </div>
        <div className="screen scrollBar">
          <div className="blackDiv"></div>
          <h1>Màn hình</h1>
          {props.danhSachGhe.map((item, index) => {
            if (index % 16 === 0) {
              // console.log(String.fromCharCode(65 + index / 16));
              return (
                <SlotRow
                  key={index}
                  character={String.fromCharCode(65 + index / 16)}
                  slots={props.danhSachGhe.slice(index, index + 16)}
                  standardSlot={standardSlot}
                  vipSlot={vipSlot}
                  bookingActive={bookingActive}
                  handleActive={handleActive}
                />
              );
            }
            return;
          })}
          <div className="help my-5">
            <div className="item">
              <div className="slot"></div>
              <p>Ghế thường</p>
            </div>
            <div className="item">
              <div className="slot vip"></div>
              <p>Ghế VIP</p>
            </div>
            <div className="item">
              <div className="slot active"></div>
              <p>Ghế đã chọn</p>
            </div>
            <div className="item">
              <div className="slot disable"></div>
              <p>Ghế không thể chọn</p>
            </div>
          </div>
          <div className="buyBtn hideDesktop">
            <button
              className={
                bookingActive.length !== full ? "nonActive" : "greenButton"
              }
              onClick={() => handleBooking()}
            >
              <span>Đặt vé</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
