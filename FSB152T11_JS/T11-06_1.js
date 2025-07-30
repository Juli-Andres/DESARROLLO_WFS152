// Ejercicio 6.1: Función Anónima Básica

//Crear y ejecutar una función anónima que calcule el área de un rectángulo.

const calcularArea = function(ancho, alto) {
    return ancho * alto;
};

const area = calcularArea(5, 8);
console.log(`El área del rectángulo es: ${area}`);

console.log(calcularArea(10, 3));