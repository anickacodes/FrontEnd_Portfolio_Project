import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../styles/Style.css";

const Style = () => {
  const API = import.meta.env.VITE_API_PORT;
  const { id } = useParams();
  console.log(id);
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
  };

  return (
    <div className="each_style">
      <h3>Style: {id}</h3>

      {style && Object.keys(style).length > 0 && (
        <div>
          <span>Category: {style.category} </span>
          <span>Service: {style.service}</span>
          <span>
            {" "}
            Image: <img src={style.image_url} alt="image" />
          </span>
          <span> Description: {style.description}</span>
        </div>
      )}

      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default Style;
