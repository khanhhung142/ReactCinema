import accountAPI from "../services/accountAPI";
import {
  POST_LOGIN_FAILTURE,
  POST_LOGIN_REQUEST,
  POST_LOGIN_SUCCESS,
  POST_SIGNIN_REQUEST,
  POST_SIGNIN_FAILTURE,
  POST_SIGNIN_SUCCESS
} from "../constants/accountConstants";

export const postLogin = (values, doSomething) => {
  return async (dispatch) => {
    dispatch({ type: POST_LOGIN_REQUEST });
    try {
      const { data } = await accountAPI.postLogin(values);
      localStorage.setItem("userInfo", JSON.stringify(data));
      dispatch({
        type: POST_LOGIN_SUCCESS,
        payload: { data },
      });
    } catch (error) {
      dispatch({
        type: POST_LOGIN_FAILTURE,
        payload: {error: error.response.data}
      });
    }
    doSomething()
  };
};

export const postSignIn = (values, doSomething) => {
  return async (dispatch) => {
    dispatch({ type: POST_SIGNIN_REQUEST });
    try {
      const { data } = await accountAPI.postSignIn(values);
      dispatch({
        type: POST_SIGNIN_SUCCESS,
        payload: { data },
      });
      doSomething()
    } catch (error) {
      dispatch({
        type: POST_SIGNIN_FAILTURE,
        payload: {error: error.response.data}
      });
    }
    
  };
};