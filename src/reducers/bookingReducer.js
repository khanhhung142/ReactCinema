import {
  BOOKING_FAILTURE,
  BOOKING_REQUEST,
  BOOKING_SUCCESS
} from "../constants/cinemaConstants";
const initialState = {
  data: {},
  isLoading: false,
  error: "",
};

export default function bookingReducer(state = initialState, action) {
  switch (action.type) {
    case BOOKING_REQUEST: {
      return { ...state, isLoading: true, error: "" };
    }
    case BOOKING_SUCCESS: {
      return { ...state, isLoading: false, data: action.payload.data };
    }
    case BOOKING_FAILTURE: {
      return { ...state, isLoading: false, error: action.payload.error };
    }
    default:
      return state;
  }
}
