import { useEffect, useState } from "react";
import { getTasks, deleteTask, updateTask } from "../services/taskService";

function TaskList({ refresh }) {

    const [tasks, setTasks] = useState([]);

    const loadTasks = async () => {
        const data = await getTasks();
        setTasks(data);
    };

    useEffect(() => {
        loadTasks();
    }, [refresh]);

    const handleDelete = async (id) => {
        await deleteTask(id);
        loadTasks();
    };

    const handleStatusChange = async (task, newStatus) => {

        const updatedTask = {
            ...task,
            status: newStatus
        };

        await updateTask(task.id, updatedTask);
        loadTasks();
    };

    return (
        <div>
            <h2>Task List</h2>

            <table border="1">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Title</th>
                        <th>Description</th>
                        <th>Status</th>
                        <th>Action</th>
                    </tr>
                </thead>

                <tbody>
                    {tasks.map(task => (
                        <tr key={task.id}>
                            <td>{task.id}</td>
                            <td>{task.title}</td>
                            <td>{task.description}</td>

                            {/* 🔥 UPDATED STATUS */}
                            <td>
                                <select
                                    value={task.status}
                                    onChange={(e) => handleStatusChange(task, e.target.value)}
                                >
                                    <option value="OPEN">OPEN</option>
                                    <option value="IN_PROGRESS">IN_PROGRESS</option>
                                    <option value="DONE">DONE</option>
                                </select>
                            </td>

                            <td>
                                <button onClick={() => handleDelete(task.id)}>
                                    Delete
                                </button>
                            </td>
                            
                        </tr>
                    ))}
                </tbody>

            </table>
        </div>
    );
}

export default TaskList;