import Posts from "./Posts";
import {
  getPostActionCreater,
  onPostChangeActionCreater,
} from "../../redux/profile-reducer";

const PostsContainer = (props) => {
  const { store } = props;
  const profileState = store.getState().profile;
  let getPost = () => {
    store.dispatch(getPostActionCreater());
  };

  const onPostChange = (e) => {
    const action = onPostChangeActionCreater(e.target.value);
    store.dispatch(action);
  };

  return (
    <Posts
      posts={profileState.posts}
      newPostText={profileState.newPostText}
      onPostChange={onPostChange}
      updatePost={getPost}
    />
  );
};

export default PostsContainer;
