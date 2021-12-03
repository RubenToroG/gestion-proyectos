enum Enum_Rol {
    estudiante = 'Estudiante',
    lider = 'Lider',
    administrador = 'Administrador',
}

enum Enum_EstadoUsuario {
    pendiente = 'Pendiente',
    autorizado = 'Autorizado',
    no_autorizado = 'No Autorizado',
}

enum Enum_FaseProyecto {
    iniciado = 'Iniciado',
    desarrollo = 'Desarrollo',
    terminado = 'Terminado',
    nula = ''
}

enum Enum_EstadoProyecto {
    activo = 'Activo',
    inactivo = 'Inactivo'
}

enum Enum_TipoObjetivo {
    general = 'General',
    especifico = 'Especifico'
}

enum Enum_EstadoInscripcion {
    aceptada = 'Aceptada',
    rechazada = 'Rechazada'
}

export {
    Enum_Rol,
    Enum_EstadoUsuario,
    Enum_FaseProyecto,
    Enum_EstadoProyecto,
    Enum_TipoObjetivo,
    Enum_EstadoInscripcion
};