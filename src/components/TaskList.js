import React from "react";
import Task from "./Task";

function TaskList({ tasks, deleteTask }) {
  return (
    <div className="tasks">
      {tasks.map((task) => (
        <Task
          key={task.id}
          task={task}
          // Pass the deleteTask function to Task
          deleteTask={deleteTask}
        />
      ))}
    </div>
  );
}

export default TaskList;

