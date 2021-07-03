import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Collapse } from "reactstrap";
export default function FilmSchedule({ info }) {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  return (
    <>
      <div className="filmSchedule">
        <div className="info" onClick={toggle}>
          <img
            src={info.hinhAnh}
            alt=""
          />
          <div className="name">
            <h1>{info.tenPhim}</h1>
            <p>120 phút</p>
          </div>
          <div className="arrow">
            {isOpen ? (
              <i class="fa fa-angle-up"></i>
            ) : (
              <i class="fa fa-angle-down"></i>
            )}
          </div>
        </div>

        <Collapse isOpen={isOpen} className="row pt-2 px-5">
          <Link to={`/checkout/${info.maPhim}`}>
            <div className="scheduleTime ">
              <p>
                10:10 <span>~ 12:10</span>
              </p>
            </div>
          </Link>
          <Link to={`/checkout/${info.maPhim}`}>
            <div className="scheduleTime">
              <p>
                12:10 <span>~ 14:10</span>
              </p>
            </div>
          </Link>

          <Link to={`/checkout/${info.maPhim}`}>
            <div className="scheduleTime">
              <p>
                14:10 <span>~ 16:10</span>
              </p>
            </div>
          </Link>

          <Link to={`/checkout/${info.maPhim}`}>
            <div className="scheduleTime">
              <p>
                16:10 <span>~ 18:10</span>
              </p>
            </div>
          </Link>

          <Link to={`/checkout/${info.maPhim}`}>
            <div className="scheduleTime">
              <p>
                18:10 <span>~ 20:10</span>
              </p>
            </div>
          </Link>
        </Collapse>
      </div>
    </>
  );
}
