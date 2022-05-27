import axios from "axios";
import React from "react";
import classes from "./Users.module.css";
import userAvatar from "./../../assets/images/avatar-default.png";

class Users extends React.Component {
  componentDidMount() {
    axios
      .get("https://social-network.samuraijs.com/api/1.0/users")
      .then((response) => {
        debugger;
        this.props.setUsers(response.data.items);
      });
  }

  render() {
    return (
      <div>
        {this.props.users.map((user) => (
          <div key={user.id}>
            <span>
              <div>
                <img
                  src={user.photos.small ? user.photos.small : userAvatar}
                  className={classes.userPhoto}
                />
              </div>
              <div>
                {user.followed ? (
                  <button
                    onClick={() => {
                      this.props.unfollowUser(user.id);
                    }}
                  >
                    Unfollow
                  </button>
                ) : (
                  <button
                    onClick={() => {
                      this.props.followUser(user.id);
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
        ))}
      </div>
    );
  }
}

export default Users;
