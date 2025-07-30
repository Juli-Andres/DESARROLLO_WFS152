// Ejercicio 6: Dividir hasta llegar a 1

let numero = 128;
let cant = 0;

while(numero>1){
        numero = numero/2;
        cant++;
        console.log(`Division ${cant}: ${numero}`)
}
console.log(`Cantidad de divisiones: ${cant}`)


