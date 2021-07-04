import {
  GET_FILMINFO_FAILTURE,
  GET_FILMINFO_REQUEST,
  GET_FILMINFO_SUCCESS
} from "../constants/filmConstants";
const initialState = {
  data: [],
  isLoading: false,
  error: "",
};

export default function filmInfoReducer(state = initialState, action) {
  switch (action.type) {
    case GET_FILMINFO_REQUEST: {
      return { ...state, isLoading: true, error: "" };
    }
    case GET_FILMINFO_SUCCESS: {
      return { ...state, isLoading: false, data: action.payload.data };
    }
    case GET_FILMINFO_FAILTURE: {
      return { ...state, isLoading: false, error: action.payload.error };
    }
    default:
      return state;
  }
}
