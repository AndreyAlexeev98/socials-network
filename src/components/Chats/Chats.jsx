import style from './Chats.module.scss';
import avatarPath from '../../media/img/message-avatar.jpg';

import Chat from './Chat/Chat';

const Chats = () => {
  return (
    <div>
      <ul>
        <li className={style.item}>
          <Chat avatar={avatarPath} name='John' preview='LolLol LolLol' />
        </li>
        <li className={style.item}>
          <Chat avatar={avatarPath} name='John2' preview='LolLol LolLol' />
        </li>
        <li className={style.item}>
          <Chat avatar={avatarPath} name='John3' preview='LolLol LolLol' />
        </li>
      </ul>
    </div>
  )
};

export default Chats;