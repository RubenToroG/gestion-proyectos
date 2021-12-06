import { Schema, model } from 'mongoose';
import { Enum_FaseProyecto, Enum_EstadoProyecto } from './enums';
import { UserModel } from './user';

interface Proyecto {
    nombre: string,
    presupuesto: number,
    fechaInicio: Date,pro
    fechaFin: Date,
    estado: Enum_EstadoProyecto,
    fase: Enum_FaseProyecto,
    lider: Schema.Types.ObjectId
}

const projectSchema = new Schema< Proyecto >({
    nombre: {
        type:String,
        require: true,
    },
    presupuesto: {
        type: Number,
        require: true,
    },
    fechaInicio: {
        type: Date,
        require: true
    },
    fechaFin: {
        type: Date,
        require: true
    },
    estado: {
        type: String,
        enum: Enum_EstadoProyecto,
        default: Enum_EstadoProyecto.INACTIVO
    },
    fase: {
        type: String,
        enum: Enum_FaseProyecto,
        default: Enum_FaseProyecto.NULO
    },
    lider: {
        type: Schema.Types.ObjectId,
        require: true,
        ref: UserModel      //referencia fuerte
    }
})

const ProjectModel = model('Proyecto', projectSchema); //tercer parametro es nombre en colección BD

export { ProjectModel }