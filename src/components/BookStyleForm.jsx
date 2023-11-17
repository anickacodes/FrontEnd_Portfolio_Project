import { useState } from "react";
import '../styles/BookStyleForm.css'



const AddStyleForm = () => {
  const [form, setForm] = useState({name: '', image_url: '', date: '', description: ''})
const [description, setDescription] = useState('')
  function handleInputs(event) {
    const value = event.target.value;
    const id = event.target.id;

    setForm({ ...form, [id]: value });
  }
  return (
    <form className="book-form">
      <label htmlFor="name">
        <input type="text" id='name' onChange={(se) => handleInputs(se)} value={form.name} placeholder="Name: " />
      </label> 
      <label htmlFor="image">
        <input type="url" id='url' onChange={(se) => handleInputs(se)} value={form.image_url} placeholder="add image"/>
      </label>
      <label htmlFor="date">
        <input type="date" onChange={(se) => handleInputs(se)} value={form.date} placeholder='' />
      </label>
      <label>
        <input type="text" />
      </label>
      <label>
        <input type="text" />
      </label>
   <textarea  rows={"2"}
          cols={"50"}
          value={description}
          onChange={(e) => {
            setDescription(e.target.value);
          }}
          placeholder="Description Box">

   </textarea>
    </form>
  );
};

export default AddStyleForm;
