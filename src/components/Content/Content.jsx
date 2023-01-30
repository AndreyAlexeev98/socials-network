import banner from "../../media/img/banner.jpeg";
import avatar from "../../media/img/avatar.jpg";
import Messages from "../Messages/Messages";

import styles from "./Content.module.scss";

const Content = () => {
  return (
    <div className="root">
      <img src={banner} alt="user baner" className={styles.banner} />
      <div className={styles.info}>
        <img src={avatar} alt="user avatar" className={styles.user_avatar} />
        <div className="user_info">
          <div className="title">Andrey Alexeev</div>
          <div className="description">
            <div className="row">
              <span>Date of birth: </span>
              <span>2 junary</span>
            </div>
            <div className="row">
              <span>city: </span>
              <span>Kursk</span>
            </div>
            <div className="row">
              <span>Education: </span>
              <span>KGU'16</span>
            </div>
            <div className="row">
              <span>Web Site: </span>
              <span>www.google.com</span>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.chat}>
        <div className="chat__title">My posts</div>
        <textarea className="chat__input"></textarea>
        <button className="chat__btn" type="submit">
          Send
        </button>
      </div>
        <Messages/>
    </div>
  );
};

export default Content;
