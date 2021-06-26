import React, { useState } from "react";
import DropdownFB from "./DropdownFB";
import { Button } from 'reactstrap';
export default function FastBooking() {

  return (
    <div className="fastBooking container">
      <div className="fastBooking__content row">
        <div className="col-4 fastBooking__content--item">
        <DropdownFB name={"Phim"}/>
        </div>
        <div className="col-2 fastBooking__content--item">
          <DropdownFB name={"Rạp"}/>
        </div>
        <div className="col-2 fastBooking__content--item">
        <DropdownFB name={"Ngày xem"}/>
        </div>
        <div className="col-2 fastBooking__content--item">
        <DropdownFB name={"Suất chiếu"}/>
        </div>
        <div className="col-2 fastBooking__content--button">
        <Button color="secondary">Mua vé ngay</Button>{' '}
        </div>
      </div>
    </div>
  );
}
