import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({             //seria para cómo guardar datos
    username: {
        type: String,              //Tipo de texto
        required: true,            //obligatorio
        trim: true                 //sacar espacios si el usuario coloca espacios de más
    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true               //Para q sea unico
    },
    password: {
        type: String,
        required: true
    }
}, {
    timestamps: true
})

export default mongoose.model('User', userSchema) //comunicarse con la base de datos