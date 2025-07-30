//Ejercicio 11: Corrector de Texto

const texto = "Me gusta Python. Python es facil. Python es rapido.";

const texto2 = texto.replace("rapido", "rápido");
const texto3 = texto2.replaceAll("Python", "JavaScript");
const textoFinal = texto3.replace("facil", "fácil");

console.log(`Original: ${texto}`);
console.log(`Corregido: ${textoFinal}`);