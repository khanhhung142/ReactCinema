import {
  GET_SLOTS_FAILTURE,
  GET_SLOTS_REQUEST,
  GET_SLOTS_SUCCESS
} from "../constants/cinemaConstants";
const initialState = {
  thongTinPhim: {},
  danhSachGhe: [],
  isLoading: false,
  error: "",
};

export default function slotsReducer(state = initialState, action) {
  switch (action.type) {
    case GET_SLOTS_REQUEST: {
      return { ...state, isLoading: true, error: "" };
    }
    case GET_SLOTS_SUCCESS: {
      return { ...state, isLoading: false, thongTinPhim: action.payload.thongTinPhim, danhSachGhe: action.payload.danhSachGhe};
    }
    case GET_SLOTS_FAILTURE: {
      return { ...state, isLoading: false, error: action.payload.error };
    }
    default:
      return state;
  }
}