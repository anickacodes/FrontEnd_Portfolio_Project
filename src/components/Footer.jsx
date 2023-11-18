import { Link } from "react-router-dom"


const Footer = () => {

    return(
        <li className="link b">
        <Link to={"/about"}> About</Link>
      </li>
    )
}

export default Footer