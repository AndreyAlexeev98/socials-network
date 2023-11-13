import banner from "../../media/img/banner.jpeg";
import UserInfo from "../../components/UserInfo/UserInfo";
import PostsContainer from "../../components/Posts/PostsContainer";

import styles from "./ProfilePage.module.scss";

const ProfilePage = (props) => {
  return (
    <div className="root">
      <img src={banner} alt="user baner" className={styles.banner} />
      <div className={styles.info}>
        <UserInfo userData={props.store.getState().profile.userData} />
      </div>
      <div className={styles.posts}>
        <PostsContainer store={props.store} />
      </div>
    </div>
  );
};

export default ProfilePage;
