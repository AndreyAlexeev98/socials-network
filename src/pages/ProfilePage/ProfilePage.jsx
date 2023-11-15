import banner from "../../media/img/banner.jpeg";
import UserInfo from "../../components/UserInfo/UserInfo";
import PostsContainer from "../../components/Posts/PostsContainer";

import styles from "./ProfilePage.module.scss";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    userData: state.profile.userData,
  };
};

const UserInfoContainer = connect(mapStateToProps)(UserInfo);

const ProfilePage = (props) => {
  return (
    <div className="root">
      <img src={banner} alt="user baner" className={styles.banner} />
      <div className={styles.info}>
        <UserInfoContainer />
      </div>
      <div className={styles.posts}>
        <PostsContainer />
      </div>
    </div>
  );
};

export default ProfilePage;
