// You will add code in this file
import React, { useState } from "react";
import CommentSection from "../CommentSection/CommentSectionContainer";
import LikeSection from "./LikeSection";
import PostHeader from "./PostHeader";

import "./Posts.css";

// pass props in this file to
const Post = props => {

  const [ likes, updateLikes ] = useState(0)

  const likesHandler = event => {
    return updateLikes(likes + 1)
  }


  // set up state for the likes

  return (
    <div className="post-border">
      <PostHeader
        username={props.post.username}
        thumbnailUrl={
          props.post.thumbnailUrl
        }
      />
      <div className="post-image-wrapper">
        <img
          alt="post thumbnail"
          className="post-image"
          src={props.post.imageUrl}
        />
      </div>
      <LikeSection likes = {likes} likesHandler = {likesHandler}/>
      <CommentSection postId={props.post.imageUrl} comments={props.post.comments} />
    </div>
  );
};

export default Post;
