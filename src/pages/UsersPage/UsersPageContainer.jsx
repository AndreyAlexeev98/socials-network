import axios from "axios";
import React from "react";

import { connect } from "react-redux";
import {
  changeCurrentPageActionCreater,
  followActionCreater,
  setTotalUsersCountActionCreater,
  setUsersActionCreater,
  unfollowActionCreater,
  setFetchingActionCreater,
} from "../../redux/users-reducer";
import UsersPage from "./UsersPage";

// Компонент api уровня
class UsersContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  onPageChanged = (page) => {
    this.props.changeCurrnetPage(Number(page));
    this.props.switchFetching(true);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${page}`
      )
      .then((response) => {
        this.props.setUsers(response.data.items);
        this.props.switchFetching(false);
      });
  };

  componentDidMount() {
    this.props.switchFetching(true);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${this.props.currnetPage}`
      )
      .then((response) => {
        this.props.setUsers(response.data.items);
        this.props.setTotalUsersCount(response.data.totalCount);
        this.props.switchFetching(false);
      });
  }

  render() {
    return (
      <>
        {/* // компонент UI (презентационный) */}
        <UsersPage
          totalUserCount={this.props.totalUserCount}
          pageSize={this.props.pageSize}
          currnetPage={this.props.currnetPage}
          onPageChanged={this.onPageChanged}
          users={this.props.users}
          unfollow={this.props.unfollow}
          follow={this.props.follow}
          isFetching={this.props.isFetching}
        />
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.users.users,
    pageSize: state.users.pageSize,
    totalUserCount: state.users.totalUserCount,
    currnetPage: state.users.currnetPage,
    isFetching: state.users.isFetching,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    switchFetching: (isFetching) => {
      dispatch(setFetchingActionCreater(isFetching));
    },
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

// компонент бизнес уровня (редакс)
const UsersPageContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(UsersContainer);

export default UsersPageContainer;
