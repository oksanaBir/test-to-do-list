import { TasksProvider } from "./TasksContext";
import AddTaskForm from "./components/AddTaskForm";
import { TaskList } from "./components/TaskList";
import { JSX } from 'react';

function App(): JSX.Element  {
  return (
    <TasksProvider>
      <div className="container">
        <h1>TODO List</h1>
        <AddTaskForm />
        <TaskList />
      </div>
    </TasksProvider>
  );
};

export { App };
