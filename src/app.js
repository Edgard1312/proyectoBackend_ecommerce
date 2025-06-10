import express from 'express';
import morgan from 'morgan';
import cookieParser from 'cookie-parser';
import authRoutes from "./routes/auth.routes.js";
import tasksRoutes from "./routes/tasks.routes.js";
import cors from 'cors';

const app= express();


app.use(cors({
    origin: 'http://localhost:5173'
}));  //módulo para conectar el back con el front
app.use(morgan('dev')); //muestra peticiones por consola
app.use(express.json()); //convierte los datos en Json por express
app.use(cookieParser());

app.use("/api", authRoutes);
app.use("/api", tasksRoutes);

export default app;

  
