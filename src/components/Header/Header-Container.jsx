import React from "react";
import { connect } from "react-redux";
import { setAuth } from "../../api/api";
import { setUserData } from "../../redux/auth-reducer";
import Header from "./Header";

class HeaderContainer extends React.Component {
  login = () => {
    setAuth().then((response) => {
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
