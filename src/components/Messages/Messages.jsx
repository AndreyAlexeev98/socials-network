import style from './Messages.module.scss';

import Message from './Message/Message';

let messages = [
    {id: '1', text:'Hi me dear friend, how tiy do???' },
    {id: '2', text:'By by, good look!' }
]

const Messages = () => {
    return (
        <div>
            <ul>
                {messages.map( (message) => {
                    return (
                        <li className={style.item} key={message.id}>
                            <Message text={message.text} />
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default Messages;