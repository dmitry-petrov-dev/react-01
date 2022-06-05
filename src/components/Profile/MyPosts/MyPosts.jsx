import React from "react";
import { Field, reduxForm } from "redux-form";
import classes from "./MyPosts.module.css";
import Post from "./Post/Post";
import {
  required,
  maxLengthCreator,
} from "../../../utils/validators/validators";
import { Textarea } from "../../common/FormsControls/FormsControls";

const maxLength10 = maxLengthCreator(10);

const MyPosts = ({ posts, addPost, props }) => {
  const postElements = posts.map((post) => <Post message={post.message} />);

  const addNewPost = (values) => {
    addPost(values.newPost);
  };

  return (
    <div className={classes.postsBlock}>
      <h3>My posts</h3>
      <div>
        <AddNewPostFormRedux onSubmit={addNewPost} />
      </div>
      <div className={classes.posts}>{postElements}</div>
    </div>
  );
};

const AddNewPostForm = ({ handleSubmit, props }) => {
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <Field
          component={Textarea}
          name="newPost"
          placeholder="Enter new post"
          validate={[required, maxLength10]}
        />
      </div>
      <div>
        <button>Add post</button>
      </div>
    </form>
  );
};

const AddNewPostFormRedux = reduxForm({ form: "ProfileAddPostBox" })(
  AddNewPostForm
);

export default MyPosts;
