import React from 'react'
import { useTasks } from '../context/tasksContext';
import { Link } from 'react-router-dom';


function TaskCard({task}) {
    const {deleteTask} = useTasks();
  return (
    <div>
      <h1>{task.title}</h1>
      <p>{task.description}</p>
      <div>
        <button onClick={() =>{deleteTask(task._id);
        }}>Borrar</button>
        <Link to={`/tasks/${task._id}`}>Editar</Link>
      </div>
    </div>
  );
}

export default TaskCard