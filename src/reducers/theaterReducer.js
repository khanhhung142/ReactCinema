import {
  GET_THEATER_FAILTURE,
  GET_THEATER_SUCCESS,
  GET_THEATER_REQUEST,
} from "../constants/cinemaConstants";
const initialState = {
  data: [],
  isLoading: false,
  error: "",
};

export default function theaterReducer(state = initialState, action) {
  switch (action.type) {
    case GET_THEATER_REQUEST: {
      return { ...state, isLoading: true, error: "" };
    }
    case GET_THEATER_SUCCESS: {
      return { ...state, isLoading: false, data: action.payload.data};
    }
    case GET_THEATER_FAILTURE: {
      return { ...state, isLoading: false, error: action.payload.error };
    }
    default:
      return state;
  }
}