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
  saveProfile(profile) {
    return instance.put(`profile`, profile);
  },

  getStatus(profileId) {
    return instance.get(`profile/status/` + profileId);
  },
  updateStatus(status) {
    return instance.put(`profile/status/`, { status });
  },
  savePhoto(photoFile) {
    const formData = new FormData();
    formData.append("image", photoFile);
    return instance.put(`profile/photo/`, formData, {
      headers: {
        "Content-Type": "mutlipart/form-data",
      },
    });
  },
};

export const authAPI = {
  me() {
    return instance.get(`auth/me`);
  },
  login(email, password, rememberMe = false, captcha = null) {
    return instance.post(`/auth/login`, {
      email,
      password,
      rememberMe,
      captcha,
    });
  },
  logout() {
    return instance.delete(`/auth/login`);
  },
};

export const securityAPI = {
  getCaptchaUrl() {
    return instance.get(`security/get-captcha-url`);
  },
};
