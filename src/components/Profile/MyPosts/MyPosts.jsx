import React from "react";
import classes from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = () => {
  return (
    <div>
      My posts
      <div>
        <textarea></textarea>
        <button>Add post</button>
      </div>
      <div className="Posts">
        <Post message="Hello, World!" />
        <Post message="second post" />
        <Post message="third post" />
      </div>
    </div>
  );
};

export default MyPosts;
