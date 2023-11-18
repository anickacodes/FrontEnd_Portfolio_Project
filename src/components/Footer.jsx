import { Link } from "react-router-dom";
import '../styles/Footer.css'

const Footer = () => {
  return (
    <div className="footer">
      <Link to={"/about"}> About</Link>
    </div>
  );
};

export default Footer;
