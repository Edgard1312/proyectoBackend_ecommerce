import React from 'react'
import { useTasks } from '../context/tasksContext';
import { useEffect } from 'react';
import TaskCard from '../components/TaskCard'

function  TasksPage() {

  const { getTasks, tasks } = useTasks(); 
 useEffect(()=>{
  getTasks();
 },[]);

 if (tasks.length === 0) return (<h1> No hay tareas </h1>)

 
  return (
    
    // aplicar acá estilo para separar tarjetas
    <div>
      {
        tasks.map(task =>(
        <TaskCard  task={task} key={task._id}/>
        ))
      }
    </div>
  )
}

export default TasksPage;