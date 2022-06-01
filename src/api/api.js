import * as axios from "axios";
import profileReducer from "../redux/profile-reducer";

const instance = axios.create({
  withCredentials: true,
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  headers: {
    "API-KEY": process.env.REACT_APP_API_KEY,
  },
});

export const usersAPI = {
  getProfile(profileId) {
    console.warn("Obsolete method. Please profileAPI object");
    return profileAPI.getProfile(profileId);
    // return instance
    //   .get(`profile/` + profileId)
    //   .then((response) => response.data);
  },

  getUsers(currentPage = 1, pageSize = 10) {
    return instance
      .get(`users?page=${currentPage}&count=${pageSize}`)
      .then((response) => response.data);
  },

  follow(userId) {
    return instance.post(`follow/${userId}`).then((response) => response.data);
  },
  unfollow(userId) {
    return instance
      .delete(`follow/${userId}`)
      .then((response) => response.data);
  },
};

export const profileAPI = {
  getProfile(profileId) {
    return instance
      .get(`profile/` + profileId)
      .then((response) => response.data);
  },
  getStatus(profileId) {
    return instance
      .get(`profile/status/` + profileId)
      .then((response) => response.data);
  },
  updateStatus(status) {
    return instance.put(`profile/status/`, { status });
  },
};

export const authAPI = {
  me() {
    return instance.get(`auth/me`).then((response) => response.data);
  },
  login(email, password, rememberMe) {
    return instance
      .post(`/auth/login`, { email, password, rememberMe })
      .then((response) => response.data);
  },
};
