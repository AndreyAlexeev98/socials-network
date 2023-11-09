import banner from "../../media/img/banner.jpeg";
import UserInfo from "../../components/UserInfo/UserInfo";
import Posts from "../../components/Posts/Posts";

import styles from "./ProfilePage.module.scss";

const ProfilePage = (props) => {
  return (
    <div className="root">
      <img src={banner} alt="user baner" className={styles.banner} />
      <div className={styles.info}>
        <UserInfo userData={props.profileState.userData} />
      </div>
      <div className={styles.posts}>
        <Posts
          posts={props.profileState.posts}
          newPostText={props.profileState.newPostText}
          dispatch={props.dispatch}
        />
      </div>
    </div>
  );
};

export default ProfilePage;
