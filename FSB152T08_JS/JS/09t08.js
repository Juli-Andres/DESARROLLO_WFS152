//Ejercicio 09: Buscador de Palabras

const texto = "JavaScript es genial y JavaScript es poderoso";


console.log(`Texto: "${texto}"`);
console.log(`Primera aparición de "JavaScript": posición ${texto.indexOf("JavaScript")}`);
console.log(`Última aparición de "JavaScript": posición ${texto.lastIndexOf("JavaScript")}`);
console.log(`¿Contiene "genial"? ${texto.includes("genial")}`);
console.log(`¿Empieza con "JavaScript"? ${texto.startsWith("JavaScript")}`);
console.log(`¿Termina con "poderoso"? ${texto.endsWith("JavaScript")}`);