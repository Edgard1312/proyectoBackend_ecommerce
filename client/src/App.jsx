import React from 'react';
import{ BrowserRouter, Routes,  Route} from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import {TaskProvider} from "./context/tasksContext"

import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';
import ProfilePage from './pages/ProfilePage';
import TasksPage from './pages/TasksPage';
import TaskFormPage from './pages/TaskFormPage';
import ProtectedRoute from './ProtectedRoute';
import NavBar from './components/NavBar';
import Footer from './components/Footer';

import './App.css'




function App() {
  return (
    <AuthProvider>
      <TaskProvider>
        <BrowserRouter>
          <NavBar/>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />

            <Route element={<ProtectedRoute />}>
              <Route path="/tasks" element={<TasksPage />} />
              <Route path="/add-task" element={<TaskFormPage />} />
              <Route path="/tasks/:id" element={<TaskFormPage />} />
              <Route path="/profile" element={<ProfilePage />} />
            </Route>
          </Routes>
          <Footer/>
        </BrowserRouter>
      </TaskProvider>
    </AuthProvider>
  );
}

export default App;

