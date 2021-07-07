import {
  POST_LOGIN_FAILTURE,
  POST_LOGIN_REQUEST,
  POST_LOGIN_SUCCESS
} from "../constants/accountConstants";
const userInfo = localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : null;
const initialState = {
  userInfo,
  isLoading: false,
  error: "",
};

export default function accountLoginReducer(state = initialState, action) {
  switch (action.type) {
    case POST_LOGIN_REQUEST: {
      return { ...state, isLoading: true, error: "" };
    }
    case POST_LOGIN_SUCCESS: {
      return { ...state, isLoading: false, userInfo: action.payload.data};
    }
    case POST_LOGIN_FAILTURE: {
      return { ...state, isLoading: false, error: action.payload.error };
    }
    default:
      return state;
  }
}
