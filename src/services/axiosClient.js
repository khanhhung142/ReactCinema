import axios from 'axios'
import qs from 'qs'

const axiosClient = axios.create({
  baseURL:"https://movie0706.cybersoft.edu.vn/api/",
  paramsSerializer: (params) => qs.stringify(params, {skipNulls: true})
});
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