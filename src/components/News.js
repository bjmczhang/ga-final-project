import { useEffect, useState } from "react";
import "./components.css";

const APIKey = process.env.REACT_APP_NEWS_API_KEY;

const News = () => {
  const [news, setNews] = useState([]);

  // https://currentsapi.services/
  useEffect(() => {
    fetch(
      `https://api.currentsapi.services/v1/latest-news?language=en&category=programming&apiKey=${APIKey}`
    )
      .then((res) => res.json())
      .then((res) => {
        console.log(res.news);
        // Filter articles with image
        const newsWithImages = res.news.filter(
          (post) =>
            post.image !== null &&
            post.image !== "" &&
            post.image !== undefined &&
            post.image !== "None"
        );
        setNews(newsWithImages);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="news grid-container">
      <h3 className="section-title">tech headlines today</h3>
      {news.slice(0, 4).map((post) => (
        <a
          target="_blank"
          href={post.url}
          className="news-card grid-item"
          key={post.id}
        >
          <div className="image">
            <img src={post.image} alt={post.title} />
          </div>
          <div className="news-content">
            <small>{post.published}</small>
            <h3>{post.title.split(" ").slice(0, 10).join(" ")} ...</h3>
            <p>{post.description.split(" ").slice(0, 10).join(" ")} ...</p>
          </div>
        </a>
      ))}
    </div>
  );
};

export default News;
