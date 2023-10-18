import { tasks as data } from "./tasks";
import {useState, useEffect} from 'react'
import TaskList from './TaskList'
import TaskForm from './TaskForm'

function App() {

  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    setTasks(data)
  }, [])

  const createTask = (taskTitle) => {
    setTasks([...tasks, {
      title: taskTitle,
      id: tasks.length,
      description: 'New task',
    }])
  }

  return (
    <>
      <TaskForm createTask={createTask}/>
      <TaskList tasks={tasks} />
    </>
  )
}

export default App