import { gql } from "apollo-server-express";
import { tiposProyecto } from "../models/proyecto/tipos";
import { tiposUsuario } from "../models/usuario/tipos";
import { tiposEnums } from "../models/enums/types";
import { tiposAvance } from "../models/avance/tipos";
import { tiposInscripcion } from "../models/inscripcion/tipos";

const tiposGlobales = gql`
    scalar Date
`;

export const tipos = [
    tiposEnums, 
    tiposGlobales, 
    tiposProyecto, 
    tiposUsuario, 
    tiposAvance,
    tiposInscripcion,
]