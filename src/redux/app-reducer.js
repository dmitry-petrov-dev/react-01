import { getAuthUserData } from "./auth-reducer";

const INITIALIZED_SUCCESS = "myapp/app/INITIALIZED_SUCCESS";

const initialState = {
  initialized: null,
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case INITIALIZED_SUCCESS:
      return {
        ...state,
        initialized: true,
      };
    default:
      return state;
  }
};

export const setInitializedSuccess = () => ({
  type: INITIALIZED_SUCCESS,
});

export const initializeApp = () => async (dispatch) => {
  await dispatch(getAuthUserData());
  dispatch(setInitializedSuccess());
};

export default appReducer;
