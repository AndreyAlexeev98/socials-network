const ADD_POST = "ADD-POST";
const POST_CHANGE = "POST-CHANGE";

export const getPostActionCreater = () => ({ type: ADD_POST });
export const onPostChangeActionCreater = (value) => ({
  type: POST_CHANGE,
  value: value,
});

const initialState = {
  userData: {
    title: "Andrey Alexeich",
    date_of_birth: "2 junary",
    city: "Kursk",
    education: 'KGU "16',
    web_site: "www.ya.com",
  },
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
};

const profileReducer = (state = initialState, action) => {
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
