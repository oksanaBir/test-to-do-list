import React from 'react';

import { TasksContextType } from '../types';

type TaskItemProps = {
  task: TasksContextType,
  handleCheck: (id: string) => void,
  handleDelete: (id: string) => void
}

const TaskItem = React.memo(({ task, handleCheck, handleDelete }: TaskItemProps) => {
  const { id, text, completed } = task;

  return (
    <li key={id} className="task-item">
      <label>
        <input type="checkbox" checked={completed} onChange={() => handleCheck(id)} />
        <span style={{ textDecoration: completed ? "line-through" : "none" }}>
          {text}
        </span>
      </label>
      <button className="button" onClick={() => handleDelete(id)}>Delete</button>
    </li>
  )
});

export default TaskItem;