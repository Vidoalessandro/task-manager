import { useState, useContext } from "react";
import { TaskContext } from "../context/TaskContext";

function TaskForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const { createTask } = useContext(TaskContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    createTask({
      title,
      description,
    });

    setTitle("");
    setDescription("");
  };

  return (
    <form onSubmit={handleSubmit} className="bg-slate-800 p-10 mb-4">
      <div className="max-w-md mx-auto">
        <h1 className="text-white text-2xl font-bold mb-3">Create your task</h1>
        <input
          className="bg-slate-300 p-3 w-full mb-2"
          placeholder="Write your task"
          type="text"
          name=""
          id=""
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          value={title}
          autoFocus
        />
        <textarea
          className="bg-slate-300 p-3 w-full mb-2 h-12"
          placeholder="Write the task description"
          name=""
          id=""
          cols="30"
          rows="10"
          onChange={(e) => {
            setDescription(e.target.value);
          }}
          value={description}
        ></textarea>
        <button className="bg-indigo-500 px-3 py-1 text-white rounded-md">
          Save
        </button>
      </div>
    </form>
  );
}

export default TaskForm;
