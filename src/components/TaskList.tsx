import { JSX } from 'react';

import { useTasks } from '../TasksContext';
import TaskItem from './TaskItem';
import { TasksContextType } from '../types';


function TaskList(): JSX.Element {
  const { tasks, setTasks } = useTasks();

  const deleteTask = (id: string) => {
    setTasks(tasks.filter((task: { id: string; }) => task.id !== id));
  };

  const toggleTaskCompletion = (id: string) => {
    setTasks(
      tasks.map((task: TasksContextType) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return tasks.length > 0 ? (
    <ul className="task-list">
      {tasks.map(( task: TasksContextType) => (
        <TaskItem
          key={task.id}
          task={task}
          handleCheck={toggleTaskCompletion}
          handleDelete={deleteTask}
        /> 
      ))}
    </ul>
  ) : <p>No tasks to display</p>;
};

export { TaskList };
