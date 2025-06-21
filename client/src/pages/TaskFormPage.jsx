import {useForm} from "react-hook-form";
import { useTasks } from "../context/tasksContext";
import "./stylePage/TaskFormPage.css";
import { useNavigate, useParams } from 'react-router-dom'
import { useEffect } from "react";


function TaskFormPage() {

  const {register, handleSubmit} = useForm();
  const {createTask, getTask} = useTasks()
  const navegate = useNavigate()
  const params = useParams();

  useEffect(() => {
    if (params.id) {
      getTask(params.id);
    }
  }, []);
    
  
  const onSubmit= handleSubmit((data)=>{
    createTask(data);
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