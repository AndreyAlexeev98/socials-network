import style from './Chats.module.scss';
// import avatarPath from '../../media/img/message-avatar.jpg';

import Chat from './Chat/Chat';

let chats = [
  {id: '1', name: 'Reece James ', preview: 'Hi me dear friend...', avatarPath: 'https://netstorage-sportsbrief.akamaized.net/images/7acca23b41945040.jpg?&amp;imwidth=600'},
  {id: '2', name: 'William Gallas', preview:'Im strooong...', avatarPath: 'https://cdn.images.dailystar.co.uk/dynamic/122/photos/707000/900x738/718707.jpg'},
  {id: '3', name: 'Ronaldinho Gaucho', preview:'Lets play again???', avatarPath: 'https://www.fonstola.ru/images/201605/fonstola.ru_231844.jpg'}  
]

const Chats = () => {
  return (
    <div>
      <ul>
        {chats.map( (chat) => {
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