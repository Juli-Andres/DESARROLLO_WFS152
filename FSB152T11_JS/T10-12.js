// Ejercicio 12: Detector de secuencias numéricas

//Un científico está analizando datos y necesita encontrar la secuencia de números consecutivos más larga. Encuentra la secuencia consecutiva más larga en el array dado.

let numeros = [1, 2, 3, 7, 8, 12, 13, 14, 15, 20];

let maxLongitud = 0;
let longitudActual = 1;

for (let i = 1; i < numeros.length; i++) {
    if (numeros[i] === numeros[i - 1] + 1) {
        longitudActual++;
    } else {
        if (longitudActual > maxLongitud) {
            maxLongitud = longitudActual;
        }
        longitudActual = 1;
    }
}

if (longitudActual > maxLongitud) {
    maxLongitud = longitudActual;
}

console.log(`La secuencia de números consecutivos más larga tiene ${maxLongitud} elementos.`);