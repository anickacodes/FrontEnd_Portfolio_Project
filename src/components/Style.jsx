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
  const [value, setValue] = useState("");

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
        console.log(localData)
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

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <div className="each_style">
      <div>
        <label>
          Style: {style.service}
          <select value={value} onChange={handleChange}>
            <option value="default"></option>
            <option value={style.service}></option>
            <option value="default"></option>
            <option value="default"></option>
            <option value="default"></option>
          </select>
        </label>
        {value}
      </div>

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
          <div className="feature_buttons">
            <Link to={"/styles"}>
              <button className="style_buttons">Back</button>
            </Link>

            <button className="style_buttons" onClick={handleDelete}>Delete</button>
            <button className="style_buttons" onClick={handleEdit}>Edit</button>

            <Link to={`/styles/${id}/clients`} state={{ style }}>
              {" "}
              <button className="style_buttons">Client List</button>{" "}
            </Link>
          </div>
        </>
      )}
    </div>
  );
};

export default Style;
