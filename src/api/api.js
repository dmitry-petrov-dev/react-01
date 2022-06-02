import * as axios from "axios";

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
    return instance.get(`users?page=${currentPage}&count=${pageSize}`);
  },

  follow(userId) {
    return instance.post(`follow/${userId}`);
  },
  unfollow(userId) {
    return instance.delete(`follow/${userId}`);
  },
};

export const profileAPI = {
  getProfile(profileId) {
    return instance.get(`profile/` + profileId);
  },
  getStatus(profileId) {
    return instance.get(`profile/status/` + profileId);
  },
  updateStatus(status) {
    return instance.put(`profile/status/`, { status });
  },
};

export const authAPI = {
  me() {
    return instance.get(`auth/me`);
  },
  login(email, password, rememberMe = false) {
    return instance.post(`/auth/login`, { email, password, rememberMe });
  },
  logout() {
    return instance.delete(`/auth/login`);
  },
};
