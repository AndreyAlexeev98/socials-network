import Chats from "../../components/Chats/Chats";
import Messages from "../../components/Messages/Messages";
import style from "./MessagesPage.module.scss";

const MessagesPage = (props) => {
  const { chats, messages, value, onChange, onClick } = props;
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
      <textarea value={value} onChange={onChange}></textarea>
      <button onClick={onClick}>Отправить</button>
    </div>
  );
};

export default MessagesPage;
