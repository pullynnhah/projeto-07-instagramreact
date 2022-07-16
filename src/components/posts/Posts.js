import PostHeader from "./PostHeader";

export default function Posts() {
  const data = [
    {
      user: "meowed",
      otherUser: "respondeai",
      likesCount: "101.523",
      commentsCount: "3,289",
      comment: "📱 do gato melhor que o meu!";
      isVideo: false,
    }
  ];

  return (
    <section className="posts">
      <PostHeader user={}/>
    </section>
  )
}


