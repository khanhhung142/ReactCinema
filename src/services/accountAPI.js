import axiosClient from "./axiosClient";
const accountAPI = {
  postLogin: (values) => {
    return axiosClient.post("/QuanLyNguoiDung/DangNhap", values);
  },
  postSignIn: (values) => {
    const params = {
      ...values, maNhom: "GP01", maLoaiNguoiDung: "KhachHang"
    }
    return axiosClient.post("/QuanLyNguoiDung/DangKy", {params});
  }
}

export default accountAPI;