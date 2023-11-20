import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import "../styles/StylesList.css";
import localData from "../data/styles.json";

const StylesList = () => {
  const navigate = useNavigate();
  const { id: selectedStyleById } = useParams();
  const API = import.meta.env.VITE_API_PORT;
  const [styles, setStyles] = useState([]);

  useEffect(() => {
    const fetchLocalData = async () => {
      try {
        setStyles(localData);
      } catch (err) {
        console.error("Error fetching local data", err);
        navigate("/error");
      }
    };

    fetch(`${API}/styles`)
      .then((r) => {
        if (!r.ok) {
          throw new Error("Network response was not ok");
        }
        return r.json();
      })
      .then((data) => setStyles(data))
      .catch((apiError) => {
        console.error("Error fetching from API", apiError);
        fetchLocalData();
      });
  }, [API, navigate]);

  return (
    <div>
      <section className="stylesList-container" key={selectedStyleById}>
        {styles.map(({ id, category, service, image_url }) => (
          <div className="stylesIndex_card" key={id}>
            <Link
              className="styles_link"
              to={`/styles/${id}`}
              state={{ style: { id, category, service, image_url } }}
            >
              <img className="styles_images" src={image_url} alt={category} />
              &nbsp;
              <br />
              <span>
                Category: {category} <br />
                Style: {service}
              </span>
            </Link>
            <br />
          </div>
        ))}
      </section>
    </div>
  );
};

export default StylesList;
