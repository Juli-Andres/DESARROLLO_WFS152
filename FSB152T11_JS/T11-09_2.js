// Ejercicio 9.2: Decorador de Funciones

//Crear un decorador que añada funcionalidad a otras funciones.

function conLog(func) {
    return function(...args) {
        console.log(`Ejecutando función con argumentos: [${args}]`);
        const resultado = func(...args);
        console.log(`Resultado: ${resultado}`);
        return resultado;
    };
}

function sumar(a, b) {
    return a + b;
}

const sumarConLog = conLog(sumar);

sumarConLog(3, 4); 
sumarConLog(10, 5); 

const multiplicar = (a, b) => a * b;
const multiplicarConLog = conLog(multiplicar);
multiplicarConLog(3, 7);