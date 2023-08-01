import { useParams } from "react-router-dom";
import postArticle from "../posts.json";
import Markdown from "react-markdown";

const Article = () => {
  const params = useParams();
  console.log(params.slug);

  const article = postArticle.find((post) => post.title === params.slug);

  return (
    <div className="article">
      <h3>{article.title}</h3>
      <h6>{article.date}</h6>
      <h6>{article.author}</h6>

      <Markdown children={article.content} />
    </div>
  );
};

export default Article;
