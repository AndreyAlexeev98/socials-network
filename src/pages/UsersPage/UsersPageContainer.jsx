import { connect } from "react-redux";
import {
  setUsersActionCreater,
  followActionCreater,
  unfollowActionCreater,
} from "../../redux/users-reducer";
import UsersPage from "./UsersPage";

const mapStateToProps = (state) => {
  return {
    users: state.users.users,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setUsers: (users) => {
      dispatch(setUsersActionCreater(users));
    },
    follow: (id) => {
      dispatch(followActionCreater(id));
    },
    unfollow: (id) => {
      dispatch(unfollowActionCreater(id));
    },
  };
};

const UsersPageContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(UsersPage);

export default UsersPageContainer;
