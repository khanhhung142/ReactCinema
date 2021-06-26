import {
  GET_FILMLIST_REQUEST,
  GET_FILMLIST_SUCCESS,
  GET_FILMLIST_FAILTURE,
} from "../constants/filmConstants";

const initialState = {
  data: [], // Dùng để chứa dữ liệu
  isLoading: false, // Dùng để control khi data đang được fetch
  error: "", // Dùng để hiển thị lỗi nếu có
};

export default function filmListReducer(state = initialState, action) {
  switch (action.type) {
    case GET_FILMLIST_REQUEST: {
      return { ...state, isLoading: true, error: "" };
    }
    case GET_FILMLIST_SUCCESS: {
      return { ...state, isLoading: false, data: action.payload.data };
    }
    case GET_FILMLIST_FAILTURE: {
      return { ...state, isLoading: false, error: action.payload.error };
    }
    default: return state;
  }
}
