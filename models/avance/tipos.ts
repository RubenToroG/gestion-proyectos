import { gql } from "apollo-server-express";

const tiposAvance = gql`

type Avance{
fecha: Date!
descripcion: String!
observaciones: String
proyecto: Proyecto!
creadoPor: Usuario!
}

type Query {
Avance: [Avance]
}

type Mutation{

crearAvance(
    fecha: Date!
    descripcion: String!
    observaciones: String
    proyecto: Proyecto!
    creadoPor: Usuario!
):Proyecto
}
`;

export { tiposAvance };


