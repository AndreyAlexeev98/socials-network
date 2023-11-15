import Posts from "./Posts";
import {
  getPostActionCreater,
  onPostChangeActionCreater,
} from "../../redux/profile-reducer";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    posts: state.profile.posts,
    newPostText: state.profile.newPostText,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onPostChange: (e) => {
      dispatch(onPostChangeActionCreater(e.target.value));
    },
    updatePost: () => {
      dispatch(getPostActionCreater());
    },
  };
};

const PostsContainer = connect(mapStateToProps, mapDispatchToProps)(Posts);

export default PostsContainer;
