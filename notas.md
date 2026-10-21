| Función | Predicción | Resultado |
|---|---|---|
| a[0] | Saldra "x" | Sale "x" |
| a[3] | No saldra nada  |  No sale  nada |
| a.length | Saldra la longitud del array | Sale la longitud del array |
| [1, "dos" , true].length | Saldra la longitu de esa array  | Sale la longitud de ese array |
| const c = [1]; c.push(2); c | Metera el 2 en el array | Añade el 2 |
| q.push(4) y mira p | Añadiran el 4 y el p no hace nada | Añade el 4 y el 5 |
| let r = [...p]; r.push(5) y mira p | Añade el 5 y el 6 al array | Sale el 6 y la p no hace ningun cambio |
| [10, 9, 1].sort() | Ordenara la array en el orden dado | Invierte el orden |
| [10, 9, 1].sort(x, y) => (x - y) | No lo se | Lo ordena de menor a mayor |
| n.push(4) | Añade el 4 al array |  |
| n.pop() | Vacia el array | Quita el ultimo elemento agragado |
| n.slice(0, 2) | Cambia de lugar el primer parametro | Muestra los elementos en segun la posición pedida |
| n.map(x => x * 2) | Multiplica el de posicion x | Multiplica todo por 2 |

<br>

## 1. ¿Qué da a[3] si el array solo tiene 3 elementos? ¿Por qué?

Error, porque el indice empiza por 0 entonces deberia de haber 4 elementos

<br>


## 2. ¿Por qué q.push(4) cambió p y r.push(5) no? Explica qué es copiar y qué es referenciar.

Porque p es otro nombre del array llamado q, entonces al cambiar el valor con q también cambia en p, y no cambia en el r.push() porque el elemento r es uno diferente y no tiene nada que ver con el elemento p.
Copiar trata sobre que se duplica fisicamente un elemento y esta copia puede sufrir cambios sin que la original los sufra o viceversa, y el referenciar es simplemente añadir una forma mas de llamar al elemento y este SI sufre los cambios que sufra el original,porque no es una copia sino un "alias" 

<br>


## 3. ¿Por qué [10, 9, 1].sort() no dio [1, 9, 10]?

Porque no tiene parametros que cambien el tipo de orden, como en el otro caso si hubiese una resta indicativa el sort utilizaria algun tipo de logica, en cambio, este comando hace que se ordene por texto y como en el 10 se lee antes el 1, el calculo lo pone primero

<br>

## 4. De los cuatro métodos del bloque D, ¿cuáles cambian el array y cuáles devuelven uno nuevo?

Los que cambian el array original son: n.push() y n.pop(), y quien entrega un array completamente nuevo es el n.map() y el .slice()

<br>

| Cambian la lista | No cambian la lista |
|---|---|
| añadirAlumno, insertarEn, borrarPorNombre, quitarUltimo | buscarPorNombre, ordenraPorNombre, ordenarPorNota |

<br>

## 1. ¿Qué funciones de esta fase cambian la lista y cuáles no? ¿Cómo lo sabes?

| Cambian la lista | No cambian la lista |
|---|---|
| añadirAlumno, insertarEn, borrarPorNombre, quitarUltimo | buscarPorNombre, ordenraPorNombre, ordenarPorNota |

Lo se por sus resultados en las pruebas

<br>

## 2. ¿Por qué ordenarPorNota hace una copia antes de ordenar?

Porque el enunciado no quiere que se cambie la original entonces se crea una copia y asi la original no se ve afectada

<br>

## 3. ¿Qué pasaría con las notas 10, 9 y 1 si no usaras una función de comparación?

Que el orden seria por el numero del primer digito, en este caso el 10 iria primero

<br>

### Dos experimentos
### 1.Prueba todas las funciones con una lista vacía. Apunta qué devuelve cada una.

Puse una foto en el docx

<br>

### 2. Quita el valor inicial del reduce de notaMedia y pruébala con la lista vacía. Apunta qué error sale. Después vuelve a ponerlo.

Salta el error: "VM1077:5 Uncaught TypeError: Reduce of empty array with no initial value
    at Array.reduce (<anonymous>)
    at notaMedia2 (<anonymous>:5:22)
    at <anonymous>:1:1
notaMedia2	@	VM1077:5
(anonymous)	@	VM1082:1"

<br>

## 1. ¿Por qué reduce necesita un valor inicial cuando la lista está vacía?

Porque sino no hay donde acumular los calculos del acumulador y no se podra ejecutar el codigo

<br>

## 2. ¿Qué devuelve todosAprobados con una lista vacía? ¿Te parece lógico? Explícalo.

Me devuelve true, no me lo parece, porque si no hay un numero no se deberia poder ejecutar, ademas de que cunado hay un vacio se le asinga ese vacio el valor de 0 cuando son numeros y eso no es mayor que cero

<br>

## 3. ¿Qué diferencia hay entre map y filter? Pon un ejemplo de tu código.

.map() devuelve una copia exacta del array, en cambio, el .filter() devuelve los elementos de un array bajo unas condiciones y solo devuelve las que lo cumplen

<br>

## 1. ¿Por qué filtrarAlumnos y ordenarAlumnos devuelven copias?

Para que se muestre como si fuese un filtro y no afecte a la lista original directamente

## 2. ¿Qué pasaría en la página si ordenarAlumnos cambiara la lista original?

Pues que afectaria a la tabla orignal directamente, hacinedo imposible volver a ver al orden original, si las demas funciones afectasen a la lista original también seria un peor

## Mira tus datos

### Escribe console.table(alumnos) en la consola. Apunta qué ves.

Me sale la tabla de mi array

### Prueba también console.table(alumnos.map(a => a.nota)).

Me sale la lista pero solo con las notas

| Que ocurre | Prediccion | Correcion |
|---|---|---|
| Que se ordena mal | Que se ordnea mal | notas.sort((x,y) => x - y) |
| Se modifica la lista original | Se modifica la tabla original | Quitar el const y usar la original |
| Sale error por el valor inicial y que el array esta vacio | Saldra error porque la tabla notas esta vacia (porque no existe) y no tiene un valor inicial el .reduce()  | Crear la tabla y añadir un ,0 al lado de la funcion de reduce |
| Le ha salido bien pero sale un error de que no supo leer las propiedades de "nombre" | Sale error por la ubicación console.log y no saldria nada igualmente | Cambiar el signo <= por < |
