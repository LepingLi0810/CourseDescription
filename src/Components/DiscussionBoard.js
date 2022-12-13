import React, { useState } from "react";
import DiscussionBoard from "./Board";
//import DiscussionBoard from "react-discussion-board";
import profile from "../Images/anonymous.jpg";
import "./DiscussionBoard.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./quill.css";

const Board = () => {
  function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  const names = ["Kuuga", "Agito", "Ryuki", "Faiz", "Kaixa", "Delta"];

  const allPosts = [
    {
      profileImage: profile,
      name: names[randomNumber(0, 5)],
      content: "<p>I love this course!</p>",
      date: new Date("01 Jan 2020 01:12:00 GMT"),
    },
    {
      profileImage: profile,
      name: names[randomNumber(0, 5)],
      content: "<p>I hate this course!</p>",
      date: new Date("01 Jan 2020 09:12:00 GMT"),
    },
  ];

  const [posts, setPosts] = useState(allPosts);
  const submitPost = (text) => {
    const curDate = new Date();

    setPosts([
      ...posts,
      {
        profileImage: profile,
        name: names[randomNumber(0, 5)],
        content: text,
        date: curDate,
      },
    ]);
  };

  return (
    <div className="DiscussionBoard">
      <DiscussionBoard posts={posts} onSubmit={submitPost} />
    </div>
  );
};

export default Board;

