const AlumnosIniciales = [

    {nombre: "Ana", nota: 7.5 },
    {nombre: "Luis", nota: 4 },    
    {nombre: "Marta", nota: 9.25 },
    {nombre: "Pablo", nota: 5 },
    {nombre: "Lucia", nota: 10 },
    {nombre: "Diego", nota: 3.5 },
    {nombre: "Elena", nota: 6.75 },
    {nombre: "Hugo", nota: 9 },
    {nombre: "Sara", nota: 1 },
    {nombre: "Ivan", nota: 5.5 }

]

/**
 * Añade un alumno al final de la lista.
 * @param {Array<{nombre: string, nota: number}>} lista - La lista de alumnos.
 * @param {string} nombre - Nombre del alumno nuevo.
 * @param {number} nota - Nota del alumno nuevo.
 * @returns {number} La nueva cantidad de alumnos.
 * Cambia la lista: SÍ (le añade un alumno).
 */

function  añadirAlumno(AlumnosIniciales, nombre, nota){

    return AlumnosIniciales.push({nombre, nota});

}

/**
 * Quita el último alumno de la lista.
 * @param {Array<{nombre: string, nota: number}>} lista - La lista de alumnos.
 * @returns {{nombre: string, nota: number}|undefined} El alumno quitado
 *   (undefined si la lista estaba vacía).
 * Cambia la lista: SÍ (se queda sin el último).
 */

function quitarUltimo(AlumnosIniciales){

    return AlumnosIniciales.pop();
}

/**
 * Busca a un alumno por su nombre.
 * @param {Array<{nombre: string, nota: number}>} lista - La lista de alumnos.
 * @param {string} nombre - Nombre que se busca.
 * @returns {{nombre: string, nota: number}|undefined} El alumno encontrado,
 *   o undefined si no existe.
 * Cambia la lista: NO (solo la lee).
 */

function buscarPorNombre(AlumnosIniciales, nombre){

    return AlumnosIniciales.find(
        alumno => alumno.nombre == nombre
    );

}

/**
 * Inserta un alumno en una posición sin borrar a nadie.
 * @param {Array<{nombre: string, nota: number}>} lista - La lista de alumnos.
 * @param {number} posicion - Posición donde se inserta (0 es la primera).
 * @param {string} nombre - Nombre del alumno nuevo.
 * @param {number} nota - Nota del alumno nuevo.
 * @returns {void} No devuelve nada.
 * Cambia la lista: SÍ (le mete un alumno en medio).
 */

function insertarEn(AlumnosIniciales, posicion, nombre, nota) {

    AlumnosIniciales.splice(posicion, 0, { nombre, nota});

}

/**
 * Borra al primer alumno que tenga ese nombre.
 * @param {Array<{nombre: string, nota: number}>} lista - La lista de alumnos.
 * @param {string} nombre - Nombre del alumno a borrar.
 * @returns {boolean} true si ha quitado a alguien, false si no había nadie
 *   con ese nombre.
 * Cambia la lista: SÍ (si lo encuentra, lo quita).
 */

function borrarPorNombre(AlumnosIniciales, nombre) {

    const indice = AlumnosIniciales.findIndex(alumno => alumno.nomobre === nombre);
    if (indice === -1) {
        return false;
    }
    AlumnosIniciales.splice(indice,1);
    return true;

}

/**
 * Ordena los alumnos de la nota más alta a la más baja.
 * @param {Array<{nombre: string, nota: number}>} lista - La lista de alumnos.
 * @returns {Array<{nombre: string, nota: number}>} Una copia ordenada.
 * Cambia la lista: NO (ordena una copia, la original queda igual).
 */

function ordenarPorNota(AlumnosIniciales) {

    return [...AlumnosIniciales].sort((a,b) => b.nota - a.nota);

}

/**
 * Ordena los alumnos por nombre, de la A a la Z.
 * @param {Array<{nombre: string, nota: number}>} lista - La lista de alumnos.
 * @returns {Array<{nombre: string, nota: number}>} Una copia ordenada.
 * Cambia la lista: NO (ordena una copia, la original queda igual).
 */

function ordenarPorNombre(AlumnosIniciales) {

    return [...AlumnosIniciales].sort((a,b) => a.nombre.localeCompare(b.nombre));

}

/**
 * Ordena los alumnos por nombre, de la A a la Z.
 * @param {Array<{nombre: string, nota: number}>} lista - La lista de alumnos.
 * @returns {Array<{nombre: string, nota: number}>} Una copia ordenada.
 * Cambia la lista: NO (ordena una copia, la original queda igual).
 */

function ordenarPorNota(AlumnosIniciales) {

    return [...AlumnosIniciales].sort((a,b) => b.nota - a.nota);

}

/**
 * Calcula la nota media de la lista, sin redondear.
 * @param {Array<{nombre: string, nota: number}>} lista - La lista de alumnos.
 * @returns {number} La nota media, o 0 si no hay alumnos.
 * Cambia la lista: NO (solo calcula).
 */

