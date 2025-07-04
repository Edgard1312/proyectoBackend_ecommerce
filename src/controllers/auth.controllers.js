import User from '../models/user.model.js'
import bcrypt from 'bcryptjs'
import {createAccessToken} from '../libs/jwt.js';
import jwt from 'jsonwebtoken';
import { TOKEN_SECRET } from '../config.js';


export const register = async (req, res) => {
  const {email, password, username} = req.body

  try {
    const userFound = await User.findOne({email});
    if (userFound) 
      return res.status(400).json(["El usuario ya existe" ]);

    const passwordHash = await bcrypt.hash(password, 10);

    const newUser = new User({
      //esto creo un nuevo objeto que voy a poder modificar luego
      username,
      email,
      password: passwordHash,
    });

    const userSaved = await newUser.save(); //guarda un nuevo usuario en formato json

    const token = await createAccessToken({ id: userSaved._id });
    res.cookie("token", token);
    res.json({
      id: userSaved._id,
      username: userSaved.username,
      email: userSaved.email,
      createdAt: userSaved.createdAt,
      updatedAt: userSaved.updatedAt,
    });
  } catch (error) {
    res.status(500).json({message: error.message});
  }
}


export const login = async (req, res) => {
  const {email, password} = req.body

  try {
    const userFound = await User.findOne({ email });
    if (!userFound) return res.status(400).json({ message: "usuario no reconocido  gil xd"})
      

    const isMatch = await bcrypt.compare(password, userFound.password);
    if (!isMatch) return res.status(400).json({ message: "contraseña incorrecta xdxdxd" });
    //si el usuario existe y la contraseña es correcta, se crea un token 
    
    const token = await createAccessToken({ id: userFound._id });
    res.cookie("token", token);

    res.json({
      id: userFound._id,
      username: userFound.username,
      email: userFound.email,
      createdAt: userFound.createdAt,
      updatedAt: userFound.updatedAt,
    });
  } catch (error) {
    res.status(500).json({message: error.message});
  }
}

export const logout = (req, res) => {             // esto es para cerrar sesion
  res.cookie("token", "", {
    expires: new Date(0),
});
return res.sendStatus(200);
};

export const profile = async (req, res) =>{
  const userFound = await User.findById(req.user.id)
  if (!userFound) return res.status(404).json({ message: "Usuario no encontrado xd"})
  return res.json({
    id : userFound._id,
    username: userFound.username,
    email: userFound.email,
    createdAt: userFound.createdAt,
    updatedAt: userFound.updatedAt,
  })
  
}

export const verifyToken = async (req, res) => {
  const { token } = req.cookies;
  if (!token) return res.status(401).json({ message: "No token, authorization denied" });

  jwt.verify(token, TOKEN_SECRET, async (err, user) => {
    if (err) return res.status(401).json({ message: "No autorizado" });

    const userFound = await User.findById(user.id);
    if (!userFound) return res.status(401).json({ message: "No autorizado" });

    return res.json ({
      id: userFound._id,
      username: userFound.username,
      email: userFound.email,
    });
  });
};