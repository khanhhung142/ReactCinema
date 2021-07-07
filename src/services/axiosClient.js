import axios from 'axios'
import qs from 'qs'

const axiosClient = axios.create({
  baseURL:"https://movie0706.cybersoft.edu.vn/api/",
  paramsSerializer: (params) => qs.stringify(params, {skipNulls: true})
});
// Đính kèm token cho mọi tương tác api (API chưa được gửi)
// interceptors.request: Xử lý request trước khi gửi lên server 
axiosClient.interceptors.request.use(
  // Xử lý trước khi request được gửi lên server
  (config) => {
    // Thêm Authorization và header
    const userInfo = localStorage.getItem("userInfo");
    if(userInfo) {
      const {accessToken} = JSON.parse(userInfo)
      config.headers.Authorization = `Bearer ${accessToken}`
      
    }
    console.log(config)
    return config
  },
  // Xử lý khi request bị lỗi
  (error) => {
    return Promise.reject(error);
  }
)
// interceptors.response: Xử lý sau khi sever gửi dữ liệu về (trước khi truyền xuống browser)
// Dùng để xử lý lỗi khi gửi về hoặc dùng để xét điều kiện thay đổi data gửi về
axiosClient.interceptors.response.use(
  (response) => {
    // Xử lý kết quả trả về từ server
    return response
  },
  (error) => {
    // Xử lý nếu kết quả trả về bị lỗi 
    // Ví dụ hết hạn access Token
    if(error.status === 401) {
      // Xử lý logout: clear localStorage, đẩy người dùng về trang logout
    }
    if(error.status === 500) {
      // Xử lý thông  báo cho người dùng server đang bị lỗi
    }
    return Promise.reject(error)
  }
)
// axiosClient.interceptors.request(
//   (config) => {
//     return config
//   },
//   (error) => {
//     return Promise.reject(error);
//   }
// );
// axiosClient.interceptors.response(
//   (response) => {
//     return response
//   },
//   (error) => {
//     return Promise.reject(error)
//   }
// )
export default axiosClient