import { useState } from "react";

function TaskForm({createTask}) {
  const [title, setTitle] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault()
    createTask(title)
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Write your task"
        type="text"
        name=""
        id=""
        onChange={(e) => {
          setTitle(e.target.value);
        }}
      />
      <button>Save</button>
    </form>
  );
}

export default TaskForm;
