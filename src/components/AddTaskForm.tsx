import { v4 as uuidv4 } from "uuid";
import { useState, useCallback, JSX } from "react";

import { useTasks } from "../TasksContext";
import { TasksContextType } from '../types';

function AddTaskForm(): JSX.Element {
  const { setTasks } = useTasks();
  const [taskText, setTaskText] = useState("");

  const addTask = useCallback(() => {
    const trimmedText = taskText.trim();
    if (!trimmedText) return;

    setTasks((prevTasks: TasksContextType[]) => [
      { id: uuidv4(), text: trimmedText, completed: false },
      ...prevTasks,
    ]);
    setTaskText("");
  }, [taskText, setTasks]);

  const handleInputChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setTaskText(e.target.value);
  }, []);

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === "Enter") {
        addTask();
      }
    },
    [addTask]
  );

  return (
    <div className="add-task-form">
      <input
        type="text"
        placeholder="Add a new task"
        value={taskText}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
        aria-label="Task input"
      />
      <button
        className="button"
        onClick={addTask}
        aria-label="Add task"
        disabled={!taskText.trim()}
      >
        Add
      </button>
    </div>
  );
}

export default AddTaskForm;
