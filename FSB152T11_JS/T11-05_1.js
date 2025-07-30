// Ejercicio 5.1: Función con parámetros rest

//Crea una función 'calcularPromedio' que use parámetros rest (...numeros) para recibir cualquier cantidad de números y retorne su promedio.
                     
function calcularPromedio(...numeros) {
    let suma = 0;
    for (let numero of numeros) {
        suma += numero;
    }
    return suma / numeros.length;
}

console.log(calcularPromedio(10, 20, 30));
console.log(calcularPromedio(5, 15, 25, 35));