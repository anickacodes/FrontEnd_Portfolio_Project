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
    <div className="stylesList-container" style={{}}>
      <section>
        {styles.map(({ category, service, image_url }) => (
          <Link to={`/styles/${id}`} className="stylesIndex_card">
            <img src={image_url} alt={service} />
            <span>{category}</span>
          </Link>
        ))}
      </section>
    </div>
  );
};

export default StylesList;
