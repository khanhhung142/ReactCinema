import React, { useEffect, useState } from "react";
import { getCinemaBrands } from "../../actions/cinemaAction";
import ListCinema from "./ListCinema";
import { useSelector, useDispatch } from "react-redux";
export default function CinemaComplex() {
  const { data } = useSelector((state) => state.cinemaBrand);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCinemaBrands());
  }, []);
  const [activeID, setactiveID] = useState("BHDStar");
  return (
    <div className="cinemaComplex container" id="cinema">
      <div className="cinemaComplex__content">
        <div className="cinemaComplex__content--logo mb-2">
          {data.map((item) => {
            return (
              <a
                key={item.maHeThongRap}
                className={activeID === item.maHeThongRap ? "active" : null}
                id={item.maHeThongRap}
                onClick={(e) => setactiveID(e.target.id)}
              >
                <img src={item.logo} alt={item.maHeThongRap} />
              </a>
            );
          })}
        </div>
        <ListCinema cinema={activeID} />
      </div>
    </div>
  );
}
