import { Schema, model } from "mongoose";
import { Enum_EstadoUsuario, Enum_Rol } from "../enums/enums";

interface User {
    email: string,
    identificacion: string,
    nombre: string,
    apellido: string,
    rol: Enum_Rol,
    estado: Enum_EstadoUsuario
}
const userSchema = new Schema<User>({
    email: {
        type: String,
        required: true,
        unique: true,
        validate: {
            validator: (email) => {
                return /^(([^<>()\[\]\.,;:\s@\”]+(\.[^<>()\[\]\.,;:\s@\”]+)*)|(\”.+\”))@(([^<>()[\]\.,;:\s@\”]+\.)+[^<>()[\]\.,;:\s@\”]{2,})$/.test(email);
            // if(email.includes('@') && email.includes('.')){
            //     return true;
            // } else {
            //     return false;
            // }
        }, message: 'El formato de email es incorrecto',
    }, 
    },
identificacion: {
    type: String,
        required: true,
            unique: true
},
nombre: {
    type: String,
        required: true
},
apellido: {
    type: String,
        required: true
},
rol: {
    type: String,
        required: true,
        enum: Enum_Rol
},
estado: {
    type: String,
        enum: Enum_EstadoUsuario,
        default: Enum_EstadoUsuario.PENDIENTE
},
});

const UserModel = model('User', userSchema);

export { UserModel };