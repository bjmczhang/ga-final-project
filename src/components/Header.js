import { MoonIcon } from "../assets/icons";
import "./components.css";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="container">
      <div className="header">
        <div className="logo">
          <p>{`<BjmZhang />`}</p>
        </div>
        <nav>
          <NavLink to="/">home</NavLink>
          <NavLink to="/blog">blog</NavLink>
          <NavLink to="/about">about</NavLink>
        </nav>
      </div>
    </div>
  );
};

export default Header;
