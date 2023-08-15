import { useParams } from "react-router-dom";
import postArticle from "../posts.json";
import Markdown from "markdown-to-jsx";
import Code from "./Code";

const Article = () => {
  const params = useParams();

  const article = postArticle.find((post) => post.title === params.slug);
  const tagsArray = article.tags.split(",");

  return (
    <div className="article">
      <h1>{article.title}</h1>
      <p className="article-date">Published on {article.date}</p>
      <p className="article-tags">
        {tagsArray.map((tag) => (
          <span className="tag" key={tag}>
            {tag}
          </span>
        ))}
      </p>
      <Markdown
        options={{
          overrides: {
            code: Code,
          },
        }}
      >
        {article.content}
      </Markdown>
      {/* <ReactMarkdown children={article.content} components={{ code: Code }} /> */}
    </div>
  );
};

export default Article;
