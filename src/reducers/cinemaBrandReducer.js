import {
  GET_CINEMABRAND_FAILTURE,
  GET_CINEMABRAND_SUCCESS,
  GET_CINEMABRAND_REQUEST,
} from "../constants/cinemaConstants";
const initialState = {
  data: [],
  isLoading: false,
  error: "",
};

export default function cinemaBrandReducer(state = initialState, action) {
  switch (action.type) {
    case GET_CINEMABRAND_REQUEST: {
      return { ...state, isLoading: true, error: "" };
    }
    case GET_CINEMABRAND_SUCCESS: {
      return { ...state, isLoading: false, data: action.payload.data };
    }
    case GET_CINEMABRAND_FAILTURE: {
      return { ...state, isLoading: false, error: action.payload.error };
    }
    default:
      return state;
  }
}
