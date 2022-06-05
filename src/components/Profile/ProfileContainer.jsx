import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import Profile from "./Profile";
import WithRouter from "../common/Router/WithRouter";
import {
  getUserProfile,
  getUserStatus,
  updateUserStatus,
  savePhoto,
  saveProfile,
} from "./../../redux/profile-reducer";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";

class ProfileContainer extends React.Component {
  refreshProfile() {
    let profileId = this.props.router.params.profileId;
    if (!profileId) {
      profileId = this.props.profileId;
      if (!profileId) {
        /* Just example */
        this.props.history.push("/login");
      }
    }
    this.props.getUserProfile(profileId);
    this.props.getUserStatus(profileId);
  }
  componentDidMount() {
    this.refreshProfile();
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (
      prevProps.router.params.profileId !== this.props.router.params.profileId
    ) {
      this.refreshProfile();
    }
  }
  render() {
    return (
      <Profile
        {...this.props}
        isOwner={!this.props.router.params.profileId}
        profile={this.props.profile}
        status={this.props.status}
        updateUserStatus={this.props.updateUserStatus}
        savePhoto={this.props.savePhoto}
        saveProfile={this.props.saveProfile}
      />
    );
  }
}

const mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
  status: state.profilePage.status,
  profileId: state.auth.userId,
  isAuth: state.auth.isAuth,
});

export default compose(
  connect(mapStateToProps, {
    getUserProfile,
    getUserStatus,
    updateUserStatus,
    savePhoto,
    saveProfile,
  }),
  WithRouter,
  withAuthRedirect
)(ProfileContainer);
