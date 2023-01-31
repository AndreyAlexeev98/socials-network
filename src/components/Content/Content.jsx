import banner from "../../media/img/banner.jpeg";
import avatar from "../../media/img/avatar.jpg";
import Posts from "../Posts/Posts";

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
      <div className={styles.posts}>
        <Posts />
      </div>
    </div>
  );
};

export default Content;
