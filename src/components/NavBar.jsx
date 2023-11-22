import { Link } from "react-router-dom";
import "../styles/NavBar.css";

const NavBar = () => {
  return (
    <nav className="nav-container">
      <ul className="nav-links">
        <li className="link a">
          <Link to={"/"}> 🏠</Link>
        </li>
        <li className="link a">
          <Link to={"/styles"}> Styles</Link>
        </li>
        <li className="link b">
          <Link to={"/book"}> Schedule🗓️ </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
