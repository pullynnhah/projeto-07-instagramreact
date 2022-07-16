export default function PostImage(props) {
  return <img src={`assets/images/${props.image}.png`} alt={props.alt} />;
}
