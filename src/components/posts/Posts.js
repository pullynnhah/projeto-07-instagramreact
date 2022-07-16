import Post from "./Post";

export default function Posts() {
  const postsData = [
    {
      user: "meowed",
      otherUser: "respondeai",
      likesCount: "101.523",
      commentsCount: "3,289",
      comment: "📱 do gato melhor que o meu!",
      isVideo: false,
      image: "cat",
      alt: "cat looking at an iPhone",
    },
    {
      user: "barked",
      otherUser: "adorableanimals",
      commentsCount: "99.159",
      comment: "Owww! Queria ser fofo assim dormindo.",
      isVideo: false,
      image: "dog",
      alt: "puppy sleeping",
    },
    {
      user: "adorableanimals",
      otherUser: "respondeai",
      commentsCount: "98.765",
      comment: "Os patos mais corajosos que eu!",
      isVideo: true,
      video: "video",
    },
  ];

  return (
    <section className="posts">
      {postsData.map(postData => (
        <Post {...postData} />
      ))}
    </section>
  );
}
