//Complete the necessary code in this file
// import useState
import React, { useState } from "react";
import Post from "./Post";
import "./Posts.css";
// import data 
import data from "../../dummy-data.js"

const PostsPage = () => {
  // set up state for your data
  const [posts, updatePost] = useState(data)

  
  return (
    <div className="posts-container-wrapper">
      {posts.map(postObj => <Post key={postObj.timestamp} post={postObj} />) }
    </div>
  );
};

export default PostsPage;



