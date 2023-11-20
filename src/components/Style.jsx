import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import "../styles/Style.css";

const Style = () => {
  const API = import.meta.env.VITE_API_PORT;
  const navigate = useNavigate();
  const { id } = useParams();
  const [style, setStyle] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${API}/styles/${id}`);
        const data = await response.json();
        setStyle(data);
      } catch (error) {
        console.error("Error fetching style data", error);
      }
    };
    fetchData();
  }, [id]);

  const handleDelete = () => {
    alert("Delete Style?");
    console.log(`Deleting style with id ${id}`);
    deleteStyle();
  };

  const deleteStyle = () => {
    fetch(`${API}/styles/${id}`, {
      method: "DELETE",
    })
      .then(() => navigate(`/styles`))
      .catch((error) => console.error(error));
  };

  const handleEdit = () => {
    navigate(`/styles/${id}/edit`, { state: { style } });
  };

  return (
    <div className="each_style">
      <h3>Style: {style.service}</h3>

      {style && Object.keys(style).length > 0 && (
        <div className="styleObj">
          <img src={style.image_url} alt="image" />
          <br />
          <div className="styleKeys">
            <span>Category: {style.category} </span>
            <br />
            <span> Description: {style.description}</span>
          </div>
        </div>
      )}
      <Link to={"/styles"}>
        <button>Back</button>
      </Link>
      <button onClick={handleDelete}>Delete</button>
      <button onClick={handleEdit}>Edit</button>
    </div>
  );
};

export default Style;
