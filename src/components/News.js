import { useEffect, useState } from "react";
import "./components.css";

const APIKey = process.env.REACT_APP_NEWS_API_KEY;

const News = () => {
  const [news, setNews] = useState([]);

  // https://newsapi.org/docs/endpoints/top-headlines
  useEffect(() => {
    fetch(
      `https://newsapi.org/v2/everything?language=en&pageSize=20&sortBy=publishedAt&q=coding&apiKey=${APIKey}`
    )
      .then((res) => res.json())
      .then((res) => {
        // Filter out articles with null urlToImage
        const newsWithImages = res.articles.filter(
          (article) => article.urlToImage !== null
        );
        setNews(newsWithImages);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="news grid-container">
      <h3 className="section-title">tech headlines today</h3>
      {news.slice(0, 4).map((article, i) => (
        <a
          target="_blank"
          href={article.url}
          className="news-card grid-item"
          key={i}
        >
          <div className="image">
            <img src={article.urlToImage} alt={article.title} />
          </div>
          <div className="news-content">
            <small>{article.publishedAt}</small>
            <h3>{article.title.split(" ").slice(0, 10).join(" ")} ...</h3>
            <p>{article.description.split(" ").slice(0, 10).join(" ")} ...</p>
          </div>
        </a>
      ))}
    </div>
  );
};

export default News;
