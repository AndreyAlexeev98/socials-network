import React from "react";
import ProfilePage from "./ProfilePage";
import axios from "axios";
import { setUserProfile } from "../../redux/profile-reducer";

import { connect } from "react-redux";

class ProfileContainer extends React.Component {
  componentDidMount() {
    axios
      .get("https://social-network.samuraijs.com/api/1.0/profile/2")
      .then((response) => {
        this.props.setUserProfile(response.data);
      });
  }

  render() {
    return <ProfilePage {...this.props} profile={this.props.profile} />;
  }
}

let mapStateToProps = (state) => ({ profile: state.profile });

export default connect(mapStateToProps, { setUserProfile })(ProfileContainer);
