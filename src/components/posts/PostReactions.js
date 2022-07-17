function toggleHeart() {
  const hearts = document.querySelectorAll(".like-post");
  for (const heart of hearts) {
    heart.classList.toggle("unselected");
  }
}

export default function PostReactions() {
  return (
    <div className="post-reactions">
      <div>
        <ion-icon name="heart-outline" className="like-post" onClick={toggleHeart}></ion-icon>
        <ion-icon name="heart" className="like-post unselected" onClick={toggleHeart}></ion-icon>
        <ion-icon name="chatbubble-outline"></ion-icon>
        <ion-icon name="paper-plane-outline"></ion-icon>
      </div>
      <ion-icon name="bookmark-outline"></ion-icon>
    </div>
  );
}
