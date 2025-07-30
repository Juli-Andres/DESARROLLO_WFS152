// Ejercicio 11.1: Función Curry

//Implementar función curry que permita aplicación parcial de argumentos.

function curry(fn) {
    return function curried(...args) {
        if (args.length >= fn.length) {
            return fn.apply(this, args);
        }
        
        return function(...nextArgs) {
            return curried.apply(this, args.concat(nextArgs));
        };
    };
}

function sumarTres(a, b, c) {
    return a + b + c;
}

const sumarCurried = curry(sumarTres);

console.log("Suma normal:", sumarTres(1, 2, 3)); 

console.log("Curry completo:", sumarCurried(1)(2)(3)); 
console.log("Curry parcial 1:", sumarCurried(1, 2)(3)); 
console.log("Curry parcial 2:", sumarCurried(1)(2, 3)); 

const sumar5 = sumarCurried(5);
const sumar5y10 = sumar5(10);

console.log("Función especializada:", sumar5y10(3));