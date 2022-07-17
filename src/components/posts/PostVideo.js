export default function PostVideo(props) {
  return (
    <video
      controls
      autoPlay
      muted
      onClick={() =>
        props.name === "heart-outline" ? props.setName("heart") : props.setName("heart-outline")
      }>
      <source src={`assets/videos/${props.video}.mp4`} type="video/mp4" />
      <source src={`assets/videos/${props.video}.ogv`} type="video/ogg" />
      Seu navegador não suporta vídeos.
    </video>
  );
}
