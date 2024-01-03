import React from "react";
import { connect } from "react-redux";
import withRouter from "../../HOCs/withRouter";
import { profileAPI } from "../../api/api";
import { setUserProfile } from "../../redux/profile-reducer";
import ProfilePage from "./ProfilePage";

class ProfileContainer extends React.Component {
  componentDidMount() {
    profileAPI
      .getUserProfile(this.props.router.params.profileId)
      .then((response) => {
        this.props.setUserProfile(response.data);
      });
  }

  render() {
    return <ProfilePage {...this.props} profile={this.props.profile} />;
  }
}

let mapStateToProps = (state) => ({ profile: state.profile });

export default connect(mapStateToProps, { setUserProfile })(
  withRouter(ProfileContainer)
);
