import React from "react";
import { reduxForm } from "redux-form";
import classes from "./ProfileInfo.module.css";
import {
  createField,
  Input,
  Textarea,
} from "../../../common/FormsControls/FormsControls";
import classesForm from "./../../../common/FormsControls/FormControls.module.css";

const ProfileDataForm = ({ profile, handleSubmit, error }) => {
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <button>Save</button>
      </div>
      {error && <div className={classesForm.formSummaryError}>{error}</div>}
      <div>
        <b>Fullname</b>:{createField("Full name", "fullName", [], Input)}
      </div>
      <div>
        <b>Looking for a job</b>:{" "}
        {createField("", "lookingForAJob", [], Input, { type: "checkbox" })}
      </div>
      <div>
        <b>My prof skills</b>:{" "}
        {createField(
          "My prof skills",
          "lookingForAJobDescription",
          [],
          Textarea
        )}
      </div>
      <div>
        <b>About me</b>: {createField("About me", "aboutMe", [], Textarea)}
      </div>
      <div>
        <b>Contacts</b>:
        {Object.keys(profile.contacts).map((key) => {
          return (
            <div className={classes.contact}>
              <b>
                {key}: {createField(key, "contacts." + key, [], Input)}
              </b>
            </div>
          );
        })}
      </div>
    </form>
  );
};

const ProfileDataFormReduxForm = reduxForm({
  form: "edit-profile",
  enableReinitialize: true,
  destroyOnUnmount: false,
})(ProfileDataForm);
export default ProfileDataFormReduxForm;
