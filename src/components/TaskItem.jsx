function TaskItem({ task, handleCheck, handleDelete }) {
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
};

export default TaskItem;