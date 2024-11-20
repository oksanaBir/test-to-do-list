import { TasksProvider } from "./TasksContext";
import AddTaskForm from "./components/AddTaskForm";
import TaskList from "./components/TaskList";

function App() {
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

export default App;
