import {
  GET_SCHEDULE_FAILTURE,
  GET_SCHEDULE_REQUEST,
  GET_SCHEDULE_SUCCESS
} from "../constants/cinemaConstants";
const initialState = {
  data: [], // Dùng để chứa dữ liệu
  schedule:[],
  isLoading: false, // Dùng để control khi data đang được fetch
  error: "", // Dùng để hiển thị lỗi nếu có
};

export default function scheduleOnTheaterReducer(state = initialState, action) {
  switch (action.type) {
    case GET_SCHEDULE_REQUEST: {
      return { ...state, isLoading: true, error: "" };
    }
    case GET_SCHEDULE_SUCCESS: {
      return { ...state, isLoading: false, data: action.payload.data, schedule: action.payload.schedule };
    }
    case GET_SCHEDULE_FAILTURE: {
      return { ...state, isLoading: false, error: action.payload };
    }
    default: return state;
  }
}
