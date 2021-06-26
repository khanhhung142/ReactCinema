
import React, { useState } from "react";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
export default function DropdownFB({name}) {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggle = () => setDropdownOpen((prevState) => !prevState);
  return (
    <Dropdown isOpen={dropdownOpen} toggle={toggle}>
    <DropdownToggle
      tag="span"
      data-toggle="dropdown"
      aria-expanded={dropdownOpen}
    >
      <div className="fastBooking__content--dropdown">
        <p>{name}</p>
        <i className="fa fa-angle-down" />
      </div>
    </DropdownToggle>
    <DropdownMenu className="dropdown__content scrollBar">
      <DropdownItem className="dropdown__item">
        Không có thông tin
      </DropdownItem>
    </DropdownMenu>
  </Dropdown>
  )
}
