import {
  ADD_FILM_FAILTURE,
  ADD_FILM_REQUEST,
  ADD_FILM_SUCCESS
} from "../constants/filmConstants";
const initialState = {
  data: null,
  isLoading: false,
  error: false,
};

export default function addFilmReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_FILM_REQUEST: {
      return { ...state, isLoading: true, error: "" };
    }
    case ADD_FILM_SUCCESS: {
      return { ...state, isLoading: false, data: action.payload.data};
    }
    case ADD_FILM_FAILTURE: {
      return { ...state, isLoading: false, error: action.payload.error };
    }
    default:
      return state;
  }
}
