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
  }
}

export default cinemaAPI;