import React from "react";
import classes from "./ProfileInfo.module.css";
import Preloader from "../../../common/Preloader/Preloader";
import userAvatar from "./../../../../assets/images/avatar-default.png";
import ProfileStatus from "./ProfileStatus";

const ProfileInfo = ({ profile, status, updateUserStatus, props }) => {
  if (!profile) {
    return <Preloader />;
  }
  return (
    <div>
      <div className={classes.descriptionBlock}>
        <img
          src={profile.photos.large ? profile.photos.large : userAvatar}
          alt="Profile"
        />
        {profile ? profile.aboutMe : "ava + description"}
        <ProfileStatus status={status} updateUserStatus={updateUserStatus} />
      </div>
    </div>
  );
};

export default ProfileInfo;
