import {
  GET_CINEMABRAND_SUCCESS,
  GET_CINEMABRAND_REQUEST,
  GET_CINEMABRAND_FAILTURE,
  GET_THEATER_FAILTURE,
  GET_THEATER_REQUEST,
  GET_THEATER_SUCCESS,
  GET_SCHEDULE_FAILTURE,
  GET_SCHEDULE_REQUEST,
  GET_SCHEDULE_SUCCESS,
} from "../constants/cinemaConstants";
import cinemaAPI from "../services/cinemaAPI";

export const getCinemaBrands = () => {
  return async (dispatch) => {
    dispatch({ type: GET_CINEMABRAND_REQUEST });
    try {
      const { data } = await cinemaAPI.getCinemaBrand();
      dispatch({
        type: GET_CINEMABRAND_SUCCESS,
        payload: { data },
      });
    } catch (error) {
      dispatch({
        type: GET_CINEMABRAND_FAILTURE,
        payload: error.response,
      });
    }
  };
};
export const getTheaters = (activeID) => {
  return async (dispatch) => {
    dispatch({ type: GET_THEATER_REQUEST });
    try {
      const { data } = await cinemaAPI.getTheaters(activeID);
      dispatch({
        type: GET_THEATER_SUCCESS,
        payload: { data },
      });
    } catch (error) {
      dispatch({
        type: GET_THEATER_FAILTURE,
        payload: error.response,
      });
    }
  };
};
export const getScheduleOnTheater = (cinema) => {
  return async (dispatch) => {
    dispatch({ type: GET_SCHEDULE_REQUEST });
    try {
      const { data } = await cinemaAPI.getSchedules(cinema);
      dispatch({
        type: GET_SCHEDULE_SUCCESS,
        payload: { data: data, schedule: data[0].lstCumRap },
      });
    } catch (error) {
      dispatch({
        type: GET_SCHEDULE_FAILTURE,
        payload: error,
      });
    }
  };
};
