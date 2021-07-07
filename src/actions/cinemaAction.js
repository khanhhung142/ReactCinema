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
  GET_SLOTS_FAILTURE,
  GET_SLOTS_REQUEST,
  GET_SLOTS_SUCCESS,
  BOOKING_FAILTURE,
  BOOKING_REQUEST,
  BOOKING_SUCCESS
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
        payload: {error: error.response.data}
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
        payload: {error: error.response.data}
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
        payload: {error: error.response.data}
      });
    }
  };
};

export const getSlots = (cinema) => {
  return async (dispatch) => {
    dispatch({ type: GET_SLOTS_REQUEST });
    try {
      const { data } = await cinemaAPI.getSlots(cinema);
      dispatch({
        type: GET_SLOTS_SUCCESS,
        payload: {thongTinPhim: data.thongTinPhim, danhSachGhe: data.danhSachGhe},
      });
    } catch (error) {
      dispatch({
        type: GET_SLOTS_FAILTURE,
        payload: {error: error.response.data}
      });
    }
  };
};

export const booking = (values) => {
  return async (dispatch) => {
    dispatch({ type: BOOKING_REQUEST });
    try {
      const { data } = await cinemaAPI.booking(values);
      dispatch({
        type: BOOKING_SUCCESS,
        payload: {data},
      });
    } catch (error) {
      dispatch({
        type: BOOKING_FAILTURE,
        payload: {error: error.response},
      });
    }
  };
};