import { SearchIcon } from "../assets/icons";

const Search = ({ onSearchInputChange }) => {
  return (
    <div className="search">
      <label htmlFor="search">
        <SearchIcon />
      </label>
      <input
        type="search"
        id="search"
        placeholder="Search…"
        onChange={onSearchInputChange}
      ></input>
    </div>
  );
};

export default Search;
