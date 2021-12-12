import { Schema, model } from "mongoose";
import { Enum_TipoObjetivo } from "../enums/enums";
import { ProjectModel } from "../proyecto/proyecto";

interface Objective {
    descripcion: string,
    tipo: Enum_TipoObjetivo,
    proyecto: Schema.Types.ObjectId
}

const objetiveSchema = new Schema<Objective>({
    descripcion: {
        type: String,
        required: true,
    },
    tipo: {
        type: String,
        enum: Enum_TipoObjetivo,
        required: true
    },
    proyecto: {
        type: Schema.Types.ObjectId,
        ref: ProjectModel
    }
})

const ObjectiveModel = model('Objective', objetiveSchema);

export { ObjectiveModel };
