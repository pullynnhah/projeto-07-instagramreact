export default function User(props) {
  return (
    <div className="user">
      <img
        src={`assets/images/${props.size}/${props.image}.png`}
        alt={props.user}
        className={props.cls}
      />
      <div>
        <strong>{props.user}</strong>
        <small>{props.text}</small>
      </div>
    </div>
  );
}
