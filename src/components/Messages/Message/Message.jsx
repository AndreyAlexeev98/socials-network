import style from './Message.module.scss';

const Message = (props) => {
    return (
        <div className={style.root}>
            <div className={style.text}>{props.text}</div>
            <button className={style.btn}>Ответить</button>
        </div>
    );
}

export default Message;