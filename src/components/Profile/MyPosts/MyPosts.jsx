import React from "react";
import classes from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {
  const postElements = props.posts.map((post) => (
    <Post message={post.message} />
  ));
  const onAddPost = () => {
    props.addPost();
  };

  const onPostChange = (e) => {
    const text = e.currentTarget.value;
    props.updateNewPostText(text);
  };

  return (
    <div className={classes.postsBlock}>
      <h3> My posts</h3>
      <div>
        <div>
          <textarea onChange={onPostChange} value={props.newPostText} />
        </div>
        <div>
          <button onClick={onAddPost}>Add post</button>
        </div>
      </div>
      <div className={classes.posts}>{postElements}</div>
    </div>
  );
};

export default MyPosts;
