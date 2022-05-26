import React from "react";
import classes from "./MyPosts.module.css";
import Post from "./Post/Post";
import {
  addPostActionCreator,
  updateNewPostTextActionCreator,
} from "./../../../redux/state";

const MyPosts = (props) => {
  const postElements = props.posts.map((post) => (
    <Post message={post.message} />
  ));

  const newPostElement = React.createRef();

  const addPost = () => {
    const action = addPostActionCreator();
    props.dispatch(action);
  };

  const onPostChange = () => {
    const text = newPostElement.current.value;
    const action = updateNewPostTextActionCreator(text);
    props.dispatch(action);
  };

  return (
    <div className={classes.postsBlock}>
      <h3> My posts</h3>
      <div>
        <div>
          <textarea
            ref={newPostElement}
            onChange={onPostChange}
            value={props.newPostText}
          />
        </div>
        <div>
          <button onClick={addPost}>Add post</button>
        </div>
      </div>
      <div className={classes.posts}>{postElements}</div>
    </div>
  );
};

export default MyPosts;
