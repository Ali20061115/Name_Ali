import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
export default function Posts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, []);

  return (
    <div>
      <h1>📝 Барлық посттар</h1>
      <div id="container">
      {posts.map((post) => (
        <div id="card"  key={post.id}>
          <h3>{post.title}</h3>
          <Link id="link" to={`/posts/${post.id}`}>Толығырақ оқу</Link>
        </div>
      ))}
      </div>
      
    </div>
  );
}
 
