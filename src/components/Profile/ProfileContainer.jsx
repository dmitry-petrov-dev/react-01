import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import Profile from "./Profile";
import WithRouter from "../common/Router/WithRouter";
import {
  getUserProfile,
  getUserStatus,
  updateUserStatus,
} from "./../../redux/profile-reducer";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";

class ProfileContainer extends React.Component {
  componentDidMount() {
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
  render() {
    return (
      <Profile
        {...this.props}
        profile={this.props.profile}
        status={this.props.status}
        updateUserStatus={this.props.updateUserStatus}
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
  connect(mapStateToProps, { getUserProfile, getUserStatus, updateUserStatus }),
  WithRouter,
  withAuthRedirect
)(ProfileContainer);
