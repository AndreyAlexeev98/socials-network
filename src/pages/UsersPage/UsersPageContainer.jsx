import { connect } from "react-redux";
import {
  setUsersActionCreater,
  followActionCreater,
  unfollowActionCreater,
  changeCurrentPageActionCreater,
  setTotalUsersCountActionCreater,
} from "../../redux/users-reducer";
import UsersPage from "./UsersPage";

const mapStateToProps = (state) => {
  return {
    users: state.users.users,
    pageSize: state.users.pageSize,
    totalUserCount: state.users.totalUserCount,
    currnetPage: state.users.currnetPage,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setTotalUsersCount: (count) => {
      dispatch(setTotalUsersCountActionCreater(count));
    },
    changeCurrnetPage: (users) => {
      dispatch(changeCurrentPageActionCreater(users));
    },
    setUsers: (page, totalCount) => {
      dispatch(setUsersActionCreater(page, totalCount));
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
