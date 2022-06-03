import React from "react";
import classes from "./ProfileInfo.module.css";
import Preloader from "../../../common/Preloader/Preloader";
import userAvatar from "./../../../../assets/images/avatar-default.png";
import ProfileStatus from "./ProfileStatus";

const ProfileInfo = ({
  isOwner,
  profile,
  status,
  updateUserStatus,
  savePhoto,
  props,
}) => {
  if (!profile) {
    return <Preloader />;
  }

  const onMainPhotoSelected = (e) => {
    if (e.target.files.length) {
      savePhoto(e.target.files[0]);
    }
  };
  return (
    <div>
      <div className={classes.descriptionBlock}>
        <img
          src={profile.photos.large ? profile.photos.large : userAvatar}
          alt="Profile"
        />
        {isOwner ? <input type={"file"} onChange={onMainPhotoSelected} /> : ""}
        {profile ? profile.aboutMe : "ava + description"}
        <ProfileStatus status={status} updateUserStatus={updateUserStatus} />
      </div>
    </div>
  );
};

export default ProfileInfo;
