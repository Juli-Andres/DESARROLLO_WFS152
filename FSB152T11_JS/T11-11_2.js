// Ejercicio 11.2: Composición de Funciones

//Crear funciones de composición para combinar múltiples operaciones.

function compose(...funciones) {
    return function(valor) {
        return funciones.reduceRight((acc, fn) => fn(acc), valor);
    };
}

function pipe(...funciones) {
    return function(valor) {
        return funciones.reduce((acc, fn) => fn(acc), valor);
    };
}

const incrementar = x => x + 1;
const duplicar = x => x * 2;
const cuadrado = x => x * x;

const operacionCompose = compose(duplicar, cuadrado, incrementar);
console.log("Compose con 3:", operacionCompose(3)); 

const operacionPipe = pipe(incrementar, duplicar, cuadrado);
console.log("Pipe con 3:", operacionPipe(3)); 

const procesar = pipe(
    str => str.toLowerCase(),
    str => str.trim(),
    str => str.replace(/\s+/g, '-'),
    str => str.substring(0, 10)
);

console.log("Procesando texto:", procesar("  Hola Mundo JavaScript  "));