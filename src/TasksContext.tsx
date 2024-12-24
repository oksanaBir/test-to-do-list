import { 
  ReactNode,
  FC,
  useState,
  useEffect,
  useContext,
  createContext
} from 'react';

const TasksContext = createContext<any>(null);

export const useTasks = () => useContext(TasksContext);

export const TasksProvider: FC<any> = ({ children }: { children: ReactNode }) => {
  // need for correct display of tasks after the update
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem("tasks");
    return savedTasks ? JSON.parse(savedTasks) : [];
  });

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  return (
    <TasksContext.Provider value={{ tasks, setTasks }}>
      {children}
    </TasksContext.Provider>
  );
};