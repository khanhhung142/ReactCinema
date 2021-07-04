import {
  GET_FILMSCHEDULE_FAILTURE,
  GET_FILMSCHEDULE_REQUEST,
  GET_FILMSCHEDULE_SUCCESS
} from "../constants/filmConstants";
const initialState = {
  data: [], // Dùng để chứa dữ liệu
  isLoading: false, // Dùng để control khi data đang được fetch
  error: "", // Dùng để hiển thị lỗi nếu có
};

export default function filmScheduleReducer(state = initialState, action) {
  switch (action.type) {
    case GET_FILMSCHEDULE_REQUEST: {
      return { ...state, isLoading: true, error: "" };
    }
    case GET_FILMSCHEDULE_SUCCESS: {
      return { ...state, isLoading: false, data: action.payload.data };
    }
    case GET_FILMSCHEDULE_FAILTURE: {
      return { ...state, isLoading: false, error: action.payload.error };
    }
    default: return state;
  }
}
