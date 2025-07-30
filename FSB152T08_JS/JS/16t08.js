//Ejercicio 16: Analizador de Verdadero y Falso

const value1= 0
const value2 = ""
const value3 = "0"
const value4 = "false"
const value5 = null
const value6 = undefined
const value7 = []
const value8 = {}

console.log(`El valor ${value1} es: ${(!! value1 ? "verdadero":"falso")}`);
console.log(`El valor "${value2}" es: ${(!! value2 ? "verdadero":"falso")}`);
console.log(`El valor "${value3}" es: ${(!! value3 ? "verdadero":"falso")}`);
console.log(`El valor "${value4}" es: ${(!! value4 ? "verdadero":"falso")}`);
console.log(`El valor null es: ${(!! value5 ? "verdadero":"falso")}`);
console.log(`El valor undefined es: ${(!! value6 ? "verdadero":"falso")}`);
console.log(`El valor [] es: ${(!! value7 ? "verdadero":"falso")}`);
console.log(`El valor {} es: ${(!! value8 ? "verdadero":"falso")}`);