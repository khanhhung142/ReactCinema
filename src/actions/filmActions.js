import {
  GET_FILMLIST_REQUEST,
  GET_FILMLIST_SUCCESS,
  GET_FILMLIST_FAILTURE,
  GET_FILMPAGE_REQUEST,
  GET_FILMPAGE_SUCCESS,
  GET_FILMPAGE_FAILTURE,
  GET_FILMINFO_FAILTURE,
  GET_FILMINFO_REQUEST,
  GET_FILMINFO_SUCCESS,
  GET_FILMSCHEDULE_FAILTURE,
  GET_FILMSCHEDULE_REQUEST,
  GET_FILMSCHEDULE_SUCCESS,
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

export const getFilmInfo = (filmId) => {
  return async (dispatch) => {
    dispatch({type: GET_FILMINFO_REQUEST});
    try {
      const {data} = await filmAPI.getFilmInfo(filmId);
      // const {currentPage, count, ...dataFilted} = data;
      // console.log(dataFilted)
      dispatch({
        type: GET_FILMINFO_SUCCESS,
        payload: {data},
      });
    }catch (error) {
      dispatch({
        type: GET_FILMINFO_FAILTURE,
        payload: error.response
      })
    }
  }
}
export const getFilmSchedule = (filmId) => {
  return async (dispatch) => {
    dispatch({type: GET_FILMSCHEDULE_REQUEST});
    try {
      const {data} = await filmAPI.getFilmSchedule(filmId);
      // const {currentPage, count, ...dataFilted} = data;
      // console.log(dataFilted)
      dispatch({
        type: GET_FILMSCHEDULE_SUCCESS,
        payload: {data},
      });
    }catch (error) {
      dispatch({
        type: GET_FILMSCHEDULE_FAILTURE,
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