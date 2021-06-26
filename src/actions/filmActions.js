import {
  GET_FILMLIST_REQUEST,
  GET_FILMLIST_SUCCESS,
  GET_FILMLIST_FAILTURE,
  GET_FILMPAGE_REQUEST,
  GET_FILMPAGE_SUCCESS,
  GET_FILMPAGE_FAILTURE,
  GET_FILMBYDAY_REQUEST,
  GET_FILMBYDAY_SUCCESS,
  GET_FILMBYDAY_FAILTURE,
} from "../constants/filmConstants";
// import axios from "axios";
import filmAPI from "../services/filmsAPI";

// Gọi API lấy dữ liệu flims
export const getFlims = () => {
  return async (dispatch) => {
    // dispatch action request trước khi gọi api (để chuyển sang trạng thái loading)
    dispatch({ type: GET_FILMLIST_REQUEST });
    try {
      const {data} = await filmAPI.getFilmList();
      dispatch({
        type: GET_FILMLIST_SUCCESS,
        payload: { data },
      });
    } catch (error) {
      // Gọi api thất bại => dispatch action failure
      dispatch({
        type: GET_FILMLIST_FAILTURE,
        payload: error.response,
      });
    }
  };
};

export const getFilmPage = (currentPageIn, countIn) => {
  return async (dispatch) => {
    dispatch({type: GET_FILMPAGE_REQUEST});
    try {
      const {data} = await filmAPI.getFilmPage(currentPageIn, countIn);
      // const {currentPage, count, ...dataFilted} = data;
      // console.log(dataFilted)
      dispatch({
        type: GET_FILMPAGE_SUCCESS,
        payload: {data},
      });
    }catch (error) {
      dispatch({
        type: GET_FILMPAGE_FAILTURE,
        payload: error.response
      })
    }
  }
}

// export const getFilmByDays = (from, to) => {
//   return async (dispatch) => {
//     dispatch({type: GET_FILMBYDAY_REQUEST});
//     try {
//       const {data} = await filmAPI.getFilmByDays
//     }
//   }
// }