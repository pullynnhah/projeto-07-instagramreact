import React from "react";

export default function PostReactions(props) {
  const [bookmark, setBookmark] = React.useState("bookmark-outline");

  function switcher() {
    if (props.name === "heart-outline") {
      props.setName("heart");
      props.setLikeCount(props.likeCount + 1);
    } else {
      props.setName("heart-outline");
      props.setLikeCount(props.likeCount - 1);
    }
  }

  return (
    <div className="post-reactions">
      <div>
        <ion-icon className="like-post" name={props.name} onClick={switcher}></ion-icon>
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
