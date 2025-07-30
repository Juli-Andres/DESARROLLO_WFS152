// Ejercicio 10: Contador de palabras en texto
//Un editor de texto necesita contar cuántas palabras tiene un párrafo. Las palabras están separadas por espacios. Cuenta las palabras en el texto dado.

let texto= "JavaScript es un lenguaje de programacion muy popular"

let cant = texto.split(" ").length;

console.log(`El texto tiene ${cant} palabras.`);

