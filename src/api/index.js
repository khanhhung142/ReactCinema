import axios from "axios";

const BASE_API = process.env.REACT_APP_API;

export default async function callApi({ url, method, data, option }) {
  const user = localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user"))
    : "";
  const token = user ? user.token : "";
  return new Promise((resolve, reject) => {
    axios({
      method,
      url: `${BASE_API}${url}`,
      data,
      headers: { ...option?.headers, Authorization: `Bearer ${token}` },
      // ...option,
    })
      .then((res) => resolve(res.data))
      .catch((err) => reject(err));
  });
}

export async function callAdminApi({ url, method, data, option }) {
  const user = localStorage.getItem("user_admin")
    ? JSON.parse(localStorage.getItem("user_admin"))
    : "";
  const token = user ? user.token : "";
  return new Promise((resolve, reject) => {
    axios({
      method,
      url: `${BASE_API}${url}`,
      data,
      headers: { ...option?.headers, Authorization: `Bearer ${token}` },
      // ...option,
    })  
      .then((res) => resolve(res.data))
      .catch((err) => reject(err));
  });
}
