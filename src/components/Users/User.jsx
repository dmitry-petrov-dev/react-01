import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./Users.module.css";
import userAvatar from "./../../assets/images/avatar-default.png";

const User = ({
  user,
  key,
  followingInProgress,
  followUser,
  unfollowUser,
  ...props
}) => {
  return (
    <div key={key}>
      <span>
        <div>
          <NavLink to={"/profile/" + user.id}>
            <img
              src={user.photos.small ? user.photos.small : userAvatar}
              className={classes.userPhoto}
              alt="Profile"
            />
          </NavLink>
        </div>
        <div>
          {user.followed ? (
            <button
              disabled={followingInProgress.some((id) => {
                return id === user.id;
              })}
              onClick={() => {
                unfollowUser(user.id);
              }}
            >
              Unfollow
            </button>
          ) : (
            <button
              disabled={followingInProgress.some((id) => id === user.id)}
              onClick={() => {
                followUser(user.id);
              }}
            >
              Follow
            </button>
          )}
        </div>
      </span>
      <span>
        <div>{user.name}</div>
        <div>{user.status}</div>
      </span>
      <span>
        <div>{"user.location.country"}</div>
        <div>{"user.location.city"}</div>
      </span>
    </div>
  );
};

export default User;
