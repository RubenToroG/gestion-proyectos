import { UserModel } from "../models/user";

const resolvers = {
    Query: {
        Usuarios: async (parent, args) => {
            const usuarios = await UserModel.find();
            return usuarios;
        },
        Usuario: async (parent, args) => {
            const usuario = await UserModel.findOne({_id: args._id});
            return usuario;
        }
    },
    Mutation: {
        crearUsuario: async (parent, args) => {
            const usuarioCreado = await UserModel.create({
                nombre: args.nombre,
                apellido: args.apellido,
                identificacion: args.identificacion,
                email: args.email,
                rol: args.rol,
            });
            if (Object.keys(args).includes("estado")) {
                usuarioCreado.estado = args.estado;
            }
            return usuarioCreado;
        },

        editarUsuario: async (parent, args) => {
            const usuarioEditado = await UserModel.findByIdAndUpdate(args._id, {
                nombre: args.nombre,
                apellido: args.apellido,
                identificacion: args.identificacion,
                email: args.email,
                rol: args.rol,
                estado: args.estado
            });
            return usuarioEditado;
        },

        eliminarUsuario: async (prent, args) => {
            if (Object.keys(args).includes('_id')) {
                const usuarioEliminado = await UserModel.findOneAndDelete({ _id: args._id });
                return usuarioEliminado;
            } else if (Object.keys(args).includes('email')) {
                const usuarioEliminado = await UserModel.findOneAndDelete({ email: args.email });
                return usuarioEliminado;
            }

        }
    },
};
export { resolvers };