import { AdvancementModel } from "./avance"

const resolversAvances = {
    Query:{
        Avances: async(parents,args)=>{
            const avances = await AdvancementModel.find()
            return avances
        }
    },
    Mutation:{
        crearAvance: async(parent, args) => {
            const avanceCreado = AdvancementModel.create({
                fecha: args.fecha,
                descripcion: args.descripcion,
                proyecto: args.proyecto,
                creadoPor: args.creadoPor,
            })
            return avanceCreado
        }
    }
}

export { resolversAvances }