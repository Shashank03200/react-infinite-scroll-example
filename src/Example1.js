import { useState, useRef } from "react";
import usePosts from "./hooks/usePosts";
import Post from "./Post";

export default function Example1() {
  const [pageNum, setPageNum] = useState(0);
  const lastPostRef = useRef();

  const { isLoading, isError, error, results, hasNextPage } = usePosts(pageNum);
  console.log("Results", results);

  if (isError) return <p className="center">Error : {error.message}</p>;

  const content = results.map((post, i) => {
    if (i === results.length - 1) {
      return <Post key={i} post={post} ref={lastPostRef} />;
    }

    console.log("post", post);

    return <Post key={i} post={post} />;
  });

  return (
    <>
      <h1 id="top">
        &infin; Infinite Query &amp; Scrollbar <br /> &infin; Example1 - React
        only
      </h1>
      {content}
      {isLoading && <p className="center">Loading more posts ... </p>}
      <p className="center">
        <a href="#top">Back to Top</a>
      </p>
    </>
  );
}
