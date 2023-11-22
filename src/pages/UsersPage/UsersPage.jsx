// import { useEffect } from "react";
import axios from "axios";
import styles from "./UsersPage.module.scss";
import avatarPlaceholder from "../../assets/img/avatar-placeholder.png";
import React from "react";

class UsersPage extends React.Component {
  constructor(props) {
    super(props);
  }

  localChangeCurrentPage = (page) => {
    this.props.changeCurrnetPage(Number(page));
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${page}`
      )
      .then((response) => {
        console.log(response);
        this.props.setUsers(response.data.items);
      });
  };

  componentDidMount() {
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${this.props.currnetPage}`
      )
      .then((response) => {
        this.props.setUsers(response.data.items);
        this.props.setTotalUsersCount(response.data.totalCount);
      });
  }
  componentDidUpdate() {
    console.log(this.props);
  }

  render() {
    let pagesCount = Math.ceil(this.props.totalUserCount / this.props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
      pages.push(i);
    }

    return (
      <>
        <h1>users page</h1>
        <div className={styles.pagination}>
          {pages.map((page) => (
            <button
              key={page}
              className={
                page === this.props.currnetPage ? styles.pagination_active : ""
              }
              onClick={() => {
                this.localChangeCurrentPage(page);
              }}
            >
              {page}
            </button>
          ))}
        </div>
        <ul className={styles.card_list}>
          {this.props.users.map((user, i) => (
            <li key={user.id} className={styles.card}>
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
