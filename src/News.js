import React from "react";
import ReactDOM from "react-dom";

import "./App.css";

function HackerNewsPosts({ posts }) {
  if (posts.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <div>      
      {posts.map(post => (
        
      <div className="news-wrap" key={post.id}>
          <div className="no-news">1</div>
          <div className="title-news"><a href={post.url}>{post.title}</a></div>
          <div className="from-news">{post.type}</div>
          <div className="rating-news">{post.score} points | {post.descendants} comments</div>
          <div className="posting-news">by {post.by}</div>
        </div>
        
        ))}
    </div>
  );
}

function News() {
  const [posts, setPosts] = React.useState([]);

  React.useEffect(() => {
    async function getTopStories() {
      const url = "https://hacker-news.firebaseio.com/v0/topstories.json";
      try {
        const response = await fetch(url);
        if (response.ok === false) {
          throw new Error("Response Error:" + response.text);
        }
        const json = await response.json();
        const promises = json
          .slice(0, 10)
          .map(id =>
            fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`).then(
              response => response.json()
            )
          );
        const result = await Promise.all(promises);
        setPosts(result);
      } catch (err) {
        console.error(err);
      }
    }
    getTopStories();
  }, []);

  return (
    <div className="App">
      <HackerNewsPosts posts={posts} />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<News />, rootElement);

export default News