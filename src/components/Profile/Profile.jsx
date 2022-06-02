import React from "react";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import ProfileInfo from "./MyPosts/ProfileInfo/ProfileInfo";

const Profile = ({ profile, status, store, updateUserStatus, props }) => {
  return (
    <div>
      <ProfileInfo
        profile={profile}
        status={status}
        updateUserStatus={updateUserStatus}
      />
      <MyPostsContainer store={store} />
    </div>
  );
};

export default Profile;
