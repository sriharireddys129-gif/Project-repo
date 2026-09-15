import { useState } from "react";
import { createTask } from "../api/taskApi";

export default function AddTask({ onTaskAdded }) {
  const [title, setTitle] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!title.trim()) return;

    try {
      const newTask = await createTask(title.trim());
      onTaskAdded(newTask);
      setTitle("");
    } catch (err) {
      console.error("Error adding task:", err);
    }
  };

  return (
    <form className="add-task-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter a new task..."
        value={title}
        onChange={(event) => setTitle(event.target.value)}
        aria-label="New task title"
      />
      <button type="submit">Add task</button>
    </form>
  );
}