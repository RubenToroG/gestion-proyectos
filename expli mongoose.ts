import conectarDB from "./db/db";
import { UserModel } from "./models/user";
import { Enum_EstadoProyecto, Enum_EstadoUsuario, Enum_Rol, Enum_TipoObjetivo } from "./models/enums";
import { ProjectModel } from "./models/project";
import { ObjectiveModel } from "./models/objetive";

const crearProyectoConObjetivos = async () => {

}

const main = async () => {
  await conectarDB();

  const objetivos = await ObjectiveModel.find({ project: '61a61400495097cb194905ab'});
  console.log('El proyecto es: ', objetivos);
  
};

main();



  //CRUD USUARIOS

  
  // CREAR USUARIOS
  // await UserModel.create({
  //   apellido: "gfhfh",
  //   email: "juan@aksdhh.es",
  //   identificacion: "123234",
  //   nombre: "andres",
  //   rol: Enum_Rol.estudiante
  // })
  //   .then((u) => {
  //     console.log("user created", u);
  //   })
  //   .catch((err) => {
  //     console.error("error creating user", err);
  // });


  //OBTENER LOS USUARIOS
  // await UserModel.find()
  //   .then((u) => {
  //     console.log("user found", u);
  //   })
  //   .catch((err) => {
  //     console.error("error finding user", err);
  //   });

  //OBTENER UN SOLO USER
  // await UserModel.findOne({ identificacion: '0000001' })
  // .then((u) => {
  //   console.log('User encontrado', u);
  // }).catch((e) => {
  //   console.log('Error user no encontrado', e);
  // })


  //EDITAR USUARIO
  // await UserModel.findOneAndUpdate(
  //   { correo: 'sdfds' },
  //   {
  //     nombre: 'Andres',
  //     apellido: 'Gonzales',
  //   }
  // ).then((u) => {
  //   console.log('Usuario Actializado', u);
  // }).catch(e => {
  //   console.log('Error actualizando', e);
  // })

  //ELIMINAR USUARIO
  // await UserModel.findOneAndDelete( { correo: 'sdfds' })
  // .then((u) => {
  //   console.log('Usuario Eliminado', u);
  // }).catch((e) => {
  //   console.log('Error eliminando user', e);
  // })
