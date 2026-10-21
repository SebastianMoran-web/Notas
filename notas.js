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

function  añadirAlumno(AlumnosIniciales, nombre, nota){

    return AlumnosIniciales.push({nombre, nota});

}

function quitarUltimo(AlumnosIniciales){

    return AlumnosIniciales.pop();
}

function buscarPorNombre(AlumnosIniciales, nombre){

    return AlumnosIniciales.find(
        alumno => alumno.nombre == nombre
    );

}

function insertarEn(AlumnosIniciales, posicion, nombre, nota) {

    AlumnosIniciales.splice(posicion, 0, { nombre, nota});

}

function borrarPorNombre(AlumnosIniciales, nombre) {

    const indice = AlumnosIniciales.findIndex(alumno => alumno.nomobre === nombre);
    if (indice === -1) {
        return false;
    }
    AlumnosIniciales.splice(indice,1);
    return true;

}

function ordenarPorNota(AlumnosIniciales) {

    return [...AlumnosIniciales].sort((a,b) => b.nota - a.nota);

}

function ordenarPorNombre(AlumnosIniciales) {

    return [...AlumnosIniciales].sort((a,b) => a.nombre.localeCompare(b.nombre));

}

function ordenarPorNota(AlumnosIniciales) {

    return [...AlumnosIniciales].sort((a,b) => b.nota - a.nota);

}



const lista = [
  { nombre: "Ana", nota: 7.5 },
  { nombre: "Luis", nota: 4 },
  { nombre: "Marta", nota: 9.25 },
  { nombre: "Pablo", nota: 5 }
];



function notaMedia(lista) {
  if (lista.length === 0) {
    return 0;
  }
  const suma = lista.reduce((acc, alumno) => acc + alumno.nota,0);
  return suma / lista.length;
}

function notaMaxima(lista) {
  if (lista.length === 0) {
    return null;
  }
  return Math.max(...lista.map(alumno => alumno.nota));
}

function aprobados(lista) {
  return lista.filter(alumno => alumno.nota >= 5);
}

function nombresAprobados(lista) {
  return aprobados(lista).map(alumno => alumno.nombre);
}

function hayAlgunDiez(lista) {
  return lista.some(alumno => alumno.nota === 10);
}

function todosAprobados(lista) {
  return lista.every(alumno => alumno.nota >= 5);
}

function ranking(lista, n) {
  return [...lista].sort((a, b) => b.nota - a.nota).slice(0, n);
}

function filtrarAlumnos(lista, filtro) {
  if (filtro === "aprobados") {
    return aprobados(lista);
  }
  if (filtro === "suspensos") {
    return lista.filter(alumno => alumno.nota < 5);
  }
  return [...lista];
}
 
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
 
function esNotaValida(texto) {
  if (texto.trim() === "") {
    return false;
  }
  const numero = Number(texto);
  return !Number.isNaN(numero) && numero >= 0 && numero <= 10;
}