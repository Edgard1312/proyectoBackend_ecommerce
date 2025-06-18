import {useForm} from "react-hook-form";
import "./stylePage/TaskFormPage.css";
function TaskFormPage() {

  const {register, handleSubmit} = useForm();
  const onSubmit= handleSubmit((data)=>{
    console.log(data);
  })

  return (
    <div className="task-form">
      
      <form className="task-form-conteiner" onSubmit={onSubmit}>
        <h1>Profuctos</h1>
        <input type="text" placeholder="Título" {...register("titulo")} autoFocus/>

        <textarea rows="3" placeholder="Descripción" {...register("description")}></textarea>

        <button>Guardar</button>
      </form>
    </div>
  )
}

export default TaskFormPage