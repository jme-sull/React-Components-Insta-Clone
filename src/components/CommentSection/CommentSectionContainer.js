// You will add code to this file
import React, { useState } from "react";
import CommentInput from "./CommentInput";
import Comment from "./Comment";
import "./Comment.css";

const CommentSection = props => {
  // Add state for the comments
  const [comment, changeCommnet] = useState('') 

  const { comments, postId } = props






  return (
    <div>
      {/* map through the comments data and return the Comment component */}
      {comments.map(commentObj => <Comment key = {postId} comment = {commentObj}/>)}
    </div>
  );
};

export default CommentSection;

// {posts.map(postObj => <Post key={postObj.timestamp} post={postObj} />) }