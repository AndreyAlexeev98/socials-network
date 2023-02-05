import banner from "../../media/img/banner.jpeg";
import UserInfo from "../../components/UserInfo/UserInfo";
import Posts from "../../components/Posts/Posts";

import styles from "./ProfilePage.module.scss";

let userData = {
  title: 'Andrey Alexeich',
  date_of_birth: '2 junary',
  city: 'Kursk',
  education: 'KGU "16',
  web_site: 'www.ya.com'
}

let posts = [
  {
      id: '1',
      username: 'Big Bull',
      message: 'I love history'
  },
  {
      id: '2',
      username: 'Bred Borns',
      message: 'Trevelling is my live'
  },
]

const ProfilePage = () => {
  return (
    <div className="root">
      <img src={banner} alt="user baner" className={styles.banner} />
      <div className={styles.info}>
        <UserInfo userData={userData} />
      </div>
      <div className={styles.posts}>
        <Posts posts={posts} />
      </div>
    </div>
  );
};

export default ProfilePage;
