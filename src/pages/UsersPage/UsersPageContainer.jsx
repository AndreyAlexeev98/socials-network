import React from "react";

import { connect } from "react-redux";
import { getUsers } from "../../api/api";
import {
  changeCurrentPage,
  follow,
  setTotalUsersCount,
  setUsers,
  switchFetching,
  unfollow,
} from "../../redux/users-reducer";
import UsersPage from "./UsersPage";

// Компонент api уровня
class UsersContainer extends React.Component {
  onPageChanged = (page) => {
    this.props.changeCurrentPage(Number(page));
    this.props.switchFetching(true);
    getUsers(this.props.pageSize, page).then((data) => {
      this.props.setUsers(data.items);
      this.props.switchFetching(false);
    });
  };

  componentDidMount() {
    this.props.switchFetching(true);
    getUsers(this.props.pageSize, this.props.currnetPage).then((data) => {
      this.props.setUsers(data.items);
      this.props.setTotalUsersCount(data.totalCount);
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

// Раньше, в connect 2м аргументом передавал функцию mapDispatchToProps, где в ручную возвращал обьект, где диспатчил обьект, возвращаемый вызовом функции ActionCreater. Получалось написание кода раби работы кода. В итоге можносделать чтобы редакс сам оборачивал в диспатч результат вызова ActionCreacer -ов
// const mapDispatchToProps = (dispatch) => {
//   return {
//     switchFetching: (isFetching) => {
//       dispatch(setFetchingActionCreater(isFetching));
//     },
//     setTotalUsersCount: (count) => {
//       dispatch(setTotalUsersCountActionCreater(count));
//     },
//     changeCurrnetPage: (users) => {
//       dispatch(changeCurrentPageActionCreater(users));
//     },
//     setUsers: (page, totalCount) => {
//       dispatch(setUsersActionCreater(page, totalCount));
//     },
//     follow: (id) => {
//       dispatch(followActionCreater(id));
//     },
//     unfollow: (id) => {
//       dispatch(unfollowActionCreater(id));
//     },
//   };
// };
// const UsersPageContainer = connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(UsersContainer);

// компонент бизнес уровня (редакс)
const UsersPageContainer = connect(mapStateToProps, {
  switchFetching,
  setTotalUsersCount,
  changeCurrentPage,
  setUsers,
  follow,
  unfollow,
})(UsersContainer);

export default UsersPageContainer;
