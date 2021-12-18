import { resolversProyecto } from "../models/proyecto/resolvers";
import { resolversUsuario } from "../models/usuario/resolvers";
import { resolversAvances } from "../models/avance/resolvers";
import { resolversInscripcion } from "../models/inscripcion/resolvers";

export const resolvers = [
    resolversProyecto, 
    resolversUsuario, 
    resolversAvances,
    resolversInscripcion,
]