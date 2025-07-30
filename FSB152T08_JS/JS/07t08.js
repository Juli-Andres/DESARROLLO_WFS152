//Ejercicio 07: Validador de Números

const valor1 = 42;
const valor2 = "123";
const valor3 = NaN;
const valor4 = 3.14;
const valor5 = "texto";
const valor6 = Infinity;
const valor7 = 0;

console.log(`Analizando: ${valor1}`);
console.log(`-Es numero: ${typeof valor1 === 'number'}`);
console.log(`-Es finito: ${Number.isFinite(valor1)}`);
console.log(`-Es finito: ${Number.isInteger(valor1)}`);

console.log(`Analizando: ${valor2}`);
console.log(`-Es numero: ${typeof valor2 === 'number'}`);
console.log(`-Es finito: ${Number.isFinite(valor2)}`);
console.log(`-Es finito: ${Number.isInteger(valor2)}`);

console.log(`Analizando: ${valor3}`);
console.log(`-Es numero: ${typeof valor3 === 'number'}`);
console.log(`-Es finito: ${Number.isFinite(valor3)}`);
console.log(`-Es finito: ${Number.isInteger(valor3)}`);

console.log(`Analizando: ${valor4}`);
console.log(`-Es numero: ${typeof valor4 === 'number'}`);
console.log(`-Es finito: ${Number.isFinite(valor4)}`);
console.log(`-Es finito: ${Number.isInteger(valor4)}`);

console.log(`Analizando: ${valor5}`);
console.log(`-Es numero: ${typeof valor5 === 'number'}`);
console.log(`-Es finito: ${Number.isFinite(valor5)}`);
console.log(`-Es finito: ${Number.isInteger(valor5)}`);

console.log(`Analizando: ${valor6}`);
console.log(`-Es numero: ${typeof valor6 === 'number'}`);
console.log(`-Es finito: ${Number.isFinite(valor6)}`);
console.log(`-Es finito: ${Number.isInteger(valor6)}`);

console.log(`Analizando: ${valor7}`);
console.log(`-Es numero: ${typeof valor7 === 'number'}`);
console.log(`-Es finito: ${Number.isFinite(valor7)}`);
console.log(`-Es finito: ${Number.isInteger(valor7)}`);

