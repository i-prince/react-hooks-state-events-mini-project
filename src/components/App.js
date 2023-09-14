import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";

function App() {
  const [tasks, setTasks] = useState(TASKS);
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Function to handle category selection
  const selectCategory = (category) => {
    setSelectedCategory(category);
  };

  // Function to add a new task to the list
  const addTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  // Function to filter tasks based on the selected category
  const filteredTasks =
    selectedCategory === "All"
      ? tasks
      : tasks.filter((task) => task.category === selectedCategory);

  return (
    <div className="App">
      <h2>My tasks</h2>
      {/* Pass categories and selectCategory function to CategoryFilter */}
      <CategoryFilter
        categories={CATEGORIES}
        selectedCategory={selectedCategory}
        selectCategory={selectCategory}
      />
      <NewTaskForm categories={CATEGORIES} onTaskFormSubmit={addTask} />
      {/* Pass filteredTasks to TaskList */}
      <TaskList tasks={filteredTasks} />
    </div>
  );
}

export default App;
