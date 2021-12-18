import { InscriptionModel } from "./inscripcion"

const resolversInscripcion = {
    Query:{
        Inscripciones: async(parents, args)=>{
            const inscripciones = await InscriptionModel.find().populate('estudiante').populate('proyecto')
            return inscripciones
        },
    },

    Mutation:{
        crearInscripcion: async (parent, args) => {
            const inscripcionCreada = await InscriptionModel.create({
                estado: args.estado,
                proyecto: args.proyecto,
                estudiante: args.estudiante,
            })
            return inscripcionCreada
        },
        cambioInscripcion: async (parent, args) => {
            const inscripcionAprobada = await InscriptionModel.findByIdAndUpdate(args._id, {
                estado: args.estado,
                fechaIngreso: new Date(Date.now())
            })
            return inscripcionAprobada
        }
    }
}

export { resolversInscripcion }