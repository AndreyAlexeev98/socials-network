import style from './Messages.module.scss';

import Message from './Message/Message';

const Messages = () => {
    return (
        <div>
            <ul>
                <li className={style.item}>
                <Message text='Lorem ipsum dolor' />
                </li>
                <li className={style.item}>
                <Message text='Lorem ipsum dolor222' />
                </li>
            </ul>
        </div>
    )
}

export default Messages;