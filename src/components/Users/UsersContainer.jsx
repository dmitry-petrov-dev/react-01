import React from "react";
import { connect } from "react-redux";
import Users from "./Users";

import {
  setCurrentPage,
  getUsers,
  followUser,
  unfollowUser,
} from "./../../redux/users-reducer";
import Preloader from "../common/Preloader/Preloader";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { compose } from "redux";

class UsersContainer extends React.Component {
  componentDidMount() {
    this.props.getUsers(this.props.currentPage, this.props.pageSize);
  }

  onPageChanged = (pageNumber) => {
    this.props.getUsers(pageNumber, this.props.pageSize);
    this.props.setCurrentPage(pageNumber);

    // this.props.toggleIsFetching(true);
    // this.props.setCurrentPage(pageNumber);
    // usersAPI.getUsers(pageNumber, this.props.pageSize).then((data) => {
    //   this.props.toggleIsFetching(false);
    //   this.props.setUsers(data.items, data.totalCount);
    // });
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
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalCount: state.usersPage.totalCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching,
    followingInProgress: state.usersPage.followingInProgress,
  };
};

// const mapDispatchToProps = (dispatch) => {
//   return {
//     followUser: (userId) => {
//       dispatch(followActionCreator(userId));
//     },
//     unfollowUser: (userId) => {
//       dispatch(unfollowActionCreator(userId));
//     },
//     setUsers: (users) => {
//       dispatch(setUsersActionCreator(users));
//     },
//     setTotalUsersCount: (totalCount) => {
//       dispatch(setTotalCountActionCreator(totalCount));
//     },
//     setCurrentPage: (pageNumber) => {
//       dispatch(setCurrentPageActionCreator(pageNumber));
//     },
//     toggleIsFetching: (isFetching) => {
//       dispatch(toggleIsFetchingActionCreator(isFetching));
//     },
//   };
// };

export default compose(
  connect(mapStateToProps, {
    setCurrentPage,
    getUsers,
    followUser,
    unfollowUser,
  }),
  withAuthRedirect
)(UsersContainer);
