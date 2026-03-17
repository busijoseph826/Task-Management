import { useState } from "react";
import { createTask } from "../services/taskService";

function TaskForm({ onTaskCreated }) {

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [priority, setPriority] = useState("MEDIUM");

    const handleSubmit = async (e) => {
        e.preventDefault();

        const task = {
            title,
            description,
            priority
        };

        await createTask(task);

        setTitle("");
        setDescription("");
        setPriority("MEDIUM");

        onTaskCreated(); // refresh list
    };

    return (
        <div>

            <h2>Create Task</h2>

            <form onSubmit={handleSubmit}>

                <input
                    type="text"
                    placeholder="Task Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                />

                <br /><br />

                <input
                    type="text"
                    placeholder="Task Description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    required
                />

                <br /><br />

                {/* 🔥 NEW: Priority Dropdown */}
                <select
                    value={priority}
                    onChange={(e) => setPriority(e.target.value)}
                >
                    <option value="LOW">LOW</option>
                    <option value="MEDIUM">MEDIUM</option>
                    <option value="HIGH">HIGH</option>
                </select>

                <br /><br />

                <button type="submit">Add Task</button>

            </form>

        </div>
    );
}

export default TaskForm;