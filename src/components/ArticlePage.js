import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { makeEmojiList } from "../utils";

function ArticlePage() {
  // fetch data for a post
  const { id } = useParams();
  const [isLoaded, setIsLoaded] = useState(false);
  const [post, setPost] = useState(null);

  const url = `http://localhost:4000/posts/${id}`;
  useEffect(() => {
    setIsLoaded(false);
    fetch(url)
      .then((r) => r.json())
      .then((post) => {
        setPost(post);
        setIsLoaded(true);
      });
  }, [url]);

  // set the document title
  const pageTitle = post ? `Underreacted | ${post.title}` : "Underreacted";
  useEffect(() => {
    document.title = pageTitle;
  }, [pageTitle]);

  if (!isLoaded) return <h3>Loading...</h3>;

  const { minutes, title, date, preview } = post;
  const emojis = makeEmojiList(minutes);

  return (
    <article>
      <h3>{title}</h3>
      <small>
        {date} • {emojis} {minutes} min read
      </small>
      <p>{preview}</p>
    </article>
  );
}

export default ArticlePage;
