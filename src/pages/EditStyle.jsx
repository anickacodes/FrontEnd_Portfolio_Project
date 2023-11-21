import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const EditStyle = ({ location }) => {
  console.log("Location object:", useLocation());
  const {
    state: { style },
  } = useLocation();

  console.log("Style object in EditStyle:", style);
  const [editStyle, setEditStyle] = useState({
    category: "",
    service: "",
    description: "",
    duration: "",
    price: "",
    image_url: "",
  });
  console.log(style);

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

  const handleSubmit = (se) => {
    se.preventDefault();
    console.log("Updated Style:", editStyle);
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

        <button type="submit">Save Changes</button>
      </form>
    </div>
  );
};

export default EditStyle;
