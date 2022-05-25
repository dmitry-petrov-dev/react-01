import React from "react";
import classes from "./ProfileInfo.module.css";

const ProfileInfo = () => {
  return (
    <div>
      <div className={classes.profileHeader}>
        <img
          src="https://www.gettyimages.pt/gi-resources/images/Homepage/Hero/PT/PT_hero_42_153645159.jpg"
          alt="picture"
        />
      </div>

      <div className={classes.descriptionBlock}>ava+description</div>
    </div>
  );
};

export default ProfileInfo;
