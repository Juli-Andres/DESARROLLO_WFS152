// Ejercicio 1: Contador de números positivos
// Una empresa quiere analizar una lista de números que representan ganancias (positivas) y pérdidas (negativas) durante 10 días. Cuenta cuántos días tuvieron ganancias y muestra el resultado.

let numeros = [150, -80, 200, -45, 300, 120, -30, 250, -100, 180];
let cont = 0;

for (pos in numeros) {
    if (numeros[pos] > 0) {
        cont++;
    }
}
console.log(`Total dias con ganancia: ${cont}`)