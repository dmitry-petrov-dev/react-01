import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./MyPosts/ProfileInfo/ProfileInfo";
import classes from "./Profile.module.css";

const Profile = (props) => {
  return (
    <div>
      <ProfileInfo />
      <MyPosts
        newPostText={props.profilePage.newPostText}
        posts={props.profilePage.posts}
        addPost={props.addPost}
        updateNewPostText={props.updateNewPostText}
      />
    </div>
  );
};

export default Profile;
