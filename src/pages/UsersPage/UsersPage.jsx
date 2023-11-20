// import { useEffect } from "react";
import axios from "axios";
import styles from "./UsersPage.module.scss";
import avatarPlaceholder from "../../assets/img/avatar-placeholder.png";
import React from "react";

class UsersPage extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    axios
      .get("https://social-network.samuraijs.com/api/1.0/users")
      .then((response) => {
        this.props.setUsers(response.data.items);
      });
  }

  render() {
    return (
      <>
        <h1>users page</h1>
        <ul className={styles.card_list}>
          {this.props.users.map((user, i) => (
            <li key={user.id + i} className={styles.card}>
              <div className={styles.preview}>
                <img
                  className={styles.avatar}
                  src={
                    user.photos.small ? user.photos.small : avatarPlaceholder
                  }
                  alt="user avatar"
                />
                {user.followed && (
                  <button
                    className={styles.state}
                    onClick={() => {
                      this.props.unfollow(user.id);
                    }}
                  >
                    Follow
                  </button>
                )}
                {!user.followed && (
                  <button
                    className={styles.state}
                    onClick={() => {
                      this.props.follow(user.id);
                    }}
                  >
                    unFollow
                  </button>
                )}
              </div>
              <div className={styles.info}>
                <div className={styles.left}>
                  <div className={styles.name}>{user.name}</div>
                  <div className={styles.status}>{user.status}</div>
                </div>
                <div className={styles.right}>
                  <div className={styles.location}>{user.id},</div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </>
    );
  }
}

export default UsersPage;
