import "./App.css";
import { useState } from "react";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";

function App() {

  const [refresh, setRefresh] = useState(false);

  const reloadTasks = () => {
    setRefresh(!refresh);
  };

  return (
    <div className="container">
      <h1>Task Management App</h1>

      <TaskForm onTaskCreated={reloadTasks} />
      <TaskList refresh={refresh} />

    </div>
  );
}

export default App;