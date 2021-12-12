import { Schema, model } from 'mongoose';
import { ProjectModel } from '../proyecto/proyecto';
import { UserModel } from '../usuario/usuario';

interface Avance {
    fecha: Date;
    description: string;
    observaciones: [string];
    proyecto: Schema.Types.ObjectId;
    creadoPor: Schema.Types.ObjectId;
}

const advancementSchema = new Schema<Avance>({
    fecha: {
        type: Date,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    observaciones: [
        {
            type: String,
        }
    ],
    proyecto: {
        type: Schema.Types.ObjectId,
        ref: ProjectModel,
        required: true
    },
    creadoPor: {
        type: Schema.Types.ObjectId,
        ref: UserModel,
        required: true,
    }
})

const AdvancementModel = model('Avance', advancementSchema);

export { AdvancementModel };