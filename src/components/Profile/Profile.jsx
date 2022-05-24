import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import classes from "./Profile.module.css";

const Profile = () => {
  return (
    <div className={classes.content}>
      <img
        src="https://www.gettyimages.pt/gi-resources/images/Homepage/Hero/PT/PT_hero_42_153645159.jpg"
        alt="picture"
      />
      <div>ava+description</div>
      <MyPosts />
    </div>
  );
};

export default Profile;
