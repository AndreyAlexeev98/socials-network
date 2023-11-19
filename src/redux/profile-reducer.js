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
    default:
      return state;
  }
};

export default profileReducer;
