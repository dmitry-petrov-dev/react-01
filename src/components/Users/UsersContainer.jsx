import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import Preloader from "../common/Preloader/Preloader";
import {
  getUsers,
  getCurrentPage,
  getFollowingInProgress,
  getIsFetching,
  getPageSize,
  getTotalCount,
} from "../../redux/users-selectors";
import {
  setCurrentPage,
  requestUsers,
  followUser,
  unfollowUser,
} from "./../../redux/users-reducer";
import Users from "./Users";

class UsersContainer extends React.Component {
  componentDidMount() {
    const { currentPage, pageSize } = this.props;
    this.props.getUsers(currentPage, pageSize);
  }

  onPageChanged = (pageNumber) => {
    const { pageSize } = this.props;
    this.props.getUsers(pageNumber, pageSize);
    this.props.setCurrentPage(pageNumber);
  };

  render() {
    return (
      <>
        {this.props.isFetching ? <Preloader /> : null}
        <Users
          totalCount={this.props.totalCount}
          pageSize={this.props.pageSize}
          currentPage={this.props.currentPage}
          users={this.props.users}
          followUser={this.props.followUser}
          unfollowUser={this.props.unfollowUser}
          onPageChanged={this.onPageChanged}
          followingInProgress={this.props.followingInProgress}
        />
      </>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    users: getUsers(state),
    pageSize: getPageSize(state),
    totalCount: getTotalCount(state),
    currentPage: getCurrentPage(state),
    isFetching: getIsFetching(state),
    followingInProgress: getFollowingInProgress(state),
  };
};

export default compose(
  connect(mapStateToProps, {
    setCurrentPage,
    getUsers: requestUsers,
    followUser,
    unfollowUser,
  }),
  withAuthRedirect
)(UsersContainer);
