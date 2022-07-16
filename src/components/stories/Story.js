export default function Story(props) {
  return (
    <div className="story">
      <img src="assets/images/stories_background.png" alt="story background" />
      <img src={`assets/images/large/${props.user}.png`} alt={props.user} className="user-image" />
      <p>{props.user}</p>
    </div>
  );
}
