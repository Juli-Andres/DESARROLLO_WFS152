// Ejercicio 7.2: Arrow Functions con Arrays

//Usar arrow functions con métodos de array para filtrar y transformar datos.

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const pares = numeros.filter(num => num % 2 === 0);
const cubos = pares.map(num => num ** 3);

console.log("Números originales:", numeros);
console.log("Números pares:", pares);
console.log("Cubos de pares:", cubos);

const resultado = numeros
    .filter(num => num % 2 === 0)
    .map(num => num ** 3);

console.log("Resultado encadenado:", resultado);