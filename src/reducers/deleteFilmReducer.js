import {
  DELETE_FILM_FAILTURE,
  DELETE_FILM_REQUEST,
  DELETE_FILM_SUCCESS
} from "../constants/filmConstants";
const initialState = {
  data: null,
  isLoading: false,
  error: false,
};

export default function deleteFilmReducer(state = initialState, action) {
  switch (action.type) {
    case DELETE_FILM_REQUEST: {
      return { ...state, isLoading: true, error: "" };
    }
    case DELETE_FILM_SUCCESS: {
      return { ...state, isLoading: false, data: action.payload.data};
    }
    case DELETE_FILM_FAILTURE: {
      return { ...state, isLoading: false, error: action.payload.error };
    }
    default:
      return state;
  }
}
