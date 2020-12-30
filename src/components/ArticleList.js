import React from "react";
import ArticlePreview from "./ArticlePreview";

function ArticleList({ posts }) {
  return (
    <main>
      {posts.map((post) => (
        <ArticlePreview key={post.id} {...post} />
      ))}
    </main>
  );
}

export default ArticleList;
