import axiosClient from "./axiosClient";
const cinemaAPI = {
  getCinemaBrand: () => {
    return axiosClient.get("/QuanLyRap/LayThongTinHeThongRap");
  },
  getTheaters: (activeID) => {
    const params = {
      maHeThongRap: activeID,
    }
    return axiosClient.get("/QuanLyRap/LayThongTinCumRapTheoHeThong", {params});
  },
  getSchedules: (cinema) => {
    const params = {
      maNhom: "GP14",
      maHeThongRap: cinema,
    }
    return axiosClient.get("QuanLyRap/LayThongTinLichChieuHeThongRap", {params});
  },
  getSlots: (scheduleID) => {
    const params = {
      MaLichChieu:scheduleID,
    }
    return axiosClient.get("/QuanLyDatVe/LayDanhSachPhongVe", {params});
  },
  booking:(values) => {
    return axiosClient.post("/QuanLyDatVe/DatVe", values)
  }
}

export default cinemaAPI;