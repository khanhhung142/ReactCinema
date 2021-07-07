import React, { useState, useEffect } from "react";
import Step01 from "./Step01";
import Step02 from "./Step02";
import { useHistory,useParams, Redirect } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {getSlots} from '../../actions/cinemaAction'

export default function Checkout() {
  const history = useHistory();
  const {scheduleID} = useParams()
  const dispatch = useDispatch();
  const { userInfo } = useSelector((state) => state.account);
  const {thongTinPhim, danhSachGhe} = useSelector(state => state.slots)
  const [activeID, setactiveID] = useState("step01");
  const [standard, setStandard] = useState(0);
  const [vip, setVip] = useState(0);
  const [cost, setCost] = useState(0);
  const triggleStep02 = (standard, vip, cost) => {
    setStandard(standard);
    setVip(vip);
    setCost(cost);
    setactiveID("step02");
  };
  const triggleStep01 = () => {
    setactiveID("step01");
  };
  useEffect(() => {
    dispatch(getSlots(scheduleID))
  }, [])
  if (!userInfo) {
    return (<Redirect to={`/login?redirectTo=/checkout/${scheduleID}`}/>)
  }
  if (userInfo) {
    return (
      <div className="checkout">
        <div className="checkout__nav hideMobile">
          <h1 id="step01" className={activeID === "step01" ? "active" : null}>
            01 CHỌN LOẠI VÉ
          </h1>
          <h1 id="step02" className={activeID === "step02" ? "active" : null}>
            02 CHỌN GHẾ & THANH TOÁN
          </h1>
          <h1 id="step03" className={activeID === "step03" ? "active" : null}>
            03 KẾT QUẢ ĐẶT VÉ
          </h1>
        </div>
        <div className="checkout__nav showMobile">
          <div className="backBtn" onClick={() => history.goBack()}>
            <i class="fa fa-arrow-left"></i>
          </div>
          <h1 id="step01" className={activeID === "step01" ? "show" : "hide"}>
            01 CHỌN LOẠI VÉ
          </h1>
          <h1 id="step02" className={activeID === "step02" ? "show" : "hide"}>
            02 CHỌN GHẾ & THANH TOÁN
          </h1>
          <h1 id="step03" className={activeID === "step03" ? "show" : "hide"}>
            03 KẾT QUẢ ĐẶT VÉ
          </h1>
        </div>
        <div className="checkout__content">
          {activeID === "step01" ? (
            <Step01 triggleStep02={triggleStep02} thongTinPhim={thongTinPhim}/>
          ) : null}
          {activeID === "step02" ? (
            <Step02
              standard={standard}
              vip={vip}
              cost={cost}
              triggleStep01={triggleStep01}
              thongTinPhim={thongTinPhim}
              danhSachGhe={danhSachGhe}
              userInfo={userInfo}
              scheduleID={scheduleID}
            />
          ) : null}
        </div>
      </div>
    );
  }
}
