import { useState } from "react";
import "../styles/BookStyleForm.css";
import { Link } from "react-router-dom";

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
  function handleSubmit(e) {
    e.preventDefault();
  }
  return (
    <>
      <div>
        <h3> Appointment Request Form </h3>
        <form className="book-form">
          <label htmlFor="name"> Name: </label>
            <input
              type="text"
              id="name"
              onChange={(se) => handleInputs(se)}
              value={form.name}
              placeholder="Name: "
            />
         
          <label htmlFor="image"> Image: </label>
            <input
              type="url"
              id="image_url"
              onChange={(se) => handleInputs(se)}
              value={form.image_url}
              placeholder="add image"
            />
          
          <label htmlFor="date"> Date: </label>
            <input
              type="date"
              onChange={(se) => handleInputs(se)}
              value={form.date}
              placeholder=""
            />
          
          <label>
            <input type="text" />
          </label>
          <label>
            <input type="text" />
          </label>
          <label htmlFor="description"> Q/C/C: </label>
            <textarea
              rows={"3"}
              cols={"50"}
              value={description}
              onChange={(e) => {
                setDescription(e.target.value);
              }}
              placeholder="Questions, Comments and/or Concerns"
            ></textarea>
          
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
                All information on this form is filled out correctly, to the
                best of my knowledge. By choosing 'Agree', I have read,
                understand and agree to the{" "}
                <Link href="/terms">Terms & Conditions</Link>.
              </span>
              <br />

              <input type="radio" name="agree-disagree" value="agree" />
              <span>Thank you, I Agree</span>
              <br />

              <input type="radio" name="agree-disagree" value="disagree" />
              <span>Thank you, I Disagree</span>
            </label>{" "}
            <br />
          </div>
          <input type="submit" />
        </form>
      </div>
    </>
  );
};

export default AddStyleForm;
