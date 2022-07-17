import Post from "./Post";
import React from "react";

export default function Posts() {
  const postsData = [
    {
      user: "meowed",
      otherUser: "respondeai",
      likeCount: 101523,
      commentCount: 3289,
      comment: "📱 do gato melhor que o meu!",
      isVideo: false,
      image: "cat",
      alt: "cat looking at an iPhone",
    },
    {
      user: "barked",
      otherUser: "adorableanimals",
      likeCount: 99159,
      commentCount: 3289,
      comment: "Owww! Queria ser fofo assim dormindo.",
      isVideo: false,
      image: "dog",
      alt: "puppy sleeping",
    },
    {
      user: "adorableanimals",
      otherUser: "respondeai",
      likeCount: 98765,
      commentCount: 3289,
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
