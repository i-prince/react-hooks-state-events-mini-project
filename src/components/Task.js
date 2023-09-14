import React from "react";

function Task({ task, deleteTask }) {
  const { text, category, id } = task;

  const handleDelete = () => {
    // Call the deleteTask function with the task's ID
    deleteTask(id);
  };

  return (
    <div className="task">
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button className="delete" onClick={handleDelete}>
        X
      </button>
    </div>
  );
}

export default Task;

