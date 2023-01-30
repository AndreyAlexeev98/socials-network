import message_avatar from "../../media/img/message-avatar.jpg"

import styles from "./Messages.module.scss"

const Messages = () => {
  return (
    <ul className={styles.root}>
      <li className={styles.item}>
        <img
          src={message_avatar}
          alt="message avatar"
          className={styles.avatar}
        />
        <div>
            <div className={styles.author}>
                Big Bull
            </div>
            <div className={styles.text}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet,
            assumenda!
            </div>
        </div>
      </li>
    </ul>
  );
};

export default Messages;