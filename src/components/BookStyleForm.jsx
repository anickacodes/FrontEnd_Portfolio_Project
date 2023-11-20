import { useState } from "react";
import "../styles/BookStyleForm.css";
import { Link } from "react-router-dom";

const AddStyleForm = () => {
  const [form, setForm] = useState({
    name: "",
    image_url: "",
    service: "",
    date: "",
    duration: "00:00:00",
    description: "",
    agreement: "",
  });
  const API = import.meta.env.VITE_API_PORT;
  const [description, setDescription] = useState("");
  const [radioButton, setRadioButton] = useState("");

  function handleInputs(event) {
    const value = event.target.value;
    const id = event.target.id;
    setForm({ ...form, [id]: value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const res = await fetch(`${API}/styles`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        console.log("Request Succesfully sent!");
        alert(
          "Thank You; Request Succesfully sent! You will be contacted within 24hours."
        );
      } else {
        console.error(`Error sending form data`);
      }
    } catch (err) {
      console.error("ERROR", err);
    }
  }
  return (
    <>
      <div>
        <h3> Appointment Request Form </h3>
        <form className="book-form" onSubmit={handleSubmit}>
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

          <label htmlFor="service"> Service: </label>
          <input
            type="text"
            id="service"
            onChange={(se) => handleInputs(se)}
            value={form.service}
            placeholder="service: "
          />

          <label htmlFor="duration"> duration: </label>
          <input
            type="time"
            id="duration"
            onChange={(se) => handleInputs(se)}
            value={form.duration}
            placeholder="duration: "
          />

          <label htmlFor="date"> Date: </label>
          <input
          id="date"
            type="date"
            onChange={(se) => handleInputs(se)}
            value={form.date}
            placeholder=""
          />
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
          <input type="submit" value="submit" />
        </form>
      </div>
    </>
  );
};

export default AddStyleForm;
