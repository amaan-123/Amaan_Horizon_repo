import { useState, useEffect } from "react";

function PostList() {
  const [posts, setPosts] = useState([]);
  const [showPosts, setShowPosts] = useState(false);

  useEffect(() => {
    console.log("--- Pre-fetch ---");

    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => setPosts(data));

    console.log("--- Post-setPosts ---");
  }, []);

  function togglePosts() {
    setShowPosts(!showPosts);
  }

  return (
    <div>
      <h2>Post List</h2>
      <button onClick={togglePosts}>{showPosts ? "Hide" : "Show"}</button>
      {/* conditional rendering `{showPosts && ...}` to show/hide posts */}

      {showPosts && (
        <>
          <ul>
            {posts.map((post) => (
              <li key={post.id}>
                <strong>{post.title}</strong>
                <p>{post.body}</p>
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
}
export default PostList;
