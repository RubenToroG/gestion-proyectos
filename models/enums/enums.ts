enum Enum_Rol {
    ESTUDIANTE = 'ESTUDIANTE',
    LIDER = 'LIDER',
    ADMINISTRADOR = 'ADMINISTRADOR',
}

enum Enum_EstadoUsuario {
    PENDIENTE = 'PENDIENTE',
    AUTORIZADO = 'AUTORIZADO',
    NO_AUTORIZADO = 'NO_AUTORIZADO'
}

enum Enum_FaseProyecto {
    INICIADO = 'INICIADO',
    DESARROLLO = 'DESARROLLO',
    TERMINADO = 'TERMINADO',
    NULO = ''
}

enum Enum_EstadoProyecto {
    ACTIVO = 'ACTIVO',
    INACTIVO = 'INACTIVO'
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