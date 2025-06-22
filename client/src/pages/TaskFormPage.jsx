import {useForm} from "react-hook-form";
import { useTasks } from "../context/tasksContext";
import "./stylePage/TaskFormPage.css";
import { useNavigate, useParams } from 'react-router-dom'
import { useEffect } from "react";


function TaskFormPage() {

  const {register, handleSubmit, setValue} = useForm();
  const {createTask, getTask, updateTask} = useTasks()
  const navegate = useNavigate()
  const params = useParams();

  useEffect(() => {
    async function loadTask() {
      if (params.id) {
      const task = await getTask(params.id);
      console.log(task)
      setValue('title', task.title)
      setValue('description', task.description)
    } 
  }
  loadTask()
  }, []);
   
    
    
  const onSubmit= handleSubmit((data)=>{
    if (params.id) {
      updateTask(params.id, data)
    } else {
      createTask(data);
    }
    navegate("/tasks");
  })

  return (
    <div className="task-form">
      
      <form className="task-form-conteiner" onSubmit={onSubmit}>
        <h1>Productos</h1>
        <input type="text" placeholder="Título" {...register("title")} autoFocus/>

        <textarea rows="3" placeholder="Descripción" {...register("description")}></textarea>

        <button>Guardar</button>
      </form>
    </div>
  )
}

export default TaskFormPage