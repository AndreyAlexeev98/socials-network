const ADD_POST = "ADD-POST";
const POST_CHANGE = "POST-CHANGE";
const SET_USER_PROFILE = "SET_USER_PROFILE";

export const getPostActionCreater = () => ({ type: ADD_POST });
export const onPostChangeActionCreater = (value) => ({
  type: POST_CHANGE,
  value: value,
});
export const setUserProfile = (profile) => ({
  type: SET_USER_PROFILE,
  profile,
});

const initialState = {
  posts: [
    {
      id: "1",
      username: "Big Bull",
      message: "I love history",
    },
    {
      id: "2",
      username: "Bred Borns",
      message: "Trevelling is my live",
    },
  ],
  newPostText: "",
  profile: null,
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case POST_CHANGE: {
      const copyState = { ...state };
      copyState.newPostText = action.value;
      return copyState;
    }
    case ADD_POST: {
      const copyState = { ...state };
      copyState.posts = [...state.posts];
      const id = copyState.posts.length + 1;
      let newPost = {
        id: String(id),
        username: "Alex Ferguson",
        message: copyState.newPostText,
      };
      copyState.posts.push(newPost);
      copyState.newPostText = "";
      return copyState;
    }
    case SET_USER_PROFILE: {
      return { ...state, profile: action.profile };
    }
    default:
      return state;
  }
};

export default profileReducer;
