export default function PostComments(props) {
  return (
    <div className="post-comments">
      <button className="more-comments">Ver todos os {props.commentsCount} comentários</button>
      <div>
        <p>{props.comment}</p>
        <button className="like-comment">
          <ion-icon name="heart-outline"></ion-icon>
        </button>
      </div>
    </div>
  );
}
