import { Link } from "react-router-dom";
import "./Navigation.css";

export const Navigation = () => {
  return (
    <nav className="navigation">
      <ul className="navigation__list">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/404">404</Link>
        </li>
      </ul>
    </nav>
  );
};
