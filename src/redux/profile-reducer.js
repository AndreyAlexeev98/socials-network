const ADD_POST = "ADD-POST";
const POST_CHANGE = "POST-CHANGE";

export const getPostActionCreater = () => ({ type: ADD_POST });
export const onPostChangeActionCreater = (value) => ({
  type: POST_CHANGE,
  value: value,
});

const profileReducer = (state, action) => {
  switch (action.type) {
    case POST_CHANGE:
      state.newPostText = action.value;
      return state;
    case ADD_POST:
      const id = state.posts.length + 1;
      let newPost = {
        id: String(id),
        username: "Alex Ferguson",
        message: state.newPostText,
      };
      state.posts.push(newPost);
      state.newPostText = "";
      return state;
    default:
      return state;
  }
};

export default profileReducer;
