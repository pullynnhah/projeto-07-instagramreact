export default function PostImage(props) {
  function switcher() {
    if (props.name === "heart-outline") {
      props.setName("heart");
      props.setLikeCount(props.likeCount + 1);
    }
  }
  return <img src={`assets/images/${props.image}.png`} alt={props.alt} onClick={switcher} />;
}
