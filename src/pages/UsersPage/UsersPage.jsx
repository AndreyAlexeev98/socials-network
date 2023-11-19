import { useEffect } from "react";
import styles from "./UsersPage.module.scss";

const staticUsers = [
  {
    id: "1",
    fullName: "Andrey A.",
    status: "im iron man",
    isFollower: false,
    avatar:
      "https://photobooth.cdn.sports.ru/preset/post/0/05/1a56a3680467fbe5253aedebe8171.jpeg",
    location: { country: "Russia", city: "Kursk" },
  },
  {
    id: "2",
    fullName: "Konstantin B.",
    status: "im iron man, too",
    isFollower: true,
    avatar:
      "https://photobooth.cdn.sports.ru/preset/post/0/05/1a56a3680467fbe5253aedebe8171.jpeg",
    location: { country: "Russia", city: "Orel" },
  },
  {
    id: "3",
    fullName: "Avdeev K.",
    status: "im man",
    isFollower: false,
    avatar:
      "https://photobooth.cdn.sports.ru/preset/post/0/05/1a56a3680467fbe5253aedebe8171.jpeg",
    location: { country: "Russia", city: "Leningrad" },
  },
  {
    id: "4",
    fullName: "Gromov R.",
    status: "eee man",
    isFollower: true,
    avatar:
      "https://photobooth.cdn.sports.ru/preset/post/0/05/1a56a3680467fbe5253aedebe8171.jpeg",
    location: { country: "Russia", city: "Krasnodar" },
  },
];

const UsersPage = (props) => {
  console.log(props);
  const { users, setUsers, follow, unfollow } = props;

  // fix errors о render вложенности
  // useEffect(() => {
  //   if (users.length === 0) {
  //     setUsers(staticUsers);
  //   }
  // }, []);

  if (users.length === 0) {
    setUsers(staticUsers);
  }

  return (
    <>
      <h1>users page</h1>
      <ul className={styles.card_list}>
        {users.map((user) => (
          <li key={user.id} className={styles.card}>
            <div className={styles.preview}>
              <img
                className={styles.avatar}
                src={user.avatar}
                alt="user avatar"
              />
              {user.isFollower && (
                <button
                  className={styles.state}
                  onClick={() => {
                    unfollow(user.id);
                  }}
                >
                  Follow
                </button>
              )}
              {!user.isFollower && (
                <button
                  className={styles.state}
                  onClick={() => {
                    follow(user.id);
                  }}
                >
                  unFollow
                </button>
              )}
            </div>
            <div className={styles.info}>
              <div className={styles.left}>
                <div className={styles.name}>{user.fullName}</div>
                <div className={styles.status}>{user.status}</div>
              </div>
              <div className={styles.right}>
                <div className={styles.location}>{user.location.country},</div>
                <div className={styles.location}>{user.location.city}</div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};

export default UsersPage;
