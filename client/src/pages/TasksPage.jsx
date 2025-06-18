import React from 'react'
import { useAuth } from '../context/authContext';

function  TasksPage() {

  const { user } = useAuth(); 

  return (
    <div>TasksPage</div>
  )
}

export default TasksPage