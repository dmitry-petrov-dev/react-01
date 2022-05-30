import React from "react";
import Preloader from "../../../common/Preloader/Preloader";
import classes from "./ProfileInfo.module.css";

const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader />;
  }
  return (
    <div>
      <div className={classes.profileHeader}>
        <img
          src="https://www.gettyimages.pt/gi-resources/images/Homepage/Hero/PT/PT_hero_42_153645159.jpg"
          alt="picture"
        />
      </div>

      <div className={classes.descriptionBlock}>
        <img src={props.profile.photos.large} />
        {props.profile ? props.profile.aboutMe : "ava + description"}
      </div>
    </div>
  );
};

export default ProfileInfo;
