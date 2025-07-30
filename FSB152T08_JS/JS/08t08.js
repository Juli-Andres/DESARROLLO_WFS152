//Ejercicio 08: Analizador de Texto

let texto = "   Aprender JavaScript es muy Divertido   ";
const limpio = texto.trim()

console.log(`Texto original: "${texto}"`);
console.log(`Longitud original (con espacios): ${texto.length}`);
console.log(`Texto sin espacios al inicio y final: "${texto.trim()}"`);
console.log(`Longitud sin espacios extra: ${limpio.length}`);
console.log(`Texto en mayúsculas: "${limpio.toUpperCase()}"`);
console.log(`Texto en minúsculas: "${limpio.toLowerCase()}"`);
console.log(`Primer carácter: "${limpio[0]}"`);
console.log(`Último carácter: "${limpio[limpio.length - 1]}"`);