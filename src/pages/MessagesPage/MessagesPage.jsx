import React from 'react';

import style from './MessagesPage.module.scss';

import Chats from '../../components/Chats/Chats';
import Messages from '../../components/Messages/Messages';

const MessagesPage = (props) => {

  const textInput = React.createRef();

  const addMessage = () => {
    console.log(textInput.current.value);
    textInput.current.value = '';
  }

  return (
    <div>
      <h1 className={style.title}>Мои сообщения</h1>
      <div className={style.grid}>
        <div className={style.sidebar}>
          <Chats chats={props.chats} />
        </div>
        <div>
            <Messages messages={props.messages} />
        </div>
      </div>
      <textarea ref={textInput}></textarea>
      <button onClick={addMessage} >Отправить</button>
      
    </div>
  )
}

export default MessagesPage;