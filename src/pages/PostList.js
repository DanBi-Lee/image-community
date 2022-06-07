import React from "react";
import Post from "../components/Post";
import Header from "../shared/Header";

const PostList = (props) => {
  return (
    <React.Fragment>
      <Header />
      <Post />
      <Post />
      <Post />
    </React.Fragment>
  );
};

export default PostList;
