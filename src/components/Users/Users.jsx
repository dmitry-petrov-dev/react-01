import axios from "axios";
import React from "react";
import classes from "./Users.module.css";
import userAvatar from "./../../assets/images/avatar-default.png";

const Users = (props) => {
  if (props.users.length === 0) {
    axios
      .get("https://social-network.samuraijs.com/api/1.0/users")
      .then((response) => {
        debugger;
        props.setUsers(response.data.items);
      });

    /*    props.setUsers([
      {
        id: 1,
        photoUrl:
          "https://bogdo.studio/assets/images/resources/69/biznes_portret_neformalny_muhchina_v-studii_na_temnom_fone.jpg",
        followed: true,
        fullName: "Dmitry",
        status: "I am a boss",
        location: { city: "Minsk", country: "Belarus" },
      },
      {
        id: 2,
        photoUrl:
          "https://bogdo.studio/assets/images/resources/69/biznes_portret_neformalny_muhchina_v-studii_na_temnom_fone.jpg",
        followed: false,
        fullName: "Andrey",
        status: "I am a boss too",
        location: { city: "Moscow", country: "Russia" },
      },
      {
        id: 3,
        photoUrl:
          "https://bogdo.studio/assets/images/resources/69/biznes_portret_neformalny_muhchina_v-studii_na_temnom_fone.jpg",
        followed: true,
        fullName: "Pavel",
        status: "I am a boss too too",
        location: { city: "Kiev", country: "Ukraine" },
      },
      {
        id: 4,
        photoUrl:
          "https://bogdo.studio/assets/images/resources/69/biznes_portret_neformalny_muhchina_v-studii_na_temnom_fone.jpg",
        followed: false,
        fullName: "Sergey",
        status: "I am a boss, yeap",
        location: { city: "SPb", country: "Russia" },
      },
    ]);
  */
  }

  return (
    <div>
      {props.users.map((user) => (
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
                    props.unfollowUser(user.id);
                  }}
                >
                  Unfollow
                </button>
              ) : (
                <button
                  onClick={() => {
                    props.followUser(user.id);
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
};

export default Users;
