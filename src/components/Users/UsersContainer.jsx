import React from "react";
import { connect } from "react-redux";
//import Users from "./Users";
import Users from "./UsersC";
import {
  followActionCreator,
  unfollowActionCreator,
  setUsersActionCreator,
} from "./../../redux/users-reducer";

const mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    followUser: (userId) => {
      dispatch(followActionCreator(userId));
    },
    unfollowUser: (userId) => {
      dispatch(unfollowActionCreator(userId));
    },
    setUsers: (users) => {
      dispatch(setUsersActionCreator(users));
    },
  };
};

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;
