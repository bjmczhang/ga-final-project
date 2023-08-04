import postlist from "../posts.json";
import { Link } from "react-router-dom";
import { useState } from "react";

import "./components.css";
import Search from "./Search";

const PostList = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTags, setSelectedTags] = useState([]);

  const handleSearchInputChange = (e) => setSearchQuery(e.target.value);

  const handleTagSelect = (tag) => {
    setSelectedTags(
      (prevSelectedTags) =>
        prevSelectedTags.includes(tag)
          ? prevSelectedTags.filter((t) => t !== tag) // If the tag is already selected, remove it
          : [...prevSelectedTags, tag] // If the tag is not selected, add it
    );
  };

  const postMatchesSelectedTags = (post) => {
    if (selectedTags.length === 0) return true;

    const tagsArray = post.tags.split(",").map((tag) => tag.trim());
    return tagsArray.some((tag) => selectedTags.includes(tag));
  };

  const parseCustomDate = (dateString) => {
    const [day, month, year] = dateString.split("-");
    // Months are 0-indexed in JavaScript Date objects, so we subtract 1 from the month value
    return new Date(`${year}-${month - 1}-${day}`);
  };

  const filteredPosts = postlist
    .filter(
      (post) =>
        (post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          post.content.toLowerCase().includes(searchQuery.toLowerCase()) ||
          post.author.toLowerCase().includes(searchQuery.toLowerCase()) ||
          post.date.toLowerCase().includes(searchQuery.toLowerCase())) &&
        postMatchesSelectedTags(post)
    )
    // Sort posts by date, from newest to oldest
    .sort((a, b) => parseCustomDate(b.date) - parseCustomDate(a.date));

  const availableTags = Array.from(
    new Set(postlist.map((post) => post.tags.split(",")).flat())
  );
  return (
    <div className="container postlist-container">
      <div className="wrapper">
        <h2 className="title">my blog</h2>
        <p>
          {" "}
          I enjoy coding and like to summarize some of my personal thoughts.{" "}
        </p>
        <Search onSearchInputChange={handleSearchInputChange} />
        <div className="tags-list">
          <span>common tags:</span>
          {availableTags.map((tag, i) => (
            <button
              key={i}
              className={selectedTags.includes(tag) ? "tag selected" : "tag"}
              onClick={() => handleTagSelect(tag)}
            >
              {tag}
            </button>
          ))}
        </div>
        <div className="post-list">
          {filteredPosts.length > 0 ? (
            filteredPosts.map((post, i) => (
              <div className="post-card" key={i}>
                <Link to={`/post/${post.title}`} className="post-link">
                  <h2>{post.title}</h2>
                  <small>Published on {post.date}</small>
                </Link>
              </div>
            ))
          ) : (
            <p>No posts found.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default PostList;
