import React, { useState } from "react";

function NewTaskForm({ categories, onTaskFormSubmit }) {
  const [formData, setFormData] = useState({
    text: "",
    category: categories[0], // Initialize category to the first category in the list
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Call the onTaskFormSubmit callback prop to add a new task
    onTaskFormSubmit(formData);
    // Clear the form fields
    setFormData({
      text: "",
      category: categories[0],
    });
  };

  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input
          type="text"
          name="text"
          value={formData.text}
          onChange={handleChange}
        />
      </label>
      <label>
        Category
        <select name="category" value={formData.category} onChange={handleChange}>
          {categories.map((category) => (
            // Exclude "All" category from options
            category !== "All" && (
              <option key={category} value={category}>
                {category}
              </option>
            )
          ))}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
