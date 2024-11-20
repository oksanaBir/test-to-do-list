import { v4 as uuidv4 } from "uuid";
import { useState } from "react";

import { useTasks } from "../TasksContext";

function AddTaskForm() {
  const { tasks, setTasks } = useTasks();
  const [taskText, setTaskText] = useState("");

  const addTask = (text) => {
    if (text.trim()) {
      setTasks([{ id: uuidv4(), text, completed: false }, ...tasks]);
      setTaskText("");
    }
  };

  return (
    <div className="add-task-form">
      <input
        type="text"
        placeholder="Add a new task"
        value={taskText}
        onChange={(e) => setTaskText(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            addTask(taskText);
          }
        }}
      /> 
      <button className="button" onClick={() => addTask(taskText)}>Add</button>
    </div>
  )
};

export default AddTaskForm;

