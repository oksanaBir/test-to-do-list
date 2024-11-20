import { useTasks } from '../TasksContext';

import TaskItem from './TaskItem';

function TaskList() {
  const { tasks, setTasks } = useTasks();

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const toggleTaskCompletion = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return tasks.length > 0 ? (
    <ul className="task-list">
      {tasks.map(el => (
        <TaskItem
          key={el.id}
          task={el}
          handleCheck={toggleTaskCompletion}
          handleDelete={deleteTask}
        /> 
      ))}
    </ul>
  ) : <p>No tasks to display</p>;
};

export default TaskList;