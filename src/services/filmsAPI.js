import axiosClient from "./axiosClient";
const filmAPI = {
  getFilmList: () => {
    const params = {
      maNhom: "GP14",
    };
    return axiosClient.get("/QuanLyPhim/LayDanhSachPhim", {params});
  },
  getFilmPage: (currentPage, count) => {
    const params = {
      maNhom: "GP14",
      soTrang: currentPage,
      soPhanTuTrenTrang: count,
    }
    return axiosClient.get("/QuanLyPhim/LayDanhSachPhimPhanTrang", {params})
  },
  getFilmInfo: (filmId) => {
    const params = {
      MaPhim:filmId
    }
    return axiosClient.get("/QuanLyPhim/LayThongTinPhim", {params});
  },
  getFilmSchedule: (filmId) => {
    const params = {
      MaPhim:filmId
    }
    return axiosClient.get("/QuanLyRap/LayThongTinLichChieuPhim", {params});
  },
  deleteFilm: (filmId) => {
    const params = {
      MaPhim : filmId
    }
    return axiosClient.delete("/QuanLyPhim/XoaPhim", {params});
  },
  addFilm: (values) => {
    return axiosClient.post("/QuanLyPhim/ThemPhimUploadHinh", values)
  }
  // getFilmByDays: (from, to) => {
  //   const params = {
  //     maNhom: "GP01",
  //     soTrang: 
  //   }
  // }
};
export default filmAPI;

// Cách dùng
// import coursesAPI from "src/services/coursesAPI"

// const {data} = await coursesAPI.getCourses()
