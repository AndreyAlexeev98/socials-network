import style from './Messages.module.scss';

import Message from './Message/Message';

const Messages = (props) => {
    return (
        <div>
            <ul>
                {props.messages.map( (message) => {
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