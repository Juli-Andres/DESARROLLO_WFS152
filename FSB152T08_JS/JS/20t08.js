//Ejercicio 20: Detector de Tipos y Conversiones

const valor1 = 42;
const valor2 = "texto";
const valor3 = null;
const valor4 = undefined;
const valor5 = [];

const array = [valor1, valor2, valor3, valor4, valor5];

for (i = 0; i < array.length; i++) {
    console.log(`\n=== ANALIZANDO: ${array[i]} ===`);
    console.log(`Tipo: ${typeof (array[i])}`);
    console.log(`Como string: "${String(array[i])}"`);
    console.log(`Como numero: ${Number(array[i])}`);
    console.log(`Como booleano ${Boolean(array[i])}`);
}
