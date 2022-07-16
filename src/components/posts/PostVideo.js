export default function (props) {
  return (
    <video controls autoPlay muted>
      <source src={`assets/videos/${props.video}.mp4`} type="video/mp4" />
      <source src={`assets/videos/${props.video}.ogv`} type="video/ogg" />
      Seu navegador não suporta vídeos.
    </video>
  );
}
