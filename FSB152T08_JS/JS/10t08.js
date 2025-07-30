//Ejercicio 10: Extractor de Información Personal

const texto = "Juan Carlos Pérez González";

console.log(`Nombre completo: "${texto}"`);
console.log(`Primer Nombre: "${texto.substring(0, 4)}"`);
console.log(`Segundo Nombre: "${texto.substring(5, 11)}"`);
console.log(`Apellidos: "${texto.substring(12)}"`);
console.log(`Últimas 8 letras: "${texto.slice(-8)}"`);
console.log(`Palabra Perez: "${texto.substring(12, 17)}"`);