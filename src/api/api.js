import axios from "axios";

const instance = axios.create({
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  withCredentials: true,
});

export const usersAPI = {
  getUsers(pageSize = 10, count = 1) {
    return instance
      .get(`users?count=${pageSize}&page=${count}`)
      .then((response) => {
        return response.data;
      });
  },
};

export const authAPI = {
  setAuth() {
    return instance.get("auth/me");
  },
};

export const followAPI = {
  setFollow(userId) {
    return instance.post(`follow/${userId}`);
  },
  setUnfollow(userId) {
    return instance.delete(`follow/${userId}`);
  },
};

export const profileAPI = {
  getUserProfile(profileId) {
    return instance.get(`profile/${profileId}`);
  },
};
