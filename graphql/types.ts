import { gql } from "apollo-server-express";

const typeDefs = gql`
type usuario {
    nombre: String!
}
type Query {
    usuario: [usuario]
}
`;

export { typeDefs };