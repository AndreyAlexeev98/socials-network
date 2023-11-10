import {
  addMessageActionCreater,
  changeNewMessageActionCreater,
} from "../../redux/store";
import Chats from "../../components/Chats/Chats";
import Messages from "../../components/Messages/Messages";
import style from "./MessagesPage.module.scss";

const MessagesPage = (props) => {
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
    <div>
      <h1 className={style.title}>Мои сообщения</h1>
      <div className={style.grid}>
        <div className={style.sidebar}>
          <Chats chats={chats} />
        </div>
        <div>
          <Messages messages={messages} />
        </div>
      </div>
      <textarea value={newMessage} onChange={changeNewMessage}></textarea>
      <button onClick={addMessage}>Отправить</button>
    </div>
  );
};

export default MessagesPage;
