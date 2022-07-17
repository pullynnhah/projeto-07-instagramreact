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
  const [likeCount, setLikeCount] = React.useState(props.likeCount);
  const [comment, setComment] = React.useState(props.comment);
  const [commentCount, setCommentCount] = React.useState(props.commentCount);

  return (
    <article className="post border">
      <PostHeader user={props.user} />
      {props.isVideo ? (
        <PostVideo video={props.video} name={heart} setName={setHeart} />
      ) : (
        <PostImage
          image={props.image}
          alt={props.alt}
          name={heart}
          setName={setHeart}
          likeCount={likeCount}
          setLikeCount={setLikeCount}
        />
      )}
      <PostReactions
        name={heart}
        setName={setHeart}
        likeCount={likeCount}
        setLikeCount={setLikeCount}
      />
      <PostLikes user={props.otherUser} likeCount={likeCount} />
      <PostComments
        commentsCount={props.commentsCount}
        comment={comment}
        commentCount={commentCount}
      />
      <PostInputComment
        setComment={setComment}
        commentCount={commentCount}
        setCommentCount={setCommentCount}
      />
    </article>
  );
}
