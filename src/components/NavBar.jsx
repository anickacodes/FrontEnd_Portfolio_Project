import { useEffect } from "react";
import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className='nav-container' >
      <ul className="nav-links"style={{listStyleType:'none', display: 'flex', justifyContent: 'space-around'}}>
        <li className="link a" >
          <Link to={"/styles"}> Styles</Link>
        </li>
        <li className="link b">
          <Link to={"/about"}> About</Link>
        </li>
        <li className="link c">
          <Link to={"/book"}> Schedule🗓️ </Link>
        </li>
        <li className="link c">
          <Link to={"/styles/new"}> Style🖊️ </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
