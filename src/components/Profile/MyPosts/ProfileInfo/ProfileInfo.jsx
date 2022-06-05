import React, { useState } from "react";
import classes from "./ProfileInfo.module.css";
import Preloader from "../../../common/Preloader/Preloader";
import userAvatar from "./../../../../assets/images/avatar-default.png";
import ProfileStatus from "./ProfileStatus";
import ProfileDataFormReduxForm from "./ProfileDataForm";

const ProfileInfo = ({
  isOwner,
  profile,
  status,
  updateUserStatus,
  savePhoto,
  saveProfile,
  props,
}) => {
  if (!profile) {
    return <Preloader />;
  }
  const [editMode, setEditMode] = useState(false);

  const onMainPhotoSelected = (e) => {
    if (e.target.files.length) {
      savePhoto(e.target.files[0]);
    }
  };

  const onSubmit = (formData) => {
    saveProfile(formData).then(() => {
      setEditMode(false);
    });
  };
  return (
    <div>
      <div className={classes.descriptionBlock}>
        <img
          src={profile.photos.large || userAvatar}
          alt="Profile"
          className={classes.mainPhoto}
        />
        {isOwner ? <input type={"file"} onChange={onMainPhotoSelected} /> : ""}
        {/* {profile ? profile.aboutMe : "ava + description"} */}
        {editMode ? (
          <ProfileDataFormReduxForm
            initialValues={profile}
            profile={profile}
            onSubmit={onSubmit}
          />
        ) : (
          <ProfileData
            profile={profile}
            isOwner={isOwner}
            startEditMode={() => setEditMode(true)}
          />
        )}
        <ProfileStatus status={status} updateUserStatus={updateUserStatus} />
      </div>
    </div>
  );
};

const ProfileData = ({ profile, isOwner, startEditMode }) => {
  return (
    <div>
      {isOwner && (
        <div>
          <button onClick={startEditMode}>Edit</button>
        </div>
      )}

      <div>
        <b>Fullname</b>: {profile.fullName}
      </div>
      <div>
        <b>Looking for a job</b>: {profile.lookingForAJob ? "yes" : "no"}
      </div>
      {profile.lookingForAJob && (
        <div>
          <b>My prof skills</b>: {profile.lookingForAJobDescription}
        </div>
      )}
      <div>
        <b>About me</b>: {profile.aboutMe}
      </div>
      <div>
        <b>Contacts</b>:
        {Object.keys(profile.contacts).map((key) => {
          return (
            <Contact
              key={key}
              contactTitle={key}
              contactValue={profile.contacts[key]}
            />
          );
        })}
      </div>
    </div>
  );
};

const Contact = ({ contactTitle, contactValue }) => {
  return (
    <div className={classes.contact}>
      <b>{contactTitle}</b>: {contactValue}
    </div>
  );
};

export default ProfileInfo;
