
const cuerpo = document.getElementById("cuerpo");
const selectorFiltro = document.getElementById("filtro");
const selectorOrden = document.getElementById("orden");
const formulario = document.getElementById("formulario");
const campoNombre = formulario.elements["nombre"];
const campoNota = formulario.elements["nota"];
const mensaje = document.getElementById("mensaje");
const resumen = document.getElementById("resumen");

function pintarTabla() {
  const visibles = ordenarAlumnos(
    filtrarAlumnos(AlumnosIniciales, selectorFiltro.value),
    selectorOrden.value
  );

  cuerpo.replaceChildren();

  if (visibles.length === 0) {
    const fila = document.createElement("tr");
    const celda = document.createElement("td");
    celda.colSpan = 3;
    celda.className = "vacio";
    celda.textContent = AlumnosIniciales.length === 0
      ? "Todavía no hay alumnos. Añade el primero con el formulario."
      : "Ningún alumno cumple este filtro.";
    fila.appendChild(celda);
    cuerpo.appendChild(fila);
  } else {
    visibles.forEach(alumno => cuerpo.appendChild(crearFila(alumno)));
  }

  pintarResumen();
}

function crearFila(alumno) {
  const fila = document.createElement("tr");

  const celdaNombre = document.createElement("td");
  celdaNombre.textContent = alumno.nombre;

  const celdaNota = document.createElement("td");
  celdaNota.textContent = alumno.nota;
  celdaNota.className = alumno.nota >= 5 ? "nota aprobada" : "nota suspensa";

  const celdaBorrar = document.createElement("td");
  const boton = document.createElement("button");
  boton.type = "button";
  boton.className = "borrar";
  boton.textContent = "✕";
  boton.setAttribute("aria-label", "Borrar a " + alumno.nombre);
  boton.addEventListener("click", () => {
    borrarPorNombre(AlumnosIniciales, alumno.nombre);
    mostrarMensaje("");
    pintarTabla();
  });
  celdaBorrar.appendChild(boton);

  fila.append(celdaNombre, celdaNota, celdaBorrar);
  return fila;
}

function pintarResumen() {
  const maxima = notaMaxima(visibles);
  const datos = [
    ["Alumnos", AlumnosIniciales.length],
    ["Nota media", notaMedia(visibles).toFixed(2)],
    ["Nota máxima", maxima === null ? "—" : maxima],
    ["Aprobados", aprobados(visibles).length]
  ];

  resumen.replaceChildren();
  datos.forEach(([etiqueta, valor]) => {
    const bloque = document.createElement("div");
    const dt = document.createElement("dt");
    const dd = document.createElement("dd");
    dt.textContent = etiqueta;
    dd.textContent = valor;
    bloque.append(dt, dd);
    resumen.appendChild(bloque);
  });
}

function mostrarMensaje(texto) {
  mensaje.textContent = texto;
}

selectorFiltro.addEventListener("change", pintarTabla);
selectorOrden.addEventListener("change", pintarTabla);

formulario.addEventListener("submit", evento => {
  evento.preventDefault();

  const nombre = campoNombre.value.trim();
  const notaTexto = campoNota.value;

  if (nombre === "") {
    mostrarMensaje("Escribe el nombre del alumno.");
    campoNombre.focus();
    return;
  }

  if (buscarPorNombre(AlumnosIniciales, nombre) !== undefined) {
    mostrarMensaje("Ya hay un alumno llamado " + nombre + ".");
    campoNombre.focus();
    return;
  }

  if (!esNotaValida(notaTexto)) {
    mostrarMensaje("La nota debe ser un número de 0 a 10. Usa punto para los decimales, por ejemplo 7.5.");
    campoNota.focus();
    return;
  }

  añadirAlumno(AlumnosIniciales, nombre, Number(notaTexto));
  mostrarMensaje("");
  formulario.reset();
  campoNombre.focus();
  pintarTabla();
});

pintarTabla();