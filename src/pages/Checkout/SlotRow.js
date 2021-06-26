import React from "react";
import Swal from "sweetalert2/dist/sweetalert2.js";
export default function SlotRow({
  character,
  slots,
  standardSlot,
  vipSlot,
  bookingActive,
  handleActive,
}) {
  // Hàm render số ghế ngồi. tham số là số lượng ghế render và vị trí bắt đầu trong mảng slots
  const renderSlot = (amount, startIndex) => {
    let result = [];
    for (let i = 0; i < amount; i++) {
      // Kiểm tra xem ghế đã được đặt chưa
      if (slots[startIndex + i].daDat === false) {
        // Biến isActive kiếm tra xem ghế có đang được chọn không. nếu có render ghế active và dừng lại
        let isActive = false;
        for (let j = 0; j < bookingActive.length; j++) {
          if (slots[startIndex + i].stt === bookingActive[j]) {
            if (slots[startIndex + i].loaiGhe === "Thuong") {
              result.push(
                <div
                  className="slot active"
                  stt={slots[startIndex + i].stt}
                  status="selected"
                  type="standard"
                  onClick={(e) => handleSelect(e)}
                ></div>
              );
            }
            if (slots[startIndex + i].loaiGhe === "Vip") {
              result.push(
                <div
                  className="slot active"
                  stt={slots[startIndex + i].stt}
                  status="selected"
                  type="vip"
                  onClick={(e) => handleSelect(e)}
                ></div>
              );
            }
            isActive = true;
          }
        }
        if (!isActive) {
          // Nếu loại ghế là thường, sẽ so sánh tiếp số lượng vé loại thường ng dùng đặt từ bước 1 nếu bằng 0 sẽ disalbe ghế
          if (slots[startIndex + i].loaiGhe === "Thuong") {
            if (standardSlot !== 0) {
              result.push(
                <div
                  className="slot"
                  stt={slots[startIndex + i].stt}
                  status="avaiable"
                  type="standard"
                  onClick={(e) => handleSelect(e)}
                ></div>
              );
            } else {
              result.push(
                <div
                  className="slot disable"
                  stt={slots[startIndex + i].stt}
                  status="disable"
                  type="standard"
                  onClick={(e) => handleSelect(e)}
                ></div>
              );
            }
          }
          // Nếu loại ghế là vip, sẽ so sánh tiếp số lượng vé loại vip ng dùng đặt từ bước 1 nếu bằng 0 sẽ disalbe ghế
          else if (slots[startIndex + i].loaiGhe === "Vip") {
            if (vipSlot !== 0) {
              result.push(
                <div
                  className="slot vip"
                  stt={slots[startIndex + i].stt}
                  status="avaiable"
                  type="vip"
                  onClick={(e) => handleSelect(e)}
                ></div>
              );
            } else {
              result.push(
                <div
                  className="slot disable"
                  stt={slots[startIndex + i].stt}
                  status="disable"
                  type="vip"
                  onClick={(e) => handleSelect(e)}
                ></div>
              );
            }
          }
        }
      } else {
        if (slots[startIndex + i].loaiGhe === "Thuong") {
          result.push(
            <div
              className="slot disable"
              stt={slots[startIndex + i].stt}
              status="disable"
              type="standard"
              onClick={(e) => handleSelect(e)}
            ></div>
          );
        }
        if (slots[startIndex + i].loaiGhe === "Vip") {
          result.push(
            <div
              className="slot disable"
              stt={slots[startIndex + i].stt}
              status="disable"
              type="vip"
              onClick={(e) => handleSelect(e)}
            ></div>
          );
        }
      }
    }
    return result;
  };
  const handleSelect = (e) => {
    if (e.target.getAttribute("status") === "disable") {
      Swal.fire({
        title: "Bạn không thể chọn ghế này",
        icon: "error",
        confirmButtonText: "OK",
      });
      return;
    }
    if (e.target.getAttribute("status") === "selected") {
      handleActive(
        e.target.getAttribute("stt"),
        e.target.getAttribute("type"),
        false,
        character
      );
    } else if (
      e.target.getAttribute("type") === "vip" ||
      e.target.getAttribute("type") === "standard"
    ) {
      handleActive(
        e.target.getAttribute("stt"),
        e.target.getAttribute("type"),
        true,
        character
      );
    }
  };
  return (
    <div className="slotRow row">
      <div className="text col-2">
        <h1>{character}</h1>
      </div>
      <div className="col-2 row">{renderSlot(2, 0)}</div>
      <div className="col-6 row">{renderSlot(12, 2)}</div>
      <div className="col-2 row">{renderSlot(2, 14)}</div>
    </div>
  );
}
