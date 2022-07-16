import PostHeader from "./PostHeader";
import PostReactions from "./PostReactions";
import PostLikes from "./PostLikes";
import PostComments from "./PostComments";
import PostInputComment from "./PostInputComment";
import PostImage from "./PostImage";
import PostVideo from "./PostVideo";

export default function Post(props) {
  return (
    <article className="post border">
      <PostHeader user={props.user} />
      {props.isVideo ? (
        <PostVideo video={props.video} />
      ) : (
        <PostImage image={props.image} alt={props.alt} />
      )}
      <PostReactions />
      <PostLikes user={props.otherUser} />
      <PostComments commentsCount={props.commentsCount} comment={props.comment} />
      <PostInputComment />
    </article>
  );
}
