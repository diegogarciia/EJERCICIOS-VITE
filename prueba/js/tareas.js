const tareas = [
    { id: 1, nombre: "Limpiar", dificultad: 80 },
    { id: 2, nombre: "Jugar", dificultad: 20 },
    { id: 3, nombre: "Recoger", dificultad: 40 },
    { id: 4, nombre: "Lavar", dificultad: 50 },
    { id: 5, nombre: "Estudiar", dificultad: 100 },
];

export function obtenerNombreTarea(tareaID) {
    let tarea = tareas.find(tarea => tarea.id == tareaID);
    return tarea.nombre
}

export function obtenerDificultadTarea(tareaID) {
    let tarea = tareas.find(tarea => tarea.id == tareaID);
    return tarea.dificultad
}