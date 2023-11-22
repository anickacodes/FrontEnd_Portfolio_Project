import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

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
      <form onSubmit={handleSubmit}>
        <label>
          Category:
          <input
            type="text"
            name="category"
            value={editStyle.category}
            onChange={handleInputChange}
          />
        </label>
        <br />
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
          Description:
          <textarea
            name="description"
            value={editStyle.description}
            onChange={handleInputChange}
          />
        </label>
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
        <button type="submit">Save Changes</button>
      </form>
    </div>
  );
};

export default EditStyle;
