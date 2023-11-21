import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import "../styles/Style.css";
import localData from "../data/styles.json";

const Style = () => {
  const API = import.meta.env.VITE_API_PORT;
  const navigate = useNavigate();
  const { id } = useParams();
  const [style, setStyle] = useState({});
  const [fetchErr, setFetchErr] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await Promise.race([
          fetch(`${API}/styles/${id}`),
          new Promise((_, reject) =>
            setTimeout(() => reject(new Error("Timeout")), 12000)
          ),
        ]);
        const data = await response.json();
        setStyle(data);
      } catch (error) {
        console.error("Error fetching style data", error);
        setFetchErr(error.message);
        setStyle(localData.find((localStyle) => localStyle.id === id) || {});
        // console.log(localData)
      }
    };
    fetchData();
  }, [API, id]);

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

      {fetchErr ? (
        <p>Error fetching data: {fetchErr}</p>
      ) : (
        <>
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
          <div className="style_buttons">
            <Link to={"/styles"}>
              <button>Back</button>
            </Link>

            <button onClick={handleDelete}>Delete</button>
            <button onClick={handleEdit}>Edit</button>

            <Link to={`/styles/${id}/clients`} state={{style}}>
              {" "}
              <button>Client List</button>{" "}
            </Link>
          </div>
        </>
      )}
    </div>
  );
};

export default Style;
