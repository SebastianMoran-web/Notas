# Notas de la clase

Página para gestionar una lista de alumnos con nombre y nota. Se abre con `index.html`.

- `notas.js`: las funciones sobre la lista.
- `app.js`: la lista real y el código que dibuja la página.
- `notas.md`: los cuatro errores típicos con arrays.

## Funciones que cambian la lista

Modifican la lista que reciben.

- `añadirAlumno`: añade un alumno al final.
- `quitarUltimo`: quita el último alumno.
- `insertarEn`: mete un alumno en una posición.
- `borrarPorNombre`: borra al alumno con ese nombre.

## Funciones que no la cambian

Devuelven una copia o un dato y dejan la lista como estaba.

Devuelven una copia o un array nuevo:

- `ordenarPorNota`
- `ordenarPorNombre`
- `aprobados`
- `nombresAprobados`
- `ranking`
- `filtrarAlumnos`
- `ordenarAlumnos`

Devuelven un dato:

- `buscarPorNombre`: un alumno o `undefined`.
- `notaMedia`: un número.
- `notaMaxima`: un número o `null`.
- `hayAlgunDiez`: `true` o `false`.
- `todosAprobados`: `true` o `false`.
- `esNotaValida`: `true` o `false` (ni siquiera recibe la lista).
