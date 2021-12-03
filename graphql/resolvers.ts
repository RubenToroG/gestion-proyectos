const resolvers = {
    Query: {
        usuario: async (parent, args) => {
            const usuarios = [
                {
                    nombre: 'juan',
                },
                {
                    nombre: 'andres',
                },
                {
                    nombre: 'manuel',
                },
            ]
            return usuarios;
        }
    }
}
export { resolvers };