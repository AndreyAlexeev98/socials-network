import React from "react";
import Post from "./Post/Post";
import {
  getPostActionCreater,
  onPostChangeActionCreater,
} from "../../redux/store";

import styles from "./Posts.module.scss";

const Posts = (props) => {
  const textInput = React.createRef();

  let getPost = () => {
    props.dispatch(getPostActionCreater());
  };

  const onPostChange = (e) => {
    const action = onPostChangeActionCreater(e.target.value);
    props.dispatch(action);
  };

  return (
    <div>
      <div className={styles.title}>My posts</div>
      <div className={styles.field}>
        <textarea
          ref={textInput}
          onChange={onPostChange}
          className={styles.input}
          value={props.newPostText}
        />
        <button onClick={getPost}>Отправить</button>
        {/* <Button  text="Отправить" /> */}
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
