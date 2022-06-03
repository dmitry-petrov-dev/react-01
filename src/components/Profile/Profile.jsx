import React from "react";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import ProfileInfo from "./MyPosts/ProfileInfo/ProfileInfo";

const Profile = ({
  isOwner,
  profile,
  status,
  store,
  updateUserStatus,
  savePhoto,
  props,
}) => {
  return (
    <div>
      <ProfileInfo
        isOwner={isOwner}
        profile={profile}
        status={status}
        updateUserStatus={updateUserStatus}
        savePhoto={savePhoto}
      />
      <MyPostsContainer store={store} />
    </div>
  );
};

export default Profile;
