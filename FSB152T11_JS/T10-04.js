// Ejercicio 4: Calculadora de factorial
// Una fábrica necesita calcular cuántas formas diferentes puede organizar 6 productos en una fila. Calcula el factorial de 6 (6! = 6 × 5 × 4 × 3 × 2 × 1).

//El factorial indica el número de permutaciones posibles de organizar los productos.

let factorial = 6;

for (i = 5; i >= 1; i--) {
    factorial = factorial * [i];
}
console.log(factorial)