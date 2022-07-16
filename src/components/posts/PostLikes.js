export default function PostLikes(props) {
  return (
    <div className="post-likes">
      <img src={`assets/images/micro/${props.user}.png`} alt={props.user} />
      <p>
        Curtido por <strong>{props.user}</strong> e{" "}
        <strong>outras {props.likesCount} pessoas</strong>
      </p>
    </div>
  );
}
