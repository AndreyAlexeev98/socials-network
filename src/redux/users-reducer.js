const SET_USER = "SET-USER";
const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";

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
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER: {
      return { ...state, users: [...action.users] }; // tmp tmp tmp, при подгрузке новых users, нужно - к старым прибавлять новых - users: [...state.users, ...action.users], но почему то так дефолтные пользователи дублируются. Разобраться позже
    }
    case FOLLOW: {
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.userId) {
            return { ...u, isFollower: true };
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
            return { ...u, isFollower: false };
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
