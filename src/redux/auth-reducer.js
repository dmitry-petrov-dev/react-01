import { authAPI } from "../api/api";

const SET_USER_DATA = "SET_USER_DATA";
const LOGIN = "LOGIN";

const initialState = {
  userId: null,
  email: null,
  login: null,
  isAuth: false,
  loginData: {
    login: "",
    password: "",
    rememberMe: false,
  },
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA:
      return {
        ...state,
        ...action.data,
        isAuth: true,
      };
    case LOGIN:
      return {
        ...state,
        loginData: { ...action.loginData },
      };
    default:
      return state;
  }
};

export const setAuthUserData = (userId, email, login) => ({
  type: SET_USER_DATA,
  data: { userId, email, login },
});

export const setLoginData = (login, password, rememberMe) => ({
  type: SET_USER_DATA,
  loginData: { login, password, rememberMe },
});

export const getAuthUserData = () => (dispatch) => {
  authAPI.me().then((data) => {
    if (data.resultCode === 0) {
      const { id, email, login } = data.data;
      dispatch(setAuthUserData(id, email, login));
    }
  });
};

export const postLoginData = (email, password, rememberMe) => (dispatch) => {
  authAPI.login(email, password, rememberMe).then((data) => {
    if (data.resultCode === 0) {
      debugger;
      const id = data.userId;
      dispatch(setAuthUserData(id, email, email));
    }
  });
};

export default authReducer;
