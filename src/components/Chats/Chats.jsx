import { NavLink } from 'react-router-dom';

import Chat from './Chat/Chat';

import style from './Chats.module.scss';
// import avatarPath from '../../media/img/message-avatar.jpg';

const Chats = (props) => {
  return (
    <div>
      <ul>
        {props.chats.map( (chat) => {
          return (
          <li className={style.item} key={chat.id}>
            <NavLink to={chat.id}>
              <Chat avatar={chat.avatarPath} name={chat.name} preview={chat.preview} />
            </NavLink>
               
          </li>
          )})}
      </ul>
    </div>
  )
};

export default Chats;