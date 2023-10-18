import { tasks as data } from "./data/tasks";
import {useState, useEffect} from 'react'
import TaskList from './components/TaskList'
import TaskForm from './components/TaskForm'

function App() {

  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    setTasks(data)
  }, [])

  const createTask = (task) => {
    setTasks([...tasks, {
      title: task.title,
      id: tasks.length,
      description: task.description,
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