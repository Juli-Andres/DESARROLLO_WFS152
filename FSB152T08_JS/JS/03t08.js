//Ejercicio 03: Generador de numeros de loteria


const num1 = Math.random() * 50 + 1
const num2 = Math.random() * 50 + 1
const num3 = Math.random() * 50 + 1
const num4 = Math.random() * 50 + 1
const num5 = Math.random() * 50 + 1


console.log(`Numeros de loteria: ${num1.toFixed(0)}, ${num2.toFixed(0)}, ${num3.toFixed(0)}, ${num4.toFixed(0)}, ${num5.toFixed(0)}.`);