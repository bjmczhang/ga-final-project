import { GotoIcon } from "../assets/icons";
import "./pages.css";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="notfound">
      <p>
        <span>404</span>This page could not be found.
      </p>
      <Link to="/">return home</Link>
    </div>
  );
};

export default NotFound;
