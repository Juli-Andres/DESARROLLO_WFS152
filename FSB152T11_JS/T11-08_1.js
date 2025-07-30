// Ejercicio 8.1: Callback Simple

//Crear una función que use un callback para procesar datos de manera personalizada.

function procesarNumero(numero, callback) {
    return callback(numero);
}

const duplicar = (num) => num * 2;
const triplicar = (num) => num * 3;
const cuadrado = (num) => num * num;

console.log(procesarNumero(5, duplicar)); 
console.log(procesarNumero(5, triplicar)); 
console.log(procesarNumero(5, cuadrado)); 

console.log(procesarNumero(8, function(n) { return n + 10; })); 