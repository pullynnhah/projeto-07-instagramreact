function toggleHeart() {
  const hearts = document.querySelectorAll(".heart");
  for (const heart of hearts) {
    heart.classList.toggle("unselected");
  }
}

export default function PostComments(props) {
  return (
    <div className="post-comments">
      <button className="more-comments">Ver todos os {props.commentsCount} comentários</button>
      <div>
        <p>{props.comment}</p>
        <button className="like-comment">
          <ion-icon name="heart-outline" className="heart" onClick={toggleHeart}></ion-icon>
          <ion-icon name="heart" className="heart unselected" onClick={toggleHeart}></ion-icon>
        </button>
      </div>
    </div>
  );
}
