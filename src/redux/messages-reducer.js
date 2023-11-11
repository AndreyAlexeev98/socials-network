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

const messagesReducer = (state, action) => {
  switch (action.type) {
    case CHANGE_MESSAGE:
      state.newMessage = action.message;
      return state;
    case ADD_MESSAGE:
      const id = state.messages.length + 1;
      state.messages.push({
        id: String(id),
        text: state.newMessage,
      });
      state.newMessage = "";
      return state;
    default:
      return state;
  }
};

export default messagesReducer;
