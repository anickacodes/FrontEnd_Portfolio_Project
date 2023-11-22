import { Link } from "react-router-dom";
import "../styles/About.css";

const About = () => {
  return (
    <>
      <div className="about_me">
        <h1> Showcase </h1>
        <h2> Previous Work </h2>
        <section className="about_section">
        Everybody's so creative!{" "}
          <Link to="https://cereal-killahs.netlify.app/">
            <img
              src={"src/assets/CerealKillahs.png"}
              height="170px"
              alt="cereal"
            />{" "} <br/>
           
          </Link>
          
          <a href="https://github.com/anickacodes/Cereal-Killahs-BackEnd">
            {" "}<br/>
            BackEnd Duo Project{" "}
          </a>

          YouTube Clone Group Project<br/>
          <Link to="https://imbad-youtube-clone.netlify.app/">
            {" "}
           
            <img src={"src/assets/youtubeclone.png"} height="90px" alt="yt" />
          </Link>
        </section>

        <section className="contact">
          <h2> Contact </h2>
          <ul>
            <li className="info">
              <span>Email:</span>{" "}
              <a href="mailto:anickalewis@pursuit.org">
                {" "}
                Email via Pursuit Fellowship
              </a>
            </li>
            <li className="info">
              <span>LinkedIn:</span>{" "}
              <a href="https://www.linkedin.com/in/anickalewiss/">
                {" "}
                Connect on LinkedIn
              </a>
            </li>
            <li className="info">
              <span>Linktree:</span>{" "}
              <a href="https://linktr.ee/Nickistylez"> Linktree </a>
            </li>
            <li className="info">
              <span>Instagram:</span>{" "}
              <a href="https://www.instagram.com/clnstylez_/"> Instagram </a>
            </li>
          </ul>
        </section>
      </div>
    </>
  );
};

export default About;
