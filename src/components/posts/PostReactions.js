import React from "react";

export default function PostReactions() {
  const [heart, setHeart] = React.useState("heart-outline");
  const [bookmark, setBookmark] = React.useState("bookmark-outline");
  return (
    <div className="post-reactions">
      <div>
        <ion-icon
          className="like-post"
          name={heart}
          onClick={() =>
            heart === "heart-outline" ? setHeart("heart") : setHeart("heart-outline")
          }></ion-icon>
        <ion-icon name="chatbubble-outline"></ion-icon>
        <ion-icon name="paper-plane-outline"></ion-icon>
      </div>
      <ion-icon
        name={bookmark}
        onClick={() =>
          bookmark === "bookmark-outline"
            ? setBookmark("bookmark")
            : setBookmark("bookmark-outline")
        }></ion-icon>
    </div>
  );
}
