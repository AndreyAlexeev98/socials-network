import axios from "axios";

export const getUsers = (pageSize = 10, count = 1) => {
  return axios
    .get(
      `https://social-network.samuraijs.com/api/1.0/users?count=${pageSize}&page=${count}`,
      {
        withCredentials: true,
      }
    )
    .then((response) => {
      return response.data;
    });
};

export const setAuth = () => {
  return axios.get("https://social-network.samuraijs.com/api/1.0/auth/me", {
    withCredentials: true,
  });
};

export const setFollow = (userId) => {
  return axios.post(
    `https://social-network.samuraijs.com/api/1.0/follow/${userId}`,
    null,
    {
      withCredentials: true,
    }
  );
};

export const setUnfollow = (userId) => {
  return axios.delete(
    `https://social-network.samuraijs.com/api/1.0/follow/${userId}`,
    {
      withCredentials: true,
    }
  );
};

export const getUserProfile = (profileId) => {
  return axios.get(
    `https://social-network.samuraijs.com/api/1.0/profile/${profileId}`
  );
};
