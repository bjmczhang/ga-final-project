import selectedlist from "../selected.json";
import { ArrowRightIcon, GotoIcon } from "../assets/icons.js";
import { Link } from "react-router-dom";

import "./components.css";

const SelectedList = () => {
  return (
    <div className="selected-list">
      <h3 className="section-title">selected posts</h3>

      <div>
        {selectedlist.length &&
          selectedlist.map((post, i) => {
            return (
              <Link to={`/post/${post.title}`} className="post-link" key={i}>
                <div className="selected-card tag">
                  <h3>{post.title}</h3>
                  <small>
                    Published on {post.date} by {post.author}
                  </small>
                  <div className="goto-icon">
                    <GotoIcon />
                  </div>
                </div>
              </Link>
            );
          })}
      </div>

      <Link to="/blog" className="see-all">
        see all <ArrowRightIcon />
      </Link>
    </div>
  );
};

export default SelectedList;
