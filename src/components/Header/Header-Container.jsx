import Logo from "../Logo/Logo";
import React from "react";
import Avatar from "../../assets/img/auth-avatar.jpg";
import PlaceholderAva from "../../assets/img/no-auth-avatar.png";
import styles from "./Header.module.scss";
import axios from "axios";
import { connect } from "react-redux";
import Header from "./Header";
import { setUserData } from "../../redux/auth-reducer";

class HeaderContainer extends React.Component {
  login = () => {
    axios
      .get("https://social-network.samuraijs.com/api/1.0/auth/me", {
        withCredentials: true,
      })
      .then((response) => {
        if (response.data.resultCode === 0) {
          let { id, email, login } = response.data.data;
          this.props.setUserData(id, email, login, true);
        } else {
          alert(`${response.data.messages[0]}`);
        }
      });
  };

  render() {
    return <Header {...this.props} onLogin={this.login} />;
  }
}

const mapStateToProps = (state) => {
  return {
    isAuth: state.auth.isAuth,
    email: state.auth.email,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setUserData: (userId, email, login, isAuth) => {
      dispatch(setUserData(userId, email, login, isAuth));
    },
  };
};

export default connect(mapStateToProps, { setUserData })(HeaderContainer);
