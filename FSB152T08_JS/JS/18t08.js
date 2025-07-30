//Ejercicio 18: Convertidor Universal

const num = "42";
const cero = 0;
const guion = "-"

console.log(guion.repeat(30))
console.log(`Valor original: "${num}"`);
console.log(`Con Number(): ${Number(num)}`);
console.log(`Con +: ${+num}`);
console.log(`Con parseInt(): ${parseInt(num)}`);
console.log(`Con Boolean(): ${Boolean(num)}`);
console.log(`Con !!: ${!!num}`);
console.log(guion.repeat(30))
console.log(`Valor 0 como string: "${String(cero)}"`);
console.log(`Valor 0 como booleano: ${Boolean(cero)}`);
console.log(guion.repeat(30))