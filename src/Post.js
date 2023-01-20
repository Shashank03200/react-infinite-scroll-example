import React from "react";

const Post = ({ post }, ref) => {
  const postBody = (
    <>
      <h2>Title: {post?.title}</h2>
      <p>URL : {post?.url}</p>
      <p>Post ID: {post?.thumbnailUrl}</p>
    </>
  );

  // only last result of that page will receive that ref
  const content = ref ? (
    <article ref={ref}>{postBody}</article>
  ) : (
    <article>{postBody}</article>
  );

  return content;
};

export default React.forwardRef(Post);
