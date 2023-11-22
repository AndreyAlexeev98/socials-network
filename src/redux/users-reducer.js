const SET_USER = "SET-USER";
const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const CHANGE_PAGE = "CHANGE_PAGE";
const TOTAL_COUNT = "TOTAL_COUNT";

export const setTotalUsersCountActionCreater = (count) => ({
  type: TOTAL_COUNT,
  count,
});

export const changeCurrentPageActionCreater = (page) => ({
  type: CHANGE_PAGE,
  page,
});

export const setUsersActionCreater = (users) => ({
  type: SET_USER,
  users,
});

export const followActionCreater = (userId) => ({
  type: FOLLOW,
  userId,
});

export const unfollowActionCreater = (userId) => ({
  type: UNFOLLOW,
  userId,
});

const initialState = {
  users: [],
  pageSize: 3,
  totalUserCount: 0,
  currnetPage: 1,
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOTAL_COUNT: {
      if (action.count > 30) {
        action.count = 30;
      }
      return { ...state, totalUserCount: action.count };
    }
    case CHANGE_PAGE: {
      return { ...state, currnetPage: action.page };
    }
    case SET_USER: {
      return {
        ...state,
        users: action.users,
      };
    }
    case FOLLOW: {
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.userId) {
            return { ...u, followed: true };
          }
          return u;
        }),
      };
    }
    case UNFOLLOW: {
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.userId) {
            return { ...u, followed: false };
          }
          return u;
        }),
      };
    }
    default:
      return state;
  }
};

export default usersReducer;
