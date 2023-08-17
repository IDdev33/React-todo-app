import { useState } from 'react';
import './App.css';
import {Task} from "./Task"


function App() {
  
  //States
 const [todoList, setTodoList] = useState([]);
 const [completedTasks, setCompletedTasks] = useState([]);
 const [newTask, setNewTask] = useState("");
 const handleChange = (event) =>{
  setNewTask(event.target.value)
 }
 
 const addTask = () =>{
  const task = {
    id: todoList.length === 0 ? 1: todoList[todoList.length -1].id + 1,
    taskName: newTask,
  }
  setTodoList([...todoList, task])
 }
 const deleteTask = (id) =>{
  setTodoList(todoList.filter((task) => task.id !== id))
 }
 
 const completeTask = (id) =>{
  const taskToComplete = todoList.find((task) =>task.id === id);
  const currentTime = new Date();
  taskToComplete.completedTime = currentTime.toLocaleString();
  setCompletedTasks([...completedTasks, taskToComplete])
  deleteTask(id)
 }
    return (
      
      
      <div className="App">
        
        
      <div className='addTask p-3 bg-secondary col-12 d-flex justify-content-center align-items-center'>
  <input onChange={handleChange} type='text' className='form-control w-25' />
  <button onClick={addTask} className='btn btn-info m-3'>Add Task</button>
</div>

{todoList.length === 0 && completedTasks.length > 0 && (
  <div className='alert alert-success'>
    You have completed all of your tasks today!
    </div>
)}

<div className='d-flex'>
  <div className='col-6'>
    <div className='task-list shadow-lg'>
      {todoList.map((task)=>(
        <Task
        taskName={task.taskName}
        id={task.id}
        key={task.id}
        deleteTask={deleteTask}
        completeTask={completeTask}
        />
      ))}
    </div>
  </div>
  <div className='col-6'>
          <div className='task-list shadow-lg'>
            {completedTasks.map((task) => (
              <div key={task.id}><h3>{task.taskName}</h3><i> Completed at {task.completedTime}</i><p className='text-success fw-bold'>Good Job!</p></div>
            ))}
          </div>
        </div>
</div>



      
     
      </div>
    ) 
  }
  
  


export default App;
