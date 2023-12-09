import banner from "../../media/img/banner.jpeg";
import UserInfo from "../../components/UserInfo/UserInfo";
import PostsContainer from "../../components/Posts/PostsContainer";

import styles from "./ProfilePage.module.scss";
import { connect } from "react-redux";

const ProfilePage = (props) => {
  return (
    <div className="root">
      <img src={banner} alt="user baner" className={styles.banner} />
      <div className={styles.info}>
        <UserInfo profile={props.profile} />
      </div>
      <div className={styles.posts}>
        <PostsContainer />
      </div>
    </div>
  );
};

export default ProfilePage;
