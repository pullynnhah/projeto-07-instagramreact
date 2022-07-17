import React from "react";

export default function PostComments(props) {
  return (
    <div className="post-comments">
      <button className="more-comments">
        Ver todos os {props.commentCount.toLocaleString("pt-br")} comentários
      </button>
      <div>
        <p>{props.comment}</p>
        <button className="like-comment">
          <ion-icon
            name={props.heart}
            onClick={() =>
              props.heart === "heart-outline"
                ? props.setHeart("heart")
                : props.setHeart("heart-outline")
            }></ion-icon>
        </button>
      </div>
    </div>
  );
}
