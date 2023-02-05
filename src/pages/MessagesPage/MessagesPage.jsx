import style from './MessagesPage.module.scss';

import Chats from '../../components/Chats/Chats';
import Messages from '../../components/Messages/Messages';

const MessagesPage = () => {
  return (
    <div>
      <h1 className={style.title}>Мои сообщения</h1>
      <div className={style.grid}>
        <div className={style.sidebar}>
          <Chats />
        </div>
        <div>
            <Messages />
        </div>
      </div>
      
    </div>
  )
}

export default MessagesPage;