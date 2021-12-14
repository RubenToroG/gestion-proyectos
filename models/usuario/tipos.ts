import { gql } from "apollo-server-express";

const tiposUsuario = gql`

    scalar Date

type Usuario {
    _id: ID!
    nombre: String!
    apellido: String!
    identificacion: String!
    email: String!
    estado: Enum_EstadoUsuario
    rol: Enum_Rol!
}

type Query {
    Usuarios: [Usuario]
    Usuario(_id:String!): Usuario
}

type Mutation {
crearUsuario(
    nombre: String!
    apellido: String!
    identificacion: String!
    email: String!
    estado: Enum_EstadoUsuario
    rol: Enum_Rol!
):Usuario

editarUsuario(
    _id:String!
    nombre: String!
    apellido: String!
    identificacion: String!
    email: String!
    estado: Enum_EstadoUsuario
    rol: Enum_Rol!
):Usuario

eliminarUsuario(
    _id:String,
    email: String
): Usuario

}
`;

export { tiposUsuario };