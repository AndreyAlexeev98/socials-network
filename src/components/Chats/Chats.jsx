import style from './Chats.module.scss';
// import avatarPath from '../../media/img/message-avatar.jpg';

import Chat from './Chat/Chat';

const Chats = (props) => {
  return (
    <div>
      <ul>
        {props.chats.map( (chat) => {
          return (
          <li className={style.item} key={chat.id}>
             <Chat avatar={chat.avatarPath} name={chat.name} preview={chat.preview} />  
          </li>
          )})}
      </ul>
    </div>
  )
};

export default Chats;