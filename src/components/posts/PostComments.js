import React from "react";

export default function PostComments(props) {
  const [heart, setHeart] = React.useState("heart-outline");
  return (
    <div className="post-comments">
      <button className="more-comments">
        Ver todos os {props.commentCount.toLocaleString()} comentários
      </button>
      <div>
        <p>{props.comment}</p>
        <button className="like-comment">
          <ion-icon
            name={heart}
            onClick={() =>
              heart === "heart-outline" ? setHeart("heart") : setHeart("heart-outline")
            }></ion-icon>
        </button>
      </div>
    </div>
  );
}
