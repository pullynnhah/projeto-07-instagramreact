export default function PostImage(props) {
  return <img src={`images/${props.image}.png`} alt={props.alt} />;
}
