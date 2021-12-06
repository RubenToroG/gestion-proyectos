import { gql } from "apollo-server-express";

const typeDefs = gql`

    scalar Date

    enum Enum_EstadoUsuario{
        PENDIENTE
        AUTORIZADO
        NO_AUTORIZADO
    }
    enum Enum_Rol{
        ESTUDIANTE
        LIDER
        ADMINISTRADOR
    }
    enum Enum_EstadoProyecto{
        ACTIVO
        INACTIVO
    }
    enum Enum_FaseProyecto{
        INICIADO
        DESARROLLO
        TERMINADO
        NULO
    }


type Usuario {
    _id: ID!
    nombre: String!
    apellido: String!
    identificacion: String!
    email: String!
    estado: Enum_EstadoUsuario
    rol: Enum_Rol!
}

type Proyecto{
    _id: ID!
    nombre: String!
    presupuesto: Float!
    fechaInicio: Date!
    fechaFin: Date!
    estado: Enum_EstadoProyecto!
    fase: Enum_FaseProyecto!
    lider: Usuario!
}

type Query {
    Usuarios: [Usuario]
    Usuario(_id:String!): Usuario
    Proyectos: [Proyecto]
}

type Mutation{
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


            crearProyecto(
                nombre: String!
                presupuesto: Float!
                fechaInicio: Date!
                fechaFin: Date!
                estado: Enum_EstadoProyecto!
                fase: Enum_FaseProyecto!
                lider: String!
            ):Proyecto

    }
`;

export { typeDefs };