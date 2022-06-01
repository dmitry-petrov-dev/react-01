import { authAPI } from "../api/api";
import { stopSubmit } from "redux-form";

const SET_USER_DATA = "SET_USER_DATA";

const initialState = {
  userId: null,
  email: null,
  login: null,
  isAuth: false,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA:
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

export const getAuthUserData = () => (dispatch) => {
  return authAPI.me().then((data) => {
    if (data.resultCode === 0) {
      const { id, email, login } = data.data;
      dispatch(setAuthUserData(id, email, login, true));
    }
  });
};

export const login = (email, password, rememberMe) => (dispatch) => {
  authAPI.login(email, password, rememberMe).then((data) => {
    if (data.resultCode === 0) {
      dispatch(getAuthUserData());
    } else {
      const message =
        data.messages.length > 0 ? data.messages[0] : "Some error";
      dispatch(
        stopSubmit("login", {
          _error: message,
        })
      );
    }
  });
};

export const logout = () => (dispatch) => {
  authAPI.logout().then((data) => {
    if (data.resultCode === 0) {
      dispatch(setAuthUserData(null, null, null, false));
    }
  });
};

export default authReducer;
