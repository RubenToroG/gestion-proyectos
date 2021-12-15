import { AdvancementModel } from "./avance"

const resolversAvances = {
    Query:{
        Avances: async(parents, args)=>{
            const avances = await AdvancementModel.find().populate('proyecto').populate('creadoPor')
            return avances
        },
        filtrarAvance: async(parent, args) => {
            const avanceFiltrado = await AdvancementModel.find({ proyecto: args.idProyecto })
            .populate('proyecto')
            .populate('creadoPor');
            return avanceFiltrado;
        }
    },

    Mutation:{
        crearAvance: async (parent, args) => {
            const avanceCreado = await AdvancementModel.create({
                fecha: new Date(args.fecha),
                descripcion: args.descripcion,
                observaciones: args.observaciones,
                proyecto: args.proyecto,
                creadoPor: args.creadoPor,
            })
            return avanceCreado
        },
    }
}

export { resolversAvances }