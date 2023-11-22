import '../styles/About.css'


const About = () => {
  return (
    <>
      <div className="about_me">
        <h1> Showcase </h1>
        <h2> Previous Work </h2>
        <section>
          <h3> Coding</h3>
          <p> Front End</p>
          <a href="https://imbad-youtube-clone.netlify.app/"> YouTube Clone </a>

          <p> Back End</p>
          <a href="https://github.com/anickacodes/Cereal-Killahs-BackEnd">
            {" "}
            BackEnd Duo Project{" "}
          </a>

          <p> Group Projects</p>
          <a href="https://cereal-killahs.netlify.app/">
            {" "}
            Check out the creativity{" "}
          </a>
        </section>

        <section>
        <h2> Contact </h2>
        <ul>
          <li className='info'>
            <span>Email:</span> <a href="mailto:anickalewis@pursuit.org"> Email via Pursuit Fellowship</a>
          </li>
          <li className='info'>
            <span>LinkedIn:</span> <a href="https://www.linkedin.com/in/anickalewiss/"> Connect on LinkedIn</a>
          </li>
          <li className='info'>
            <span>Linktree:</span> <a href="https://linktr.ee/Nickistylez"> Linktree </a>
          </li>
          <li className='info'>
            <span>Instagram:</span> <a href="https://www.instagram.com/clnstylez_/"> Instagram </a>
          </li>
        </ul>
      </section>
      </div>
    </>
  );
};

export default About;
