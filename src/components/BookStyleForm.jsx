import { useState } from "react";
import "../styles/BookStyleForm.css";

const AddStyleForm = () => {
  const [form, setForm] = useState({
    name: "",
    image_url: "",
    date: "",
    description: "",
  });

  const [description, setDescription] = useState("");
  const [radioButton, setRadioButton] = useState("");

  function handleInputs(event) {
    const value = event.target.value;
    const id = event.target.id;
    setForm({ ...form, [id]: value });
  }

  return (
    <>
      <br />
      <br />
      <h2>
        {" "}
        Page In Progress: <br /> Please Excuse Our Appearance
      </h2>
      <form className="book-form">
        <label htmlFor="name">
          <input
            type="text"
            id="name"
            onChange={(se) => handleInputs(se)}
            value={form.name}
            placeholder="Name: "
          />
        </label>
        <label htmlFor="image">
          <input
            type="url"
            id="url"
            onChange={(se) => handleInputs(se)}
            value={form.image_url}
            placeholder="add image"
          />
        </label>
        <label htmlFor="date">
          <input
            type="date"
            onChange={(se) => handleInputs(se)}
            value={form.date}
            placeholder=""
          />
        </label>
        <label>
          <input type="text" />
        </label>
        <label>
          <input type="text" />
        </label>
        <label htmlFor="description">
          <textarea
            rows={"3"}
            cols={"50"}
            value={description}
            onChange={(e) => {
              setDescription(e.target.value);
            }}
            placeholder="Questions, Comments and/or Concerns"
          ></textarea>
        </label>
        <div className="t-and-c">
          <label
            htmlFor="check"
            className="bookStyleForm_radio"
            onChange={(e) => {
              setRadioButton(e.target.value);
            }}
          >
            <br />
            <span>
              {" "}
              All information on this form is filled out correctly, to the best
              of my knowledge. By choosing 'Agree', I have read, understand and
              agree to the Terms & Conditions.
            </span>
            <br />

            <input type="radio" name="check" value="agree" />
            <span>Thank you, I Agree</span>
            <br />

            <input type="radio" name="size" value="disagree" />
            <span>Thank you, I Disagree</span>
          </label>
        </div>
      </form>
    </>
  );
};

export default AddStyleForm;
