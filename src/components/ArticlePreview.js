import React from "react";
import { Link } from "react-router-dom";
import { makeEmojiList } from "../utils";

function ArticlePreview({
  id,
  title,
  date = "January 1, 1970",
  preview,
  minutes,
}) {
  const emojis = makeEmojiList(minutes);

  return (
    <article>
      <h3>
        <Link to={`/articles/${id}`}>{title}</Link>
      </h3>
      <small>
        {date} • {emojis} {minutes} min read
      </small>
      <p>{preview}</p>
    </article>
  );
}

export default ArticlePreview;
