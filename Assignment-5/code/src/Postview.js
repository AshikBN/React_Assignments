import React, { useEffect, useState } from "react";
import Header from "./Header";
import Post from "./Post";
import "./Postview.css";

const Postview = () => {
  const [posts, setPosts] = useState([]);
  async function fetchPosts() {
    const data = await fetch("http://localhost:3004/user");
    const data2 = await data.json();
    setPosts(data2);
  }
  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div className="site-container">
      <div className="Posts">
        {posts.map((data, index) => {
          console.log(data);
          return <Post key={index} data={data} />;
        })}
      </div>
    </div>
  );
};

export default Postview;
