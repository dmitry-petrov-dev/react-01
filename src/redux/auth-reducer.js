import { stopSubmit } from "redux-form";
import { authAPI, securityAPI } from "../api/api";

const SET_USER_DATA = "myapp/auth/SET_USER_DATA";
const SET_CAPTCHA_URL_SUCCESS = "myapp/auth/SET_CAPTCHA_URL_SUCCESS";

const initialState = {
  userId: null,
  email: null,
  login: null,
  isAuth: false,
  captchaUrl: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA:
    case SET_CAPTCHA_URL_SUCCESS:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};

export const setAuthUserData = (userId, email, login, isAuth = false) => ({
  type: SET_USER_DATA,
  payload: { userId, email, login, isAuth },
});

export const setLoginData = (login, password, rememberMe) => ({
  type: SET_USER_DATA,
  loginData: { login, password, rememberMe },
});

export const setCaptchaUrlSuccess = (captchaUrl) => ({
  type: SET_CAPTCHA_URL_SUCCESS,
  payload: { captchaUrl },
});

export const getAuthUserData = () => async (dispatch) => {
  const response = await authAPI.me();
  if (response.data.resultCode === 0) {
    const { id, email, login } = response.data.data;
    dispatch(setAuthUserData(id, email, login, true));
  }
};

export const login = (email, password, rememberMe, captcha) => async (
  dispatch
) => {
  const response = await authAPI.login(email, password, rememberMe, captcha);
  if (response.data.resultCode === 0) {
    dispatch(getAuthUserData());
  } else {
    if (response.data.resultCode === 10) {
      dispatch(getCaptchaUrl());
    }
    const message =
      response.data.messages.length > 0
        ? response.data.messages[0]
        : "Some error";
    dispatch(
      stopSubmit("login", {
        _error: message,
      })
    );
  }
};

export const getCaptchaUrl = () => async (dispatch) => {
  const response = await securityAPI.getCaptchaUrl();
  dispatch(setCaptchaUrlSuccess(response.data.url));
};

export const logout = () => async (dispatch) => {
  const response = await authAPI.logout();
  if (response.data.resultCode === 0) {
    dispatch(setAuthUserData(null, null, null, false));
  }
};

export default authReducer;
