export default function PostImage(props) {
  return (
    <img
      src={`assets/images/${props.image}.png`}
      alt={props.alt}
      onClick={() =>
        props.name === "heart-outline" ? props.setName("heart") : props.setName("heart-outline")
      }
    />
  );
}
