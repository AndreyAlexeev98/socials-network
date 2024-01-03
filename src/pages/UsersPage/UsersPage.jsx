import React from "react";
import { Link } from "react-router-dom";
import { followAPI } from "../../api/api";
import avatarPlaceholder from "../../assets/img/avatar-placeholder.png";
import { Loader } from "../../components/share";
import styles from "./UsersPage.module.scss";

const UsersPage = (props) => {
  console.log(props.users);
  let pagesCount = Math.ceil(props.totalUserCount / props.pageSize);
  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }
  return (
    <>
      <h1>users page</h1>
      {props.isFetching && <Loader />}
      {!props.isFetching && (
        <>
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
                  <Link to={"/profile/" + user.id}>
                    <img
                      className={styles.avatar}
                      src={
                        user.photos.small
                          ? user.photos.small
                          : avatarPlaceholder
                      }
                      alt="user avatar"
                    />
                  </Link>
                  {user.followed && (
                    <button
                      className={styles.state}
                      onClick={() => {
                        followAPI.setFollow(user.id).then((response) => {
                          if (response.data.resultCode === 0) {
                            props.follow(user.id);
                          }
                        });
                      }}
                    >
                      Follow
                    </button>
                  )}
                  {!user.followed && (
                    <button
                      className={styles.state}
                      onClick={() => {
                        followAPI.setUnfollow(user.id).then((response) => {
                          if (response.data.resultCode === 0) {
                            props.unfollow(user.id);
                          }
                        });
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
      )}
    </>
  );
};

export default UsersPage;
