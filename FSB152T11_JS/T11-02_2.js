// Ejercicio 2.2: Contador regresivo recursivo

//Crea una función expresión nombrada 'contarRegresivo' que cuente desde n hasta 1 usando recursión y retorne un array con los números.

const contarRegresivo = function(n) {
    if (n < 1) return [];
    return [n].concat(contarRegresivo(n - 1));
}

console.log(`Conteo regresivo 5: `, contarRegresivo(5)); 
console.log(`Conteo regresivo 3: `, contarRegresivo(3)); 