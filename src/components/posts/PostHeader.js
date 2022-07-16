export default function PostHeader(props) {
  return (
    <div className="post-header">
      <div>
        <img src={`assets/images/small/${props.user}.png`} alt={props.user} />
        <p>{props.user}</p>
      </div>
      <ion-icon name="ellipsis-horizontal" className="ellipsis"></ion-icon>
    </div>
  );
}
