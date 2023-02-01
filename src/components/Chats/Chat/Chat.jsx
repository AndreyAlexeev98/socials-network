import style from './Chat.module.scss'

const Chat = (props) => {
  return (
    <div className={style.root}>
      <div className={style.avatar}>
        <img src={props.avatar} className={style.avatar_img} alt={props.name} />
      </div>
      <div className={style.name}>{props.name}</div>
      <div className={style.preview}>{props.preview}</div>
    </div>
  )
};

export default Chat;