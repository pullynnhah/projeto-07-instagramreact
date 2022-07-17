import PostHeader from "./PostHeader";
import PostReactions from "./PostReactions";
import PostLikes from "./PostLikes";
import PostComments from "./PostComments";
import PostInputComment from "./PostInputComment";
import PostImage from "./PostImage";
import PostVideo from "./PostVideo";
import React from "react";

export default function Post(props) {
  const [heart, setHeart] = React.useState("heart-outline");
  return (
    <article className="post border">
      <PostHeader user={props.user} />
      {props.isVideo ? (
        <PostVideo video={props.video} name={heart} setName={setHeart} />
      ) : (
        <PostImage image={props.image} alt={props.alt} name={heart} setName={setHeart} />
      )}
      <PostReactions name={heart} setName={setHeart} />
      <PostLikes user={props.otherUser} />
      <PostComments commentsCount={props.commentsCount} comment={props.comment} />
      <PostInputComment />
    </article>
  );
}
