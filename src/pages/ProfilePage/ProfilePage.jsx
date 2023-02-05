import banner from "../../media/img/banner.jpeg";
import UserInfo from "../../components/UserInfo/UserInfo";
import Posts from "../../components/Posts/Posts";

import styles from "./ProfilePage.module.scss";

const ProfilePage = () => {
  return (
    <div className="root">
      <img src={banner} alt="user baner" className={styles.banner} />
      <div className={styles.info}>
        <UserInfo />
      </div>
      <div className={styles.posts}>
        <Posts />
      </div>
    </div>
  );
};

export default ProfilePage;
