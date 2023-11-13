import {
  addMessageActionCreater,
  changeNewMessageActionCreater,
} from "../../redux/messages-reducer";
import MessagesPage from "./MessagesPage";

const MessagesPageContainer = (props) => {
  const state = props.store.getState().messages;
  const dispatch = props.store.dispatch.bind(props.store);

  const chats = state.chats;
  const messages = state.messages;
  const newMessage = state.newMessage;

  const changeNewMessage = (e) => {
    dispatch(changeNewMessageActionCreater(e.target.value));
  };

  const addMessage = (e) => {
    const message = e.target.value;
    dispatch(addMessageActionCreater(message));
  };

  return (
    <MessagesPage
      chats={chats}
      messages={messages}
      value={newMessage}
      onChange={changeNewMessage}
      onClick={addMessage}
    />
  );
};

export default MessagesPageContainer;
