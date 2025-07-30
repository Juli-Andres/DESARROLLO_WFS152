// Ejercicio 2.1: Validador de edad

//Asigna a la variable 'validarEdad' una función expresión que reciba una edad y retorne true si es mayor o igual a 18, false en caso contrario.

const validarEdad = function(edad) {
    return edad >= 18;
}       
    console.log(validarEdad(20)); // true
    console.log(validarEdad(17)); // false