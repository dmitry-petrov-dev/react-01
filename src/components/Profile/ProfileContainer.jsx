import React from "react";

import { connect } from "react-redux";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import Profile from "./Profile";

import { setUserProfile, getUserProfile } from "./../../redux/profile-reducer";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { compose } from "redux";

class ProfileContainer extends React.Component {
  componentDidMount() {
    this.props.getUserProfile(this.props.router.params.profileId);
  }
  render() {
    //   if (!this.props.isAuth) return <Navigate to={"/login"} />;
    return <Profile {...this.props} profile={this.props.profile} />;
  }
}

const mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
});

function withRouter(Component) {
  function ComponentWithRouterProp(props) {
    let location = useLocation();
    let navigate = useNavigate();
    let params = useParams();
    return <Component {...props} router={{ location, navigate, params }} />;
  }

  return ComponentWithRouterProp;
}

// const AuthRedirectComponent = withAuthRedirect(ProfileContainer);

// const WithUrlContainerComponent = withRouter(AuthRedirectComponent);

// export default connect(mapStateToProps, { setUserProfile, getUserProfile })(
//   WithUrlContainerComponent
// );

export default compose(
  connect(mapStateToProps, { setUserProfile, getUserProfile }),
  withRouter,
  withAuthRedirect
)(ProfileContainer);
