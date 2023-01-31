import message_avatar from "../../../media/img/message-avatar.jpg"

import styles from "./Post.module.scss"

const Post = (props) => {
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
                {props.username}
            </div>
            <div className={styles.text}>
              {props.message}
            </div>
        </div>
      </li>
    </ul>
  );
};

export default Post;