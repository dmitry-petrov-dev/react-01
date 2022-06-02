import { usersAPI, profileAPI } from "../api/api";

const ADD_POST = "myapp/profile/ADD-POST";
const DELETE_POST = "myapp/profile/DELETE_POST";
const SET_USER_PROFILE = "myapp/profile/SET_USER_PROFILE";
const SET_USER_STATUS = "myapp/profile/SET_USER_STATUS";

const initialState = {
  posts: [
    { id: 1, message: "Hello, World!", likesCount: 12 },
    { id: 2, message: "second post", likesCount: 10 },
    { id: 3, message: "third post", likesCount: 5 },
  ],
  profile: null,
  status: "",
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      return {
        ...state,
        posts: [
          ...state.posts,
          {
            id: 5,
            message: action.newPostText,
            likesCount: 0,
          },
        ],
      };
    case DELETE_POST:
      return {
        ...state,
        posts: state.posts.filter((post) => post.id != action.postId),
      };
    case SET_USER_PROFILE:
      return { ...state, profile: action.profile };
    case SET_USER_STATUS:
      return { ...state, status: action.status };
    default:
      return state;
  }
};

export const addPostActionCreator = (newPostText) => ({
  type: ADD_POST,
  newPostText,
});

export const deletePostActionCreator = (postId) => ({
  type: DELETE_POST,
  postId,
});

export const setUserProfile = (profile) => ({
  type: SET_USER_PROFILE,
  profile,
});

export const setUserStatus = (status) => ({
  type: SET_USER_STATUS,
  status,
});

export const addPost = (newPost) => (dispatch) => {
  dispatch(addPostActionCreator(newPost));
};

export const getUserProfile = (profileId) => async (dispatch) => {
  const response = await usersAPI.getProfile(profileId);
  dispatch(setUserProfile(response.data));
};

export const getUserStatus = (profileId) => async (dispatch) => {
  const response = await profileAPI.getStatus(profileId);
  dispatch(setUserStatus(response.data));
};

export const updateUserStatus = (status) => async (dispatch) => {
  const response = await profileAPI.updateStatus(status);
  if (!response.data.data.resultCode) {
    dispatch(setUserStatus(status));
  }
};

export default profileReducer;
