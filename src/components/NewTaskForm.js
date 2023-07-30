import React,{useState} from "react";

function NewTaskForm({ categories, onTaskFormSubmit }) {
  const [text, setText] = useState("");
  const [category, setCategory] = useState("All");

  const handleTextChange = (event) => {
    setText(event.target.value);
  };

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Create a new task object with the form data
    const newTask = {
      text: text,
      category: category,
    };

    // Call the onTaskFormSubmit callback with the new task data
    onTaskFormSubmit(newTask);

    // Clear the form fields after submission
    setText("");
    setCategory("All");
  };


  return (
    <form onSubmit={handleSubmit}>
      <label>
        Details:
        <input
          aria-label="Details"
          type="text"
          value={text}
          onChange={handleTextChange}
        />
      </label>
      <label>
        Category:
        <select aria-label="Category" value={category} onChange={handleCategoryChange}>
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </label>
      <button type="submit">Add task</button>
    </form>
  );
}

export default NewTaskForm;
