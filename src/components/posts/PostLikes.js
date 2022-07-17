export default function PostLikes(props) {
  return (
    <div className="post-likes">
      <img src={`assets/images/micro/${props.user}.png`} alt={props.user} />
      <p>
        Curtido por <strong>{props.user}</strong> e
        <strong> outras {props.likeCount.toLocaleString("pt-br")} pessoas</strong>
      </p>
    </div>
  );
}
