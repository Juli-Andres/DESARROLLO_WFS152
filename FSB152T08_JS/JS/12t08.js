//Ejercicio 12: Procesador de Lista de Compras

const lista = "pan,leche,huevos,queso,manzanas"

const listaSeparada = lista.split(",");
const largoLista = listaSeparada.length;
const listaNueva = lista.replaceAll(",", "-");

console.log(`Lista original: "${lista}"`);
console.log(`Numero de productos: ${largoLista}`);
console.log(`Productos:`);
for (i = 0; i <= largoLista - 1; i++) {
    console.log(`Producto ${i + 1}. ${listaSeparada[i]}`)
}
console.log(`Lista con guiones: "${listaNueva}"`);