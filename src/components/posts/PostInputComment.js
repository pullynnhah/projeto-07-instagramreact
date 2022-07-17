import React from "react";

export default function PostInputComment(props) {
  const [input, setInput] = React.useState("");
  const inputRef = React.useRef("");

  React.useEffect(() => {
    inputRef.current = input;
  });

  function postComment() {
    props.setComment(input);
    props.setCommentCount(props.commentCount + 1);
    setInput("");
    props.setHeart("heart-outline");
  }

  return (
    <div className="your-comment">
      <div>
        <ion-icon name="happy-outline"></ion-icon>
        <input
          ref={inputRef}
          className="comment"
          type="text"
          value={input}
          placeholder="Adicione um comentário"
          onChange={e => setInput(e.target.value)}
        />
      </div>
      <button onClick={postComment}>Publicar</button>
    </div>
  );
}
