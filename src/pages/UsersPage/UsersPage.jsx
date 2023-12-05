// import { useEffect } from "react";
import axios from "axios";
import styles from "./UsersPage.module.scss";
import avatarPlaceholder from "../../assets/img/avatar-placeholder.png";
import React from "react";

const UsersPage = (props) => {
  let pagesCount = Math.ceil(props.totalUserCount / props.pageSize);
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
              page === props.currnetPage ? styles.pagination_active : ""
            }
            onClick={() => {
              props.onPageChanged(page);
            }}
          >
            {page}
          </button>
        ))}
      </div>
      <ul className={styles.card_list}>
        {props.users.map((user, i) => (
          <li key={user.id} className={styles.card}>
            <div className={styles.preview}>
              <img
                className={styles.avatar}
                src={user.photos.small ? user.photos.small : avatarPlaceholder}
                alt="user avatar"
              />
              {user.followed && (
                <button
                  className={styles.state}
                  onClick={() => {
                    props.unfollow(user.id);
                  }}
                >
                  Follow
                </button>
              )}
              {!user.followed && (
                <button
                  className={styles.state}
                  onClick={() => {
                    props.follow(user.id);
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
};

export default UsersPage;
