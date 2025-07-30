//Ejercicio 04: Calculadora de interes simple

const capital = 5000;
const tasa = 3.5;
const tiempo = 2;

const totalAhorro = capital + (capital * (tasa / 100) * tiempo);
const interes = capital * (tasa / 100) * tiempo;

console.log(`Capital inicial: $${capital.toFixed(0)}`);
console.log(`Tasa de interes: ${tasa.toFixed(1)}% anual`);
console.log(`Tiempo: ${tiempo.toFixed(0)} años`);
console.log(`Interes ganado: ${interes.toFixed(0)}`);
console.log(`Monto final: $${totalAhorro.toFixed(0)}`);