import Post from "./Post/Post";

import styles from "./Posts.module.scss";

const Posts = (props) => {
  return (
    <div>
      <div className={styles.title}>My posts</div>
      <div className={styles.field}>
        <textarea
          onChange={props.onPostChange}
          className={styles.input}
          value={props.newPostText}
        />
        <button onClick={props.updatePost}>Отправить</button>
      </div>

      <ul className="list">
        {props.posts.map((item) => {
          return (
            <li key={item.id}>
              <Post message={item.message} username={item.username} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Posts;