const lista = [
  { nombre: "Ana", nota: 7.5 },
  { nombre: "Luis", nota: 4 },
  { nombre: "Marta", nota: 9.25 },
  { nombre: "Pablo", nota: 5 }
];

/**
 * Calcula la nota media de la lista, sin redondear.
 * @param {Array<{nombre: string, nota: number}>} lista - La lista de alumnos.
 * @returns {number} La nota media, o 0 si no hay alumnos.
 * Cambia la lista: NO (solo calcula).
 */

function notaMedia(lista) {
  if (lista.length === 0) {
    return 0;
  }
  const suma = lista.reduce((acc, alumno) => acc + alumno.nota,0);
  return suma / lista.length;
}

/**
 * Busca la nota más alta de la lista.
 * @param {Array<{nombre: string, nota: number}>} lista - La lista de alumnos.
 * @returns {number|null} La nota más alta, o null si no hay alumnos.
 * Cambia la lista: NO (solo calcula).
 */

function notaMaxima(lista) {
  if (lista.length === 0) {
    return null;
  }
  return Math.max(...lista.map(alumno => alumno.nota));
}

/**
 * Selecciona los alumnos con 5 o más.
 * @param {Array<{nombre: string, nota: number}>} lista - La lista de alumnos.
 * @returns {Array<{nombre: string, nota: number}>} Un array nuevo con los
 *   aprobados.
 * Cambia la lista: NO (filter crea un array nuevo).
 */

function aprobados(lista) {
  return lista.filter(alumno => alumno.nota >= 5);
}

/**
 * Obtiene solo los nombres de los aprobados.
 * @param {Array<{nombre: string, nota: number}>} lista - La lista de alumnos.
 * @returns {string[]} Un array nuevo con los nombres de los aprobados.
 * Cambia la lista: NO (usa aprobados y map, que crean arrays nuevos).
 */

function nombresAprobados(lista) {
  return aprobados(lista).map(alumno => alumno.nombre);
}

/**
 * Comprueba si algún alumno tiene un 10.
 * @param {Array<{nombre: string, nota: number}>} lista - La lista de alumnos.
 * @returns {boolean} true si hay algún 10, false si no.
 * Cambia la lista: NO (solo responde sí o no).
 */

function hayAlgunDiez(lista) {
  return lista.some(alumno => alumno.nota === 10);
}

/**
 * Comprueba si todos los alumnos tienen 5 o más.
 * @param {Array<{nombre: string, nota: number}>} lista - La lista de alumnos.
 * @returns {boolean} true si todos aprueban (también con la lista vacía).
 * Cambia la lista: NO (solo responde sí o no).
 */

function todosAprobados(lista) {
  return lista.every(alumno => alumno.nota >= 5);
}

/**
 * Devuelve los n mejores alumnos, de la nota más alta a la más baja.
 * @param {Array<{nombre: string, nota: number}>} lista - La lista de alumnos.
 * @param {number} n - Cuántos alumnos se quieren.
 * @returns {Array<{nombre: string, nota: number}>} Un array nuevo con los
 *   n mejores.
 * Cambia la lista: NO (ordena una copia).
 */

function ranking(lista, n) {
  return [...lista].sort((a, b) => b.nota - a.nota).slice(0, n);
}

/**
/**
 * Filtra los alumnos según un filtro.
 * @param {Array<{nombre: string, nota: number}>} lista - La lista de alumnos.
 * @param {"todos"|"aprobados"|"suspensos"} filtro - Qué alumnos se quieren.
 *   Suspenso es menos de 5.
 * @returns {Array<{nombre: string, nota: number}>} Una copia con los alumnos
 *   que cumplen el filtro.
 * Cambia la lista: NO (devuelve una copia).
 */

function filtrarAlumnos(lista, filtro) {
  if (filtro === "aprobados") {
    return aprobados(lista);
  }
  if (filtro === "suspensos") {
    return lista.filter(alumno => alumno.nota < 5);
  }
  return [...lista];
}

/**
 * Ordena los alumnos según un criterio.
 * @param {Array<{nombre: string, nota: number}>} lista - La lista de alumnos.
 * @param {"nombre"|"nota-desc"|"nota-asc"} criterio - Cómo ordenar.
 * @returns {Array<{nombre: string, nota: number}>} Una copia ordenada.
 * Cambia la lista: NO (devuelve una copia).
 */

function ordenarAlumnos(lista, criterio) {
  if (criterio === "nombre") {
    return ordenarPorNombre(lista);
  }
  if (criterio === "nota-desc") {
    return ordenarPorNota(lista);
  }
  if (criterio === "nota-asc") {

    return ordenarPorNota(lista).reverse();
  }
  return [...lista];
}
 
/**
 * Comprueba si un texto es una nota válida.
 * @param {string} texto - El texto escrito por el usuario.
 * @returns {boolean} true si es un número de 0 a 10; false si está vacío
 *   o no es un número.
 * Cambia la lista: NO (no recibe ninguna lista).
 */
 

function esNotaValida(texto) {
  if (texto.trim() === "") {
    return false;
  }
  const numero = Number(texto);
  return !Number.isNaN(numero) && numero >= 0 && numero <= 10;
}