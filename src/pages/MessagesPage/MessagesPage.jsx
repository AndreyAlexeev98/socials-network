import style from './MessagesPage.module.scss';

import Chats from '../../components/Chats/Chats';
import Messages from '../../components/Messages/Messages';

let messages = [
  {id: '1', text:'Hi me dear friend, how tiy do???' },
  {id: '2', text:'By by, good look!' }
];

let chats = [
  {id: '1', name: 'Reece James ', preview: 'Hi me dear friend...', avatarPath: 'https://netstorage-sportsbrief.akamaized.net/images/7acca23b41945040.jpg?&amp;imwidth=600'},
  {id: '2', name: 'William Gallas', preview:'Im strooong...', avatarPath: 'https://cdn.images.dailystar.co.uk/dynamic/122/photos/707000/900x738/718707.jpg'},
  {id: '3', name: 'Ronaldinho Gaucho', preview:'Lets play again???', avatarPath: 'https://www.fonstola.ru/images/201605/fonstola.ru_231844.jpg'}  
];

const MessagesPage = () => {
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
      
    </div>
  )
}

export default MessagesPage;