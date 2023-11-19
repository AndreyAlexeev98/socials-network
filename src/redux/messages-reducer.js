const CHANGE_MESSAGE = "CHANGE-MESSAGE";
const ADD_MESSAGE = "ADD-MESSAGE";

export const changeNewMessageActionCreater = (text) => ({
  type: CHANGE_MESSAGE,
  message: text,
});

export const addMessageActionCreater = (text) => ({
  type: ADD_MESSAGE,
  message: text,
});

const initialState = {
  messages: [
    { id: "1", text: "Hi me dear friend, how tiy do???" },
    { id: "2", text: "By by, good look!" },
  ],
  newMessage: "",
  chats: [
    {
      id: "1",
      name: "Reece James ",
      preview: "Hi me dear friend...",
      avatarPath:
        "https://netstorage-sportsbrief.akamaized.net/images/7acca23b41945040.jpg?&amp;imwidth=600",
    },
    {
      id: "2",
      name: "William Gallas",
      preview: "Im strooong...",
      avatarPath:
        "https://cdn.images.dailystar.co.uk/dynamic/122/photos/707000/900x738/718707.jpg",
    },
    {
      id: "3",
      name: "Ronaldinho Gaucho",
      preview: "Lets play again???",
      avatarPath:
        "https://www.fonstola.ru/images/201605/fonstola.ru_231844.jpg",
    },
  ],
};

const messagesReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_MESSAGE: {
      let stateCopy = { ...state };
      stateCopy.newMessage = action.message;
      return stateCopy;
    }
    case ADD_MESSAGE: {
      let stateCopy = { ...state };
      stateCopy.messages = [...state.messages];
      const id = stateCopy.messages.length + 1;
      const newMess = {
        id: String(id),
        text: stateCopy.newMessage,
      };
      stateCopy.messages.push(newMess);
      stateCopy.newMessage = "";
      return stateCopy;
    }
    default:
      return state;
  }
};

export default messagesReducer;
