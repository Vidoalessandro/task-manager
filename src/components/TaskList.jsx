import TaskCard from './TaskCard'

function TaskList({tasks}) {

  if (tasks.length === 0) {
    return <h1>There isnt tasks yet</h1>
  }

  return (
    <div>
      {tasks.map((task) => (
        <TaskCard task={task} key={task.id}/>
      ))}
    </div>
  );
}

export default TaskList;
