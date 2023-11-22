import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "../styles/EditStyle.css";

const EditStyle = () => {
  const {
    state: { style },
  } = useLocation();
  const navigate = useNavigate();
  const API = import.meta.env.VITE_API_PORT;

  const [editStyle, setEditStyle] = useState({
    category: "",
    service: "",
    description: "",
    duration: "",
    price: "",
    image_url: "",
  });

  useEffect(() => {
    if (style) {
      setEditStyle(style);
    }
  }, [style]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditStyle((prevStyle) => ({
      ...prevStyle,
      [name]: value,
    }));
  };

  const handleSubmit = async (se) => {
    se.preventDefault();
    try {
      const res = await fetch(`${API}/styles/${style.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(editStyle),
      });
      const updatedStyle = await res.json();
      navigate(`/styles/${style.id}`);
    } catch (err) {
      console.error("Error Updating Style", err);
    }
  };

  return (
    <div className="edit_style">
      <h3>Edit Page</h3>
      <img src={editStyle.image_url} alt="style image" />
      <form onSubmit={handleSubmit}>
        <label>
          Category:
          <select
            value={editStyle.category}
            onChange={handleInputChange}
            name="category"
          >
            <option value="default"></option>
            <option value="Crochet">Crochet</option>
            <option value="Natural">Natural</option>
            <option value="Knotless">Knotless</option>
            <option value="Traditional">Traditional</option>
          </select>
        </label>
        <br />
        <label>
          Image:
          <input
            type='url'
            name="image_url"
            value={editStyle.image_url}
            onChange={handleInputChange}
          />
        </label>
        <br/>
        <label>
          Service:
          <input
            type="text"
            name="service"
            value={editStyle.service}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Price:
          <input
            id="price"
            type="text"
            max={5}
            name="price"
            value={editStyle.price}
            onChange={handleInputChange}
          />
        </label>{" "}
        <br />
        <label>
          Alotted Time:
          <input
            id="duration"
            type=""
            name="duration"
            value={editStyle.duration}
            onChange={handleInputChange}
          />
        </label>{" "}
        <br />
        <label>
          Description:
          <textarea
            name="description"
            value={editStyle.description}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <Link to={"/styles"}>
          <button>Back</button>{" "}
        </Link>
        <button type="submit">Save Changes</button>
      </form>
    </div>
  );
};

export default EditStyle;
