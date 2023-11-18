import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import '../styles/StylesList.css'


const StylesList = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const API = import.meta.env.VITE_API_PORT;
  const [styles, setStyles] = useState([]);

  useEffect(() => {
    fetch(`${API}/styles`)
      .then((r) => r.json())
      .then((data) => setStyles(data))
      .catch((error) => {
        console.error(error);
        navigate("/error");
      });
  }, []);

  return (
    <div>
      <section className="stylesList-container" key={id}>
        {styles.map(({id, category, service, image_url }) => (
          <div className="stylesIndex_card" key={id}>
          <Link to={`/styles/${id}`}>
            <img src={image_url} alt={category} />
            <span>{service}</span>
          </Link>
          </div>
        ))}
      </section>
    </div>
  );
};

export default StylesList;
